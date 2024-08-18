import { verbs } from "./data";

export async function GET() {
  const verbsName = verbs.map(({ name }) => ({ name }));
  return verbsName;
}
