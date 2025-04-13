
import React from "react";
import { Book, Calendar, Clock, User, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";
import CallToAction from "@/components/CallToAction";

const Courses = () => {
  return (
    <>
      {/* Hero Section with improved visibility */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-ssta-navy to-ssta-dark">
        <div className="container mx-auto px-4 relative z-10">
          <div className="hero-content-box">
            <h1 className="text-4xl md:text-5xl hero-headline animate-fade-in">
              Our Courses & Certifications
            </h1>
            <p className="hero-subtitle animate-fade-in opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              World-class training for Saudi security professionals
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Security Training Programs" 
            subtitle="SSTA offers comprehensive certification pathways across multiple security disciplines"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {courses.map((course, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="h-48 overflow-hidden image-placeholder flex items-center justify-center">
                  <p className="image-placeholder-text">{course.title}</p>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-ssta-gold/20 text-ssta-dark rounded-full mb-3">
                    {course.category}
                  </span>
                  <h3 className="text-xl font-bold mb-3 text-ssta-dark">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-5">
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      <span>{course.level}</span>
                    </div>
                    <div className="flex items-center">
                      <User size={16} className="mr-1" />
                      <span>Max: {course.maxStudents}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-ssta-navy hover:bg-ssta-dark">View Course Details</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CallToAction 
        title="Ready to Advance Your Security Career?"
        description="Enroll in one of our world-class certification programs today."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </>
  );
};

// Course data
const courses = [
  {
    title: "Certified Security Personnel (CSP)",
    category: "Security Training",
    description: "Foundational certification for all security professionals covering essentials in surveillance, communication and conflict management.",
    duration: "2 Weeks",
    level: "Foundation",
    maxStudents: 20
  },
  {
    title: "Crisis Management Specialist",
    category: "Security Training",
    description: "Advanced training for security professionals in emergency response, crisis communication and incident command.",
    duration: "1 Week",
    level: "Advanced",
    maxStudents: 16
  },
  {
    title: "First Aid & First Responder",
    category: "Security Training",
    description: "Essential medical response training for security personnel covering emergency first aid and basic life support.",
    duration: "4 Days",
    level: "Foundation",
    maxStudents: 15
  },
  {
    title: "Executive Protection Specialist",
    category: "VIP Protection",
    description: "Elite training for professionals responsible for the security of high-profile individuals and executives.",
    duration: "3 Weeks",
    level: "Advanced",
    maxStudents: 12
  },
  {
    title: "Event Security Manager",
    category: "Event Security",
    description: "Comprehensive training for professionals managing security operations at large-scale events and venues.",
    duration: "2 Weeks",
    level: "Intermediate",
    maxStudents: 18
  },
  {
    title: "Security Risk Assessor",
    category: "Consultancy & Leadership",
    description: "Advanced certification for security professionals looking to specialize in threat assessment and mitigation strategies.",
    duration: "1 Week",
    level: "Advanced",
    maxStudents: 14
  }
];

export default Courses;
