# ADR 0001: Use Allos as the project foundation

**Status:** Accepted  
**Date:** 2026-11-25  
**Base commit:** `0b850dc67868d8b3ae0c5173962bff580610e090`

## Context

The program specification recommends evaluating Allos before building an
independent health journal. Allos already uses Next.js, TypeScript, SQLite,
profile-scoped records, authentication, backups, nutrition, symptoms, Bristol
stool events, cycles, laboratory results, medications, exports, and a unified
history. Its repository declares `AGPL-3.0-only` in both `LICENSE` and
`package.json`.

The project owner selected Allos and confirmed the AGPL direction. AlexTrack's
GitHub repository was empty, so this working tree now tracks Allos `main` as
`upstream` and the AlexTrack repository as `origin`. The program specification
remains at the repository root.

## Decision

Build AlexTrack as an Allos-based AGPL-3.0-only fork. Reuse its authentication,
profile ownership, data model, migration runner, history, and export paths
instead of creating parallel infrastructure. Add only focused domain changes
that satisfy the program specification; keep optional integrations and
external data providers disabled unless explicitly selected.

The first verified functional gap is BM-02: stool events currently store the
date, optional Bristol type, and time provenance, but not the optional stool
attributes in the specification. The first implementation slice adds those
attributes through persistence, entry/correction, history display, and export.

## Evidence and limits

- `AGENTS.md` and `lib/AGENTS.md` require profile-scoped reads/writes and
  request-boundary authorization.
- `docs/features.md`, the stool ledger and Bristol panel code, and focused
  tests show existing food, symptom, stool, cycle, lab, medication, history,
  and export capabilities. See `docs/fit-matrix.md` for the stool-specific
  evidence reviewed for the first slice.
- Node 24.18.0 is available; `npm ci`, the Bristol unit tests, and the stool
  database tests pass at the pinned base commit.
- Docker is not installed in the current environment. The required Compose
  run with synthetic data, full feature/security review, dependency/license
  inventory, and restore exercise remain release gates. This decision is not a
  security audit or legal opinion.

## Consequences

- Modified network-served software remains subject to AGPL source-sharing
  obligations. Preserve notices and review third-party licenses before adding
  dependencies or copied components.
- Keep upstream history and merge direction; add name-keyed migrations rather
  than changing shipped migrations.
- The upstream app has broader household, training, clinical-record, and
  integration scope than this specification. Avoid activating optional
  services or expanding scope just because those capabilities exist.
- The Docker fit/security gate must be completed in an environment with Docker
  before treating M0 as fully passed or deploying real health data.
