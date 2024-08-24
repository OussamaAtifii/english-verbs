import Link from "next/link";
import { VerbName } from "../types/verb";

export default function Card({ verb }: { verb: VerbName }) {
  return (
    <Link
      href={`/${verb.name.toLowerCase()}`}
      className="h-20 border-2 border-jellybean-700 bg-jellybean-50 shadow-sm rounded-md flex justify-center items-center"
    >
      <p className="font-semibold text-xl text-gray-700">{verb.name}</p>
    </Link>
  );
}
