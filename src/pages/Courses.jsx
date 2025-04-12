
import React from "react";
import SectionTitle from "@/components/SectionTitle";
import CourseCard from "@/components/CourseCard";
import CallToAction from "@/components/CallToAction";

const Courses = () => {
  const coursesList = [
    {
      title: "Certified Security Personnel (CSP)",
      category: "Security Training",
      description: "Foundation training for all security personnel covering basic security principles, threat assessment, and professional conduct.",
    },
    {
      title: "Crisis Management Specialist",
      category: "Security Training",
      description: "Advanced training for managing and responding to security emergencies and crisis situations.",
    },
    {
      title: "First Aid & First Responder",
      category: "Security Training",
      description: "Essential medical response training for security personnel to handle emergencies until medical professionals arrive.",
    },
    {
      title: "Executive Protection Specialist",
      category: "VIP Protection",
      description: "Specialized training for bodyguards and close protection officers securing high-profile individuals.",
    },
    {
      title: "Event Security Manager",
      category: "Event Security",
      description: "Comprehensive training for planning and managing security operations at large-scale events and venues.",
    },
    {
      title: "Security Risk Assessor",
      category: "Consultancy & Leadership",
      description: "Training for security professionals to identify, evaluate, and mitigate security risks across various environments.",
    },
    {
      title: "Surveillance & Monitoring Specialist",
      category: "Technical Security",
      description: "Training on modern surveillance techniques, equipment operation, and effective monitoring protocols.",
    },
    {
      title: "Hostile Environment Awareness Training",
      category: "Advanced Security",
      description: "Preparation for security personnel operating in high-risk or conflict environments.",
    },
    {
      title: "Cybersecurity for Physical Security",
      category: "Technical Security",
      description: "Essential digital security knowledge for modern security professionals managing integrated security systems.",
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-ssta-navy">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              Courses & Certifications
            </h1>
            <p className="text-xl text-gray-200 animate-fade-in opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              Internationally recognized security training for Saudi professionals
            </p>
          </div>
        </div>
      </section>

      {/* Courses Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Training Programs" 
            subtitle="We offer a comprehensive range of security training courses designed to meet the needs of Saudi security professionals and organizations."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {coursesList.map((course, index) => (
              <CourseCard 
                key={index}
                title={course.title} 
                category={course.category} 
                description={course.description}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Training Approach */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Training Approach" 
            subtitle="What makes SSTA training different from other providers"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <div>
              <img 
                src="/lovable-uploads/dd5280dc-15fa-4559-a86b-aee3022ae762.png" 
                alt="SSTA Training" 
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-ssta-dark">Practical Over Theoretical</h3>
                <p className="text-gray-700">
                  Our training emphasizes hands-on experience in realistic scenarios over classroom lectures, ensuring security personnel can apply their knowledge effectively in real-world situations.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-ssta-dark">UK-Saudi Expertise Blend</h3>
                <p className="text-gray-700">
                  We combine world-class British security methodologies with deep cultural understanding of Saudi contexts, creating a uniquely effective training approach.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-ssta-dark">Continuous Development Pathways</h3>
                <p className="text-gray-700">
                  Beyond one-off certifications, we design progressive learning journeys that allow security professionals to build increasingly specialized expertise over time.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-ssta-dark">Tailored for Saudi Priorities</h3>
                <p className="text-gray-700">
                  All training is specifically designed for the Kingdom's unique security landscape, Vision 2030 goals, and emerging challenges in our rapidly developing nation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Certification Process" 
            subtitle="How our training and certification process works"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-ssta-gold">
              <div className="w-16 h-16 bg-ssta-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-ssta-gold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-ssta-dark">Assessment</h3>
              <p className="text-gray-700">
                Initial skills assessment and needs analysis to determine the most appropriate training path.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-ssta-gold">
              <div className="w-16 h-16 bg-ssta-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-ssta-gold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-ssta-dark">Training</h3>
              <p className="text-gray-700">
                Hands-on, practical training delivered by experienced security professionals.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-ssta-gold">
              <div className="w-16 h-16 bg-ssta-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-ssta-gold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-ssta-dark">Evaluation</h3>
              <p className="text-gray-700">
                Rigorous assessment through practical scenarios, written examinations, and skills demonstrations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-ssta-gold">
              <div className="w-16 h-16 bg-ssta-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-ssta-gold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-ssta-dark">Certification</h3>
              <p className="text-gray-700">
                Internationally recognized certification upon successful completion of the training program.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction 
        title="Ready to Elevate Your Security Skills?"
        description="Contact us to discuss your training needs and start your journey toward internationally recognized security certification."
        buttonText="Enroll Now"
        buttonLink="/contact"
      />
    </>
  );
};

export default Courses;
