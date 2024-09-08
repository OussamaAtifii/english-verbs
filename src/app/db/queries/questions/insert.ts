import { db } from "../..";
import { InsertQuestion, questionsTable } from "../../schema";

export async function createQuizQuestion(question: InsertQuestion) {
  await db.insert(questionsTable).values(question).execute();
}
