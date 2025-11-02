// src/hooks/useCharacterDetails.ts

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Character } from "../../types/Character";
import { getCharacterById } from "../../services/characterService";

export const useCharacterDetails = () => {
  // Obtener id
  const { id } = useParams<{ id: string }>();

  const [data, setData] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Para id valido
    if (!id || isNaN(Number(id))) {
      setError("Uffff el personaje no es de Los Simpsons.");
      setLoading(false);
      return;
    }

    const characterId = Number(id); // Convertimos el string de la URL a number

    const fetchCharacter = async () => {
      setLoading(true);
      setError(null);
      setData(null); // Limpiar datos anteriores

      try {
        // Llamar al servicio
        const response = await getCharacterById(characterId);

        setData(response);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError("Ocurrió un error desconocido al cargar el personaje.");
        }
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  return { character: data, loading, error };
};
