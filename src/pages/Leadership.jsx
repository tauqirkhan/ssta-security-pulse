import React from "react";
import { Award, Shield, Briefcase } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import TeamMemberCard from "@/components/TeamMemberCard";
import CallToAction from "@/components/CallToAction";

const Leadership = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-ssta-navy to-ssta-dark">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 hero-headline animate-fade-in">
              Our Leadership Team
            </h1>
            <p className="text-xl text-white font-bold hero-subtitle animate-fade-in opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              Saudi leadership. International expertise. Unmatched excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Executive Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Executive Leadership" 
            subtitle="Our leadership team combines Saudi ownership with international security expertise"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <TeamMemberCard 
              name="Nawaf Y M Alqahtani" 
              position="CEO (Saudi)" 
              imageUrl="https://placehold.co/400x500/gray/white?text=CEO"
            />
            <TeamMemberCard 
              name="Sukh Gill" 
              position="Strategic Director & Founder" 
              imageUrl="https://placehold.co/400x500/gray/white?text=Director"
            />
            <TeamMemberCard 
              name="Mark Bramwell" 
              position="Director of Training" 
              imageUrl="https://placehold.co/400x500/gray/white?text=Training+Director"
            />
            <TeamMemberCard 
              name="Samraj Padda" 
              position="Senior Trainer & Quality Lead" 
              imageUrl="https://placehold.co/400x500/gray/white?text=Senior+Trainer"
            />
          </div>
        </div>
      </section>

      {/* Leadership Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="rounded-lg shadow-lg w-full h-80 bg-gray-300 flex items-center justify-center">
                <p className="text-gray-600 text-lg">Leadership Meeting</p>
              </div>
            </div>
            <div>
              <SectionTitle 
                title="Our Leadership Vision" 
                subtitle="Setting a new standard for security excellence in Saudi Arabia"
                centered={false}
              />
              
              <p className="text-gray-700 mb-4">
                SSTA's leadership team is committed to transforming Saudi Arabia's security industry through elite training and development programs that create a new generation of security professionals.
              </p>
              
              <p className="text-gray-700 mb-6">
                Our leadership philosophy is built on three core principles:
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="bg-ssta-gold/10 p-3 rounded-full h-14 w-14 flex items-center justify-center mr-4 flex-shrink-0">
                    <Shield className="text-ssta-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-ssta-dark">Saudi-First Approach</h3>
                    <p className="text-gray-600">
                      We are 100% Saudi-owned and led, ensuring alignment with the Kingdom's Vision 2030 goals and local cultural contexts.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-ssta-gold/10 p-3 rounded-full h-14 w-14 flex items-center justify-center mr-4 flex-shrink-0">
                    <Award className="text-ssta-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-ssta-dark">Global Excellence</h3>
                    <p className="text-gray-600">
                      We partner with elite international security experts to bring world-class training standards to the Kingdom.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-ssta-gold/10 p-3 rounded-full h-14 w-14 flex items-center justify-center mr-4 flex-shrink-0">
                    <Briefcase className="text-ssta-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-ssta-dark">Industry Transformation</h3>
                    <p className="text-gray-600">
                      We aim to elevate the entire security profession from basic manpower provision to true security expertise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Leadership */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Training Leadership" 
            subtitle="Our expert trainers bring decades of international security experience"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <TeamMemberCard 
              name="James Wilson" 
              position="Counter Terrorism Expert" 
              imageUrl="https://placehold.co/400x500/gray/white?text=CT+Expert"
            />
            <TeamMemberCard 
              name="Sarah Al-Harbi" 
              position="Healthcare Security Lead" 
              imageUrl="https://placehold.co/400x500/gray/white?text=Healthcare+Lead"
            />
            <TeamMemberCard 
              name="Mohammed Khalid" 
              position="Event Security Specialist" 
              imageUrl="https://placehold.co/400x500/gray/white?text=Event+Specialist"
            />
            <TeamMemberCard 
              name="David Thomson" 
              position="Security Risk Assessment Lead" 
              imageUrl="https://placehold.co/400x500/gray/white?text=Risk+Lead"
            />
            <TeamMemberCard 
              name="Aisha Al-Otaibi" 
              position="Training Coordinator" 
              imageUrl="https://placehold.co/400x500/gray/white?text=Training+Coordinator"
            />
            <TeamMemberCard 
              name="Abdullah Al-Ghamdi" 
              position="VIP Protection Specialist" 
              imageUrl="https://placehold.co/400x500/gray/white?text=VIP+Protection"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction 
        title="Meet Our Team in Person"
        description="Contact us to learn more about our leadership team and training philosophy."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </>
  );
};

export default Leadership;
