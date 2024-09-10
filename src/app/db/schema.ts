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

export const questionsTable = sqliteTable("questions", {
  id: integer("id").primaryKey(),
  question: text("question").notNull(),
  options: text("options").notNull(),
  correctAnswer: text("correct_answer").notNull(),
  difficulty: text("difficulty").notNull(),
  tense: text("tense").notNull(),
});

export type InsertQuestion = typeof questionsTable.$inferInsert;
export type SelectQuestion = typeof questionsTable.$inferSelect;
