
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/translations";
import LanguageToggle from "./LanguageToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language } = useLanguage();
  const t = translations.navbar[language];

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
          ? "bg-ssta-dark/95 backdrop-blur-md py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="SSTA Logo"
            className="h-12 w-auto max-w-[200px] object-contain transition-all duration-300 ease-in-out hover:opacity-80 sm:h-14 md:h-16"
            draggable="none"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="text-white/90 hover:text-white font-medium transition-colors px-2 py-1"
          >
            {t.home}
          </Link>
          <Link
            to="/about"
            className="text-white/90 hover:text-white font-medium transition-colors px-2 py-1"
          >
            {t.about}
          </Link>
          <Link
            to="/courses"
            className="text-white/90 hover:text-white font-medium transition-colors px-2 py-1"
          >
            {t.courses}
          </Link>
          <Link
            to="/sectors"
            className="text-white/90 hover:text-white font-medium transition-colors px-2 py-1"
          >
            {t.sectors}
          </Link>
          <Link
            to="/leadership"
            className="text-white/90 hover:text-white font-medium transition-colors px-2 py-1"
          >
            {t.leadership}
          </Link>
          <Link
            to="/contact"
            className="text-white/90 hover:text-white font-medium transition-colors px-2 py-1"
          >
            {t.contact}
          </Link>
          
          {/* Language Toggle */}
          <div className="px-2 py-1">
            <LanguageToggle />
          </div>
          
          <Button
            asChild
            className="bg-ssta-gold hover:bg-ssta-gold-light text-ssta-dark font-bold px-5 py-2 ml-2"
          >
            <Link to="/contact">{t.partnerWithUs}</Link>
          </Button>
        </div>

        {/* Mobile Menu Button and Language Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageToggle />
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
          <div className="container mx-auto px-4 py-6 flex flex-col gap-5">
            <Link
              to="/"
              className="text-white/90 hover:text-white font-medium transition-colors py-2"
              onClick={toggleMenu}
            >
              {t.home}
            </Link>
            <Link
              to="/about"
              className="text-white/90 hover:text-white font-medium transition-colors py-2"
              onClick={toggleMenu}
            >
              {t.about}
            </Link>
            <Link
              to="/courses"
              className="text-white/90 hover:text-white font-medium transition-colors py-2"
              onClick={toggleMenu}
            >
              {t.courses}
            </Link>
            <Link
              to="/sectors"
              className="text-white/90 hover:text-white font-medium transition-colors py-2"
              onClick={toggleMenu}
            >
              {t.sectors}
            </Link>
            <Link
              to="/leadership"
              className="text-white/90 hover:text-white font-medium transition-colors py-2"
              onClick={toggleMenu}
            >
              {t.leadership}
            </Link>
            <Link
              to="/contact"
              className="text-white/90 hover:text-white font-medium transition-colors py-2"
              onClick={toggleMenu}
            >
              {t.contact}
            </Link>
            <Button
              asChild
              className="bg-ssta-gold hover:bg-ssta-gold-light text-ssta-dark font-bold w-full py-3 mt-2"
            >
              <Link to="/contact">{t.partnerWithUs}</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
