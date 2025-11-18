import { InfoSection } from "./InfoSection";

export const HomeSection = () => {
  return (
    <section
      id="hero"
      className="relative px-6 py-10 container min-h-screen items-center justify-center"
    >
      <div className="absolute inset-0 flex justify-center">
        <img
          src="/assets/fondo.jpg"
          alt="Imagen de fondo"
          className="w-full h-[80vh] object-cover rounded-b-[5rem]"
        />
      </div>
      <div className="relative min-h-[80vh] flex flex-col items-center justify-center text-center gap-8">
        <h1 className="text-text font-luckiest-guy">
          <span className="text-4xl sm:text-6xl block xl:inline tracking-wide text-shadow-2xs text-shadow-white">
            Explora Springfield
          </span>
          <span className="relative mt-4 block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-yellow">
            <span className="relative text-text text-2xl sm:text-3xl tracking-wide ">
              Sin salir de casa
            </span>
          </span>
        </h1>
        <a
          href="#populares"
          className="px-6 py-3 font-bold cursor-pointer btn-more hover:bg-yellow hover:text-text rounded-full "
        >
          Comenzar
        </a>
      </div>
      <div className="relative -mt-53">
        <InfoSection />
      </div>
    </section>
  );
};
