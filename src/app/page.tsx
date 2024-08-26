"use client";

import React, { useEffect, useState } from "react";
import Card from "./components/card";
import { Verb } from "./types/verb";
import { Alert02Icon, ArrowUp, SearchCircleIcon } from "./icons/icons";
import HomeSkeleton from "./components/HomeSkeleton";
import Footer from "./components/Footer";

export default function Home() {
  const [verbs, setVerbs] = useState<Verb[]>([]);
  const [allVerbs, setAllVerbs] = useState<Verb[]>([]);
  const [verbToSearch, setVerbToSearch] = useState("");
  const [verbsFiltered, setVerbsFiltered] = useState<Verb[]>(verbs);
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVerbs = async () => {
      const response = await fetch(`/api/verbs?quantity=true`);
      const responseAllVerbs = await fetch(`/api/verbs`);
      const data = await response.json();
      const dataAllVerbs = await responseAllVerbs.json();

      setVerbs(data);
      setAllVerbs(dataAllVerbs);
      setVerbsFiltered(data);
      setLoading(false);
    };

    fetchVerbs();
  }, []);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
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

    if (e.target.value === "") return setVerbsFiltered(verbs);

    const filtered = allVerbs.filter((verb) =>
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
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-6 bg-gray-100">
        <div className="relative mb-6">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 pr-2">
            <SearchCircleIcon className="text-gray-400" />
          </span>
          <input
            type="text"
            placeholder="Busca un verbo"
            className="border border-gray-300 rounded-lg w-full p-4 pl-12 shadow-md focus:outline-none placeholder:text-lg"
            onChange={handleSearch}
          />
        </div>

        {verbsFiltered.length < 1 ? (
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="rounded-full p-2 bg-red-200 flex items-center w-10">
              <Alert02Icon />
            </div>
            <p className="text-center text-gray-700">
              No se encontraron resultados para{" "}
              <span className="font-bold">{verbToSearch}</span>
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-6">
            {verbsFiltered.map((verb) => (
              <Card verb={verb} key={verb.name} />
            ))}
          </div>
        )}

        {isVisible && (
          <button
            className="fixed bottom-4 right-4 p-4 shadow-md bg-white rounded-full z-10"
            onClick={scrrollToTop}
          >
            <ArrowUp />
          </button>
        )}
      </main>
      <Footer />
    </div>
  );
}
