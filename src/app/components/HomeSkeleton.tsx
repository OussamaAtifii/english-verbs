export default function HomeSkeleton() {
  return (
    <main className="flex flex-col gap-6 p-6 bg-gray-100 min-h-screen min-w-[100vw]">
      {/* Skeleton del input de búsqueda */}
      <div className="flex items-center w-full h-12 bg-gray-300 animate-pulse rounded-lg shadow-md pl-4">
        <div className="w-1/2 h-6 bg-gray-400 animate-pulse rounded-md"></div>
      </div>

      {/* Condicional para cuando no hay resultados */}
      <div className="grid grid-cols-2 gap-6">
        {/* Skeleton de las tarjetas de verbo */}
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="h-[82px] bg-gray-300 animate-pulse rounded-lg shadow-lg flex justify-center items-center"
          >
            <div className="w-1/2 h-6 bg-gray-400 animate-pulse rounded-md"></div>
          </div>
        ))}
      </div>
    </main>
  );
}
