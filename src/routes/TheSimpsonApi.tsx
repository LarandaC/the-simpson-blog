import { Footer } from "../components/elements/Footer";
import { NavBar } from "../components/elements/NavBar";
import { TheSimpsonSection } from "../components/sections/blog/TheSimpsonSection";

export const TheSimpsonApi = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">

      {/*Navbar*/}
      <NavBar />

      {/*Main Section*/}
      <main className="flex-grow">
        <TheSimpsonSection />
      </main>

      {/*Footer*/}
      <Footer />
    </div>
  );
};
