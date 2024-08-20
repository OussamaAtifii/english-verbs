import Link from "next/link";
import { VerbName } from "../types/verb";

export default function Card({ verb }: { verb: VerbName }) {
  return (
    <Link
      href={`${verb.name.toLowerCase()}`}
      className="h-24 border border-jellybean-600 bg-jellybean-200 shadow-lg rounded-lg flex justify-center items-center"
    >
      <p className="font-bold text-lg text-gray-800">{verb.name}</p>
    </Link>
  );
}
