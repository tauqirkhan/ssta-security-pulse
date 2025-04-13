
import React from "react";
import { ArrowRight, Award, Shield, Users, Building, Calendar, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";
import CourseCard from "@/components/CourseCard";
import TeamMemberCard from "@/components/TeamMemberCard";
import SectorCard from "@/components/SectorCard";
import CallToAction from "@/components/CallToAction";

const Home = () => {
  return (
    <>
      {/* Hero Section with improved visibility */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-content-box">
            <h1 className="text-4xl md:text-5xl lg:text-6xl hero-headline animate-fade-in">
              The New Standard in Saudi Security Training
            </h1>
            <p className="hero-subtitle animate-fade-in opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              World-class certifications. Saudi-first leadership. Built for Vision 2030.
            </p>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
              Empowering Saudi's security workforce through elite, internationally accredited training.
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-fade-in opacity-0" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
              <Button asChild className="bg-ssta-gold hover:bg-ssta-gold-light text-ssta-dark font-bold">
                <Link to="/courses">Explore Courses</Link>
              </Button>
              <Button asChild variant="learnMore">
                <Link to="/about" className="flex items-center gap-2">
                  Learn More <ArrowRight className="transition-transform group-hover:translate-x-1" size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <SectionTitle 
                title="About SSTA" 
                subtitle="The Saudi Security Training Academy (SSTA) is not just a training provider — we are Saudi Arabia's new benchmark for security excellence."
                centered={false}
              />
              <p className="text-gray-700 mb-6">
                Fully Saudi-owned, strategically structured, and globally aligned, SSTA delivers the Kingdom's most advanced, internationally recognised training and certification programmes for the private security sector.
              </p>
              <p className="text-gray-700 mb-6">
                Led by a local Saudi CEO and backed by elite British security consultants with decades of global experience, we combine local legitimacy with international firepower.
              </p>
              <p className="text-gray-700 font-semibold mb-8">
                We don't supply manpower — we build leaders.
              </p>
              <Button asChild className="bg-ssta-navy hover:bg-ssta-dark text-white group inline-flex items-center">
                <Link to="/about">
                  Learn More <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </Link>
              </Button>
            </div>
            <div className="relative animate-fade-in-right">
              <div className="rounded-lg shadow-lg w-full h-80 image-placeholder">
                <p className="image-placeholder-text">Professional Security Training</p>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-ssta-gold text-ssta-dark p-6 rounded shadow-lg">
                <p className="font-medium">Established</p>
                <p className="text-3xl font-bold">2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding">
        <div className="container">
          <SectionTitle 
            title="Why Choose SSTA?" 
            subtitle="Saudi Arabia is home to over 200,000 security guards — yet less than 20% have formal training or certification. The industry is dominated by manpower firms with little focus on development, structure, or standards."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in">
              <div className="bg-ssta-gold/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Shield className="text-ssta-gold w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-ssta-dark">100% Saudi Ownership</h3>
              <p className="text-gray-600">
                Strategic local leadership with a focus on Vision 2030 alignment.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="bg-ssta-gold/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Award className="text-ssta-gold w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-ssta-dark">UK-Accredited Trainers</h3>
              <p className="text-gray-600">
                Elite consultants leading all training design and delivery.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="bg-ssta-gold/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <CheckCircle className="text-ssta-gold w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-ssta-dark">Global Certifications</h3>
              <p className="text-gray-600">
                18 globally benchmarked certifications across all security sectors.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="bg-ssta-gold/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Users className="text-ssta-gold w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-ssta-dark">Vision 2030 Aligned</h3>
              <p className="text-gray-600">
                Focused on Saudisation, localisation, and national security development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <SectionTitle 
            title="Our Courses & Certifications" 
            subtitle="We offer 18 certification pathways spanning across multiple security disciplines, all delivered by world-class trainers and validated to international standards."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <CourseCard 
              title="Certified Security Personnel (CSP)" 
              category="Security Training" 
              className="animate-fade-in"
            />
            <CourseCard 
              title="Crisis Management Specialist" 
              category="Security Training" 
              className="animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            />
            <CourseCard 
              title="First Aid & First Responder" 
              category="Security Training" 
              className="animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            />
            <CourseCard 
              title="Executive Protection Specialist" 
              category="VIP Protection" 
              className="animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            />
            <CourseCard 
              title="Event Security Manager" 
              category="Event Security" 
              className="animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            />
            <CourseCard 
              title="Security Risk Assessor" 
              category="Consultancy & Leadership" 
              className="animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            />
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild className="bg-ssta-navy hover:bg-ssta-dark text-white">
              <Link to="/courses">View All Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="section-padding">
        <div className="container">
          <SectionTitle 
            title="Leadership Team" 
            subtitle="Our team combines Saudi leadership with international security expertise to deliver unmatched training excellence."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <TeamMemberCard 
              name="Nawaf Y M Alqahtani" 
              position="CEO (Saudi)" 
              imageUrl="https://placehold.co/400x500/gray/white?text=CEO"
              className="animate-fade-in"
            />
            <TeamMemberCard 
              name="Sukh Gill" 
              position="Strategic Director & Founder" 
              imageUrl="https://placehold.co/400x500/gray/white?text=Director"
              className="animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            />
            <TeamMemberCard 
              name="Mark Bramwell" 
              position="Director of Training" 
              imageUrl="https://placehold.co/400x500/gray/white?text=Training+Director"
              className="animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            />
            <TeamMemberCard 
              name="Samraj Padda" 
              position="Senior Trainer & Quality Lead" 
              imageUrl="https://placehold.co/400x500/gray/white?text=Senior+Trainer"
              className="animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            />
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild className="bg-ssta-navy hover:bg-ssta-dark text-white">
              <Link to="/leadership">Meet The Full Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sectors We Serve */}
      <section className="section-padding bg-gray-50">
        <div className="container">
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
            <Button asChild className="bg-ssta-navy hover:bg-ssta-dark text-white">
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
