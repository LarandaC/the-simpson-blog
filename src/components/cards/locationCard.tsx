import type { Location } from "../../types/Location";

interface locationProps {
  location: Location;
}

export const LocationCard = ({ location }: locationProps) => {
  // 'use' NO sea null, undefined, ni una cadena vacía.
  const hasUseData = location.use && location.use.trim() !== "";
  return (
    <div className="group border border-border bg-white rounded-xl overflow-hidden shadow-sm flex flex-col w-64 shadow-text/15 card-hover">
      <div className="relative pb-2">
        <div className="w-full h-40 mx-auto overflow-hidden">
          <img
            src={`https://cdn.thesimpsonsapi.com/500${location.image_path}`}
            alt={location.name}
            className="w-full h-full object-cover transition-transform duration-500"
          />
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl text-text font-luckiest-guy font-semibold tracking-wider line-clamp-2">
          {location.name}
        </h3>
        <p className="text-foreground text-sm mt-2">{location.town}</p>
      </div>
      <div className="my-4 flex flex-wrap gap-2 justify-center">
        {hasUseData && (
          <span className="flex items-center gap-1 rounded-full bg-blue-50 border border-blue-800 text-blue-800 px-3 py-1 text-xs font-medium">
            {location.use}
          </span>
        )}
      </div>
    </div>
  );
};
