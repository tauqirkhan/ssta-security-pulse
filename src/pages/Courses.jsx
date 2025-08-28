
import React, { useEffect } from "react";
import { Clock } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import CallToAction from "@/components/CallToAction";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";

const Courses = () => {
  const { language } = useLanguage();
  const t = useTranslation("courses");
  const isArabic = language === "ar";

  // Handle hash navigation when page loads
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  // Choose the appropriate course data based on the current language
  const currentCoursesByCategory = isArabic ? coursesByCategory_ar : coursesByCategory;

  return (
    <>
      {/* Hero Section with improved visibility */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-ssta-navy to-ssta-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className={`text-4xl md:text-5xl font-bold animate-fade-in ${isArabic ? "font-arabic" : ""}`}>
            {t.hero.title}
          </h1>
          <p
            className={`mt-4 text-lg md:text-xl text-white/90 animate-fade-in opacity-0 ${isArabic ? "font-arabic" : ""}`}
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Courses Accordion */}
      <section className="py-12 sm:py-14 md:py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={t.overview.title}
            subtitle={t.overview.subtitle}
          />

          <div className={`mt-8 md:mt-12 max-w-4xl mx-auto ${isArabic ? "rtl" : ""}`}>
            <Accordion type="single" collapsible className="w-full">
              {currentCoursesByCategory.map((category, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  id={category.courses[0]?.title
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")}
                >
                  <AccordionTrigger className={`text-lg md:text-xl font-bold text-ssta-dark hover:text-ssta-navy ${isArabic ? "font-arabic text-right" : ""}`}>
                    {category.name}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid gap-3 pt-4">
                      {category.courses.map((course, courseIndex) => (
                        <div
                          key={courseIndex}
                          className={`bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all p-3 sm:p-4 ${isArabic ? "text-right" : ""}`}
                        >
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                            <div>
                              <h3 className={`font-semibold text-base md:text-lg text-ssta-dark ${isArabic ? "font-arabic" : ""}`}>
                                {course.title}
                              </h3>
                              <div className={`flex items-center text-xs md:text-sm text-gray-600 mt-1 md:mt-2 ${isArabic ? "flex-row-reverse" : ""}`}>
                                <Clock
                                  size={14}
                                  className={`${isArabic ? "mr-1" : "ml-1"} flex-shrink-0`}
                                />
                                <span className={isArabic ? "font-arabic" : ""}>{course.duration}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
};

// Processed course data grouped by category
const coursesByCategory = [
  {
    name: "Security",
    courses: [
      {
        title: "Security Officer",
        duration: "12 days",
      },
      {
        title: "Retail Security Officer - Add On",
        duration: "4 days",
      },
      {
        title: "Logistics Security Officer - Add On",
        duration: "4 days",
      },
      {
        title: "Cash and Valuables in Transit Security Officer",
        duration: "6 days",
      },
      {
        title: "Close Protection Officer",
        duration: "36 days",
      },
    ],
  },
  {
    name: "Specialist Security Training",
    courses: [
      {
        title: "Foundations of Security and Risk Management",
        duration: "10 days",
      },
      {
        title: "Security Risk Assessment",
        duration: "6 days",
      },
      {
        title: "Business Continuity (ISO 22301)",
        duration: "10 days",
      },
      {
        title: "Training, Scenario Testing & Live Exercising",
        duration: "2-6 days",
      },
      {
        title: "Corporate Risk and Crisis Management",
        duration: "10 days",
      },
      {
        title: "Security Survey & Audits",
        duration: "10 days",
      },
    ],
  },
  {
    name: "First Aid",
    courses: [
      {
        title: "Level 3 Emergency First Aid at Work",
        duration: "2 days",
      },
      {
        title: "Level 3 First Aid at Work",
        duration: "6 days",
      },
      {
        title: "Level 3 Award in Paediatric First Aid",
        duration: "2 days",
      },
      {
        title: "First Response Emergency Care (FREC) Level 3",
        duration: "10 days",
      },
      {
        title: "Oxygen Therapy",
        duration: "1 day",
      },
      {
        title: "Management of Anaphylaxis",
        duration: "1 day",
      },
      {
        title: "Automated External Defibrillator",
        duration: "1 day",
      },
    ],
  },
  {
    name: "Control Room Operations",
    courses: [
      {
        title: "Control Room Operator",
        duration: "8 days",
      },
      {
        title: "CCTV Operator",
        duration: "6 days",
      },
      {
        title: "Incident Control Officer",
        duration: "4 days",
      },
    ],
  },
  {
    name: "Spectator & Event Safety",
    courses: [
      {
        title: "Level 2 Certificate in Spectator Safety",
        duration: "10 days",
      },
      {
        title: "Level 3 Certificate in Spectator Safety Supervision",
        duration: "10 days",
      },
      {
        title: "Level 3 Extended Certificate in Spectator Safety Supervision",
        duration: "10 days",
      },
      {
        title: "Level 4 Diploma in Spectator Safety Management",
        duration: "10 days",
      },
      {
        title: "Understanding Safety at Stadia Workshops",
        duration: "2 days",
      },
    ],
  },
  {
    name: "Leadership & Management",
    courses: [
      {
        title: "Security Manager",
        duration: "10 days",
      },
      {
        title: "Team Leader",
        duration: "6 days",
      },
      {
        title: "Level 2 Leadership & Team Skills",
        duration: "6 days",
      },
    ],
  },
  {
    name: "Supervisor & First Line Manager",
    courses: [
      {
        title: "Level 3 First Line Management & Leadership",
        duration: "8 days",
      },
      {
        title: "Junior Manager",
        duration: "10 days",
      },
      {
        title: "Level 4 Management & Leadership",
        duration: "10 days",
      },
    ],
  },
  {
    name: "Middle, Operational & Departmental Manager",
    courses: [
      {
        title: "Level 5 Operational Management & Leadership",
        duration: "10 days",
      },
      {
        title: "Level 2 Award in Customer Service",
        duration: "4 days",
      },
    ],
  },
  {
    name: "Customer Service",
    courses: [
      {
        title: "Introduction to Corporate Intelligence",
        duration: "4 days",
      },
    ],
  },
  {
    name: "Intelligence",
    courses: [
      {
        title: "Basic Intelligence",
        duration: "12 days",
      },
      {
        title: "Introduction to Corporate Counter Intelligence",
        duration: "4 days",
      },
      {
        title: "Advanced Intelligence",
        duration: "12 days",
      },
      {
        title: "Basic Analysis Training",
        duration: "10 days",
      },
      {
        title: "Advanced Analysis Training",
        duration: "10 days",
      },
    ],
  },
];

// Arabic version of courses data
const coursesByCategory_ar = [
  {
    name: "الأمن",
    courses: [
      {
        title: "ضابط أمن",
        duration: "١٢ يوم",
      },
      {
        title: "ضابط أمن تجزئة - إضافة",
        duration: "٤ أيام",
      },
      {
        title: "ضابط أمن لوجستي - إضافة",
        duration: "٤ أيام",
      },
      {
        title: "ضابط أمن نقل النقود والأشياء الثمينة",
        duration: "٦ أيام",
      },
      {
        title: "ضابط حماية شخصية",
        duration: "٣٦ يوم",
      },
    ],
  },
  {
    name: "تدريب أمني متخصص",
    courses: [
      {
        title: "أساسيات الأمن وإدارة المخاطر",
        duration: "١٠ أيام",
      },
      {
        title: "تقييم المخاطر الأمنية",
        duration: "٦ أيام",
      },
      {
        title: "استمرارية الأعمال (ISO 22301)",
        duration: "١٠ أيام",
      },
      {
        title: "التدريب واختبار السيناريوهات والتمارين الحية",
        duration: "٢-٦ أيام",
      },
      {
        title: "إدارة المخاطر والأزمات المؤسسية",
        duration: "١٠ أيام",
      },
      {
        title: "المسح والتدقيق الأمني",
        duration: "١٠ أيام",
      },
    ],
  },
  {
    name: "الإسعافات الأولية",
    courses: [
      {
        title: "المستوى ٣ الإسعافات الأولية الطارئة في العمل",
        duration: "يومان",
      },
      {
        title: "المستوى ٣ الإسعافات الأولية في العمل",
        duration: "٦ أيام",
      },
      {
        title: "المستوى ٣ جائزة في الإسعافات الأولية للأطفال",
        duration: "يومان",
      },
      {
        title: "الرعاية الطارئة للاستجابة الأولى (FREC) المستوى ٣",
        duration: "١٠ أيام",
      },
      {
        title: "العلاج بالأكسجين",
        duration: "يوم واحد",
      },
      {
        title: "إدارة الحساسية المفرطة",
        duration: "يوم واحد",
      },
      {
        title: "جهاز إزالة الرجفان الخارجي الآلي",
        duration: "يوم واحد",
      },
    ],
  },
  {
    name: "عمليات غرفة التحكم",
    courses: [
      {
        title: "مشغل غرفة التحكم",
        duration: "٨ أيام",
      },
      {
        title: "مشغل كاميرات المراقبة",
        duration: "٦ أيام",
      },
      {
        title: "ضابط إدارة الحوادث",
        duration: "٤ أيام",
      },
    ],
  },
  {
    name: "سلامة المتفرجين والفعاليات",
    courses: [
      {
        title: "شهادة المستوى ٢ في سلامة المتفرجين",
        duration: "١٠ أيام",
      },
      {
        title: "شهادة المستوى ٣ في الإشراف على سلامة المتفرجين",
        duration: "١٠ أيام",
      },
      {
        title: "شهادة موسعة المستوى ٣ في الإشراف على سلامة المتفرجين",
        duration: "١٠ أيام",
      },
      {
        title: "دبلوم المستوى ٤ في إدارة سلامة المتفرجين",
        duration: "١٠ أيام",
      },
      {
        title: "ورش عمل فهم السلامة في الملاعب",
        duration: "يومان",
      },
    ],
  },
  {
    name: "القيادة والإدارة",
    courses: [
      {
        title: "مدير أمن",
        duration: "١٠ أيام",
      },
      {
        title: "قائد فريق",
        duration: "٦ أيام",
      },
      {
        title: "المستوى ٢ القيادة ومهارات الفريق",
        duration: "٦ أيام",
      },
    ],
  },
  {
    name: "المشرف ومدير الخط الأول",
    courses: [
      {
        title: "المستوى ٣ إدارة وقيادة الخط الأول",
        duration: "٨ أيام",
      },
      {
        title: "المدير المبتدئ",
        duration: "١٠ أيام",
      },
      {
        title: "المستوى ٤ الإدارة والقيادة",
        duration: "١٠ أيام",
      },
    ],
  },
  {
    name: "مدير متوسط وتشغيلي وإداري",
    courses: [
      {
        title: "المستوى ٥ الإدارة والقيادة التشغيلية",
        duration: "١٠ أيام",
      },
      {
        title: "المستوى ٢ جائزة في خدمة العملاء",
        duration: "٤ أيام",
      },
    ],
  },
  {
    name: "خدمة العملاء",
    courses: [
      {
        title: "مقدمة في الاستخبارات المؤسسية",
        duration: "٤ أيام",
      },
    ],
  },
  {
    name: "الاستخبارات",
    courses: [
      {
        title: "الاستخبارات الأساسية",
        duration: "١٢ يوم",
      },
      {
        title: "مقدمة في مكافحة الاستخبارات المؤسسية",
        duration: "٤ أيام",
      },
      {
        title: "الاستخبارات المتقدمة",
        duration: "١٢ يوم",
      },
      {
        title: "تدريب التحليل الأساسي",
        duration: "١٠ أيام",
      },
      {
        title: "تدريب التحليل المتقدم",
        duration: "١٠ أيام",
      },
    ],
  },
];

export default Courses;
