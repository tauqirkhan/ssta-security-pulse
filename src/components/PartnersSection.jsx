
import React from "react";
import SectionTitle from "./SectionTitle";

const PartnersSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Our Strategic Partners"
          subtitle="Collaborating with industry leaders to elevate Saudi Arabia's security sector"
        />
        
        <div className="mt-12 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <img
                src="/lovable-uploads/18a7c13b-6d77-46fb-b194-9b3a9d227737.png"
                alt="Impact Partners Logo"
                className="w-64 h-auto"
                draggable="none"
              />
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-ssta-dark">
                Founding Saudi Partner – Impact Partners
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Impact Partners is a leading Saudi consultancy working across healthcare,
                tourism, infrastructure, and public sector transformation. With clients
                including the Ministry of Health, Ministry of Tourism, SDAIA, Ma'aden,
                and the Ministry of Hajj, they bring deep regulatory insight and
                institutional reach.
              </p>
              <p className="text-gray-700 leading-relaxed">
                As SSTA's national partner, they play a pivotal role in aligning our
                programmes with Vision 2030 while jointly working to raise standards,
                support future regulation, and professionalise the Kingdom's security
                sector.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
