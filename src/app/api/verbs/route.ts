import { NextRequest, NextResponse } from "next/server";
import { getAllVerbs } from "@/app/db/queries/verbs/select";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const quantity = searchParams.get("quantity");

  const verbs = await getAllVerbs();

  if (quantity == "true") {
    let quantityVerbs = [] as any[];

    for (let i = 0; i < 30; i++) {
      let randomIndex = Math.floor(Math.random() * verbs.length);

      while (quantityVerbs.includes(verbs[randomIndex])) {
        randomIndex = Math.floor(Math.random() * verbs.length);
      }

      quantityVerbs.push(verbs[randomIndex]);
    }

    quantityVerbs.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }

      if (a.name > b.name) {
        return 1;
      }

      return 0;
    });

    return NextResponse.json(quantityVerbs);
  }

  return NextResponse.json(verbs);
}
