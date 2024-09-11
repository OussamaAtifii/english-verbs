import { ArrowRight } from "@/app/icons/icons";
import Link from "next/link";

export default function QuizTensePage({
  params,
}: {
  params: { tense: string };
}) {
  return (
    <>
      <div className="p-6 max-w-lg mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold text-gray-800">
            {params.tense} Quiz
          </h1>
          <p className="text-gray-600">Test your knowledge with this quiz!</p>
        </div>

        <div className="flex flex-col gap-6">
          <div
            className="card card-compact bg-gray-100 shadow-md card-animate"
            style={{ animationDelay: "0ms" }}
          >
            <div className="card-body flex flex-row justify-between">
              <div>
                <h2 className="card-title">Easy Quiz</h2>
                <p className="text-sm text-gray-500">10 Questions</p>
              </div>
              <Link
                href={`/quiz/${params.tense}/easy`}
                className="btn bg-jellybean-500 hover:bg-jellybean-600 text-white"
              >
                <p className="text-base">Go!</p>
                <ArrowRight />
              </Link>
            </div>
          </div>
          <div
            className="card card-compact bg-gray-100 shadow-md card-animate"
            style={{ animationDelay: "150ms" }}
          >
            <div className="card-body flex flex-row justify-between">
              <div>
                <h2 className="card-title">Medium Quiz</h2>
                <p className="text-sm text-gray-500">10 Questions</p>
              </div>
              <Link
                href={`/quiz/${params.tense}/easy`}
                className="btn bg-jellybean-500 hover:bg-jellybean-600 text-white"
              >
                <p className="text-base">Go!</p>
                <ArrowRight />
              </Link>
            </div>
          </div>
          <div
            className="card card-compact bg-gray-100 shadow-md card-animate"
            style={{ animationDelay: "300ms" }}
          >
            <div className="card-body flex flex-row justify-between">
              <div>
                <h2 className="card-title">Hard Quiz</h2>
                <p className="text-sm text-gray-500">10 Questions</p>
              </div>
              <Link
                href={`/quiz/${params.tense}/easy`}
                className="btn bg-jellybean-500 hover:bg-jellybean-600 text-white"
              >
                <p className="text-base">Go!</p>
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
