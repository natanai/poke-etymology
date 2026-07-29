import { readFile, writeFile } from 'node:fs/promises';

const sourceBase = 'https://raw.githubusercontent.com/PokeAPI/pokeapi/master/data/v2/csv/';

async function fetchText(file) {
  const url = sourceBase + file;
  let lastError;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const response = await fetch(url, { headers: { 'user-agent': 'poke-etymology-build' } });
      if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
      return await response.text();
    } catch (error) {
      lastError = error;
      await new Promise(resolve => setTimeout(resolve, attempt * 1000));
    }
  }
  throw new Error(`Unable to fetch ${file}: ${lastError?.message ?? lastError}`);
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let quoted = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    if (quoted) {
      if (char === '"' && text[i + 1] === '"') {
        field += '"';
        i += 1;
      } else if (char === '"') {
        quoted = false;
      } else {
        field += char;
      }
    } else if (char === '"') {
      quoted = true;
    } else if (char === ',') {
      row.push(field);
      field = '';
    } else if (char === '\n') {
      row.push(field.replace(/\r$/, ''));
      rows.push(row);
      row = [];
      field = '';
    } else {
      field += char;
    }
  }

  if (field.length || row.length) {
    row.push(field.replace(/\r$/, ''));
    rows.push(row);
  }

  const [headers, ...records] = rows.filter(item => item.length && item.some(Boolean));
  return records.map(values => Object.fromEntries(headers.map((header, index) => [header, values[index] ?? ''])));
}

const [nameText, statText, pokemonTypeText, typeNameText] = await Promise.all([
  fetchText('pokemon_species_names.csv'),
  fetchText('pokemon_stats.csv'),
  fetchText('pokemon_types.csv'),
  fetchText('type_names.csv')
]);

const names = parseCsv(nameText);
const stats = parseCsv(statText);
const pokemonTypes = parseCsv(pokemonTypeText);
const typeNames = parseCsv(typeNameText);

const typeById = new Map(
  typeNames
    .filter(row => row.local_language_id === '9')
    .map(row => [Number(row.type_id), row.name])
);

const namesBySpecies = new Map();
for (const row of names) {
  const id = Number(row.pokemon_species_id);
  if (id < 1 || id > 151) continue;
  if (!namesBySpecies.has(id)) namesBySpecies.set(id, {});
  const record = namesBySpecies.get(id);
  if (row.local_language_id === '1') record.j = row.name;
  if (row.local_language_id === '2') record.r = row.name;
  if (row.local_language_id === '5') record.f = row.name;
  if (row.local_language_id === '9') record.e = row.name;
}

const effortByPokemon = new Map();
for (const row of stats) {
  const id = Number(row.pokemon_id);
  if (id < 1 || id > 151) continue;
  if (!effortByPokemon.has(id)) effortByPokemon.set(id, [0, 0, 0, 0, 0, 0]);
  const statId = Number(row.stat_id);
  if (statId >= 1 && statId <= 6) effortByPokemon.get(id)[statId - 1] = Number(row.effort);
}

const typesByPokemon = new Map();
for (const row of pokemonTypes) {
  const id = Number(row.pokemon_id);
  if (id < 1 || id > 151) continue;
  if (!typesByPokemon.has(id)) typesByPokemon.set(id, []);
  typesByPokemon.get(id).push({ slot: Number(row.slot), name: typeById.get(Number(row.type_id)) });
}

const seedSource = await readFile(new URL('../data.js', import.meta.url), 'utf8');
const seedMatch = seedSource.match(/const DATA=(.*);\s*$/s);
if (!seedMatch) throw new Error('Could not parse data.js research seed.');
const reviewed = JSON.parse(seedMatch[1]);
const reviewedById = new Map(reviewed.map(record => [record.d, record]));

const all = [];
for (let id = 1; id <= 151; id += 1) {
  const name = namesBySpecies.get(id);
  if (!name?.e || !name?.f || !name?.j || !name?.r) throw new Error(`Missing localized name for #${id}`);
  const research = reviewedById.get(id);
  all.push({
    d: id,
    e: name.e,
    f: name.f,
    j: name.j,
    r: name.r,
    t: (typesByPokemon.get(id) ?? []).sort((a, b) => a.slot - b.slot).map(item => item.name),
    v: effortByPokemon.get(id) ?? [0, 0, 0, 0, 0, 0],
    x: research?.x ?? [],
    c: research?.c ?? '',
    reviewed: Boolean(research?.x?.length)
  });
}

const output = `// Generated from PokeAPI CSV data during deployment.\nDATA.splice(0, DATA.length, ...${JSON.stringify(all)});\n`;
await writeFile(new URL('../generated-data.js', import.meta.url), output, 'utf8');
console.log(`Generated ${all.length} Generation I records; ${all.filter(item => item.reviewed).length} etymologies reviewed.`);
