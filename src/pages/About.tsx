
import { CheckCircle, Shield, Target, Users } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import CallToAction from "@/components/CallToAction";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-ssta-navy">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              About SSTA
            </h1>
            <p className="text-xl text-gray-200 animate-fade-in opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              The new benchmark for security excellence in Saudi Arabia
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Who We Are" 
                centered={false}
              />
              <p className="text-gray-700 mb-6">
                The Saudi Security Training Academy (SSTA) is not just a training provider — we are Saudi Arabia's new benchmark for security excellence.
              </p>
              <p className="text-gray-700 mb-6">
                Fully Saudi-owned, strategically structured, and globally aligned, SSTA delivers the Kingdom's most advanced, internationally recognised training and certification programmes for the private security sector.
              </p>
              <p className="text-gray-700 mb-6">
                Led by a local Saudi CEO and backed by elite British security consultants with decades of global experience, we combine local legitimacy with international firepower.
              </p>
              <p className="text-gray-700 font-semibold">
                We don't supply manpower — we build leaders.
              </p>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/510e5ef7-d9c7-4992-a736-02c3fa3cf828.png" 
                alt="SSTA About" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Mission" 
            subtitle="To upskill, certify, and professionalise the Kingdom's security workforce"
          />
          
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-gray-700 mb-12">
              Our aim is simple: raise the standard, raise the reputation, and raise the next generation of Saudi security professionals.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start mb-4">
                  <CheckCircle className="text-ssta-gold mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-ssta-dark">Globally Recognised Certifications</h3>
                    <p className="text-gray-600">
                      We provide internationally accredited training and certifications that are recognised worldwide.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start mb-4">
                  <CheckCircle className="text-ssta-gold mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-ssta-dark">Saudi-First Leadership</h3>
                    <p className="text-gray-600">
                      We prioritize local leadership and operational control to ensure cultural relevance.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start mb-4">
                  <CheckCircle className="text-ssta-gold mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-ssta-dark">Vision 2030 Alignment</h3>
                    <p className="text-gray-600">
                      Our training is designed to align with Vision 2030's localisation goals.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start mb-4">
                  <CheckCircle className="text-ssta-gold mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-ssta-dark">Elite Saudi Trainers</h3>
                    <p className="text-gray-600">
                      We develop a pipeline of elite Saudi trainers to lead future security programmes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why SSTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Why SSTA?" 
            subtitle="What sets us apart from other security training providers in the Kingdom"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-ssta-gold">
              <Shield className="text-ssta-gold w-12 h-12 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-ssta-dark">100% Saudi Ownership</h3>
              <p className="text-gray-600">
                Strategic local leadership ensures our training is culturally relevant and aligned with the Kingdom's goals.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-ssta-gold">
              <Target className="text-ssta-gold w-12 h-12 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-ssta-dark">UK-Accredited Expertise</h3>
              <p className="text-gray-600">
                Our consultants have worked across major UK infrastructure, events, and private security operations.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-ssta-gold">
              <Users className="text-ssta-gold w-12 h-12 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-ssta-dark">Vision 2030 Alignment</h3>
              <p className="text-gray-600">
                We are committed to Saudisation, localisation, and national security development.
              </p>
            </div>
          </div>
          
          <div className="mt-16 bg-ssta-navy text-white p-8 rounded-lg">
            <blockquote className="text-xl italic mb-4">
              "Saudi Arabia is home to over 200,000 security guards — yet less than 20% have formal training or certification. The industry is dominated by manpower firms with little focus on development, structure, or standards. SSTA changes that."
            </blockquote>
            <p className="font-bold text-ssta-gold text-lg">
              We don't train guards — we develop professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction 
        title="Ready to Elevate Your Security Standards?"
        description="Partner with SSTA to provide world-class security training for your organization."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </>
  );
};

export default About;
