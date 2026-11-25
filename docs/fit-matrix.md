# Initial fit matrix

This is the focused M0 evidence recorded before the first implementation
slice, not a complete audit of every requirement in the program specification.
Feature presence is marked only where the checked-in implementation and tests
provide evidence; product documentation alone is not treated as verification.

| Requirement                                                                                  | Status                      | Evidence / gap                                                                                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BM-01 — separate movement, timestamp, Bristol type or unknown                                | Existing                    | `lib/stool-log-write.ts`, `lib/queries/bristol-stool.ts`; `lib/__db_tests__/bristol-stool-write.test.ts` and `lib/__tests__/bristol-stool.test.ts`                                                                                                                                      |
| BM-02 — color, amount, urgency, pain, straining, incomplete evacuation, mucus, visible blood | Implemented (initial slice) | Nullable event fields are constrained and validated, exposed in the movement form, preserved or cleared during corrections, shown in history, and included in export. Unknown remains distinct from explicit `no`; focused action, persistence, history, and form tests cover the path. |
| BM-03 — explicit daily no-movement entry, distinct from an unlogged day                      | Missing                     | `components/BristolStoolPanel.tsx` renders an unlogged day as a neutral gap; there is no explicit no-movement event in the stool ledger.                                                                                                                                                |
| BM-04 — frequency, Bristol distribution, time trend, symptom overlay                         | Partial                     | `components/BristolStoolPanel.tsx` renders type distribution and per-day type marks. It does not show explicit movement counts/day or a symptom overlay.                                                                                                                                |

## Gates still open

- Run the Allos Compose stack with synthetic data and exercise its backup and
  restore flow. Docker is unavailable in the current environment.
- Complete the full requirement-by-requirement feature, schema, authorization,
  migration, dependency-license, and security fit review before a release or
  before loading real health data.
- Review additional domain gaps after BM-02; do not infer coverage from a
  product overview. BM-02's implementation does not close the full M0 review.
