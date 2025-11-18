import { Link } from "react-router-dom";
import type { Character } from "../../types/Character";

interface phraseProps {
  character: Character;
  index: number;
}

export const CharacterCards = ({ character, index }: phraseProps) => {
  const phraseIndex = [5, 3, 1, 2][index] ?? 0;
  const selectedPhrase =
    character.phrases?.[phraseIndex - 1] ?? character.phrases?.[0] ?? null;

  return (
    <div className="group border border-border bg-white rounded-xl overflow-hidden shadow-sm flex flex-col w-64 shadow-text/15 card-hover">
      <div className="relative pb-2">
        <div className="w-40 h-40 mx-auto overflow-hidden mt-2">
          <img
            src={`https://cdn.thesimpsonsapi.com/500${character.portrait_path}`}
            alt={character.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <Link
          to={`/personajes/${character.id}`}
          className="text-xl text-text font-luckiest-guy font-semibold line-clamp-1"
        >
          <span className="tracking-wider">{character.name}</span>
        </Link>
        <p className="text-foreground text-sm mt-2 mb-4 line-clamp-2">
          {character.occupation}
        </p>

        <div className="mt-auto pt-2 ">
          {selectedPhrase && (
            <p className="px-2 py-1 text-xs font-medium text-foreground/80 text-center">
              “{selectedPhrase}”
            </p>
          )}

          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            {character.age !== null && character.age !== undefined && (
              <span className="flex items-center gap-1 rounded-full bg-blue-50 border border-blue-800 text-blue-800 px-3 py-1 text-xs font-medium">
                Edad: {character.age}
              </span>
            )}

            <span
              className={`flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium ${
                character.status === "Alive"
                  ? "border-green-700 bg-green-700/15 text-green-700"
                  : character.status === "Deceased"
                  ? "border-red-700 bg-red-700/15 text-red-700"
                  : "border-gray-400 bg-gray-100 text-foreground"
              }`}
            >
              {character.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
