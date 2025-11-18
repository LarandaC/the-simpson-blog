import { Footer } from "../components/elements/Footer";
import { NavBar } from "../components/elements/NavBar";
import { EpisodeSection } from "../components/sections/episode/EpisodeSection";

export const Episode = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      {/*Navbar*/}
      <NavBar />

      {/*Main Section*/}
      <main className="flex-grow">
        <EpisodeSection />
      </main>

      {/*Footer*/}
      <Footer />
    </div>
  );
};
