import type { Location } from "./Location";

export interface LocationResponse {
  count: number;
  next: string | null;
  prev: string | null;
  pages: number;
  results: Location[];
}
