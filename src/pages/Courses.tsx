
import { Book, Award, Shield, Users, Briefcase, FileCheck } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import CallToAction from "@/components/CallToAction";

const Courses = () => {
  const courseCategories = [
    {
      title: "Security Training Certifications",
      icon: <Shield className="text-ssta-gold w-8 h-8" />,
      courses: [
        "Certified Security Personnel (CSP)",
        "Crisis Management & Emergency Response Specialist",
        "First Aid & First Responder",
        "Incident Control Officer",
        "Control Room Operator"
      ]
    },
    {
      title: "Business Continuity & Risk Management",
      icon: <Briefcase className="text-ssta-gold w-8 h-8" />,
      courses: [
        "Certified Business Continuity Professional (CBCP)",
        "Incident Response Specialist"
      ]
    },
    {
      title: "VIP Protection",
      icon: <Users className="text-ssta-gold w-8 h-8" />,
      courses: [
        "Executive Protection Specialist"
      ]
    },
    {
      title: "Event Security",
      icon: <FileCheck className="text-ssta-gold w-8 h-8" />,
      courses: [
        "Event Security Manager",
        "Surveillance & Monitoring Specialist"
      ]
    },
    {
      title: "Manned Guarding",
      icon: <Shield className="text-ssta-gold w-8 h-8" />,
      courses: [
        "Security Guard Professional (CSGP)",
        "Remote Security Monitoring Specialist"
      ]
    },
    {
      title: "Consultancy & Leadership",
      icon: <Award className="text-ssta-gold w-8 h-8" />,
      courses: [
        "Security Risk Assessor",
        "Perimeter Protection & Systems Specialist",
        "Security Policy & Crisis Advisor",
        "Advanced Security Leadership"
      ]
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
              18 elite certification pathways delivered by world-class trainers
            </p>
          </div>
        </div>
      </section>

      {/* Certification Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Certification Pathways" 
            subtitle="All certifications are delivered by world-class trainers, validated to international standards, and fully auditable by client stakeholders."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-ssta-gold/10 p-3 rounded-full">
                  <Award className="text-ssta-gold w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold ml-4 text-ssta-dark">Global Standards</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Our certifications are benchmarked against international security standards, ensuring your team receives globally recognized qualifications.
              </p>
              <p className="text-gray-700">
                Each course is meticulously designed to balance theoretical knowledge with practical skills that can be immediately applied in real-world scenarios.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-ssta-gold/10 p-3 rounded-full">
                  <Book className="text-ssta-gold w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold ml-4 text-ssta-dark">Expert Delivery</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Courses are delivered by elite trainers with decades of real-world experience in high-risk security environments across the UK and globally.
              </p>
              <p className="text-gray-700">
                Our trainers bring a unique blend of Western security discipline with deep understanding of Saudi cultural contexts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our 18 Certification Pathways" 
            subtitle="Explore our comprehensive range of security training courses"
          />
          
          <div className="mt-12 space-y-10">
            {courseCategories.map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center mb-6">
                  {category.icon}
                  <h3 className="text-2xl font-bold ml-4 text-ssta-dark">{category.title}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.courses.map((course, courseIndex) => (
                    <div key={courseIndex} className="flex items-start">
                      <div className="bg-ssta-gold/10 p-1 rounded-full mr-3 mt-1">
                        <div className="w-2 h-2 bg-ssta-gold rounded-full"></div>
                      </div>
                      <p className="text-gray-700">{course}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Training Process" 
            subtitle="How we deliver excellence in security training"
          />
          
          <div className="max-w-4xl mx-auto mt-12">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-ssta-gold"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                <div className="relative pl-16">
                  <div className="absolute left-0 top-0 bg-ssta-gold w-8 h-8 rounded-full flex items-center justify-center">
                    <span className="text-ssta-dark font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-ssta-dark">Assessment</h3>
                  <p className="text-gray-700">
                    We begin with a comprehensive needs assessment to understand your organization's specific security requirements and challenges.
                  </p>
                </div>
                
                <div className="relative pl-16">
                  <div className="absolute left-0 top-0 bg-ssta-gold w-8 h-8 rounded-full flex items-center justify-center">
                    <span className="text-ssta-dark font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-ssta-dark">Customization</h3>
                  <p className="text-gray-700">
                    Our expert trainers tailor the curriculum to address your specific needs while ensuring alignment with international standards.
                  </p>
                </div>
                
                <div className="relative pl-16">
                  <div className="absolute left-0 top-0 bg-ssta-gold w-8 h-8 rounded-full flex items-center justify-center">
                    <span className="text-ssta-dark font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-ssta-dark">Delivery</h3>
                  <p className="text-gray-700">
                    Training is delivered through a blend of classroom instruction, practical exercises, and real-world scenarios to ensure comprehensive skill development.
                  </p>
                </div>
                
                <div className="relative pl-16">
                  <div className="absolute left-0 top-0 bg-ssta-gold w-8 h-8 rounded-full flex items-center justify-center">
                    <span className="text-ssta-dark font-bold">4</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-ssta-dark">Certification</h3>
                  <p className="text-gray-700">
                    Participants who successfully complete the training receive internationally recognized certifications validating their skills and knowledge.
                  </p>
                </div>
                
                <div className="relative pl-16">
                  <div className="absolute left-0 top-0 bg-ssta-gold w-8 h-8 rounded-full flex items-center justify-center">
                    <span className="text-ssta-dark font-bold">5</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-ssta-dark">Follow-up & Continuous Development</h3>
                  <p className="text-gray-700">
                    We provide ongoing support and refresher courses to ensure your security personnel maintain and continue to develop their skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Image */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <img 
              src="/lovable-uploads/464b4a6f-ff79-46cd-8256-a3972ca69f96.png" 
              alt="SSTA Training Session" 
              className="w-full h-[400px] object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ssta-dark/70 to-transparent flex items-end">
              <div className="p-8">
                <h3 className="text-3xl font-bold text-white mb-2">World-Class Training</h3>
                <p className="text-white/90 max-w-2xl">
                  Our courses combine theoretical knowledge with practical application in realistic scenarios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction 
        title="Elevate Your Security Team's Capabilities"
        description="Schedule a consultation to discuss your organization's specific training needs."
        buttonText="Request Information"
        buttonLink="/contact"
      />
    </>
  );
};

export default Courses;
