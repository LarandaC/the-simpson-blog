import { BriefcaseBusiness, Cake, Users, Calendar } from "lucide-react";
import { useCharacterDetails } from "../hooks/useCharacterDetails";

const DetailItem = ({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string | number;
  icon: React.ElementType; // para aceptar un componente React
}) => (
  <div className="flex items-center text-lg bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow shadow-sm transition hover:shadow-md">
    <span className="mr-3 text-2xl text-yellow-700">
      <Icon size={24} />
    </span>
    <p className="flex flex-col sm:flex-row sm:gap-1">
      <span className="font-semibold text-text">{label}:</span>
      <span className="text-text font-medium break-words">{value}</span>
    </p>
  </div>
);

export const CharacterDetailsSection = () => {
  // hooks
  const { character, loading, error } = useCharacterDetails();

  if (loading) {
    return (
      <div className="text-center p-20 text-3xl font-luckiest-guy text-yellow-600 animate-pulse">
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
    <section className="container max-w-6xl mx-auto px-4 pt-14 pb-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 border-t-[12px] border-yellow flex flex-col lg:flex-row gap-10 mt-8">
        <div className="w-full lg:w-1/3 flex-shrink-0 flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl font-luckiest-guy text-text tracking-wider text-center leading-none mb-6">
            {character.name}
          </h1>

          <img
            src={`https://cdn.thesimpsonsapi.com/500${character.portrait_path}`}
            alt={`Retrato de ${character.name}`}
            className="w-full h-auto max-h-96 object-contain rounded-xl border-4 border-yellow p-2 bg-yellow-50 shadow-lg"
          />
          <p className="pt-6">{character.description}</p>
        </div>

        <div className="w-full lg:w-2/3 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-text pb-2">
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
              <h3 className="text-2xl font-semibold mb-3 text-text">
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
