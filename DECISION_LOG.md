# Project decision log

This log preserves major decisions and their reasons. It is not a substitute for PR history; it is a compact record of lessons that should survive chat handoffs.

## 2026-07-29 — Initial Generation I preview

Decision:

- launch a mobile static site with English, French, Japanese, romanization, EV yields, and initial etymology research;
- deploy through GitHub Pages.

Lesson: plain static files are sufficient for the core experience.

Related: PR #1.

## 2026-07-29 — Refocus on language and completion

Decision:

- define the project as a language and completion companion rather than a generic Pokédex;
- remove decorative fake controls;
- move to warm cream, black, and restrained red;
- preserve EV yields only because they support living-dex and training decisions;
- document project goals in the repository.

Rejected: dominant four-tone green simulation, fake POWER/A/B/movement labels, and homepage development jargon.

Related: PR #2.

## 2026-07-29 — Complete factual Generation I index

Decision:

- provide all 151 Generation I names and factual records immediately;
- keep researched etymology separate from pending entries;
- never fill remaining names with bulk invented etymology;
- create separate guide pages rather than placing Living Dex content at the bottom of Names.

Related: PR #3.

## 2026-07-29 — Expand entries in place

Decision:

- clicking a Pokémon expands it directly in the list;
- preserve scroll position;
- add native-language associations and familiar-word examples;
- commit the generated 151-record file rather than relying on a temporary deployment artifact.

Failure corrected: only 25 records appeared live because `generated-data.js` in the repository was a placeholder.

Related: PR #4.

## 2026-07-29 — Independent language disclosures

Decision:

- opening a Pokémon shows a compact language list;
- each language expands independently;
- no language opens by default;
- remove duplicated name summary from the entry heading.

Reason: the structure must scale to more languages without making every entry enormous.

## 2026-07-29 — Compact sources and universal collapse control

Decision:

- source links live in one collapsed drawer;
- the bottom collapse action uses the same `−` grammar as other disclosures;
- visible English text is replaced with an icon and accessibility label.

Reason: reduce mobile screen use and language dependence.

## 2026-07-29 to 2026-07-30 — Audited research batches

Decision:

- audit in evolutionary-family batches;
- preserve separate confidence for each language;
- add native-language Notes and visible source links;
- record unresolved readings in `research-batches/`;
- use issue #5 as the live tracker.

Initial completed sequence:

- #001–#009 — PR #6
- #010–#018 — PR #7
- #019–#036 — PR #8
- #037–#054 — PR #11
- #055–#072 — PR #12

Later handoffs and issue #5 contain the current completion range.

## 2026-07-30 — Living Dex prototype

Decision:

- build a route-by-route active companion rather than a prose walkthrough;
- show one stage at a time;
- save a local checklist;
- support version switching and exact catch quantities;
- exclude optional tasks from required progress;
- keep task details and sources collapsed.

Initial route: Mt. Moon exit through Route 5.

Related: PR #9.

## 2026-07-30 — Extend guide to the beginning

Decision:

- extend the route backward to Pallet Town;
- include starter-dependent roaming-beast consequences;
- share the Names-page language setting;
- make every Pokémon reference clickable through Pokédex-ID tokens;
- retain later-generation references outside the visible 151 list.

Related: PR #10.

## 2026-07-30 — Script-order hotfix

Failure: the Living Dex loaded an empty `0 / 0` shell.

Cause: `generated-data.js` ran before `data.js`, although it requires the existing `DATA` array.

Decision: treat script order as an architectural contract and document it explicitly.

## 2026-07-30 — Roots and Notes labels

Decision:

- replace sentence-like inline “Roots:” and “May evoke:” text with small structural labels;
- rename the second section **Notes**;
- use Notes for familiar examples, register, sound symbolism, and native-language context rather than generic filler.

## 2026-07-30 — Mobile touch correction

Decision:

- prevent inactive route tabs and controls from retaining iOS hover/focus appearance;
- retain keyboard `:focus-visible` behavior;
- clear touch/pen focus after activation where appropriate.

Related: PR #13.

## 2026-07-30 — Living Dex terminology follows Names language

Decision:

- route, location, character, major item/move, navigation, source, and accessibility terminology should follow the shared Names-page language;
- full prose translation remains a separate controlled task.

Related: PR #13.

## 2026-07-30 — Reject broad DOM observation

Failure:

- a `MutationObserver` watched and modified the same guide subtree;
- its changes retriggered it indefinitely;
- the guide showed `0 / 0`, repeated text, appeared frozen, and consumed excessive runtime work.

Emergency decision:

- prevent the observer from attaching;
- render dynamic localized labels directly in `guide.js`;
- permit only one-time static localization and direct event-driven updates.

Permanent principle: no persistent observers, polling, timers, hydration, or runtime fetches for normal static content.

Follow-up debt: remove the dead observer code and temporary guard together as one tested change.

## 2026-07-30 — Entry-owned word-level language tags

Initial attempt:

- a Roots-wide line such as `LOANWORD · ENGLISH` was generated by scanning Roots and Notes prose.

Problems:

- it described the whole Roots panel when only one component was borrowed;
- it separated the label from the exact word it described;
- regular-expression inference could miss valid cases such as Diglett or misread examples, alternatives, and negation;
- the first word-level implementation stored `{loanwords:[...]}` in an undocumented fourth language-row position;
- literal `[loanword]` text inside a bordered box duplicated the visual enclosure.

Final decision:

- annotations belong to the exact displayed Roots token;
- the visible white, black-bordered box says plain `loanword`, without brackets or donor-language text;
- the donor language stays in Roots or Notes prose;
- tag responsibility belongs to the audited entry’s researcher;
- entries store a named `tags` object with language keys such as `japanese`, `french`, and `english`;
- each tag is a typed object such as `{type:"loanword",text:"ディグ",sourceLanguage:"English"}`;
- the renderer displays authored tags only and performs no linguistic inference;
- `scripts/validate-language-tags.mjs` enforces the schema, exact targets, donor-language documentation, non-overlap, and completeness for standardized explicit borrowing claims;
- pull requests and Pages deployment run the validator;
- [`LANGUAGE_TAGS.md`](LANGUAGE_TAGS.md) is the authoritative specification.

Reason:

- linguistic semantics should live beside the research claim and sources, while the UI remains a simple deterministic renderer.

Rejected:

- Roots-wide banners;
- literal brackets inside the bordered tag;
- renderer inference from prose;
- a separate global tag map;
- positional fourth-item metadata;
- tagging uncertain foreign resemblance merely because it looks non-native.

Related: PRs #19, #20, and the subsequent entry-owned tag migration.

## Standing decision rule

When a future contributor is unsure:

- choose reliability over batch size;
- choose static entry data over runtime inference or fetching;
- choose one deterministic render over observation;
- choose a collapsed disclosure over more default content;
- choose the user’s current task over encyclopedic completeness;
- keep linguistic claims, tags, and uncertainty together in the audited entry;
- document any decision that a future GPT could otherwise reverse accidentally.
