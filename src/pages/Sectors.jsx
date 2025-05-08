
import React from "react";
import {
  Building,
  Calendar,
  Shield,
  Award,
  Users,
  Clock,
  CheckCircle,
} from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import SectorCard from "@/components/SectorCard";
import CallToAction from "@/components/CallToAction";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/translations";

const Sectors = () => {
  const { language } = useLanguage();
  const t = translations.sectors[language];

  return (
    <>
      {/* Hero Section with improved visibility */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-ssta-navy to-ssta-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold animate-fade-in">
            {t.hero.title}
          </h1>
          <p
            className="mt-4 text-lg md:text-xl text-white/90 animate-fade-in opacity-0"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Sectors Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={t.overview.title}
            subtitle={t.overview.subtitle}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <SectorCard
              title={t.sectors.gigaProjects}
              description="Specialized security training for Saudi Arabia's mega projects including NEOM, The Line, Qiddiya, and Diriyah Gate."
              icon={<Building size={32} />}
            />

            <SectorCard
              title={t.sectors.entertainment}
              description="Security management and crowd control for Riyadh Season, FIFA 2034, concerts, and festivals."
              icon={<Calendar size={32} />}
            />

            <SectorCard
              title={t.sectors.healthcare}
              description="Custom security solutions for public & private hospitals, PHCs, and emergency response teams."
              icon={<Award size={32} />}
            />

            <SectorCard
              title={t.sectors.commercial}
              description="Advanced security training for shopping malls, commercial towers, and business parks."
              icon={<Building size={32} />}
            />

            <SectorCard
              title={t.sectors.aviation}
              description="Specialized security programs for airports, metros, and logistics terminals."
              icon={<Clock size={32} />}
            />

            <SectorCard
              title={t.sectors.government}
              description="Security support for MOI, PIF-backed projects, and Vision 2030 bodies."
              icon={<Shield size={32} />}
            />
          </div>
        </div>
      </section>

      {/* Featured Sector */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title={t.featuredSector.title}
                subtitle={t.featuredSector.subtitle}
                centered={false}
              />

              <p className="text-gray-700 mb-4">
                {t.featuredSector.paragraph1}
              </p>

              <p className="text-gray-700 mb-4">
                {t.featuredSector.paragraph2}
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Shield
                    className="text-ssta-gold mr-3 mt-1 flex-shrink-0"
                    size={18}
                  />
                  <span className="text-gray-700">
                    Smart city security monitoring and management
                  </span>
                </li>
                <li className="flex items-start">
                  <Shield
                    className="text-ssta-gold mr-3 mt-1 flex-shrink-0"
                    size={18}
                  />
                  <span className="text-gray-700">
                    Advanced surveillance systems operation
                  </span>
                </li>
                <li className="flex items-start">
                  <Shield
                    className="text-ssta-gold mr-3 mt-1 flex-shrink-0"
                    size={18}
                  />
                  <span className="text-gray-700">
                    Large-scale access control and perimeter security
                  </span>
                </li>
                <li className="flex items-start">
                  <Shield
                    className="text-ssta-gold mr-3 mt-1 flex-shrink-0"
                    size={18}
                  />
                  <span className="text-gray-700">
                    Emergency response coordination in complex urban
                    environments
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <div className="rounded-lg shadow-lg w-full h-80 overflow-hidden">
                <img
                  src="/section_images/gpsc.jpg"
                  alt="Smart City Security Solutions"
                  className="w-full h-full object-contain object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sector Training Programs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={t.trainingPrograms.title}
            subtitle={t.trainingPrograms.subtitle}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-6">
                <Calendar className="text-ssta-gold h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-ssta-dark">
                {t.trainingPrograms.eventSecurity.title}
              </h3>
              <p className="text-gray-700 mb-4">
                {t.trainingPrograms.eventSecurity.description}
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-ssta-gold mr-2 mt-1 flex-shrink-0"
                    size={16}
                  />
                  <span className="text-gray-700">
                    Crowd control and management
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-ssta-gold mr-2 mt-1 flex-shrink-0"
                    size={16}
                  />
                  <span className="text-gray-700">
                    VIP protection protocols
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-ssta-gold mr-2 mt-1 flex-shrink-0"
                    size={16}
                  />
                  <span className="text-gray-700">
                    Emergency evacuation procedures
                  </span>
                </li>
              </ul>
              <div className="w-full h-48 rounded-md mb-4 overflow-hidden">
                <img
                  src="/section_images/eventSecurity.png"
                  alt="Event Security"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-6">
                <Building className="text-ssta-gold h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-ssta-dark">
                {t.trainingPrograms.commercialSecurity.title}
              </h3>
              <p className="text-gray-700 mb-4">
                {t.trainingPrograms.commercialSecurity.description}
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-ssta-gold mr-2 mt-1 flex-shrink-0"
                    size={16}
                  />
                  <span className="text-gray-700">
                    Loss prevention techniques
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-ssta-gold mr-2 mt-1 flex-shrink-0"
                    size={16}
                  />
                  <span className="text-gray-700">
                    Customer service-oriented security
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-ssta-gold mr-2 mt-1 flex-shrink-0"
                    size={16}
                  />
                  <span className="text-gray-700">
                    Retail threat assessment
                  </span>
                </li>
              </ul>
              <div className="w-full h-48 rounded-md mb-4 overflow-hidden">
                <img
                  src="/section_images/commercial.png"
                  alt="Retail Security"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction
        title={t.cta.title}
        description={t.cta.description}
        buttonText={t.cta.buttonText}
        buttonLink="/contact"
      />
    </>
  );
};

export default Sectors;
