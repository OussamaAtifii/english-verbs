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
      const response = await fetch(`/api/verbs`);
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
    <main className="flex flex-col gap-8 p-6 bg-gray-100 min-h-screen">
      <input
        type="text"
        placeholder="Buscar un verbo"
        className="border border-gray-300 rounded-lg w-full p-4 shadow-md focus:outline-none"
        onChange={handleSearch}
      />
      {verbsFiltered.length < 1 ? (
        <p className="text-center text-gray-700">
          No se encontraron resultados para{" "}
          <span className="font-semibold">{verbToSearch}</span>
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {verbsFiltered.map((verb) => (
            <Card verb={verb} key={verb.name} />
          ))}
        </div>
      )}
    </main>
  );
}
