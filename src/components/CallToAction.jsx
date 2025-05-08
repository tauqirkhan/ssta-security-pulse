
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const CallToAction = ({ title, description, buttonText, buttonLink }) => {
  const { language } = useLanguage();
  
  return (
    <section className="py-16 bg-ssta-dark text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
          {description}
        </p>
        <Button
          asChild
          className={`bg-ssta-gold hover:bg-ssta-gold-light text-black px-6 py-2 ${language === 'ar' ? 'font-arabic' : ''}`}
          size="lg"
        >
          <Link to={buttonLink}>{buttonText}</Link>
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
