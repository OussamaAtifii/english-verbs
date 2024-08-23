"use client";

import React, { useEffect, useState } from "react";
import Card from "./components/card";
import { Verb } from "./types/verb";
import { ArrowUp } from "./icons/icons";
import HomeSkeleton from "./components/HomeSkeleton";

export default function Home() {
  const [verbs, setVerbs] = useState<Verb[]>([]);
  const [verbToSearch, setVerbToSearch] = useState("");
  const [verbsFiltered, setVerbsFiltered] = useState<Verb[]>(verbs);
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVerbs = async () => {
      const response = await fetch(`/api/verbs?quantity=true`);
      const data = await response.json();

      setVerbs(data);
      setVerbsFiltered(data);
      setLoading(false);
    };

    fetchVerbs();
  }, []);

  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVerbToSearch(e.target.value);

    const filtered = verbs.filter((verb) =>
      verb.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setVerbsFiltered(filtered);
  };

  const scrrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return loading ? (
    <HomeSkeleton />
  ) : (
    <main className="flex flex-col gap-6 p-6 bg-gray-100 min-h-screen min-w-[100vw]">
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
        <div className="grid grid-cols-2 gap-6">
          {verbsFiltered.map((verb) => (
            <Card verb={verb} key={verb.name} />
          ))}
        </div>
      )}

      {isVisible && (
        <button
          className="fixed bottom-4 right-4 border border-jellybean-600 p-4 bg-jellybean-100 rounded-md z-10"
          onClick={scrrollToTop}
        >
          <ArrowUp />
        </button>
      )}
    </main>
  );
}
