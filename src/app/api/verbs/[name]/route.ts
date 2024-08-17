import { Verb } from "@/app/types/verb";
import { verbs } from "../data";

export async function GET(params: { name: string }): Promise<Verb | null> {
  console.log(params);

  const verb = verbs.find(
    (verb) => verb.name.toLowerCase() === params.name.toLowerCase().trim()
  );

  console.log(verb);

  if (!verb) {
    return null;
  }

  return verb;
}
