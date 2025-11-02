import type { Character } from "./Character";

export interface CharacterResponse {
  count: number;
  next: string | null;
  prev: string | null;
  pages: number;
  results: Character[];
}
