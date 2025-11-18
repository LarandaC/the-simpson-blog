import { useEffect, useState } from "react";
import type { EpisodeResponse } from "../../types/EpisodeResponse";
import { getEpisodeByPage } from "../../services/episodeService";

export const useEpisode = (page = 1) => {
  const [data, setData] = useState<EpisodeResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // La función de fetch se ejecuta cada vez que 'page' cambia
    const fetchEpisode = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await getEpisodeByPage(page);

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

    fetchEpisode();
  }, [page]);

  return { data, loading, error };
};
