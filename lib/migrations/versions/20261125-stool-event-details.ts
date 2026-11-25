import type Database from "better-sqlite3";
import type { Migration } from "../runner";

export function up(db: Database.Database): void {
  db.exec(`
    ALTER TABLE stool_events
      ADD COLUMN color TEXT
        CHECK (color IS NULL OR color IN ('brown', 'green', 'yellow', 'red', 'black', 'pale', 'other'));
    ALTER TABLE stool_events
      ADD COLUMN amount TEXT
        CHECK (amount IS NULL OR amount IN ('small', 'medium', 'large'));
    ALTER TABLE stool_events
      ADD COLUMN urgency TEXT
        CHECK (urgency IS NULL OR urgency IN ('yes', 'no'));
    ALTER TABLE stool_events
      ADD COLUMN pain TEXT
        CHECK (pain IS NULL OR pain IN ('yes', 'no'));
    ALTER TABLE stool_events
      ADD COLUMN straining TEXT
        CHECK (straining IS NULL OR straining IN ('yes', 'no'));
    ALTER TABLE stool_events
      ADD COLUMN incomplete TEXT
        CHECK (incomplete IS NULL OR incomplete IN ('yes', 'no'));
    ALTER TABLE stool_events
      ADD COLUMN mucus TEXT
        CHECK (mucus IS NULL OR mucus IN ('yes', 'no'));
    ALTER TABLE stool_events
      ADD COLUMN blood TEXT
        CHECK (blood IS NULL OR blood IN ('yes', 'no'));
  `);
}

export const migration: Migration = {
  name: "20261125-stool-event-details",
  up,
};
