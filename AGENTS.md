# Instructions for AI agents

Before proposing, editing, researching, or publishing anything in this repository:

1. Read [`HANDOFF.md`](HANDOFF.md) completely.
2. Follow its startup protocol and linked standards.
3. Inspect current `main`, recent PRs, and relevant open issues.
4. Do not rely on a prior chat transcript or model memory as the source of truth.
5. Keep `HANDOFF.md` current when the project state, architecture, scope, next work, or known risks change.

Non-negotiable defaults:

- reliability over research volume;
- static local data over runtime fetching;
- one deterministic render over observers, timers, polling, or hydration;
- near-instant raw-text loading;
- mobile-first, uncluttered, functional UI;
- no fake controls;
- no generic Pokédex scope expansion;
- no claims of deployment until deployment is actually verified;
- branch → validation → PR → merge for normal work;
- direct `main` changes only for small emergency hotfixes.

A new agent receiving “Carefully read the handoff document and follow its instructions” should treat `HANDOFF.md` as the authoritative operational record.