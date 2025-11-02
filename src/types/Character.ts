import type { EpisodeAppearance } from "./EpisodeAppearance";

export interface Character {
  id: number;
  age?: number;
  birthdate: string;
  gender: string;
  name: string;
  description: string;
  occupation: string;
  portrait_path: string;
  phrases: string[];
  status: "Alive" | "Deceased" | "Unknown";
  first_appearance_ep: EpisodeAppearance;
  first_appearance_sh: EpisodeAppearance;
}
