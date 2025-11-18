import { useCharacters } from "../../hooks/useCharacters";
import { CharacterCards } from "../../cards/characterCards";

export const PersonajesPopularesSection = () => {
  const { data, loading } = useCharacters(1);

  if (loading) return <p>Cargando personajes...</p>;

  return (
    <section
      id="populares"
      className="mx-auto px-6 py-10 container max-w-6xl  items-center justify-center "
    >
      <h2 className="text-text text-2xl font-bold mt-20 mb-4">
        Personajes Populares
      </h2>
      <p className="text-subtext/80 text-lg mb-16">
        Conoce a los personajes más icónicos y queridos de la serie
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {data?.results.map((char, index) => (
          <CharacterCards key={char.id} character={char} index={index} />
        ))}
      </div>
    </section>
  );
};
