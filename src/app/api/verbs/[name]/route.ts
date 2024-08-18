import { verbs } from "../data";

export async function GET(
  _request: Request,
  { params }: { params: { name: string } }
) {
  const verb = verbs.find(
    (verb) => verb.name.toLowerCase() === params.name.toLowerCase().trim()
  );
  return Response.json(verb);
}
