import { Calendar, Calendar1, Clapperboard } from "lucide-react";
import type { EpisodeAppearance } from "../../types/EpisodeAppearance";

interface episodeProps {
  episode: EpisodeAppearance;
}

export const EpisodeCard = ({ episode }: episodeProps) => {
  return (
    <div className="group border border-border bg-white rounded-xl overflow-hidden shadow-sm flex flex-col w-64 shadow-text/15 card-hover">
      <div className="relative pb-2">
        <div className="w-full h-40 mx-auto overflow-hidden">
          <img
            src={`https://cdn.thesimpsonsapi.com/500${episode.image_path}`}
            alt={episode.name}
            className="w-full h-full object-cover transition-transform duration-500"
          />
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl text-text font-luckiest-guy font-semibold tracking-wider line-clamp-2">
          {episode.name}
        </h3>
        <p className="text-foreground text-sm mt-2 line-clamp-6">
          {episode.synopsis}
        </p>
      </div>

      {/*Pills*/}
      <div className="mt-2 mb-4 px-4 flex flex-row gap-2 justify-center">
        <span className="flex items-center gap-1 rounded-full bg-blue-50 border border-blue-800 text-blue-800 px-3 py-1 text-xs font-medium">
          <Calendar className="w-3 h-3" />
          <span>S{episode.season}</span>
        </span>

        <span className="flex items-center gap-1 rounded-full bg-blue-50 border border-blue-800 text-blue-800 px-3 py-1 text-xs font-medium">
          <Clapperboard className="w-3 h-3" />
          <span>E{episode.episode_number}</span>
        </span>

        {episode.airdate && (
          <span className="flex items-center gap-1 rounded-full bg-blue-50 border border-blue-800 text-blue-800 px-3 py-1 text-xs font-medium">
            <Calendar1 className="w-3 h-3" />
            <span>{episode.airdate}</span>
          </span>
        )}
      </div>
    </div>
  );
};
