"use client";

import React, { useEffect, useState } from "react";
import Card from "./components/card";
import { aclonica } from "./fonts/fonts";
import { VerbName } from "./types/verb";

export default function Home() {
  const [verbs, setVerbs] = useState<VerbName[]>([]);
  const [verbToSearch, setVerbToSearch] = useState("");
  const [verbsFiltered, setVerbsFiltered] = useState<VerbName[]>(verbs);

  useEffect(() => {
    const fetchVerbs = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/verbs`
      );
      const data = await response.json();
      setVerbs(data);
      setVerbsFiltered(data);
    };

    fetchVerbs();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVerbToSearch(e.target.value);

    const filtered = verbs.filter((verb) =>
      verb.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setVerbsFiltered(filtered);
  };

  return (
    <main className="flex flex-col gap-10">
      <div
        className={`${aclonica.className} flex gap-4 justify-center items-center text-4xl text-center pt-10`}
      >
        <h1 className="-rotate-12 font-extrabold underline bg-amber-400 p-2">
          Irregular
        </h1>
        <span className="-inset-0 underline">Verbs</span>
      </div>
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
