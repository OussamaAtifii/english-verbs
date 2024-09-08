import { SelectQuestion, questionsTable } from "../../schema";
import { db } from "../..";
import { and, eq } from "drizzle-orm";

export async function getQuestionByTenseAndDifficulty(
  tense: SelectQuestion["tense"],
  difficulty: SelectQuestion["difficulty"]
): Promise<
  Array<{
    id: number;
    question: string;
    options: string;
    correctAnswer: string;
    difficulty: string;
    tense: string;
  }>
> {
  return db
    .select()
    .from(questionsTable)
    .where(
      and(
        eq(questionsTable.tense, tense),
        eq(questionsTable.difficulty, difficulty)
      )
    )
    .execute();
}
