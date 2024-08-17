"use client";
import React, { useState } from "react";
import Card from "./components/card";

export default function Home() {
  const verbs = [
    {
      name: "Arise",
      past: "Arose",
      pastParticiple: "Arisen",
      meaning: ["Levantarse", "Surgir"],
    },
    {
      name: "Awake",
      past: "Awoke",
      pastParticiple: "Awoken",
      meaning: ["Despertar(se)"],
    },
    {
      name: "Be / Am / Is / Are",
      past: "Was / Were",
      pastParticiple: "Been",
      meaning: ["Ser", "Estar"],
    },
    {
      name: "Bear",
      past: "Bore",
      pastParticiple: "Born",
      meaning: ["Soportar", "Dar a luz"],
    },
    {
      name: "Beat",
      past: "Beat",
      pastParticiple: "Beaten",
      meaning: ["Golpear"],
    },
    {
      name: "Become",
      past: "Became",
      pastParticiple: "Become",
      meaning: ["Llegar a ser"],
    },
    {
      name: "Begin",
      past: "Began",
      pastParticiple: "Begun",
      meaning: ["Empezar"],
    },
    {
      name: "Bend",
      past: "Bent",
      pastParticiple: "Bent",
      meaning: ["Doblar"],
    },
    {
      name: "Bet",
      past: "Bet",
      pastParticiple: "Bet",
      meaning: ["Apostar"],
    },
  ];

  const [verbToSearch, setVerbToSearch] = useState("");
  const [verbsFiltered, setVerbsFiltered] = useState(verbs);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setVerbToSearch(e.target.value);

    const filtered = verbs.filter((verb) =>
      verb.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setVerbsFiltered(filtered);
  };

  return (
    <main className="flex flex-col gap-6">
      <h1 className="text-4xl font-extrabold text-center">Irregular Verbs</h1>
      <input
        type="text"
        placeholder="Introduce el verbo"
        className="border w-full p-4"
        onChange={handleSearch}
      />
      {verbsFiltered.length < 1 ? (
        <p className="text-center">
          No se encontraron resultados para{" "}
          <span className="font-bold">{verbToSearch}</span>
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-3">
          {verbsFiltered.map((verb) => (
            <Card verb={verb} key={verb.name} />
          ))}
        </div>
      )}
    </main>
  );
}
