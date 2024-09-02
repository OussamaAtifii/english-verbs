import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const verbsTable = sqliteTable("verbs", {
  id: integer("id").primaryKey(),
  name: text("name").unique().notNull(),
  past: text("past").notNull(),
  pastParticiple: text("past_participle").notNull(),
  meaning: text("meaning").notNull(),
});

export type InsertVerb = typeof verbsTable.$inferInsert;
export type SelectVerb = typeof verbsTable.$inferSelect;
