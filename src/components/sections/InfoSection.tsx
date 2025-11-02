import { CircleUserRound, MapPinned, TvMinimalPlay } from "lucide-react";

export const InfoSection = () => {
  return (
    <section className="relative container mt-12 md:mt-16">
      <div className="flex flex-wrap justify-center gap-6">
        <div className="card-hover p-6 py-8 rounded-3xl bg-white shadow-xs shadow-text/25 text-center w-[280px] md:w-[300px]">
          <div className="flex flex-col gap-3 items-center">
            <div className="rounded-full bg-transparent">
              <CircleUserRound className="h-7 w-7 text-subtext" />
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-lg text-subtext">Personajes</h4>
              <p className="text-subtext/70 text-xs">+1182 personajes</p>
              <p className="text-subtext mt-2 ">
                Información detallada de cada personaje de la serie
              </p>
            </div>
          </div>
        </div>

        <div className="card-hover p-6 py-8 rounded-3xl bg-white shadow-xs shadow-text/25 text-center w-[280px] md:w-[300px]">
          <div className="flex flex-col gap-3 items-center">
            <div className="rounded-full bg-transparent">
              <TvMinimalPlay className="h-7 w-7 text-subtext" />
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-lg text-subtext">Episodios</h4>
              <p className="text-subtext/70 text-xs">+768 episodios</p>
              <p className="text-subtext mt-2 ">
                Información detallada de cada episodio de la serie
              </p>
            </div>
          </div>
        </div>

        <div className="card-hover p-6 py-8 rounded-3xl bg-white shadow-xs shadow-text/25 text-center w-[280px] md:w-[300px]">
          <div className="flex flex-col gap-3 items-center">
            <div className="rounded-full bg-transparent">
              <MapPinned className="h-7 w-7 text-subtext" />
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-lg text-subtext">Lugares</h4>
              <p className="text-subtext/70 text-xs">
                +477 lugares en Springfield
              </p>
              <p className="text-subtext mt-2 ">
                Lugares icónicos de la serie con descripciones y detalles
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
