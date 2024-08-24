import QuizCard from "../components/quiz/QuizCard";
import { ArrowRight } from "../icons/icons";

export default function Quiz() {
  return (
    <div className="p-6 max-w-lg mx-auto">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-extrabold text-gray-800">Quiz</h1>
        <p className="text-gray-600">Test your knowledge with this quiz!</p>
      </div>

      <div className="flex flex-col gap-6">
        <QuizCard
          name={"Past Simple"}
          questQuantity={40}
          href={"past-simple"}
        />
        <QuizCard name={"Past Participle"} questQuantity={60} href={""} />
        <QuizCard name={"Mix"} questQuantity={50} href={""} />
      </div>
    </div>
  );
}
