import { NextRequest, NextResponse } from "next/server";
import { verbs } from "../data";

export async function GET(
  request: NextRequest,
  { params }: { params: { name: string } }
) {
  const verb = verbs.find(
    (verb) => verb.name.toLowerCase() === params.name.toLowerCase().trim()
  );

  if (!verb) {
    return NextResponse.json({ message: "Verb not found" }, { status: 404 });
  }

  return NextResponse.json(verb);
}
