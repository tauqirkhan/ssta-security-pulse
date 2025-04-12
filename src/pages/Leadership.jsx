
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              Our Leadership Team
            </h1>
            <p className="text-xl text-gray-200 animate-fade-in opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
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
            subtitle="Our senior leadership team combines Saudi business acumen with international security expertise"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <TeamMemberCard
              name="Nawaf Y M Alqahtani"
              position="Chief Executive Officer"
              imageUrl="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              className="animate-fade-in"
            />
            <TeamMemberCard
              name="Sukh Gill"
              position="Strategic Director & Founder"
              imageUrl="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              className="animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            />
            <TeamMemberCard
              name="Mark Bramwell"
              position="Director of Training"
              imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              className="animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            />
          </div>
        </div>
      </section>

      {/* Senior Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Senior Leadership"
            subtitle="Our senior management team guides operations and ensures excellence in every training program"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <TeamMemberCard
              name="Samraj Padda"
              position="Senior Trainer & Quality Lead"
              imageUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
            />
            <TeamMemberCard
              name="Ibrahim Al-Otaibi"
              position="Head of Saudi Operations"
              imageUrl="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
            />
            <TeamMemberCard
              name="Sarah Al-Zaher"
              position="Director of Government Relations"
              imageUrl="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
            />
            <TeamMemberCard
              name="David Thompson"
              position="Lead Security Consultant"
              imageUrl="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
            />
            <TeamMemberCard
              name="Amina Jamal"
              position="Head of Training Development"
              imageUrl="https://images.unsplash.com/photo-1573497620812-8a6f1e324626?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
            />
            <TeamMemberCard
              name="Richard Clarke"
              position="International Operations Director"
              imageUrl="https://images.unsplash.com/photo-1508341591423-4347099e1f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Leadership Values"
            subtitle="How our management team approaches the mission of building Saudi security excellence"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-ssta-dark">Saudi-First Approach</h3>
              <p className="text-gray-700 mb-4">
                Our leadership is committed to prioritizing Saudi talent, Saudi businesses, and Saudi interests in all our operations. We believe in building local capacity first, while leveraging international expertise.
              </p>
              <p className="text-gray-700">
                This Saudi-first philosophy extends to our hiring, procurement, and strategic decisions, ensuring that we contribute meaningfully to Vision 2030's goals.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-ssta-dark">Excellence Without Compromise</h3>
              <p className="text-gray-700 mb-4">
                Our leaders maintain unwavering standards across all operations. We believe that building a world-class security workforce means never taking shortcuts or accepting "good enough."
              </p>
              <p className="text-gray-700">
                This commitment to excellence is reflected in our rigorous assessment methods, trainer selection process, and continuous improvement culture.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-ssta-dark">Cultural Intelligence</h3>
              <p className="text-gray-700 mb-4">
                Our diverse leadership team bridges Western security expertise with deep understanding of Saudi culture, traditions, and business practices.
              </p>
              <p className="text-gray-700">
                This cultural intelligence ensures that all training programs and operations are contextually appropriate and aligned with Saudi values while meeting international standards.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-ssta-dark">Continuous Learning</h3>
              <p className="text-gray-700 mb-4">
                Our leaders model the commitment to lifelong learning that we instill in our trainees. All leadership team members regularly update their qualifications and stay current with global security trends.
              </p>
              <p className="text-gray-700">
                This learning mindset allows us to continuously evolve our programs and approaches to meet the Kingdom's changing security needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction
        title="Join Our Team"
        description="We're always looking for talented security professionals to join our mission of building Saudi Arabia's security excellence."
        buttonText="View Careers"
        buttonLink="/contact"
      />
    </>
  );
};

export default Leadership;
