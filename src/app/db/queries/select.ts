import { Verb } from "@/app/types/verb";
import { SelectVerb, verbsTable } from "../schema";
import { db } from "..";
import { eq } from "drizzle-orm";

export async function getUserById(name: SelectVerb["name"]): Promise<
  Array<{
    id: number;
    name: string;
    past: string;
    pastParticiple: string;
  }>
> {
  return db
    .select()
    .from(verbsTable)
    .where(eq(verbsTable.name, name))
    .execute();
}
