import { Footer } from "../components/elements/Footer";
import { NavBar } from "../components/elements/NavBar";
import { HomeSection } from "../components/sections/home/HomeSection";
import { PersonajesPopularesSection } from "../components/sections/home/PersonajesPopularesSection";

export const Home = () => {
  return (
   <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">

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
