import { Footer } from "../components/elements/Footer";
import { NavBar } from "../components/elements/NavBar";
import { PersonajesSection } from "../components/sections/PersonajesSection";

export const Personajes = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      {/*Background Clouds*/}

      {/*Navbar*/}
      <NavBar />

      {/*Main Section*/}
      <main className="flex-grow">
        <PersonajesSection />
      </main>

      {/*Footer*/}
      <Footer />
    </div>
  );
};
