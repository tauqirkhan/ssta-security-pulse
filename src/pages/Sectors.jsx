
import React from "react";
import { Building, Calendar, Activity, ShoppingBag, Hotel, Plane, GraduationCap, Zap, Users, Building2, LandPlot, Shield } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import SectorCard from "@/components/SectorCard";
import CallToAction from "@/components/CallToAction";

const Sectors = () => {
  const sectors = [
    {
      title: "Giga-Projects & Smart Cities",
      description: "NEOM, The Line, Qiddiya, Diriyah Gate",
      icon: <Building size={32} />,
    },
    {
      title: "Event & Entertainment",
      description: "Riyadh Season, FIFA 2034, concerts, festivals",
      icon: <Calendar size={32} />,
    },
    {
      title: "Healthcare & Medical",
      description: "Public & private hospitals, PHCs, emergency response centres",
      icon: <Activity size={32} />,
    },
    {
      title: "Commercial & Retail",
      description: "Shopping malls, towers, business parks",
      icon: <ShoppingBag size={32} />,
    },
    {
      title: "Hospitality & Tourism",
      description: "Hotels, resorts, pilgrimage sites, heritage zones",
      icon: <Hotel size={32} />,
    },
    {
      title: "Aviation & Transport",
      description: "Airports, metros, logistics terminals",
      icon: <Plane size={32} />,
    },
    {
      title: "Education Institutions",
      description: "Universities, international schools, training centres",
      icon: <GraduationCap size={32} />,
    },
    {
      title: "Energy & Infrastructure",
      description: "Refineries, power plants, water plants, critical infrastructure",
      icon: <Zap size={32} />,
    },
    {
      title: "Private Security Companies",
      description: "Licensing compliance and upskilling for security firms",
      icon: <Users size={32} />,
    },
    {
      title: "Corporate & Financial Services",
      description: "Banks, corporate HQs, government buildings",
      icon: <Building2 size={32} />,
    },
    {
      title: "Government & Semi-Government",
      description: "Security personnel aligned with MOI, PIF-backed projects, Vision 2030 bodies",
      icon: <LandPlot size={32} />,
    },
    {
      title: "Diplomatic & VIP Protection",
      description: "Embassies, consulates, executive residences",
      icon: <Shield size={32} />,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-ssta-navy">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              Sectors We Serve
            </h1>
            <p className="text-xl text-gray-200 animate-fade-in opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              Elevating security standards across every sector of the Kingdom
            </p>
          </div>
        </div>
      </section>

      {/* Sectors Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Comprehensive Security Training Across All Sectors" 
            subtitle="Our training programmes are built to elevate security personnel across every major pillar of the Kingdom's development."
          />
          
          <p className="text-center text-lg text-gray-700 max-w-4xl mx-auto mb-12">
            Wherever security presence exists — we elevate it to global standard.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {sectors.map((sector, index) => (
              <SectorCard 
                key={index}
                title={sector.title}
                description={sector.description}
                icon={sector.icon}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sector-Specific Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Sector-Specific Solutions" 
            subtitle="Tailored security training for the unique challenges of each sector"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            <div className="lg:col-span-1">
              <img 
                src="/lovable-uploads/464b4a6f-ff79-46cd-8256-a3972ca69f96.png" 
                alt="Security Training" 
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
            
            <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-ssta-dark">Why Different Sectors Need Specialized Training</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-ssta-gold/10 p-2 rounded-full mr-4 mt-1">
                    <div className="w-4 h-4 bg-ssta-gold rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-ssta-dark">Unique Security Challenges</h4>
                    <p className="text-gray-700">
                      Each sector faces distinct security threats and operational environments that require specialized knowledge and skills.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-ssta-gold/10 p-2 rounded-full mr-4 mt-1">
                    <div className="w-4 h-4 bg-ssta-gold rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-ssta-dark">Regulatory Compliance</h4>
                    <p className="text-gray-700">
                      Different sectors must adhere to specific security regulations and standards that security personnel must understand thoroughly.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-ssta-gold/10 p-2 rounded-full mr-4 mt-1">
                    <div className="w-4 h-4 bg-ssta-gold rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-ssta-dark">Customized Risk Management</h4>
                    <p className="text-gray-700">
                      Our sector-specific training ensures security personnel can identify, assess, and mitigate risks particular to their operating environment.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-ssta-gold/10 p-2 rounded-full mr-4 mt-1">
                    <div className="w-4 h-4 bg-ssta-gold rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-ssta-dark">Stakeholder Management</h4>
                    <p className="text-gray-700">
                      Security personnel must understand how to effectively interact with diverse stakeholders specific to each sector.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sector Case Studies */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Featured Sector Case Studies" 
            subtitle="How our training improves security outcomes across different sectors"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/lovable-uploads/510e5ef7-d9c7-4992-a736-02c3fa3cf828.png" 
                  alt="Giga-Project Security" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Building className="text-ssta-gold w-5 h-5 mr-2" />
                  <span className="text-sm font-medium text-ssta-gold">Giga-Projects</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-ssta-dark">Securing Saudi's Mega Developments</h3>
                <p className="text-gray-700 mb-4">
                  Our comprehensive security training programs ensure that personnel working in high-profile giga-projects have the specialized skills needed to protect these landmark developments.
                </p>
                <p className="text-gray-700">
                  From advanced surveillance techniques to crowd management during construction phases, our certified security professionals are equipped to handle the unique challenges of securing Saudi's most ambitious projects.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/lovable-uploads/464b4a6f-ff79-46cd-8256-a3972ca69f96.png" 
                  alt="Event Security" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="text-ssta-gold w-5 h-5 mr-2" />
                  <span className="text-sm font-medium text-ssta-gold">Event & Entertainment</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-ssta-dark">Elevating Entertainment Security Standards</h3>
                <p className="text-gray-700 mb-4">
                  With the Kingdom hosting increasingly high-profile international events, our event security training ensures that Saudi security personnel can deliver world-class protection for attendees and VIPs.
                </p>
                <p className="text-gray-700">
                  Our certified Event Security Managers are trained in everything from crowd control and emergency evacuation to VIP protection, ensuring events run smoothly and safely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction 
        title="Need Sector-Specific Security Training?"
        description="Contact us to discuss how our specialized training programs can address your sector's unique security challenges."
        buttonText="Start a Conversation"
        buttonLink="/contact"
      />
    </>
  );
};

export default Sectors;
