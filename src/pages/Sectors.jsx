
import React from "react";
import { Building, Calendar, Shield, Award, Users, Clock, CheckCircle } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import SectorCard from "@/components/SectorCard";
import CallToAction from "@/components/CallToAction";

const Sectors = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-ssta-navy to-ssta-dark">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              Sectors We Serve
            </h1>
            <p className="text-xl text-white font-medium animate-fade-in opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              Elevating security standards across Saudi Arabia's development pillars
            </p>
          </div>
        </div>
      </section>

      {/* Sectors Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Security Solutions for Every Sector" 
            subtitle="Our training programs are tailored to address the unique security needs of different industries and sectors across the Kingdom."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <SectorCard 
              title="Giga-Projects & Smart Cities" 
              description="Specialized security training for Saudi Arabia's mega projects including NEOM, The Line, Qiddiya, and Diriyah Gate." 
              icon={<Building size={32} />}
            />
            
            <SectorCard 
              title="Event & Entertainment" 
              description="Security management and crowd control for Riyadh Season, FIFA 2034, concerts, and festivals." 
              icon={<Calendar size={32} />}
            />
            
            <SectorCard 
              title="Healthcare & Medical" 
              description="Custom security solutions for public & private hospitals, PHCs, and emergency response teams." 
              icon={<Award size={32} />}
            />
            
            <SectorCard 
              title="Commercial & Retail" 
              description="Advanced security training for shopping malls, commercial towers, and business parks." 
              icon={<Building size={32} />}
            />
            
            <SectorCard 
              title="Aviation & Transport" 
              description="Specialized security programs for airports, metros, and logistics terminals." 
              icon={<Clock size={32} />}
            />
            
            <SectorCard 
              title="Government Entities" 
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
                title="Giga-Projects & Smart Cities" 
                subtitle="Security solutions tailored for Saudi Arabia's ambitious urban development initiatives"
                centered={false}
              />
              
              <p className="text-gray-700 mb-4">
                Saudi Arabia's giga-projects represent the most ambitious urban development initiatives in the world. From NEOM to The Line, these projects demand world-class security infrastructure and personnel.
              </p>
              
              <p className="text-gray-700 mb-4">
                SSTA delivers specialized training programs that address the unique security challenges of these cutting-edge environments, including:
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Shield className="text-ssta-gold mr-3 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Smart city security monitoring and management</span>
                </li>
                <li className="flex items-start">
                  <Shield className="text-ssta-gold mr-3 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Advanced surveillance systems operation</span>
                </li>
                <li className="flex items-start">
                  <Shield className="text-ssta-gold mr-3 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Large-scale access control and perimeter security</span>
                </li>
                <li className="flex items-start">
                  <Shield className="text-ssta-gold mr-3 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Emergency response coordination in complex urban environments</span>
                </li>
              </ul>
            </div>
            
            <div>
              <img 
                src="https://placehold.co/800x600/navy/white?text=Smart+City+Security" 
                alt="Smart City Security" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sector Training Programs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Sector-Specific Training Programs" 
            subtitle="Specialized training modules tailored to each sector's unique security challenges"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-6">
                <Calendar className="text-ssta-gold h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-ssta-dark">Event Security Management</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive training for managing security at large-scale events, including Riyadh Season, sporting events, and entertainment venues.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-ssta-gold mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-700">Crowd control and management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-ssta-gold mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-700">VIP protection protocols</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-ssta-gold mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-700">Emergency evacuation procedures</span>
                </li>
              </ul>
              <img 
                src="https://placehold.co/800x400/navy/white?text=Event+Security" 
                alt="Event Security Training" 
                className="w-full h-auto rounded-md"
              />
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-6">
                <Building className="text-ssta-gold h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-ssta-dark">Commercial & Retail Security</h3>
              <p className="text-gray-700 mb-4">
                Specialized training for security personnel working in shopping malls, commercial towers, and retail environments.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-ssta-gold mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-700">Loss prevention techniques</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-ssta-gold mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-700">Customer service-oriented security</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-ssta-gold mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-700">Retail threat assessment</span>
                </li>
              </ul>
              <img 
                src="https://placehold.co/800x400/navy/white?text=Retail+Security" 
                alt="Retail Security Training" 
                className="w-full h-auto rounded-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction 
        title="Need Sector-Specific Security Training?"
        description="Contact us to discuss custom training programs designed for your industry's unique requirements."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </>
  );
};

export default Sectors;
