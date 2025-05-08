
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";

const CallToAction = ({ title, description, buttonText, buttonLink }) => {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  
  return (
    <section className="py-16 bg-ssta-dark text-white">
      <div className={`container mx-auto px-4 text-center ${isArabic ? "rtl" : ""}`}>
        <h2 className={`text-3xl font-bold mb-4 ${isArabic ? "font-arabic" : ""}`}>{title}</h2>
        <p className={`text-lg text-white/80 max-w-2xl mx-auto mb-8 ${isArabic ? "font-arabic" : ""}`}>
          {description}
        </p>
        <Button
          asChild
          className={`bg-ssta-gold hover:bg-ssta-gold-light text-black px-6 py-2 ${isArabic ? 'font-arabic' : ''}`}
          size="lg"
        >
          <Link to={buttonLink}>{buttonText}</Link>
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
