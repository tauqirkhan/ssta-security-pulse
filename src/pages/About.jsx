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

const About = () => {
  return (
    <>
      {/* Hero Section with improved visibility */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-ssta-navy to-ssta-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold animate-fade-in">
            About SSTA
          </h1>
          <p
            className="mt-4 text-lg md:text-xl text-white/90 animate-fade-in opacity-0"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            Building Saudi Arabia's security excellence
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <SectionTitle
                title="Our Story"
                subtitle="Founded on a mission to transform Saudi Arabia's security industry"
                centered={false}
              />
              <p className="text-gray-700 mb-4">
                SSTA was founded in 2025 with a clear purpose: to build the
                Kingdom's first truly world-class security training academy, led
                by Saudis and powered by elite international expertise.
              </p>
              <p className="text-gray-700 mb-4">
                We identified a critical gap in the market. While Saudi Arabia
                is home to over 200,000 security professionals, less than 20%
                have formal qualifications or structured training. Most security
                companies operate as manpower providers rather than centers of
                excellence.
              </p>
              <p className="text-gray-700 mb-4">
                Our vision is to fundamentally transform this landscape,
                aligning with Vision 2030's focus on upskilling Saudi nationals
                and developing a knowledge-based economy.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-lg shadow-lg w-full h-80 overflow-hidden">
                <img
                  src="/logo.png"
                  alt="SSTA Foundation"
                  className="w-full h-full object-contain object-center"
                />
              </div>

              <div className="absolute -bottom-6 -right-6 bg-ssta-gold text-ssta-dark p-4 rounded shadow-lg">
                <p className="text-lg font-bold">Founded 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Mission & Vision"
            subtitle="Setting a new standard for Saudi security"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-6">
                <Target className="text-ssta-gold h-12 w-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-ssta-dark">
                Our Mission
              </h3>
              <p className="text-gray-700 mb-4">
                To build the region's most credible, capable and qualified
                security professionals through world-class training and
                certification programmes that blend international standards with
                local expertise.
              </p>
              <p className="text-gray-700">
                We aim to elevate the entire security profession in Saudi Arabia
                through elite training pathways that develop not just technical
                skills, but leadership capabilities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-6">
                <Shield className="text-ssta-gold h-12 w-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-ssta-dark">
                Our Vision
              </h3>
              <p className="text-gray-700 mb-4">
                To become the undisputed leader in security training across
                Saudi Arabia and the wider GCC, recognized for our Saudi-first
                approach, international accreditations, and the exceptional
                quality of our graduates.
              </p>
              <p className="text-gray-700">
                By 2030, we envision a Kingdom where security personnel are
                highly trained, properly certified, and respected as
                professionals who safeguard Saudi Arabia's ambitious future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-lg shadow-lg w-full h-80 overflow-hidden">
                <img
                  src="/section_images/securityExcellence.jpg"
                  alt="Security Training Excellence"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <SectionTitle
                title="What Sets Us Apart"
                subtitle="The SSTA difference in security training"
                centered={false}
              />

              <div className="space-y-5 mt-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="text-ssta-gold h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-ssta-dark mb-2">
                      100% Saudi Ownership
                    </h4>
                    <p className="text-gray-700">
                      Unlike foreign-owned competitors, we are fully Saudi-owned
                      with a Saudi CEO, ensuring total alignment with local
                      values and Vision 2030 priorities.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="text-ssta-gold h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-ssta-dark mb-2">
                      Elite UK Security Experts
                    </h4>
                    <p className="text-gray-700">
                      Our training programs are designed and delivered by former
                      UK military, intelligence, and corporate security leaders
                      with decades of global experience.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="text-ssta-gold h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-ssta-dark mb-2">
                      International Certifications
                    </h4>
                    <p className="text-gray-700">
                      Our programs are verified and accredited to UK and
                      international standards, providing graduates with globally
                      recognized qualifications.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="text-ssta-gold h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-ssta-dark mb-2">
                      Sector-Specific Training
                    </h4>
                    <p className="text-gray-700">
                      We offer specialized courses for different sectors
                      (mega-projects, events, healthcare, retail) rather than
                      one-size-fits-all programs.
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
            title="Our Approach"
            subtitle="How we develop Saudi security excellence"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="bg-ssta-gold/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Shield className="text-ssta-gold w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-ssta-dark">
                Practical Over Theoretical
              </h3>
              <p className="text-gray-600">
                Our training focuses on real-world scenarios and hands-on
                practice rather than theoretical concepts alone. We believe in
                learning by doing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="bg-ssta-gold/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Award className="text-ssta-gold w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-ssta-dark">
                Quality Over Quantity
              </h3>
              <p className="text-gray-600">
                We maintain small class sizes and high trainer-to-student ratios
                to ensure personalized attention and maximum skills development.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="bg-ssta-gold/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Users className="text-ssta-gold w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-ssta-dark">
                Career Development Focus
              </h3>
              <p className="text-gray-600">
                Beyond technical skills, we incorporate leadership development,
                career planning and continuous professional development into all
                our programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction
        title="Ready to Partner With SSTA?"
        description="Join us in building the future of Saudi security excellence through world-class training and certification programs."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </>
  );
};

export default About;
