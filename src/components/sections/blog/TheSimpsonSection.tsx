export const TheSimpsonSection = () => {
  return (
    <section className="container max-w-6xl mx-auto px-6 xl:px-5 pt-24 pb-10">
      <h1 className="text-text mb-6 text-left">
        <span className="text-4xl sm:text-3xl font-luckiest-guy block xl:inline tracking-wide text-shadow-2xs text-shadow-white">
          The Simpson API
        </span>
        <div className="bg-white p-8 sm:p-12 rounded-xl shadow-lg space-y-6 mt-8 border border-border/60">
          <h2 className="text-xl font-bold text-text border-b border-border pb-2">
            Sobre este sitio web
          </h2>

          <p className="text-text text-lg leading-relaxed">
            Esta aplicación consume y muestra información de personajes,
            episodios y ubicaciones obtenida a través de la API de Los
            Simpsons. La plataforma fue desarrollada como un proyecto de
            demostración y práctica.
          </p>

          <div className="pt-4 ">
            <h3 className="text-lg font-bold text-text mb-2">
              Agradecimientos
            </h3>

            <p className="text-md text-text/70 italic leading-relaxed">
              Esta aplicación es un proyecto independiente desarrollado para
              fines educativos. No está afiliada, respaldada ni patrocinada por
              FOX, Disney o Gracie Films, ni con los creadores originales de la
              serie Los Simpsons. Todos los derechos de los personajes, nombres
              y material asociado pertenecen a sus respectivos dueños.
              Agradecemos a **The Simpsons API** por facilitar los datos.
            </p>
          </div>
        </div>
      </h1>
    </section>
  );
};
