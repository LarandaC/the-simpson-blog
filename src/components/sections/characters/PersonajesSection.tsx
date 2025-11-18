import { useEffect, useMemo, useState } from "react";
import { useCharacters } from "../../hooks/useCharacters";
import { CharacterCards } from "../../cards/characterCards";
import { CharacterFilters } from "./CharactersFilters";
import { Pagination } from "../../elements/Pagination";
import type { Character } from "../../../types/Character";

export const PersonajesSection = () => {
  const [page, setPage] = useState(1);
  const { data, loading } = useCharacters(page);
  const [searchTerm, setSearchTerm] = useState("");
  const [selected, setSelected] = useState("Estado");
  const options = ["Alive", "Deceased", "Unknown"];

  const handlePrev = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (data?.pages && page < data.pages) setPage((prev) => prev + 1);
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelected("Estado");
  };

  // filtrado
  const filteredCharacters = useMemo(() => {
    if (!data?.results || data.results.length === 0) return [];
    let currentResults: Character[] = data.results;

    // Nombre
    if (searchTerm) {
      const lowerCaseSearch = searchTerm.toLowerCase();
      currentResults = currentResults.filter((char) =>
        char.name.toLowerCase().includes(lowerCaseSearch)
      );
    }

    // Estado
    if (selected !== "Estado") {
      currentResults = currentResults.filter(
        (char) => char.status === selected
      );
    }

    return currentResults;
  }, [data, searchTerm, selected]);

  // Condicion paginacion
  const shouldShowPagination = data?.pages && data.pages > 1;

  useEffect(() => {
    // Solo resetea si la página actual no es la primera
    if (page !== 1) {
      setPage(1);
    }
  }, [searchTerm, selected]);

  if (loading)
    return <p className="text-center mt-20">Cargando personajes...</p>;

  return (
    <section className="container max-w-6xl mx-auto px-6 xl:px-5 pt-24 pb-10">
      <h1 className="text-text mb-6 text-left">
        <span className="text-4xl sm:text-3xl font-luckiest-guy block xl:inline tracking-wide text-shadow-2xs text-shadow-white">
          Personajes
        </span>
      </h1>

      {/* Componente de Filtros */}
      <CharacterFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selected={selected}
        setSelected={setSelected}
        options={options}
        handleClearFilters={handleClearFilters}
      />

      {/* Renderizado de Cards */}
      {filteredCharacters.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {filteredCharacters.map((char, index) => (
            <CharacterCards key={char.id} character={char} index={index} />
          ))}
        </div>
      ) : (
        <p className="text-center text-text text-lg mt-10 p-4 bg-yellow-100 rounded-md">
          ¡D'oh! 🍩 No se encontraron personajes que coincidan con los filtros
          en esta página.
        </p>
      )}

      {/* Paginacion */}
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
