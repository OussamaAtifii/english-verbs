"use client";

import { useState } from "react";

export default function WordCounterPage() {
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);

  const handleCount = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;

    if (text.trim() === "") {
      setWordCount(0);
      setCharCount(0);
      return;
    }

    const words = text.trim().split(/\s+/); // Mejor forma de contar palabras
    setWordCount(words.length);
    setCharCount(text.length);
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Word Counter</h1>
        <p className="text-gray-500">Count the words in your writing!</p>
      </div>
      {wordCount > 0 && (
        <div className="flex justify-between items-center bg-gray-100 border p-4 rounded-md mb-4">
          <p className="text-lg font-medium text-gray-700">
            Words: <span className="font-bold">{wordCount}</span>
          </p>
          <p className="text-lg font-medium text-gray-700">
            Characters: <span className="font-bold">{charCount}</span>
          </p>
        </div>
      )}
      <textarea
        className="textarea textarea-bordered resize-none w-full h-96 p-4 border rounded-md focus:outline-none focus:border-blue-500"
        placeholder="Start typing your text here..."
        onChange={handleCount}
      ></textarea>
    </div>
  );
}
