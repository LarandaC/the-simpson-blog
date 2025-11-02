// src/hooks/useCharacters.ts

import { useEffect, useState } from "react";
import type { CharacterResponse } from "../../types/CharacterResponse";
import { getCharactersByPage } from "../../services/characterService";

export const useCharacters = (page = 1) => {
  const [data, setData] = useState<CharacterResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // La función de fetch se ejecuta cada vez que 'page' cambia
    const fetchCharacters = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await getCharactersByPage(page);

        setData(response);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError("Ocurrió un error desconocido al cargar los personajes.");
        }
        setData(null); // Limpiamos los datos en caso de error
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [page]);

  return { data, loading, error };
};
