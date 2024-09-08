import { db } from "../..";
import { InsertVerb, verbsTable } from "../../schema";

export async function createVerb(verb: InsertVerb) {
  await db.insert(verbsTable).values(verb).execute();
}
