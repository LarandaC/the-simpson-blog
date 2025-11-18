import axios from "axios";
import type { LocationResponse } from "../types/LocationResponse";

const BASE_URL = "https://thesimpsonsapi.com/api";

export const getLocationByPage = async (
  page = 1
): Promise<LocationResponse> => {
  const response = await axios.get(`${BASE_URL}/locations?page=${page} `);
  return response.data;
};
