
import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/translations";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations.footer[language];
  const navT = translations.navbar[language];

  return (
    <footer className="bg-ssta-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">SSTA</h3>
            <p className="text-gray-300 mb-4">
              {t.about}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-ssta-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-ssta-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-ssta-gold transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-ssta-gold transition-colors">
                  {navT.home}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-ssta-gold transition-colors">
                  {navT.about}
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-ssta-gold transition-colors">
                  {navT.courses}
                </Link>
              </li>
              <li>
                <Link to="/sectors" className="text-gray-300 hover:text-ssta-gold transition-colors">
                  {navT.sectors}
                </Link>
              </li>
              <li>
                <Link to="/leadership" className="text-gray-300 hover:text-ssta-gold transition-colors">
                  {navT.leadership}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{t.contactUs}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <MapPin size={20} className="text-ssta-gold" />
                <span className="text-gray-300">Riyadh, Saudi Arabia</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-ssta-gold" />
                <a href="mailto:info@ssta.sa" className="text-gray-300 hover:text-ssta-gold transition-colors">
                  info@SSTA.sa
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-ssta-gold" />
                <a href="tel:+966XXXXXXXXX" className="text-gray-300 hover:text-ssta-gold transition-colors">
                  +966 [XXX XXXX XXXX]
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{t.partnerWithUs.title}</h3>
            <p className="text-gray-300 mb-4">
              {t.partnerWithUs.description}
            </p>
            <Link
              to="/contact"
              className="bg-ssta-gold hover:bg-ssta-gold-light text-ssta-dark font-bold py-2 px-4 rounded transition-colors inline-block"
            >
              {t.partnerWithUs.buttonText}
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-gray-400">
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
