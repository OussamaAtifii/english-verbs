import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const verbs = sqliteTable("verbs", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  past: text("past").notNull(),
  pastParticiple: text("past_participle").unique().notNull(),
  meaning: text("meaning").notNull(),
});

export type InsertVerb = typeof verbs.$inferInsert;
export type SelectVerb = typeof verbs.$inferSelect;
