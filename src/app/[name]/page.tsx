import { GET } from "../api/verbs/[name]/route";

export default async function VerbDetails({
  params,
}: {
  params: { name: string };
}) {
  const { name } = params;
  const verb = await GET({ name });

  return (
    <div>
      <h1>{verb?.name}</h1>
      <p>{verb?.past}</p>
      <p>{verb?.pastParticiple}</p>
      <p>{verb?.meaning}</p>
    </div>
  );
}
