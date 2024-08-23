export default function VerbSkeleton() {
  return (
    <div className="flex flex-col justify-between min-h-[calc(100dvh-89.45px)] p-6 bg">
      <div className="flex flex-col gap-6 items-center">
        {/* Skeleton del Encabezado */}
        <div className="w-48 h-8 bg-gray-300 animate-pulse rounded-md"></div>

        {/* Skeleton de las Tarjetas */}
        <div className="w-full space-y-6">
          <div className="bg-white shadow-lg rounded-xl p-4 border-l-4 border-transparent">
            <div className="w-24 h-6 bg-gray-300 animate-pulse rounded-md"></div>
            <div className="w-32 h-8 bg-gray-300 animate-pulse mt-1 rounded-md"></div>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-4 border-l-4 border-transparent">
            <div className="w-32 h-6 bg-gray-300 animate-pulse rounded-md"></div>
            <div className="w-40 h-8 bg-gray-300 animate-pulse mt-1 rounded-md"></div>
          </div>

          {/* Skeleton del Subtítulo */}
          <div className="w-32 h-6 bg-gray-300 animate-pulse rounded-md mx-auto pt-6"></div>

          {/* Skeleton de los Significados */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white shadow-lg rounded-xl p-4 border-l-4 border-transparent">
              <div className="w-full h-8 bg-gray-300 animate-pulse rounded-md"></div>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-4 border-l-4 border-transparent">
              <div className="w-full h-8 bg-gray-300 animate-pulse rounded-md"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Skeleton del Botón de regreso */}
      <div className="bg-gray-300 animate-pulse px-10 py-4 rounded-lg flex justify-center items-center gap-3 mt-8">
        <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
        <div className="w-20 h-6 bg-gray-400 rounded-md"></div>
      </div>
    </div>
  );
}
