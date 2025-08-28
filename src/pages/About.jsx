import React from "react";
import {
  ArrowRight,
  Award,
  Shield,
  CheckCircle,
  Target,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";
import CallToAction from "@/components/CallToAction";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";

const About = () => {
  const { language } = useLanguage();
  const t = useTranslation("about");
  const isArabic = language === "ar";

  return (
    <>
      {/* Hero Section with improved visibility */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-ssta-navy to-ssta-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h1
            className={`text-4xl md:text-5xl font-bold animate-fade-in ${
              isArabic ? "font-arabic" : ""
            }`}
          >
            {t.hero.title}
          </h1>
          <p
            className={`mt-4 text-lg md:text-xl text-white/90 animate-fade-in opacity-0 ${
              isArabic ? "font-arabic" : ""
            }`}
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
              isArabic ? "rtl" : ""
            }`}
          >
            <div>
              <SectionTitle
                title={t.story.title}
                subtitle={t.story.subtitle}
                centered={false}
              />
              <p
                className={`text-gray-700 mb-4 ${
                  isArabic ? "font-arabic text-right" : ""
                }`}
              >
                {t.story.paragraph1}
              </p>
              <p
                className={`text-gray-700 mb-4 ${
                  isArabic ? "font-arabic text-right" : ""
                }`}
              >
                {t.story.paragraph2}
              </p>
              <p
                className={`text-gray-700 mb-4 ${
                  isArabic ? "font-arabic text-right" : ""
                }`}
              >
                {t.story.paragraph3}
              </p>
            </div>
            <div className="relative">
              <div className="rounded-lg shadow-lg w-full h-80 overflow-hidden">
                <img
                  src="/logo.png"
                  alt={
                    isArabic
                      ? "تأسيس سعودي سيكيوريتي ترينينغ آند أدفانسمنت"
                      : "SSTA Foundation"
                  }
                  className="w-full h-full object-contain object-center"
                />
              </div>

              <div
                className={`absolute -bottom-6 ${
                  isArabic ? "-left-6" : "-right-6"
                } bg-ssta-gold text-ssta-dark p-4 rounded shadow-lg`}
              >
                <p
                  className={`text-lg font-bold ${
                    isArabic ? "font-arabic" : ""
                  }`}
                >
                  {isArabic ? "تأسست ٢٠٢٥" : "Founded 2025"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={isArabic ? "المهمة والرؤية" : "Mission & Vision"}
            subtitle={
              isArabic
                ? "وضع معيار جديد للأمن السعودي"
                : "Setting a new standard for Saudi security"
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div
              className={`bg-white p-8 rounded-lg shadow-md ${
                isArabic ? "rtl" : ""
              }`}
            >
              <div className="mb-6">
                <Target className="text-ssta-gold h-12 w-12" />
              </div>
              <h3
                className={`text-2xl font-bold mb-4 text-ssta-dark ${
                  isArabic ? "font-arabic" : ""
                }`}
              >
                {t.mission.title}
              </h3>
              <p
                className={`text-gray-700 ${
                  isArabic ? "font-arabic text-right" : ""
                }`}
              >
                {t.mission.description}
              </p>
            </div>

            <div
              className={`bg-white p-8 rounded-lg shadow-md ${
                isArabic ? "rtl" : ""
              }`}
            >
              <div className="mb-6">
                <Shield className="text-ssta-gold h-12 w-12" />
              </div>
              <h3
                className={`text-2xl font-bold mb-4 text-ssta-dark ${
                  isArabic ? "font-arabic" : ""
                }`}
              >
                {t.vision.title}
              </h3>
              <p
                className={`text-gray-700 ${
                  isArabic ? "font-arabic text-right" : ""
                }`}
              >
                {t.vision.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
              isArabic ? "rtl" : ""
            }`}
          >
            <div className="order-2 lg:order-1">
              <div className="rounded-lg shadow-lg w-full h-80 overflow-hidden">
                <img
                  src="/section_images/securityExcellence.png"
                  alt={
                    isArabic
                      ? "تميز في التدريب الأمني"
                      : "Security Training Excellence"
                  }
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <SectionTitle
                title={t.difference.title}
                subtitle={t.difference.subtitle}
                centered={false}
              />

              <div className={`space-y-5 mt-6 ${isArabic ? "text-right" : ""}`}>
                <div
                  className={`flex gap-4 ${isArabic ? "flex-row-reverse" : ""}`}
                >
                  <div className="flex-shrink-0">
                    <CheckCircle className="text-ssta-gold h-6 w-6" />
                  </div>
                  <div>
                    <h4
                      className={`text-lg font-bold text-ssta-dark mb-2 ${
                        isArabic ? "font-arabic" : ""
                      }`}
                    >
                      {t.difference.saudiLed.title}
                    </h4>
                    <p
                      className={`text-gray-700 ${
                        isArabic ? "font-arabic" : ""
                      }`}
                    >
                      {t.difference.saudiLed.description}
                    </p>
                  </div>
                </div>

                <div
                  className={`flex gap-4 ${isArabic ? "flex-row-reverse" : ""}`}
                >
                  <div className="flex-shrink-0">
                    <CheckCircle className="text-ssta-gold h-6 w-6" />
                  </div>
                  <div>
                    <h4
                      className={`text-lg font-bold text-ssta-dark mb-2 ${
                        isArabic ? "font-arabic" : ""
                      }`}
                    >
                      {t.difference.ukExperts.title}
                    </h4>
                    <p
                      className={`text-gray-700 ${
                        isArabic ? "font-arabic" : ""
                      }`}
                    >
                      {t.difference.ukExperts.description}
                    </p>
                  </div>
                </div>

                <div
                  className={`flex gap-4 ${isArabic ? "flex-row-reverse" : ""}`}
                >
                  <div className="flex-shrink-0">
                    <CheckCircle className="text-ssta-gold h-6 w-6" />
                  </div>
                  <div>
                    <h4
                      className={`text-lg font-bold text-ssta-dark mb-2 ${
                        isArabic ? "font-arabic" : ""
                      }`}
                    >
                      {t.difference.certifications.title}
                    </h4>
                    <p
                      className={`text-gray-700 ${
                        isArabic ? "font-arabic" : ""
                      }`}
                    >
                      {t.difference.certifications.description}
                    </p>
                  </div>
                </div>

                <div
                  className={`flex gap-4 ${isArabic ? "flex-row-reverse" : ""}`}
                >
                  <div className="flex-shrink-0">
                    <CheckCircle className="text-ssta-gold h-6 w-6" />
                  </div>
                  <div>
                    <h4
                      className={`text-lg font-bold text-ssta-dark mb-2 ${
                        isArabic ? "font-arabic" : ""
                      }`}
                    >
                      {t.difference.sectorTraining.title}
                    </h4>
                    <p
                      className={`text-gray-700 ${
                        isArabic ? "font-arabic" : ""
                      }`}
                    >
                      {t.difference.sectorTraining.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={t.approach.title}
            subtitle={t.approach.subtitle}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div
              className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ${
                isArabic ? "rtl" : ""
              }`}
            >
              <div className="bg-ssta-gold/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Shield className="text-ssta-gold w-8 h-8" />
              </div>
              <h3
                className={`text-xl font-bold mb-3 text-ssta-dark ${
                  isArabic ? "font-arabic" : ""
                }`}
              >
                {t.approach.practical.title}
              </h3>
              <p
                className={`text-gray-600 ${
                  isArabic ? "font-arabic text-right" : ""
                }`}
              >
                {t.approach.practical.description}
              </p>
            </div>

            <div
              className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ${
                isArabic ? "rtl" : ""
              }`}
            >
              <div className="bg-ssta-gold/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Award className="text-ssta-gold w-8 h-8" />
              </div>
              <h3
                className={`text-xl font-bold mb-3 text-ssta-dark ${
                  isArabic ? "font-arabic" : ""
                }`}
              >
                {t.approach.quality.title}
              </h3>
              <p
                className={`text-gray-600 ${
                  isArabic ? "font-arabic text-right" : ""
                }`}
              >
                {t.approach.quality.description}
              </p>
            </div>

            <div
              className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ${
                isArabic ? "rtl" : ""
              }`}
            >
              <div className="bg-ssta-gold/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Users className="text-ssta-gold w-8 h-8" />
              </div>
              <h3
                className={`text-xl font-bold mb-3 text-ssta-dark ${
                  isArabic ? "font-arabic" : ""
                }`}
              >
                {t.approach.career.title}
              </h3>
              <p
                className={`text-gray-600 ${
                  isArabic ? "font-arabic text-right" : ""
                }`}
              >
                {t.approach.career.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
