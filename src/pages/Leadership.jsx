import React from "react";
import { Award, Shield, Briefcase } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import TeamMemberCard from "@/components/TeamMemberCard";
import CallToAction from "@/components/CallToAction";

const Leadership = () => {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-ssta-navy to-ssta-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold animate-fade-in">
            Our Leadership Team
          </h1>
          <p
            className="mt-4 text-lg md:text-xl text-white/90 animate-fade-in opacity-0"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            Saudi leadership. International expertise. Unmatched excellence.
          </p>
        </div>
      </section>

      {/* Executive Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Executive Leadership"
            subtitle="Our leadership team combines Saudi ownership with international security expertise"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
            <TeamMemberCard
              name="Sukh Gill"
              position="CEO"
              imageUrl="/leadership/sukh.jpg"
            />
            <TeamMemberCard
              name="Nawaf Y M Alqahtani "
              position="Sales Director"
              imageUrl="/leadership/nawaf.jpg"
            />
            <TeamMemberCard
              name="Mark Bramwell"
              position="Director of Training"
              imageUrl="/leadership/mark.jpg"
            />
            <TeamMemberCard
              name="Samraj Padda"
              position="Senior Trainer & Quality Lead"
              imageUrl="/leadership/samraj.jpg"
            />
            <TeamMemberCard
              name="Tauqir Khan"
              position="Marketing Executive"
              imageUrl="/leadership/tauqir.jpg"
            />
          </div>
        </div>
      </section>

      {/* Leadership Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="rounded-lg shadow-lg w-full h-80 image-placeholder">
                <p className="image-placeholder-text">Leadership Meeting</p>
              </div>
            </div>
            <div>
              <SectionTitle
                title="Our Leadership Vision"
                subtitle="Setting a new standard for security excellence in Saudi Arabia"
                centered={false}
              />

              <p className="text-gray-700 mb-4">
                SSTA's leadership team is committed to transforming Saudi
                Arabia's security industry through elite training and
                development programs that create a new generation of security
                professionals.
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
                    <h3 className="text-lg font-bold mb-2 text-ssta-dark">
                      Saudi-First Approach
                    </h3>
                    <p className="text-gray-600">
                      We are 100% Saudi-owned and led, ensuring alignment with
                      the Kingdom's Vision 2030 goals and local cultural
                      contexts.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="bg-ssta-gold/10 p-3 rounded-full h-14 w-14 flex items-center justify-center mr-4 flex-shrink-0">
                    <Award className="text-ssta-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-ssta-dark">
                      Global Excellence
                    </h3>
                    <p className="text-gray-600">
                      We partner with elite international security experts to
                      bring world-class training standards to the Kingdom.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="bg-ssta-gold/10 p-3 rounded-full h-14 w-14 flex items-center justify-center mr-4 flex-shrink-0">
                    <Briefcase className="text-ssta-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-ssta-dark">
                      Industry Transformation
                    </h3>
                    <p className="text-gray-600">
                      We aim to elevate the entire security profession from
                      basic manpower provision to true security expertise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
