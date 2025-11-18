import { LocationCard } from "../../cards/locationCard";
import { useState } from "react";
import type { Location } from "../../../types/Location";
import { Pagination } from "../../elements/Pagination";
import { useLocation } from "../../hooks/useLocation";

export const LocationSection = () => {
  const [page, setPage] = useState(1);
  // desestructurar dato
  const { data, loading, error } = useLocation(page);

  const handlePrev = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (data?.pages && page < data.pages) setPage((prev) => prev + 1);
  };

  if (error) {
    return (
      <p className="text-center mt-20 text-xl text-red-600">
        Error al cargar: {error}
      </p>
    );
  }

  if (loading) {
    return (
      <p className="text-center mt-20 text-xl text-yellow-600">
        Cargando lugares de Springfield...
      </p>
    );
  }

  const locations: Location[] = data?.results || [];
  if (locations.length === 0) {
    return (
      <p className="text-center mt-20 text-xl text-gray-600">
        No se encontraron lugares.
      </p>
    );
  }

  const shouldShowPagination = data?.pages && data.pages > 1;

  return (
    <section className="container max-w-6xl mx-auto px-6 xl:px-5 pt-24 pb-10">
      <h1 className="text-text mb-6 text-left">
        <span className="text-4xl sm:text-3xl font-luckiest-guy block xl:inline tracking-wide text-shadow-2xs text-shadow-white">
          Lugares
        </span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {locations.map((loc) => (
          <LocationCard key={loc.id} location={loc} />
        ))}
      </div>
      {shouldShowPagination && (
        <Pagination
          page={page}
          totalPages={data?.pages ?? page}
          hasNextPage={!!data?.next}
          setPage={setPage}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />
      )}
    </section>
  );
};
