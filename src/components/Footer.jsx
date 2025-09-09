import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/translations";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations.footer[language];
  const navT = translations.navbar[language];
  const isArabic = language === "ar";

  return (
    <footer className="bg-ssta-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <img src="/logo.png" alt="SSTA" className="h-6 mb-4" />
            </h3>
            <p className="text-gray-300 mb-4">{t.about}</p>
            <div
              className={`flex ${
                isArabic ? "space-x-reverse space-x-4" : "space-x-4"
              }`}
            >
              <a
                href="#"
                className="text-white hover:text-ssta-gold transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-ssta-gold transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-ssta-gold transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-ssta-gold transition-colors"
                >
                  {navT.home}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-ssta-gold transition-colors"
                >
                  {navT.about}
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="text-gray-300 hover:text-ssta-gold transition-colors"
                >
                  {navT.courses}
                </Link>
              </li>
              <li>
                <Link
                  to="/sectors"
                  className="text-gray-300 hover:text-ssta-gold transition-colors"
                >
                  {navT.sectors}
                </Link>
              </li>
              <li>
                <Link
                  to="/leadership"
                  className="text-gray-300 hover:text-ssta-gold transition-colors"
                >
                  {navT.leadership}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{t.contactUs}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-ssta-gold mt-0.5 flex-shrink-0" />
                <div className="text-gray-300">
                  <div className="font-medium mb-1">{t.address}</div>
                  <div className="text-sm leading-relaxed">
                    {isArabic 
                      ? "47، الطابق الثالث، مكتب 2085، طريق الإمام عبد الله بن سعود، الرياض، المملكة العربية السعودية، 13225"
                      : "47, 3rd Floor, Office 2085, Imam Abdullah Bin Saud Road, Riyadh, Saudi Arabia, 13225"
                    }
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-ssta-gold" />
                <a
                  href="mailto:sukh@ssta.daad.sa"
                  className="text-gray-300 hover:text-ssta-gold transition-colors"
                >
                  sukh@ssta.daad.sa
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-ssta-gold" />
                <a
                  href={`tel:+966505753717`}
                  className="text-gray-300 hover:text-ssta-gold transition-colors"
                >
                  {isArabic ? "٩٦٦٥٠٥٧٥٣٧١٧+" : "+966 50 575 3717"}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-ssta-gold rounded-sm flex items-center justify-center">
                  <span className="text-ssta-dark text-xs font-bold">CR</span>
                </div>
                <div className="text-gray-300">
                  <span className="font-medium">{t.crNumber}:</span> 1010975714
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{t.partnerWithUs.title}</h3>
            <p className="text-gray-300 mb-4">{t.partnerWithUs.description}</p>
            <Link
              to="/contact"
              className="bg-ssta-gold hover:bg-ssta-gold-light text-ssta-dark font-bold py-2 px-4 rounded transition-colors inline-block"
            >
              {t.partnerWithUs.buttonText}
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-gray-400">{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
