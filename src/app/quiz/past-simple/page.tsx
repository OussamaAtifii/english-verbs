export default function PastSimpleQuiz() {
  return (
    <div className="min-h-[calc(100dvh-89.45px)] flex flex-col justify-center items-center bg-gray-100 p-4">
      <p className="text-xl font-medium text-gray-700 text-center mb-4">
        ¿Cuál es el pasado simple de{" "}
        <span className="text-gray-900 font-bold">Arise</span>?
      </p>
      <div className="flex flex-col w-2/3 gap-4">
        <button className="bg-gray-200 text-gray-700 py-4 px-8 rounded-md">
          Arise
        </button>
        <button className="bg-gray-200 text-gray-700 py-4 px-8 rounded-md">
          Arose
        </button>
        <button className="bg-gray-200 text-gray-700 py-4 px-8 rounded-md">
          Arised
        </button>
        <button className="bg-gray-200 text-gray-700 py-4 px-8 rounded-md">
          Arised
        </button>
      </div>
    </div>
  );
}
