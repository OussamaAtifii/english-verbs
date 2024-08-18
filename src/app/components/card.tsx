import Link from "next/link";
import { VerbName } from "../types/verb";

export default function Card({ verb }: { verb: VerbName }) {
  return (
    <Link
      href={`${verb.name.toLowerCase()}`}
      className="h-24 border-2 border-gray-300 rounded-lg shadow-md flex justify-center items-center bg-gray-50"
    >
      <p className="font-bold text-lg text-gray-800">{verb.name}</p>
    </Link>
  );
}
