
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-ssta-dark/95 backdrop-blur-md py-2 shadow-lg"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-3xl font-bold tracking-tight text-white">
            <span>SSTA</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="text-white/90 hover:text-white font-medium transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white/90 hover:text-white font-medium transition-colors"
          >
            About
          </Link>
          <Link
            to="/courses"
            className="text-white/90 hover:text-white font-medium transition-colors"
          >
            Courses
          </Link>
          <Link
            to="/sectors"
            className="text-white/90 hover:text-white font-medium transition-colors"
          >
            Sectors
          </Link>
          <Link
            to="/leadership"
            className="text-white/90 hover:text-white font-medium transition-colors"
          >
            Leadership
          </Link>
          <Link
            to="/contact"
            className="text-white/90 hover:text-white font-medium transition-colors"
          >
            Contact
          </Link>
          <Button className="bg-ssta-gold hover:bg-ssta-gold-light text-ssta-dark font-bold transition-colors">
            Partner With Us
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-ssta-dark/95 backdrop-blur-md shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              to="/"
              className="text-white/90 hover:text-white font-medium transition-colors py-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white/90 hover:text-white font-medium transition-colors py-2"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/courses"
              className="text-white/90 hover:text-white font-medium transition-colors py-2"
              onClick={toggleMenu}
            >
              Courses
            </Link>
            <Link
              to="/sectors"
              className="text-white/90 hover:text-white font-medium transition-colors py-2"
              onClick={toggleMenu}
            >
              Sectors
            </Link>
            <Link
              to="/leadership"
              className="text-white/90 hover:text-white font-medium transition-colors py-2"
              onClick={toggleMenu}
            >
              Leadership
            </Link>
            <Link
              to="/contact"
              className="text-white/90 hover:text-white font-medium transition-colors py-2"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Button className="bg-ssta-gold hover:bg-ssta-gold-light text-ssta-dark font-bold transition-colors w-full">
              Partner With Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
