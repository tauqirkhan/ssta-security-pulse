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
              bio={`A seasoned entrepreneur and visionary leader, Sukh Gill brings a wealth of experience to SSTA as CEO. Having previously founded innovative ventures such as Instacharge, Priceless, and Looping AI, he brings a strong track record in technology, strategic growth, and business leadership. At SSTA, Sukh leads with a forward-thinking approach, driving the academy’s mission to deliver world-class security training solutions across Saudi Arabia and beyond.`}
            />
            <TeamMemberCard
              name="Nawaf Y M Alqahtani "
              position="Sales Director"
              imageUrl="/leadership/nawaf.jpg"
              bio={`With a strong background in sales, marketing, and business development, Nawaf Alqahtani brings strategic insight and leadership to SSTA’s growth initiatives. As Sales Director, he leads client acquisition efforts, drives partnerships, and ensures our training solutions reach the right audiences across the Kingdom. Nawaf's experience and dedication play a key role in expanding SSTA’s impact in the security training sector.`}
            />
            <TeamMemberCard
              name="Mark Bramwell"
              position="Director of Training"
              imageUrl="/leadership/mark.jpg"
              bio={`Mark Bramwell is one of the UK’s most accomplished security professionals, with over 25 years of experience in military intelligence, diplomatic security, and enterprise training. A former British Army Intelligence Officer, he served in key global regions including Iraq, Syria, and Cyprus, advising senior leaders on crisis strategy and physical security. Fluent in Arabic, Mark brings a rare cross-cultural edge to leadership and training.

                In the private sector, he led Operational Security at Mitie, overseeing critical infrastructure risk assessments and developing nationwide security protocols. As a certified training architect, he has designed national “Train-the-Trainer” programs for over 3,000 personnel, covering areas such as intelligence, executive protection, crisis response, and immersive simulations.

                At SSTA, Mark leads the development and execution of the Kingdom’s national training standards, ensuring every course meets international benchmarks while building a strong, Saudi-first security workforce.

                Mark doesn’t just teach—he builds systems that empower those who lead.
              `}
            />
            <TeamMemberCard
              name="Samraj Padda"
              position="Senior Trainer & Quality Lead"
              imageUrl="/leadership/samraj.jpg"
              bio={`With over 20 years of frontline experience, Samraj Padda is a seasoned tactical operations expert known for leading high-stakes protection teams across the UK. From securing royalty and executives to managing live operations at Sky Studios, his leadership blends real-time precision with deep operational insight.

                At SSTA, Samraj drives hands-on training and quality assurance across all certification programs. He leads live drills, high-pressure simulations, and trains Saudi instructors to perform with confidence under stress. A long-time collaborator with Mark Bramwell, he ensures every course delivers not just theory — but field-ready performance.

                Samraj prepares teams for moments where failure is not an option.
            `}
            />
            <TeamMemberCard
              name="Tauqir Khan"
              position="Marketing Executive"
              imageUrl="/leadership/tauqir.jpg"
              bio={`Blending a unique combination of technical expertise and marketing acumen, Tauqir Khan brings over four years of coding experience alongside a solid background in sales and marketing. As Marketing Executive at SSTA, he leverages his analytical mindset and creative strategy to enhance brand visibility, drive engagement, and support the academy’s growth objectives in the security training industry.`}
            />
          </div>
        </div>
      </section>

      {/* Leadership Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="rounded-lg shadow-lg w-full h-80 overflow-hidden">
                <img
                  src="/section_images/leadershipVision.jpg"
                  alt="Leadership Meeting"
                  className="w-full h-full object-cover object-center"
                />
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
