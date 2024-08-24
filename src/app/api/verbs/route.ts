import { NextRequest, NextResponse } from "next/server";
import { verbs } from "./data";
import { Verb } from "@/app/types/verb";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const quantity = searchParams.get("quantity");

  if (quantity == "true") {
    let quantityVerbs = [] as Verb[];

    for (let i = 0; i < 30; i++) {
      let randomIndex = Math.floor(Math.random() * verbs.length);

      while (quantityVerbs.includes(verbs[randomIndex])) {
        randomIndex = Math.floor(Math.random() * verbs.length);
      }

      quantityVerbs.push(verbs[randomIndex]);
    }

    return NextResponse.json(quantityVerbs);
  }

  return Response.json(verbs);
}
