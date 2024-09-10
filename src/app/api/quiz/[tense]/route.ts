import { getQuestionByTenseAndDifficulty } from "@/app/db/queries/questions/select";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { tense: string } }
) {
  const searchParams = request.nextUrl.searchParams;
  const difficulty = searchParams.get("difficulty") as string;
  const { tense } = params;

  const verbs = await getQuestionByTenseAndDifficulty(tense, difficulty);

  return NextResponse.json(verbs);
}
