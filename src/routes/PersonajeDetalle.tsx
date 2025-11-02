import { Footer } from "../components/elements/Footer";
import { NavBar } from "../components/elements/NavBar";
import { CharacterDetailsSection } from "../components/sections/CharacterDetailsSection";

export const PersonajeDetalle = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      {/*Background Clouds*/}

      {/*Navbar*/}
      <NavBar />

      {/*Main Section*/}
      <main className="flex-grow">
        <CharacterDetailsSection />
      </main>

      {/*Footer*/}
      <Footer />
    </div>
  );
};
