import { useEffect, useState } from "react";
import type { LocationResponse } from "../../types/LocationResponse";
import { getLocationByPage } from "../../services/locationService";

export const useLocation = (page = 1) => {
  const [data, setData] = useState<LocationResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // La función de fetch se ejecuta cada vez que 'page' cambia
    const fetchLocation = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await getLocationByPage(page);

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

    fetchLocation();
  }, [page]);

  return { data, loading, error };
};
