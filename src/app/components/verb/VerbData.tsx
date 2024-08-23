import Link from "next/link";
import { SquareArrowLeft01Icon } from "../../icons/icons";
import { Verb } from "../../types/verb";

export default function VerbData({ verb }: { verb: Verb | null }) {
  return (
    <>
      <div className="flex flex-col justify-between min-h-[calc(100dvh-89.45px)] p-6 bg">
        <div className="flex flex-col gap-6 items-center">
          {/* Encabezado con el nombre del verbo */}
          <h1 className="text-4xl font-extrabold text-jellybean-950 uppercase underline tracking-wide">
            {verb?.name}
          </h1>

          {/* Tarjetas con los detalles del verbo */}
          <div className="w-full space-y-6">
            <div className="bg-white shadow-lg rounded-xl p-4 border-l-4 border-jellybean-500">
              <h2 className="text-lg font-semibold text-gray-800">
                Pasado Simple
              </h2>
              <p className="text-gray-700 mt-1 font-bold text-lg">
                {verb?.past}
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-4 border-l-4 border-jellybean-500">
              <h2 className="text-lg font-semibold text-gray-800">
                Pasado Participio
              </h2>
              <p className="text-gray-700 mt-1 font-bold text-lg">
                {verb?.pastParticiple}
              </p>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 text-center pt-6">
              Significado/s
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {verb?.meaning.map((mean) => (
                <div
                  className="bg-white shadow-lg rounded-xl p-4 border-l-4 border-jellybean-500"
                  key={mean}
                >
                  <h3 className="text-lg font-bold text-gray-800 ">{mean}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Link
          href="/"
          className="bg-jellybean-500 hover:bg-jellybean-600 px-10 py-4 rounded-lg flex justify-center items-center gap-3 mt-8"
        >
          <SquareArrowLeft01Icon className="w-6 h-6" />
          <span className="text-xl font-bold">Go back</span>
        </Link>
      </div>
    </>
  );
}
