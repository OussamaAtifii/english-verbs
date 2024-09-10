import { ArrowRight } from "@/app/icons/icons";
import Link from "next/link";

export default function QuizGroupCard({
  name,
  tense,
  difficulty,
  questQuantity,
}: {
  name: string;
  tense: string;
  difficulty: string;
  questQuantity: number;
}) {
  return (
    <div className="border border-gray-300 rounded-lg p-4 flex justify-between items-center bg-gray-50">
      <div>
        <h2 className="text-lg font-semibold text-gray-700">{name} Quiz</h2>
        <p className="text-sm text-gray-500">{questQuantity} Questions</p>
      </div>
      <Link
        // TODO: Add quiz href
        href={`/quiz/${tense}/${difficulty}`}
        className="flex items-center gap-2 bg-jellybean-500 text-white px-5 py-2 rounded-md"
      >
        Go! <ArrowRight />
      </Link>
    </div>
  );
}
