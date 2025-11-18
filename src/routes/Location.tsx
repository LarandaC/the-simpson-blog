import { Footer } from "../components/elements/Footer";
import { NavBar } from "../components/elements/NavBar";
import { LocationSection } from "../components/sections/location/LocationSection";

export const Location = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">

      {/*Navbar*/}
      <NavBar />

      {/*Main Section*/}
      <main className="flex-grow">
        <LocationSection />
      </main>

      {/*Footer*/}
      <Footer />
    </div>
  );
};
