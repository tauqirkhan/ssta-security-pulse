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
              name="Nawaf Y M Alqahtani "
              position="CEO"
              imageUrl="/leadership/nawaf.jpg"
              bio={`Nawaf Alqahtani is a Saudi visionary committed to transforming the Kingdom’s private security sector into a symbol of national pride, discipline, and global excellence. Recognising the critical gaps in training, standards, and professional development across the industry, Nawaf has dedicated himself to embedding a new benchmark through the Saudi Security Training Academy (SSTA).
            
            With a background in sales, marketing, and business development, Nawaf brings a deep understanding of how to drive growth, build partnerships, and mobilise the Kingdom’s leading security firms towards a unified goal — elevating every security professional to meet the demands of a rapidly changing Saudi Arabia.
            
            His leadership at SSTA is more than operational; it is personal. In an era where giga-projects, mega-events, and global attention place unprecedented pressure on frontline security, Nawaf champions the belief that true national security begins with those on the ground. Under his guidance, SSTA works alongside the Kingdom’s top security firms to establish a nationally recognised standard — one that aligns with Vision 2030 and aspires to set regulatory frameworks for the future.
            
            Nawaf leads with a clear mission: to ensure that every guard, every team, and every organisation reflects the Kingdom’s strength, readiness, and commitment to excellence on the world stage.`}
            />
            <TeamMemberCard
              name="Sukh Gill"
              position="Founder & Strategic Director"
              imageUrl="/leadership/sukh.jpg"
              bio={`Sukh Gill is a globally-minded strategist and entrepreneur who has dedicated his expertise to supporting Saudi Arabia’s Vision 2030. With a background in launching innovative ventures across digital marketing, technology, and business consultancy, Sukh has evolved into a leader known for designing transformative frameworks that empower nations, industries, and people.
            
            Born and raised in the UK, Sukh now lives in Riyadh, having fully committed himself to the Kingdom’s future. Inspired by Saudi Arabia’s rapid transformation and recognising critical gaps in workforce development, he founded the Saudi Security Training Academy (SSTA) to redefine security standards and Shifa Future Health to lead a consortium of UK-trained doctors focused on advancing healthcare through upskilling Saudi talent.
            
            Renowned for his ability to merge global expertise with national priorities, Sukh specialises in building purpose-driven ecosystems that drive sustainable growth across security, healthcare, and beyond. His work focuses on empowering Saudi talent, embedding international best practices, and ensuring every project aligns with the Kingdom’s long-term vision of excellence and sovereignty.
            
            With a deep commitment to Saudi Arabia’s transformation, Sukh Gill represents a new class of leadership — blending entrepreneurial agility, cross-sector expertise, and an unwavering belief in the Kingdom’s potential to set global benchmarks across critical industries.`}
            />
            <TeamMemberCard
              name="Mark Bramwell"
              position="Director of Training & Principle Consultant"
              imageUrl="/leadership/mark.jpg"
              className="animate-fade-in"
              style={{ animationDelay: "0.3s" }}
              bio={`Mark Bramwell is a highly accomplished and credentialed security professional, with over 25 years of experience across military intelligence, diplomatic security, national risk assurance, and enterprise-level training systems.
            
            A former British Army Intelligence Officer, Mark served in sensitive global theatres including Iraq, Syria, and Afghanistan, where he advised senior Military and Government officials on Crisis Strategy, Intelligence Operations, and Physical Security Infrastructure. He held the role of Assistant Defence Attaché in Damascus, where he managed high-pressure emergency operations, and provided strategic MI analysis that shaped UK Government policy. Mark speaks conversational Arabic, giving him rare operational edge in cross-cultural command, mentoring, and trust-building.
            
            Following his military career, Mark transitioned into leadership in the private sector leadership as Head of Operational Security at Mitie, the UK’s largest Security and FM provider. In this role, he has led physical risk assessments for critical infrastructure across the UK, developed nationwide SOP protocols, and advised multi-sector clients on regulatory compliance, threat mitigation, and business continuity.
            
            Mark is also a certified enterprise training designer, having built and deployed national “Train-the-Trainer” ecosystems for over 3,000 personnel. His civilian and military training programs have covered:
            
            • Combat & HUMINT
            
            • VIP and Executive protection
            
            • Crisis response and evacuation drills
            
            • Risk auditing and predictive analysis
            
            • Simulation design and immersive scenario leadership
            
            
            He holds UK and International certifications in the field:
            
            • Level 6 (BA Hons) – Certified Security Management Professional
            • M.ISMI – Member of the International Security Management Institute
            • MSyI – Member of the UK Security Institute
            • M.ISRM – Member of the Institute of Strategic Risk Management
            
            Training Qualifications
            
            • Level 3 - Education & Training - Training qualification for the adult education and skills sector
            • NUCO - First Aid Instructor
            • NUCO - Health & Safety Instructor
            • Defence Train The Trainer
            • Defence Systems Approach to Training (DSAT) - Manager
            • DSAT - Training Needs Analysis
            • Defence Training Supervisor
            • Defence Training Manager
            
            
            As SSTA’s Director of Training, Mark is responsible for:
            
            • Designing and validating the 40-course certification framework
            
            • Overseeing simulation-based assessments across national academies
            
            • Training SAFE’s elite Saudi cohort to become sector-specific master instructors
            
            • Ensuring all certification aligns with global benchmarks while empowering a Saudi-first workforce
            
            Mark does not teach guards. He builds sovereign systems to certify those who lead them.
            
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
                  src="/section_images/leadershipVision.png"
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
