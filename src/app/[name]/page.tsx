"use client";

import Link from "next/link";
import { SquareArrowLeft01Icon } from "../icons/icons";
import React, { useEffect, useState } from "react";
import { Verb } from "../types/verb";

export default function VerbDetails({ params }: { params: { name: string } }) {
  const { name } = params;
  const [verb, setVerb] = useState<Verb | null>(null);

  useEffect(() => {
    const fetchVerb = async () => {
      const response = await fetch(`/api/verbs/${name}`);
      const data = await response.json();
      console.log(data);
      setVerb(data);
    };

    fetchVerb();
  }, [name]);

  return (
    <>
      <div className="flex flex-col justify-between min-h-screen p-4">
        <div className="flex flex-col gap-8 items-center">
          {/* Encabezado con el nombre del verbo */}
          <h1 className="text-4xl font-bold text-jelly-bean-950 uppercase underline">
            {verb?.name}
          </h1>

          {/* Tarjetas con los detalles del verbo */}
          <div className="w-full space-y-4">
            <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-jelly-bean-500">
              <h2 className="text-lg font-semibold text-gray-700">
                Pasado Simple
              </h2>
              <p className="text-gray-600">{verb?.past}</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-jelly-bean-500">
              <h2 className="text-lg font-semibold text-gray-700">
                Pasado Participio
              </h2>
              <p className="text-gray-600">{verb?.pastParticiple}</p>
            </div>
            <h2 className="text-xl font-semibold text-gray-700 text-center pt-8">
              Significado/s
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {verb?.meaning.map((mean) => (
                <div
                  className="bg-white shadow-md rounded-lg p-4 border-l-4 border-jelly-bean-500"
                  key={mean}
                >
                  <h2 className="text-lg font-semibold text-gray-700">
                    {mean}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Link
          href={"/"}
          className="bg-jelly-bean-500 hover:bg-jelly-bean-600 px-4 py-2 w-28 text-center rounded-md flex gap-2"
        >
          <SquareArrowLeft01Icon />
          Volver
        </Link>
      </div>
    </>
  );
}
