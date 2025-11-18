import type { EpisodeAppearance } from "./EpisodeAppearance";

export interface EpisodeResponse {
  count: number;
  next: string | null;
  prev: string | null;
  pages: number;
  results: EpisodeAppearance[];
}
