import React from "react";
import {
  ArrowRight,
  Award,
  Shield,
  Users,
  Building,
  Calendar,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";
import CourseCard from "@/components/CourseCard";
import TeamMemberCard from "@/components/TeamMemberCard";
import SectorCard from "@/components/SectorCard";
import CallToAction from "@/components/CallToAction";
// import PartnersSection from "@/components/PartnersSection";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-[url('/image.png')] px-4">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        {/* Content */}
        <div className="relative z-10 text-center max-w-3xl mx-auto space-y-6 px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white animate-fade-in">
            The New Standard in Saudi Security Training
          </h1>
          <p
            className="text-lg text-white/90 animate-fade-in opacity-0"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            World-class certifications. Saudi-first leadership. Built for Vision
            2030.
          </p>
          <p
            className="text-base text-white/80 animate-fade-in opacity-0"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            Empowering Saudi's security workforce through elite, internationally
            accredited training.
          </p>
          <div
            className="flex flex-wrap justify-center gap-4 animate-fade-in opacity-0"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            <Button
              asChild
              className="bg-ssta-gold hover:bg-ssta-gold-light text-ssta-dark font-bold px-6 py-3 rounded-lg"
            >
              <Link to="/courses">Explore Courses</Link>
            </Button>
            <Button
              asChild
              className="border border-white text-white hover:bg-white hover:text-black font-medium px-6 py-3 rounded-lg transition-colors group"
            >
              <Link to="/about" className="flex items-center gap-2">
                Learn More
                <ArrowRight
                  className="transition-transform group-hover:translate-x-1"
                  size={16}
                />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <SectionTitle
                title="About SSTA"
                subtitle="The Saudi Security Training Academy (SSTA) is not just a training provider — we are Saudi Arabia's new benchmark for security excellence."
                centered={false}
              />
              <p className="text-gray-700 mb-6">
                Fully Saudi-owned, strategically structured, and globally
                aligned, SSTA delivers the Kingdom's most advanced,
                internationally recognised training and certification programmes
                for the private security sector.
              </p>
              <p className="text-gray-700 mb-6">
                Led by a local Saudi CEO and backed by elite British security
                consultants with decades of global experience, we combine local
                legitimacy with international firepower.
              </p>
              <p className="text-gray-700 font-semibold mb-8">
                We don't supply manpower — we build leaders.
              </p>
              <Button
                asChild
                className="bg-ssta-navy hover:bg-ssta-dark text-white group"
              >
                <Link to="/about">
                  Learn More{" "}
                  <ArrowRight
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                    size={16}
                  />
                </Link>
              </Button>
            </div>
            <div className="relative animate-fade-in-right">
              <div className="rounded-lg shadow-lg w-full h-80 overflow-hidden relative bg-white">
                <img
                  src="/section_images/eliteCourses.png"
                  alt="Elite Courses"
                  className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 opacity-20 bg-pattern-grid"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-ssta-gold text-ssta-dark p-4 rounded shadow-lg">
                <p className="text-4xl font-bold">40+</p>
                <p className="font-medium">Elite Programs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Why Choose SSTA?"
            subtitle="Saudi Arabia is home to over 200,000 security guards — yet less than 20% have formal training or certification. The industry is dominated by manpower firms with little focus on development, structure, or standards."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in">
              <div className="bg-ssta-gold/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Shield className="text-ssta-gold w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-ssta-dark">
                100% Saudi Ownership
              </h3>
              <p className="text-gray-600">
                Strategic local leadership with a focus on Vision 2030
                alignment.
              </p>
            </div>

            <div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="bg-ssta-gold/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Award className="text-ssta-gold w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-ssta-dark">
                UK-Accredited Trainers
              </h3>
              <p className="text-gray-600">
                Elite consultants leading all training design and delivery.
              </p>
            </div>

            <div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="bg-ssta-gold/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <CheckCircle className="text-ssta-gold w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-ssta-dark">
                Global Certifications
              </h3>
              <p className="text-gray-600">
                40 globally benchmarked certifications across all security
                sectors.
              </p>
            </div>

            <div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="bg-ssta-gold/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Users className="text-ssta-gold w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-ssta-dark">
                Vision 2030 Aligned
              </h3>
              <p className="text-gray-600">
                Focused on Saudisation, localisation, and national security
                development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      {/* <PartnersSection /> */}

      {/* Courses Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Courses & Certifications"
            subtitle="We offer 40 certification pathways spanning across multiple security disciplines, all delivered by world-class trainers and validated to international standards."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <CourseCard
              title="Certified Security Personnel (CSP)"
              category="Security Training"
              imageUrl="/courses/csp.jpg"
              className="animate-fade-in"
            />
            <CourseCard
              title="Crisis Management Specialist"
              category="Security Training"
              imageUrl="/courses/cms.jpg"
              className="animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            />
            <CourseCard
              title="First Aid & First Responder"
              category="Security Training"
              imageUrl="/courses/far.jpg"
              className="animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            />
            <CourseCard
              title="Executive Protection Specialist"
              category="VIP Protection"
              imageUrl="/courses/eps.jpg"
              className="animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            />
            <CourseCard
              title="Event Security Manager"
              category="Event Security"
              imageUrl="/courses/esm.jpg"
              className="animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            />
            <CourseCard
              title="Security Risk Assessor"
              category="Consultancy & Leadership"
              imageUrl="/courses/sra.jpg"
              className="animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            />
          </div>

          <div className="mt-12 text-center">
            <Button
              asChild
              className="bg-ssta-navy hover:bg-ssta-dark text-white"
            >
              <Link to="/courses">View All Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Leadership Team"
            subtitle="Our team combines Saudi leadership with international security expertise to deliver unmatched training excellence."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-12">
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
              bio={` Sukh Gill is a globally-minded strategist and entrepreneur who has dedicated his expertise to supporting Saudi Arabia’s Vision 2030. With a background in launching innovative ventures across digital marketing, technology, and business consultancy, Sukh has evolved into a leader known for designing transformative frameworks that empower nations, industries, and people.

Born and raised in the UK, Sukh now lives in Riyadh, having fully committed himself to the Kingdom’s future. Inspired by Saudi Arabia’s rapid transformation and recognising critical gaps in workforce development, he founded the Saudi Security Training Academy (SSTA) to redefine security standards, and Shifa Future Health to lead a consortium of UK-trained doctors focused on advancing healthcare through upskilling Saudi talent.

Renowned for his ability to merge global expertise with national priorities, Sukh specialises in building purpose-driven ecosystems that drive sustainable growth across security, healthcare, and beyond. His work focuses on empowering Saudi talent, embedding international best practices, and ensuring every project aligns with the Kingdom’s long-term vision of excellence and sovereignty.

With a deep commitment to Saudi Arabia’s transformation, Sukh Gill represents a new class of leadership — blending entrepreneurial agility, cross-sector expertise, and an unwavering belief in the Kingdom’s potential to set global benchmarks across critical industries.`}
            />
            <TeamMemberCard
              name="Mark Bramwell"
              position="Director of Training & Principle Consultant"
              imageUrl="/leadership/mark.jpg"
              className="animate-fade-in"
              style={{ animationDelay: "0.3s" }}
              bio={`Mark Bramwell is highly accomplished and credentialed security professional, with over 25 years of experience across military intelligence, diplomatic security, national risk assurance, and enterprise-level training systems.

A former British Army Intelligence Officer, Mark served in sensitive global theatres including Iraq, Syria, and Afghanistan, where he advised senior Military and Government officials on Crisis Strategy, Intelligence Operations, and Physical Security Infrastructure. He held the role of Assistant Defence Attaché in Damascus, where he managed high-pressure emergency operations, and provided strategic MI analysis that shaped UK Government policy. Mark is speaks conversational Arabic, giving him rare operational edge in cross-cultural command, mentoring, and trust-building.

Following his military career, Mark transitioned into private sector leadership as Head of Operational Security at Mitie, the UK’s largest Security and FM providers. In this role, he has led physical risk assessments for critical infrastructure across the UK, developed nationwide SOP protocols, and advised multi-sector clients on regulatory compliance, threat mitigation, and business continuity.

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
              className="animate-fade-in"
              style={{ animationDelay: "0.4s" }}
              bio={`With over 20 years of frontline experience, Samraj Padda is a seasoned tactical operations expert known for leading high-stakes protection teams across the UK. From securing royalty and executives to managing live operations at Sky Studios, his leadership blends real-time precision with deep operational insight.

                  At SSTA, Samraj drives hands-on training and quality assurance across all certification programs. He leads live drills, high-pressure simulations, and trains Saudi instructors to perform with confidence under stress. A long-time collaborator with Mark Bramwell, he ensures every course delivers not just theory — but field-ready performance.

                  Samraj prepares teams for moments where failure is not an option.
              `}
            />
            <TeamMemberCard
              name="Tauqir Khan"
              position="Marketing Executive"
              imageUrl="/leadership/tauqir.jpg"
              className="animate-fade-in"
              style={{ animationDelay: "0.5s" }}
              bio={`Blending a unique combination of technical expertise and marketing acumen, Tauqir Khan brings over four years of coding experience alongside a solid background in sales and marketing. As Marketing Executive at SSTA, he leverages his analytical mindset and creative strategy to enhance brand visibility, drive engagement, and support the academy’s growth objectives in the security training industry.`}
            />
          </div>

          <div className="mt-12 text-center">
            <Button
              asChild
              className="bg-ssta-navy hover:bg-ssta-dark text-white"
            >
              <Link to="/leadership">Meet The Full Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sectors We Serve */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Sectors We Serve"
            subtitle="Our training programmes are built to elevate security personnel across every major pillar of the Kingdom's development."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <SectorCard
              title="Giga-Projects & Smart Cities"
              description="NEOM, The Line, Qiddiya, Diriyah Gate"
              icon={<Building size={32} />}
              className="animate-fade-in"
            />
            <SectorCard
              title="Event & Entertainment"
              description="Riyadh Season, FIFA 2034, concerts, festivals"
              icon={<Calendar size={32} />}
              className="animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            />
            <SectorCard
              title="Healthcare & Medical"
              description="Public & private hospitals, PHCs, emergency response"
              icon={<Award size={32} />}
              className="animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            />
            <SectorCard
              title="Commercial & Retail"
              description="Shopping malls, towers, business parks"
              icon={<Building size={32} />}
              className="animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            />
            <SectorCard
              title="Aviation & Transport"
              description="Airports, metros, logistics terminals"
              icon={<Building size={32} />}
              className="animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            />
            <SectorCard
              title="Government Entities"
              description="MOI, PIF-backed projects, Vision 2030 bodies"
              icon={<Shield size={32} />}
              className="animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            />
          </div>

          <div className="mt-12 text-center">
            <Button
              asChild
              className="bg-ssta-navy hover:bg-ssta-dark text-white"
            >
              <Link to="/sectors">View All Sectors</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction
        title="Partner With Us"
        description="Looking to deliver certified training across your organisation? Let's build the next generation of Saudi security excellence — together."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </>
  );
};

export default Home;
