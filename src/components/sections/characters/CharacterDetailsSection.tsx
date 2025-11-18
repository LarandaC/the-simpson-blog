import {
  BriefcaseBusiness,
  Cake,
  Users,
  Calendar,
  ArrowLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCharacterDetails } from "../../hooks/useCharacterDetails";
import { DetailItem } from "../../elements/DetailItem";

export const CharacterDetailsSection = () => {
  // hooks
  const { character, loading, error } = useCharacterDetails();
  const navigate = useNavigate();

  // Función para volver a la lista de personajes
  const handleGoBack = () => {
    navigate(-1);
  };

  if (loading) {
    return (
      <div className="text-center p-20 text-3xl font-luckiest-guy text-text animate-pulse">
        Cargando detalles de personaje...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-20 text-xl text-red-600 border-2 border-red-300 bg-red-100/50 rounded-xl mx-auto max-w-xl shadow-md">
        ⚠️ **¡Maldición!** Error al cargar: {error}
      </div>
    );
  }

  if (!character) {
    return (
      <div className="text-center p-20 text-3xl font-luckiest-guy text-gray-600">
        ¡D'oh! 🍩 Personaje no encontrado.
      </div>
    );
  }

  return (
    <section className="container max-w-6xl mx-auto px-6 xl:px-5 pt-24 pb-10">
      <div className="mb-4 flex justify-start">
        <button
          onClick={handleGoBack}
          className="px-6 py-2 flex gap-2 items-center rounded-lg font-bold cursor-pointer btn-more transition duration-150 ease-in-out"
          aria-label="Volver a la lista de personajes"
        >
          <ArrowLeft className="h-5 w-5" />
          Volver a la lista
        </button>
      </div>

      <div className="bg-white border border-border/60 p-8 flex flex-col lg:flex-row gap-10 mt-8 rounded-xl shadow-lg ">
        <div className="w-full lg:w-1/3 flex-shrink-0 flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl font-luckiest-guy text-text tracking-wider text-center leading-none mb-6">
            {character.name}
          </h1>

          <img
            src={`https://cdn.thesimpsonsapi.com/200${character.portrait_path}`}
            alt={`Retrato de ${character.name}`}
            className="w-full h-80 object-contain rounded-xl p-2"
          />
          <p className="pt-6">{character.description}</p>
        </div>

        <div className="w-full lg:w-2/3 space-y-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-text/90 pb-2">
              Información de Personaje
            </h2>

            <DetailItem
              label="Ocupación"
              value={character.occupation}
              icon={BriefcaseBusiness}
            />

            <DetailItem
              label="Edad"
              value={character.age ?? "Desconocida"}
              icon={Cake}
            />

            <DetailItem
              label="Género"
              value={character.gender ?? "Desconocido"}
              icon={Users}
            />

            <DetailItem
              label="Cumpleaños"
              value={character.birthdate ?? "Desconocido"}
              icon={Calendar}
            />
          </div>

          {character.phrases && character.phrases.length > 0 && (
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-3 text-text/90">
                Lo que dijo alguna vez...
              </h3>
              <ul className="list-none space-y-3 pl-4 text-left">
                {character.phrases.slice(0, 6).map((phrase, index) => (
                  <li
                    key={index}
                    className="text-text italic bg-blue-50 p-3 rounded-md border-l-4 border-accent"
                  >
                    "{phrase}"
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
