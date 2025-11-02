import { useEffect, useState } from "react";
import { cn } from "../../libs/utils";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Inicio", exact: true },
  { to: "/personajes", label: "Personajes" },
  { to: "/lugares", label: "Lugares" },
  { to: "/the-simpsons-api", label: "The Simpsons API" },
];

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      if (isMenuOpen) setIsMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  const handleMenuToggle = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
  };

  const handleNavClick = () => setIsMenuOpen(false);

  return (
    <header>
      <nav
        role="navigation"
        className={cn(
          "fixed w-full z-40 transition-all duration-300",
          isScrolled
            ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
            : "py-5"
        )}
      >
        <div className="container flex items-center justify-between">
          <NavLink
            to="/"
            className="text-xl font-luckiest-guy text-yellow font-bold flex items-center"
          >
            <span className="text-shadow-text text-shadow-xs">
              Los Simpsons
            </span>
          </NavLink>
          <div className="hidden md:flex items-center">
            {links.map(({ to, label, exact }) => (
              <NavLink
                key={to}
                to={to}
                end={exact}
                onClick={handleNavClick}
                className="mr-5 font-bold hover:text-yellow"
              >
                <span className="hover:text-shadow-text hover:text-shadow-xs">
                  {label}
                </span>
              </NavLink>
            ))}
          </div>

          <button
            onClick={handleMenuToggle}
            className="md:hidden p-2 text-text z-50"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div
            className={cn(
              "fixed top-0 left-0 w-screen h-screen bg-background/95 backdrop-blur-md flex flex-col justify-center transition-all duration-300",
              "md:hidden",
              isMenuOpen
                ? "opacity-100 pointer-events-auto translate-y-0"
                : "opacity-0 invisible pointer-events-none translate-y-[-10%]"
            )}
          >
            <div className="flex flex-col space-y-8 text-xl">
              {links.map(({ to, label, exact }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={exact}
                  onClick={handleNavClick}
                  className="mr-5 font-bold hover:text-yellow"
                >
                  <span className="hover:text-shadow-text text-xl hover:text-shadow-xs">
                    {label}
                  </span>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
