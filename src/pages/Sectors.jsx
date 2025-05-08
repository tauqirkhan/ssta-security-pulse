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
  const isArabic = language === "ar";

  // Arabic descriptions for sector cards
  const sectorDescriptions = {
    gigaProjects: {
      en: "Specialized security training for Saudi Arabia's mega projects including NEOM, The Line, Qiddiya, and Diriyah Gate.",
      ar: "تدريب أمني متخصص لمشاريع المملكة العربية السعودية الضخمة بما في ذلك نيوم، ذا لاين، القدية، وبوابة الدرعية.",
    },
    entertainment: {
      en: "Security management and crowd control for Riyadh Season, FIFA 2034, concerts, and festivals.",
      ar: "إدارة الأمن والتحكم في الحشود لموسم الرياض، كأس العالم ۲۰۳٤، الحفلات والمهرجانات.",
    },
    healthcare: {
      en: "Custom security solutions for public & private hospitals, PHCs, and emergency response teams.",
      ar: "حلول أمنية مخصصة للمستشفيات العامة والخاصة، مراكز الرعاية الصحية الأولية، وفرق الاستجابة للطوارئ.",
    },
    commercial: {
      en: "Advanced security training for shopping malls, commercial towers, and business parks.",
      ar: "تدريب أمني متقدم لمراكز التسوق، الأبراج التجارية، والمجمعات التجارية.",
    },
    aviation: {
      en: "Specialized security programs for airports, metros, and logistics terminals.",
      ar: "برامج أمنية متخصصة للمطارات، المترو، ومحطات الخدمات اللوجستية.",
    },
    government: {
      en: "Security support for MOI, PIF-backed projects, and Vision 2030 bodies.",
      ar: "الدعم الأمني لوزارة الداخلية، المشاريع المدعومة من صندوق الاستثمارات العامة، وهيئات رؤية ۲۰۳۰.",
    },
  };

  // Arabic content for the featured sector section
  const featuredSectorDetails = {
    paragraph1: {
      en: t.featuredSector.paragraph1,
      ar: "تقدم الأكاديمية السعودية للتدريب الأمني برامج متخصصة للمسؤولين الأمنيين في المدن الذكية والمشاريع العملاقة مثل نيوم وذا لاين والقدية. تجمع هذه البرامج بين التكنولوجيا المتقدمة والأمن التقليدي لتلبية احتياجات هذه البيئات الحضرية الفريدة.",
    },
    paragraph2: {
      en: t.featuredSector.paragraph2,
      ar: "من خلال التركيز على أنظمة المراقبة المتكاملة وإدارة الوصول والتحكم في المحيط والتنسيق مع الجهات الحكومية، يتعلم المتدربون كيفية تأمين المساحات المعقدة على نطاق غير مسبوق.",
    },
  };

  // Arabic content for training programs
  const trainingProgramsContent = {
    eventSecurity: {
      description: {
        en: t.trainingPrograms.eventSecurity.description,
        ar: "دورات متخصصة في إدارة أمن الفعاليات الكبرى، تغطي كل شيء من إدارة الحشود إلى حماية الشخصيات الهامة وبروتوكولات الإخلاء في حالات الطوارئ. مصممة للفعاليات الرياضية والترفيهية الضخمة في المملكة.",
      },
    },
    commercialSecurity: {
      description: {
        en: t.trainingPrograms.commercialSecurity.description,
        ar: "برامج متخصصة في أمن المنشآت التجارية والبيع بالتجزئة، مع التركيز على منع الخسائر، وأمن خدمة العملاء، وتقييم المخاطر. مصممة للمجمعات التجارية والأبراج ومراكز التسوق.",
      },
    },
  };

  // Additional Arabic elements for the bulleted lists
  const bulletPoints = {
    smartCity: {
      en: "Smart city security monitoring and management",
      ar: "مراقبة وإدارة أمن المدن الذكية",
    },
    surveillance: {
      en: "Advanced surveillance systems operation",
      ar: "تشغيل أنظمة المراقبة المتقدمة",
    },
    accessControl: {
      en: "Large-scale access control and perimeter security",
      ar: "التحكم في الوصول على نطاق واسع وأمن المحيط",
    },
    emergency: {
      en: "Emergency response coordination in complex urban environments",
      ar: "تنسيق الاستجابة للطوارئ في البيئات الحضرية المعقدة",
    },
    // Event security bullet points
    crowdControl: {
      en: "Crowd control and management",
      ar: "التحكم في الحشود وإدارتها",
    },
    vipProtection: {
      en: "VIP protection protocols",
      ar: "بروتوكولات حماية كبار الشخصيات",
    },
    evacuation: {
      en: "Emergency evacuation procedures",
      ar: "إجراءات الإخلاء في حالات الطوارئ",
    },
    // Commercial security bullet points
    lossPrevention: {
      en: "Loss prevention techniques",
      ar: "تقنيات منع الخسائر",
    },
    customerService: {
      en: "Customer service-oriented security",
      ar: "الأمن الموجه لخدمة العملاء",
    },
    threatAssessment: {
      en: "Retail threat assessment",
      ar: "تقييم التهديدات في قطاع التجزئة",
    },
  };

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
              description={sectorDescriptions.gigaProjects.en}
              arabicDescription={sectorDescriptions.gigaProjects.ar}
              icon={<Building size={32} />}
            />

            <SectorCard
              title={t.sectors.entertainment}
              description={sectorDescriptions.entertainment.en}
              arabicDescription={sectorDescriptions.entertainment.ar}
              icon={<Calendar size={32} />}
            />

            <SectorCard
              title={t.sectors.healthcare}
              description={sectorDescriptions.healthcare.en}
              arabicDescription={sectorDescriptions.healthcare.ar}
              icon={<Award size={32} />}
            />

            <SectorCard
              title={t.sectors.commercial}
              description={sectorDescriptions.commercial.en}
              arabicDescription={sectorDescriptions.commercial.ar}
              icon={<Building size={32} />}
            />

            <SectorCard
              title={t.sectors.aviation}
              description={sectorDescriptions.aviation.en}
              arabicDescription={sectorDescriptions.aviation.ar}
              icon={<Clock size={32} />}
            />

            <SectorCard
              title={t.sectors.government}
              description={sectorDescriptions.government.en}
              arabicDescription={sectorDescriptions.government.ar}
              icon={<Shield size={32} />}
            />
          </div>
        </div>
      </section>

      {/* Featured Sector */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              isArabic ? "rtl" : "ltr"
            }`}
          >
            <div>
              <SectionTitle
                title={t.featuredSector.title}
                subtitle={t.featuredSector.subtitle}
                centered={false}
              />

              <p
                className={`text-gray-700 mb-4 ${
                  isArabic ? "font-arabic" : ""
                }`}
              >
                {isArabic
                  ? featuredSectorDetails.paragraph1.ar
                  : featuredSectorDetails.paragraph1.en}
              </p>

              <p
                className={`text-gray-700 mb-4 ${
                  isArabic ? "font-arabic" : ""
                }`}
              >
                {isArabic
                  ? featuredSectorDetails.paragraph2.ar
                  : featuredSectorDetails.paragraph2.en}
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Shield
                    className={`text-ssta-gold ${
                      isArabic ? "ml-3" : "mr-3"
                    } mt-1 flex-shrink-0`}
                    size={18}
                  />
                  <span
                    className={`text-gray-700 ${isArabic ? "font-arabic" : ""}`}
                  >
                    {isArabic
                      ? bulletPoints.smartCity.ar
                      : bulletPoints.smartCity.en}
                  </span>
                </li>
                <li className="flex items-start">
                  <Shield
                    className={`text-ssta-gold ${
                      isArabic ? "ml-3" : "mr-3"
                    } mt-1 flex-shrink-0`}
                    size={18}
                  />
                  <span
                    className={`text-gray-700 ${isArabic ? "font-arabic" : ""}`}
                  >
                    {isArabic
                      ? bulletPoints.surveillance.ar
                      : bulletPoints.surveillance.en}
                  </span>
                </li>
                <li className="flex items-start">
                  <Shield
                    className={`text-ssta-gold ${
                      isArabic ? "ml-3" : "mr-3"
                    } mt-1 flex-shrink-0`}
                    size={18}
                  />
                  <span
                    className={`text-gray-700 ${isArabic ? "font-arabic" : ""}`}
                  >
                    {isArabic
                      ? bulletPoints.accessControl.ar
                      : bulletPoints.accessControl.en}
                  </span>
                </li>
                <li className="flex items-start">
                  <Shield
                    className={`text-ssta-gold ${
                      isArabic ? "ml-3" : "mr-3"
                    } mt-1 flex-shrink-0`}
                    size={18}
                  />
                  <span
                    className={`text-gray-700 ${isArabic ? "font-arabic" : ""}`}
                  >
                    {isArabic
                      ? bulletPoints.emergency.ar
                      : bulletPoints.emergency.en}
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
            <div
              className={`bg-white p-8 rounded-lg shadow-md ${
                isArabic ? "rtl" : ""
              }`}
            >
              <div className="mb-6">
                <Calendar className="text-ssta-gold h-12 w-12" />
              </div>
              <h3
                className={`text-xl font-bold mb-4 text-ssta-dark ${
                  isArabic ? "font-arabic" : ""
                }`}
              >
                {t.trainingPrograms.eventSecurity.title}
              </h3>
              <p
                className={`text-gray-700 mb-4 ${
                  isArabic ? "font-arabic" : ""
                }`}
              >
                {isArabic
                  ? trainingProgramsContent.eventSecurity.description.ar
                  : trainingProgramsContent.eventSecurity.description.en}
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle
                    className={`text-ssta-gold ${
                      isArabic ? "ml-2" : "mr-2"
                    } mt-1 flex-shrink-0`}
                    size={16}
                  />
                  <span
                    className={`text-gray-700 ${isArabic ? "font-arabic" : ""}`}
                  >
                    {isArabic
                      ? bulletPoints.crowdControl.ar
                      : bulletPoints.crowdControl.en}
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className={`text-ssta-gold ${
                      isArabic ? "ml-2" : "mr-2"
                    } mt-1 flex-shrink-0`}
                    size={16}
                  />
                  <span
                    className={`text-gray-700 ${isArabic ? "font-arabic" : ""}`}
                  >
                    {isArabic
                      ? bulletPoints.vipProtection.ar
                      : bulletPoints.vipProtection.en}
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className={`text-ssta-gold ${
                      isArabic ? "ml-2" : "mr-2"
                    } mt-1 flex-shrink-0`}
                    size={16}
                  />
                  <span
                    className={`text-gray-700 ${isArabic ? "font-arabic" : ""}`}
                  >
                    {isArabic
                      ? bulletPoints.evacuation.ar
                      : bulletPoints.evacuation.en}
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

            <div
              className={`bg-white p-8 rounded-lg shadow-md ${
                isArabic ? "rtl" : ""
              }`}
            >
              <div className="mb-6">
                <Building className="text-ssta-gold h-12 w-12" />
              </div>
              <h3
                className={`text-xl font-bold mb-4 text-ssta-dark ${
                  isArabic ? "font-arabic" : ""
                }`}
              >
                {t.trainingPrograms.commercialSecurity.title}
              </h3>
              <p
                className={`text-gray-700 mb-4 ${
                  isArabic ? "font-arabic" : ""
                }`}
              >
                {isArabic
                  ? trainingProgramsContent.commercialSecurity.description.ar
                  : trainingProgramsContent.commercialSecurity.description.en}
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle
                    className={`text-ssta-gold ${
                      isArabic ? "ml-2" : "mr-2"
                    } mt-1 flex-shrink-0`}
                    size={16}
                  />
                  <span
                    className={`text-gray-700 ${isArabic ? "font-arabic" : ""}`}
                  >
                    {isArabic
                      ? bulletPoints.lossPrevention.ar
                      : bulletPoints.lossPrevention.en}
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className={`text-ssta-gold ${
                      isArabic ? "ml-2" : "mr-2"
                    } mt-1 flex-shrink-0`}
                    size={16}
                  />
                  <span
                    className={`text-gray-700 ${isArabic ? "font-arabic" : ""}`}
                  >
                    {isArabic
                      ? bulletPoints.customerService.ar
                      : bulletPoints.customerService.en}
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className={`text-ssta-gold ${
                      isArabic ? "ml-2" : "mr-2"
                    } mt-1 flex-shrink-0`}
                    size={16}
                  />
                  <span
                    className={`text-gray-700 ${isArabic ? "font-arabic" : ""}`}
                  >
                    {isArabic
                      ? bulletPoints.threatAssessment.ar
                      : bulletPoints.threatAssessment.en}
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
