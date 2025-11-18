import axios from "axios";
import type { EpisodeResponse } from "../types/EpisodeResponse";

const BASE_URL = "https://thesimpsonsapi.com/api";

export const getEpisodeByPage = async (page = 1): Promise<EpisodeResponse> => {
  const response = await axios.get(`${BASE_URL}/episodes?page=${page} `);
  return response.data;
};
