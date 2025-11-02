import { ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="container bg-text rounded-t-[5rem] py-5 px-10 sm:px-8 md:px-14 relative border-t border-foreground/20 mt-6 pt-10 flex flex-wrap justify-between items-center gap-4">
      <p className="text-sm text-white">&copy; {new Date().getFullYear()} </p>
      <a
        href="https://thesimpsonsapi.com/"
        target="_blank"
        className="text-sm text-white hover:underline hover:text-yellow transition-colors"
      >
        The Simpsons API
      </a>
      <a
        href="#hero"
        onClick={scrollToTop}
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-white transition-colors"
      >
        <ArrowUp size={22} />
      </a>
    </footer>
  );
};
