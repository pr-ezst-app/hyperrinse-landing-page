import { useState } from "react";
import Icon from "@/components/ui/icon";

const navLinks = ["Services", "About", "Pricing", "Reviews", "FAQ", "Contact"];

interface NavBarProps {
  scrollTo: (id: string) => void;
}

const NavBar = ({ scrollTo }: NavBarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    scrollTo(id);
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <span
          className="font-display text-xl font-extrabold tracking-tight cursor-pointer select-none"
          onClick={() => handleScroll("home")}
        >
          Hyper<span className="text-brand">Rinse</span>
        </span>

        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => handleScroll(link.toLowerCase())}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => handleScroll("contact")}
          className="hidden md:inline-flex items-center gap-2 bg-brand text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-brand-dark transition-colors"
        >
          Book a Wash
        </button>

        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 py-4 flex flex-col gap-4 animate-fade-in">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleScroll(link.toLowerCase())}
              className="text-left text-base font-medium text-foreground"
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => handleScroll("contact")}
            className="mt-2 bg-brand text-white font-semibold py-3 rounded-full"
          >
            Book a Wash
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
