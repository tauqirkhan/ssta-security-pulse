
import React from "react";
import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";
import CallToAction from "@/components/CallToAction";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Courses = () => {
  return (
    <>
      {/* Hero Section with improved visibility */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-ssta-navy to-ssta-dark">
        <div className="container mx-auto px-4 text-center">
          <div className="hero-content-box inline-block mx-auto max-w-3xl p-6 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 animate-fade-in">
              Our Courses & Certifications
            </h1>
            <p
              className="mt-2 text-lg md:text-xl text-white/90 animate-fade-in opacity-0"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              World-class training for Saudi security professionals
            </p>
          </div>
        </div>
      </section>

      {/* Courses Accordion */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Security Training Programs"
            subtitle="SSTA offers comprehensive certification pathways across multiple security disciplines"
          />

          <div className="mt-8 md:mt-12 max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {coursesByCategory.map((category, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg md:text-xl font-bold text-ssta-dark hover:text-ssta-navy">
                    {category.name}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid gap-3 pt-4">
                      {category.courses.map((course, courseIndex) => (
                        <div
                          key={courseIndex}
                          className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all p-3 md:p-4"
                        >
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                            <div>
                              <h3 className="font-semibold text-base md:text-lg text-ssta-dark">
                                {course.title}
                              </h3>
                              <div className="flex items-center text-xs md:text-sm text-gray-600 mt-1 md:mt-2">
                                <Clock size={14} className="mr-1 flex-shrink-0" />
                                <span>{course.duration}</span>
                              </div>
                            </div>
                            <Button
                              size="sm"
                              className="self-start sm:self-auto mt-2 sm:mt-0 bg-ssta-navy hover:bg-ssta-dark text-white text-xs md:text-sm py-1 px-3 h-auto"
                            >
                              Details
                            </Button>
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

      {/* Call to Action */}
      <CallToAction
        title="Ready to Advance Your Security Career?"
        description="Enroll in one of our world-class certification programs today."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
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
        duration: "6 days",
      },
      {
        title: "Retail Security Officer - Add On",
        duration: "2 days",
      },
      {
        title: "Logistics Security Officer - Add On",
        duration: "2 days",
      },
      {
        title: "Cash and Valuables in Transit Security Officer",
        duration: "3 days",
      },
      {
        title: "Close Protection Officer",
        duration: "18 days",
      },
    ],
  },
  {
    name: "Specialist Security Training",
    courses: [
      {
        title: "Foundations of Security and Risk Management",
        duration: "5 days",
      },
      {
        title: "Security Risk Assessment",
        duration: "3 days",
      },
      {
        title: "Business Continuity (ISO 22301)",
        duration: "5 days",
      },
      {
        title: "Training, Scenario Testing & Live Exercising",
        duration: "1-3 days",
      },
      {
        title: "Corporate Risk and Crisis Management",
        duration: "5 days",
      },
      {
        title: "Security Survey & Audits",
        duration: "5 days",
      },
    ],
  },
  {
    name: "First Aid",
    courses: [
      {
        title: "Level 3 Emergency First Aid at Work",
        duration: "1 day",
      },
      {
        title: "Level 3 First Aid at Work",
        duration: "3 days",
      },
      {
        title: "Level 3 Award in Paediatric First Aid",
        duration: "1 day",
      },
      {
        title: "First Response Emergency Care (FREC) Level 3",
        duration: "5 days",
      },
      {
        title: "Oxygen Therapy",
        duration: "0.5 day",
      },
      {
        title: "Management of Anaphylaxis",
        duration: "0.5 day",
      },
      {
        title: "Automated External Defibrillator",
        duration: "0.5 day",
      },
    ],
  },
  {
    name: "Control Room Operations",
    courses: [
      {
        title: "Control Room Operator",
        duration: "4 days",
      },
      {
        title: "CCTV Operator",
        duration: "3 days",
      },
      {
        title: "Incident Control Officer",
        duration: "2 days",
      },
    ],
  },
  {
    name: "Spectator & Event Safety",
    courses: [
      {
        title: "Level 2 Certificate in Spectator Safety",
        duration: "5 days",
      },
      {
        title: "Level 3 Certificate in Spectator Safety Supervision",
        duration: "5 days",
      },
      {
        title: "Level 3 Extended Certificate in Spectator Safety Supervision",
        duration: "5 days",
      },
      {
        title: "Level 4 Diploma in Spectator Safety Management",
        duration: "5 days",
      },
      {
        title: "Understanding Safety at Stadia Workshops",
        duration: "1 day",
      },
    ],
  },
  {
    name: "Leadership & Management",
    courses: [
      {
        title: "Security Manager",
        duration: "5 days",
      },
      {
        title: "Team Leader",
        duration: "3 days",
      },
      {
        title: "Level 2 Leadership & Team Skills",
        duration: "3 days",
      },
    ],
  },
  {
    name: "Supervisor & First Line Manager",
    courses: [
      {
        title: "Level 3 First Line Management & Leadership",
        duration: "4 days",
      },
      {
        title: "Junior Manager",
        duration: "5 days",
      },
      {
        title: "Level 4 Management & Leadership",
        duration: "5 days",
      },
    ],
  },
  {
    name: "Middle, Operational & Departmental Manager",
    courses: [
      {
        title: "Level 5 Operational Management & Leadership",
        duration: "5 days",
      },
      {
        title: "Level 2 Award in Customer Service",
        duration: "2 days",
      },
    ],
  },
  {
    name: "Customer Service",
    courses: [
      {
        title: "Introduction to Corporate Intelligence",
        duration: "2 days",
      },
    ],
  },
  {
    name: "Intelligence",
    courses: [
      {
        title: "Basic Intelligence",
        duration: "6 days",
      },
      {
        title: "Introduction to Corporate Counter Intelligence",
        duration: "2 days",
      },
      {
        title: "Advanced Intelligence",
        duration: "6 days",
      },
      {
        title: "Basic Analysis Training",
        duration: "5 days",
      },
      {
        title: "Advanced Analysis Training",
        duration: "5 days",
      },
    ],
  },
];

export default Courses;
