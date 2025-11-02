import { Footer } from "../components/elements/Footer";
import { NavBar } from "../components/elements/NavBar";
import { HomeSection } from "../components/sections/HomeSection";
import { PersonajesPopularesSection } from "../components/sections/PersonajesPopularesSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/*Background Clouds*/}

      {/*Navbar*/}
      <NavBar />

      {/*Main Section*/}
      <main className="flex-grow">
        <HomeSection />
        <PersonajesPopularesSection />
      </main>

      {/*Footer*/}
      <Footer />
    </div>
  );
};
