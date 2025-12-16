import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-beiza.jpg";

const navItems = [
  { name: "Inicio", path: "/" },
  { name: "Sobre Nosotros", path: "/sobre-nosotros" },
  { name: "Servicios", path: "/servicios" },
  { name: "Aprende", path: "/aprende" },
  { name: "RSE", path: "/responsabilidad-social" },
  { name: "Contacto", path: "/contacto" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Beiza y Beiza" className="h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-md hover:bg-muted ${
                  location.pathname === item.path
                    ? "text-primary font-semibold"
                    : "text-foreground/80"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA & Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+56978617592"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="h-4 w-4" />
              +56 9 7861 7592
            </a>
            <Link to="/contacto">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                Contrata Nuestros Servicios
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "text-primary bg-muted"
                    : "text-foreground/80 hover:bg-muted"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 px-4 space-y-3">
              <a
                href="tel:+56978617592"
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground"
              >
                <Phone className="h-4 w-4" />
                +56 9 7861 7592
              </a>
              <Link to="/contacto" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                  Contrata Nuestros Servicios
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
