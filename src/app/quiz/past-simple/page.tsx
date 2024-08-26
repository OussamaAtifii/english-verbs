"use client";

import { useState } from "react";

export default function PastSimpleQuiz() {
  const [questions, setQuestions] = useState([
    {
      question: "¿Cuál es el pasado simple del verbo 'go'?",
      options: ["goed", "went", "gone", "going"],
      correctAnswer: "went",
    },
    {
      question: "¿Cuál es el pasado simple del verbo 'see'?",
      options: ["seed", "saw", "seen", "seeing"],
      correctAnswer: "saw",
    },
    {
      question: "¿Cuál es el pasado simple del verbo 'eat'?",
      options: ["ate", "eated", "eaten", "eat"],
      correctAnswer: "ate",
    },
    {
      question: "¿Cuál es el pasado simple del verbo 'come'?",
      options: ["came", "comen", "coming", "comed"],
      correctAnswer: "came",
    },
    {
      question: "¿Cuál es el pasado simple del verbo 'take'?",
      options: ["took", "taked", "taken", "taking"],
      correctAnswer: "took",
    },
    {
      question: "¿Cuál es el pasado simple del verbo 'give'?",
      options: ["gived", "gave", "given", "giving"],
      correctAnswer: "gave",
    },
    {
      question: "¿Cuál es el pasado simple del verbo 'make'?",
      options: ["maked", "made", "maken", "making"],
      correctAnswer: "made",
    },
    {
      question: "¿Cuál es el pasado simple del verbo 'run'?",
      options: ["ran", "runned", "running", "runned"],
      correctAnswer: "ran",
    },
    {
      question: "¿Cuál es el pasado simple del verbo 'write'?",
      options: ["writed", "wrote", "written", "writing"],
      correctAnswer: "wrote",
    },
    {
      question: "¿Cuál es el pasado simple del verbo 'drink'?",
      options: ["drunk", "drank", "drinken", "drinking"],
      correctAnswer: "drank",
    },
  ]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setCurrentQuestion(currentQuestion + 1);
      setScore(score + 1);
    }

    if (currentQuestion + 1 >= questions.length) {
      setShowScore(true);
    }
  };

  return showScore ? (
    <div className="min-h-[calc(100dvh-89.45px)] flex flex-col justify-center items-center bg-gray-100 p-4">
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
    <div>
      <h1>{questions[currentQuestion].question}</h1>
      {questions[currentQuestion].options.map((option) => (
        <button
          key={option}
          className="bg-gray-200 text-gray-700 py-4 px-8 rounded-md"
          onClick={() =>
            handleAnswer(option === questions[currentQuestion].correctAnswer)
          }
        >
          {option}
        </button>
      ))}
    </div>
  );

  // <div className="min-h-[calc(100dvh-89.45px)] flex flex-col justify-center items-center bg-gray-100 p-4">
  //   <p className="text-xl font-medium text-gray-700 text-center mb-4">
  //     ¿Cuál es el pasado simple de{" "}
  //     <span className="text-gray-900 font-bold">Arise</span>?
  //   </p>
  //   <div className="flex flex-col w-2/3 gap-4">
  //     <button className="bg-gray-200 text-gray-700 py-4 px-8 rounded-md">
  //       Arise
  //     </button>
  //     <button className="bg-gray-200 text-gray-700 py-4 px-8 rounded-md">
  //       Arose
  //     </button>
  //     <button className="bg-gray-200 text-gray-700 py-4 px-8 rounded-md">
  //       Arised
  //     </button>
  //     <button className="bg-gray-200 text-gray-700 py-4 px-8 rounded-md">
  //       Arised
  //     </button>
  //   </div>
  // </div>
}
