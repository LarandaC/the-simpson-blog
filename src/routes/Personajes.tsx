import { Footer } from "../components/elements/Footer";
import { NavBar } from "../components/elements/NavBar";
import { PersonajesSection } from "../components/sections/characters/PersonajesSection";

export const Personajes = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
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
