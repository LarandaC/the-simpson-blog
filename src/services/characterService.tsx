import axios from "axios";
import type { Character } from "../types/Character";
import type { CharacterResponse } from "../types/CharacterResponse";

const BASE_URL = "https://thesimpsonsapi.com/api";

export const getCharacterById = async (id: number): Promise<Character> => {
  const response = await axios.get(`${BASE_URL}/characters/${id} `);
  return response.data;
};

export const getCharactersByPage = async (
  page = 1
): Promise<CharacterResponse> => {
  const response = await axios.get(`${BASE_URL}/characters?page=${page} `);
  return response.data;
};
