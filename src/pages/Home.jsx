import React from "react";
import {
  ArrowRight,
  Award,
  Shield,
  Users,
  Building,
  Calendar,
  CheckCircle,
  Target,
  Star,
  Clock,
  BookOpen,
  GraduationCap
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/translations";

const Home = () => {
  const { language } = useLanguage();
  const t = translations.home[language] || translations.home.en;
  const isArabic = language === "ar";

  const courses = [
    {
      title: {
        en: "Security Guarding (Level 2)",
        ar: "حراسة الأمن (المستوى 2)"
      },
      description: {
        en: "Foundation course. Turns guards into professionals.",
        ar: "دورة أساسية. تحول الحراس إلى محترفين."
      }
    },
    {
      title: {
        en: "CCTV Operations (Level 2)",
        ar: "عمليات كاميرات المراقبة (المستوى 2)"
      },
      description: {
        en: "Control room, evidence, and monitoring expertise.",
        ar: "خبرة غرفة التحكم والأدلة والمراقبة."
      }
    }
  ];

  const trainingSteps = [
    {
      title: {
        en: "Book your seat",
        ar: "احجز مقعدك"
      },
      description: {
        en: "Individual or company.",
        ar: "فردي أو شركة."
      }
    },
    {
      title: {
        en: "Train",
        ar: "تدرب"
      },
      description: {
        en: "Learn directly from Highfield-accredited instructors.",
        ar: "تعلم مباشرة من مدربين معتمدين من هايفيلد."
      }
    },
    {
      title: {
        en: "Assessment",
        ar: "التقييم"
      },
      description: {
        en: "Fair and professional.",
        ar: "عادل ومهني."
      }
    },
    {
      title: {
        en: "Certificate issued",
        ar: "إصدار الشهادة"
      },
      description: {
        en: "Highfield International — globally recognised.",
        ar: "هايفيلد الدولية - معترف بها عالمياً."
      }
    },
    {
      title: {
        en: "Step up",
        ar: "تقدم للأمام"
      },
      description: {
        en: "Higher pay, better roles, and stronger contracts.",
        ar: "راتب أعلى، أدوار أفضل، وعقود أقوى."
      }
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-[url('/home.jpg')] px-4">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/75 z-0" />

        {/* Content */}
        <div className={`relative z-10 text-center max-w-5xl mx-auto space-y-6 px-6 ${isArabic ? "rtl" : ""}`}>
          <div className={`text-lg md:text-xl text-ssta-gold font-bold mb-4 animate-fade-in ${isArabic ? "font-arabic" : ""}`}>
            {t.hero.brand}
          </div>
          <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white animate-fade-in ${isArabic ? "font-arabic" : ""}`}>
            {t.hero.title}
          </h1>
          <p
            className={`text-base md:text-lg text-white/90 animate-fade-in opacity-0 ${isArabic ? "font-arabic" : ""}`}
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            {t.hero.subtitle}
          </p>
          <div
            className="flex flex-wrap justify-center gap-4 animate-fade-in opacity-0"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <Button
              asChild
              className={`bg-ssta-gold hover:bg-ssta-gold-light text-ssta-dark font-bold px-6 py-3 rounded-lg ${isArabic ? "font-arabic" : ""}`}
            >
              <Link to="/courses">{t.hero.exploreCourses}</Link>
            </Button>
            <Button
              asChild
              className={`border border-white text-white hover:bg-white hover:text-black font-medium px-6 py-3 rounded-lg transition-colors group ${isArabic ? "font-arabic" : ""}`}
            >
              <Link to="/contact" className="flex items-center gap-2">
                {t.hero.getStarted}
                <ArrowRight
                  className="transition-transform group-hover:translate-x-1"
                  size={16}
                />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="py-16 bg-gray-50">
        <div className={`container mx-auto px-4 ${isArabic ? "rtl" : ""}`}>
          <SectionTitle
            title={t.whyNow.title}
            subtitle=""
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-ssta-gold/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-4 mx-auto">
                <Shield className="text-ssta-gold w-10 h-10" />
              </div>
              <h3 className={`text-lg md:text-xl font-bold mb-3 text-ssta-dark ${isArabic ? "font-arabic" : ""}`}>
                {t.whyNow.regulation.title}
              </h3>
              <p className={`text-gray-700 ${isArabic ? "font-arabic" : ""}`}>
                {t.whyNow.regulation.description}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-ssta-gold/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-4 mx-auto">
                <Calendar className="text-ssta-gold w-10 h-10" />
              </div>
              <h3 className={`text-lg md:text-xl font-bold mb-3 text-ssta-dark ${isArabic ? "font-arabic" : ""}`}>
                {t.whyNow.events.title}
              </h3>
              <p className={`text-gray-700 ${isArabic ? "font-arabic" : ""}`}>
                {t.whyNow.events.description}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-ssta-gold/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-4 mx-auto">
                <Award className="text-ssta-gold w-10 h-10" />
              </div>
              <h3 className={`text-lg md:text-xl font-bold mb-3 text-ssta-dark ${isArabic ? "font-arabic" : ""}`}>
                {t.whyNow.leadership.title}
              </h3>
              <p className={`text-gray-700 ${isArabic ? "font-arabic" : ""}`}>
                {t.whyNow.leadership.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who is RAAY Section */}
      <section className="py-16 bg-ssta-navy text-white">
        <div className={`container mx-auto px-4 ${isArabic ? "rtl" : ""}`}>
          <SectionTitle
            title={t.whoIsRaay.title}
            subtitle={t.whoIsRaay.subtitle}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
            <div>
              <ul className={`space-y-4 ${isArabic ? "font-arabic" : ""}`}>
                {t.whoIsRaay.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-ssta-gold w-5 h-5 mt-1 flex-shrink-0" />
                    <span className="text-white/80">{point}</span>
                  </li>
                ))}
              </ul>
              <p className={`mt-6 text-white/80 font-semibold ${isArabic ? "font-arabic" : ""}`}>
                {t.whoIsRaay.conclusion}
              </p>
            </div>
            <div className="relative">
              <div className="rounded-lg shadow-lg w-full h-80 overflow-hidden relative bg-white">
                <img
                  src="/section_images/ray.png"
                  alt="RAY Training Center"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Prestige of Highfield Section */}
      <section className="py-16">
        <div className={`container mx-auto px-4 ${isArabic ? "rtl" : ""}`}>
          <SectionTitle
            title={t.highfieldPrestige.title}
            subtitle={t.highfieldPrestige.subtitle}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
            <div className="relative">
              <div className="rounded-lg shadow-lg w-full h-80 overflow-hidden relative bg-gradient-to-br from-ssta-gold/10 to-ssta-navy/5">
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <Star className="text-ssta-gold w-16 h-16 mx-auto mb-4" />
                    <h3 className={`text-2xl font-bold text-ssta-dark ${isArabic ? "font-arabic" : ""}`}>
                      Highfield International
                    </h3>
                    <p className={`text-ssta-gold font-medium ${isArabic ? "font-arabic" : ""}`}>
                      {isArabic ? "المعيار الذهبي" : "The Gold Standard"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className={`text-gray-700 mb-6 ${isArabic ? "font-arabic" : ""}`}>
                {t.highfieldPrestige.description}
              </p>
              <p className={`text-gray-700 mb-6 ${isArabic ? "font-arabic" : ""}`}>
                {t.highfieldPrestige.goldStandard}
              </p>
              <p className={`text-ssta-dark font-semibold ${isArabic ? "font-arabic" : ""}`}>
                {t.highfieldPrestige.nowInSaudi}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Journey Section */}
      <section className="py-16 bg-ssta-navy text-white">
        <div className={`container mx-auto px-4 ${isArabic ? "rtl" : ""}`}>
          <SectionTitle
            title={t.journey.title}
            subtitle={t.journey.subtitle}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* For Guards */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-ssta-gold/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Shield className="text-ssta-gold w-8 h-8" />
              </div>
              <h3 className={`text-lg md:text-xl font-bold mb-4 text-ssta-dark ${isArabic ? "font-arabic" : ""}`}>
                {t.journey.forGuards.title}
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-red-600 w-4 h-4 mt-1 flex-shrink-0" />
                  <span className={`text-gray-700 ${isArabic ? "font-arabic" : ""}`}>
                    <strong>{isArabic ? "قبل التدريب:" : "Before:"}</strong> {t.journey.forGuards.before}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-ssta-gold w-4 h-4 mt-1 flex-shrink-0" />
                  <span className={`text-gray-700 ${isArabic ? "font-arabic" : ""}`}>
                    <strong>{isArabic ? "بعد الشهادة:" : "After certification:"}</strong> {t.journey.forGuards.after}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-ssta-gold w-4 h-4 mt-1 flex-shrink-0" />
                  <span className={`text-gray-700 ${isArabic ? "font-arabic" : ""}`}>
                    <strong>{isArabic ? "المهارات المكتسبة:" : "Skills gained:"}</strong> {t.journey.forGuards.skills}
                  </span>
                </li>
              </ul>
            </div>

            {/* For Supervisors */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-ssta-gold/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Users className="text-ssta-gold w-8 h-8" />
              </div>
              <h3 className={`text-lg md:text-xl font-bold mb-4 text-ssta-dark ${isArabic ? "font-arabic" : ""}`}>
                {t.journey.forSupervisors.title}
              </h3>
              <ul className="space-y-2">
                {t.journey.forSupervisors.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="text-ssta-gold w-4 h-4 mt-1 flex-shrink-0" />
                    <span className={`text-gray-700 ${isArabic ? "font-arabic" : ""}`}>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Companies */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-ssta-gold/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Building className="text-ssta-gold w-8 h-8" />
              </div>
              <h3 className={`text-lg md:text-xl font-bold mb-4 text-ssta-dark ${isArabic ? "font-arabic" : ""}`}>
                {t.journey.forCompanies.title}
              </h3>
              <ul className="space-y-2">
                {t.journey.forCompanies.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="text-ssta-gold w-4 h-4 mt-1 flex-shrink-0" />
                    <span className={`text-gray-700 ${isArabic ? "font-arabic" : ""}`}>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Courses You Can Book Now Section */}
      <section className="py-16">
        <div className={`container mx-auto px-4 ${isArabic ? "rtl" : ""}`}>
          <SectionTitle
            title={t.courses.title}
            subtitle={t.courses.subtitle}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {courses.map((course, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-ssta-gold/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <GraduationCap className="text-ssta-gold w-8 h-8" />
                </div>
                <h3 className={`text-lg md:text-xl font-bold mb-3 text-ssta-dark ${isArabic ? "font-arabic" : ""}`}>
                  {isArabic ? course.title.ar : course.title.en}
                </h3>
                <p className={`text-gray-700 ${isArabic ? "font-arabic" : ""}`}>
                  {isArabic ? course.description.ar : course.description.en}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className={`text-gray-600 ${isArabic ? "font-arabic" : ""}`}>
              {t.courses.comingSoon}
            </p>
          </div>
        </div>
      </section>

      {/* How Training Works Section */}
      <section className="py-16 bg-ssta-navy text-white">
        <div className={`container mx-auto px-4 ${isArabic ? "rtl" : ""}`}>
          <SectionTitle
            title={t.howItWorks.title}
            subtitle=""
          />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-12">
            {trainingSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-ssta-gold text-ssta-dark font-bold text-2xl w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className={`text-base md:text-lg font-bold mb-2 text-white/80 ${isArabic ? "font-arabic" : ""}`}>
                  {isArabic ? step.title.ar : step.title.en}
                </h3>
                <p className={`text-white/80 text-sm ${isArabic ? "font-arabic" : ""}`}>
                  {isArabic ? step.description.ar : step.description.en}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision 2030 Section */}
      <section className="py-16">
        <div className={`container mx-auto px-4 ${isArabic ? "rtl" : ""}`}>
          <SectionTitle
            title={t.vision2030.title}
            subtitle={t.vision2030.subtitle}
          />
          
          <div className="max-w-4xl mx-auto mt-12">
            <p className={`text-lg text-gray-700 text-center leading-relaxed ${isArabic ? "font-arabic" : ""}`}>
              {t.vision2030.description}
            </p>
            <p className={`text-xl text-ssta-dark font-semibold text-center mt-6 ${isArabic ? "font-arabic" : ""}`}>
              {t.vision2030.conclusion}
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-ssta-navy text-white">
        <div className={`container mx-auto px-4 text-center ${isArabic ? "rtl" : ""}`}>
          <SectionTitle
            title={t.cta.title}
            subtitle=""
            titleClass="text-white"
            subtitleClass="text-white/80"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <Target className="text-ssta-gold w-12 h-12 mx-auto mb-4" />
              <h3 className={`text-lg md:text-xl font-bold mb-3 ${isArabic ? "font-arabic" : ""}`}>
                {t.cta.forGuards.title}
              </h3>
              <p className={`text-white/80 ${isArabic ? "font-arabic" : ""}`}>
                {t.cta.forGuards.description}
              </p>
            </div>

            <div className="text-center">
              <Users className="text-ssta-gold w-12 h-12 mx-auto mb-4" />
              <h3 className={`text-lg md:text-xl font-bold mb-3 ${isArabic ? "font-arabic" : ""}`}>
                {t.cta.forSupervisors.title}
              </h3>
              <p className={`text-white/80 ${isArabic ? "font-arabic" : ""}`}>
                {t.cta.forSupervisors.description}
              </p>
            </div>

            <div className="text-center">
              <Building className="text-ssta-gold w-12 h-12 mx-auto mb-4" />
              <h3 className={`text-lg md:text-xl font-bold mb-3 ${isArabic ? "font-arabic" : ""}`}>
                {t.cta.forFirms.title}
              </h3>
              <p className={`text-white/80 ${isArabic ? "font-arabic" : ""}`}>
                {t.cta.forFirms.description}
              </p>
            </div>
          </div>

          <div className="mt-12">
            <p className={`text-lg font-semibold text-ssta-gold mb-6 ${isArabic ? "font-arabic" : ""}`}>
              {t.cta.urgency}
            </p>
            <Button
              asChild
              className={`bg-ssta-gold hover:bg-ssta-gold-light text-ssta-dark font-bold px-8 py-4 text-lg ${isArabic ? "font-arabic" : ""}`}
              size="lg"
            >
              <Link to="/contact">
                {t.cta.enrollToday}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;