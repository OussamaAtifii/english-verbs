"use client";

import { SelectQuestion } from "@/app/db/schema";
import { useEffect, useMemo, useState } from "react";

export default function DifficultyQuizPage({
  params,
}: {
  params: { difficulty: string; tense: string };
}) {
  const [questions, setQuestions] = useState<SelectQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  useEffect(() => {
    const fetchquestions = async () => {
      await fetch(`/api/quiz/past_simple?difficulty=${params.difficulty}`)
        .then((res) => res.json())
        .then((data) => {
          setQuestions(data);
          console.log(data);
        });
    };
    fetchquestions();
  }, [params.difficulty]);

  const handleAnswer = (isCorrect: boolean, option: string) => {
    setSelectedOption(option);

    setTimeout(() => {
      setCurrentQuestion((prev) => prev + 1);

      if (isCorrect) {
        setScore((prev) => prev + 1);
      }

      if (currentQuestion + 1 >= questions.length) {
        setShowScore(true);
      }

      setSelectedOption(null);
    }, 1000);
  };

  return questions.length > 0 ? (
    <div className="min-h-[calc(100dvh-89.45px)] flex flex-col justify-center items-center bg-gray-100 p-4">
      {showScore ? (
        <div>
          <p className="text-xl font-medium text-gray-700 text-center mb-4">
            Tu puntuación es: {score}/{questions.length}
          </p>
          <button
            className="bg-gray-200 text-gray-700 py-4 px-8 rounded-md"
            onClick={() => {
              setShowScore(false);
              setCurrentQuestion(0);
              setScore(0);
            }}
          >
            Volver a intentar
          </button>
        </div>
      ) : (
        <div className="w-[90%]">
          <h1 className="text-xl text-center mb-8">
            ¿Cual es el pasado simple de{" "}
            <span className="font-bold">
              {questions[currentQuestion].question}
            </span>
            ?
          </h1>
          <div className="grid gap-4">
            {JSON.parse(questions[currentQuestion].options).map(
              (option: string) => {
                const classMap = {
                  default: "btn bg-gray-200",
                  correct: "btn-success",
                  incorrect: "btn-error",
                };

                let buttonClass = classMap.default;
                if (selectedOption) {
                  buttonClass =
                    option === questions[currentQuestion].correctAnswer
                      ? classMap.correct
                      : option === selectedOption
                      ? classMap.incorrect
                      : classMap.default;
                }

                return (
                  <button
                    key={option}
                    className={`btn btn-lg ${buttonClass} `}
                    onClick={() =>
                      handleAnswer(
                        option === questions[currentQuestion].correctAnswer,
                        option
                      )
                    }
                    style={{
                      pointerEvents: !!selectedOption ? "none" : "auto",
                    }}
                  >
                    {option}
                  </button>
                );
              }
            )}
          </div>
        </div>
      )}
    </div>
  ) : (
    <div>Loading...</div>
  );
}
