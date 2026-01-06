import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Mountain } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Úvod" },
    { href: "/aktivity", label: "Aktivity v okolí" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
          >
            <Mountain className={`w-8 h-8 transition-colors duration-300 ${
              isScrolled ? "text-primary" : "text-primary-foreground"
            } group-hover:text-sunrise`} />
            <span className={`font-display text-xl md:text-2xl font-semibold transition-colors duration-300 ${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}>
              Panorama house Brdy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`relative font-medium transition-colors duration-300 ${
                  isScrolled
                    ? isActive(link.href)
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                    : isActive(link.href)
                    ? "text-sunrise"
                    : "text-primary-foreground/90 hover:text-primary-foreground"
                } after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:bg-sunrise after:transition-all after:duration-300 ${
                  isActive(link.href) ? "after:w-full" : "after:w-0 hover:after:w-full"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.booking.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant={isScrolled ? "accent" : "hero"} size="lg">
                Rezervovat
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-background/95 backdrop-blur-md rounded-xl p-4 shadow-elevated">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3 px-4 rounded-lg transition-colors ${
                  isActive(link.href)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.booking.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-3"
            >
              <Button variant="accent" size="lg" className="w-full">
                Rezervovat na Booking.com
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;