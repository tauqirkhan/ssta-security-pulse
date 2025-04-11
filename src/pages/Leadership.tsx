
import SectionTitle from "@/components/SectionTitle";
import { Linkedin } from "lucide-react";
import CallToAction from "@/components/CallToAction";

const Leadership = () => {
  const leadershipTeam = [
    {
      name: "Nawaf Y M Alqahtani",
      position: "CEO (Saudi)",
      imageUrl: "/lovable-uploads/bb5a7104-ae03-483a-b8c7-f84430f68d6d.png",
      bio: "A proud Saudi entrepreneur and the empowered public face of SSTA. Nawaf brings a purpose-driven mission to uplift the Kingdom's security sector and ensure Saudi security guards are trained and recognised to global standards and become the face of our kingdom's superior security forces. His vision is rooted in national service — preparing Saudi personnel for global-scale events like FIFA 2034 and beyond. He leads all regulatory engagement, market access, and Saudisation initiatives."
    },
    {
      name: "Sukh Gill",
      position: "Strategic Director & Founder",
      imageUrl: "/lovable-uploads/bb5a7104-ae03-483a-b8c7-f84430f68d6d.png",
      bio: "The driving visionary behind SSTA, Sukh relocated from London to Riyadh with one purpose — to build Saudi Arabia's most credible and elite security training institution. He leverages deep UK networks, investor alignment, and operational leadership to orchestrate every layer of the company's roadmap while empowering Nawaf as the Kingdom's local anchor."
    },
    {
      name: "Mark Bramwell",
      position: "Director of Training",
      imageUrl: "/lovable-uploads/bb5a7104-ae03-483a-b8c7-f84430f68d6d.png",
      bio: "One of the most elite security minds in the UK. With over 20 years in military intelligence, corporate security, and executive protection, Mark has designed and delivered complex training programmes for some of the world's most high-risk environments. He is currently Head of Hard Services at Sky Studios — one of Europe's most advanced media campuses — and has trained hundreds of high-performance operatives. Fluent in Arabic, Mark fuses Western discipline with local cultural intelligence, making him a strategic asset for the Kingdom's future."
    },
    {
      name: "Samraj Padda",
      position: "Senior Trainer & Quality Lead",
      imageUrl: "/lovable-uploads/bb5a7104-ae03-483a-b8c7-f84430f68d6d.png",
      bio: "A master tactician and frontline operations leader. With 20+ years of elite experience, Samraj worked directly under Mark at Sky Studios and was instrumental in overseeing tactical security operations for high-risk zones and corporate sites. He brings boots-on-the-ground experience to every course, ensuring that trainees are not only certified — but crisis-ready. His leadership in executing live training across medical, crowd control, and VIP security operations ensures SSTA delivers nothing short of excellence."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-ssta-navy">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              Leadership Team
            </h1>
            <p className="text-xl text-gray-200 animate-fade-in opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              Saudi leadership backed by international security expertise
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Meet Our Leadership Team" 
            subtitle="The team behind Saudi Arabia's premier security training academy"
          />
          
          <div className="mt-16">
            {leadershipTeam.map((leader, index) => (
              <div 
                key={index} 
                className={`flex flex-col lg:flex-row gap-8 mb-20 items-center ${
                  index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:w-1/3">
                  <div className="relative rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src={leader.imageUrl} 
                      alt={leader.name} 
                      className="w-full aspect-[3/4] object-cover"
                    />
                  </div>
                </div>
                
                <div className="lg:w-2/3">
                  <h3 className="text-3xl font-bold mb-2 text-ssta-dark">{leader.name}</h3>
                  <p className="text-xl text-ssta-gold font-medium mb-6">{leader.position}</p>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">{leader.bio}</p>
                  <a href="#" className="inline-flex items-center text-ssta-navy hover:text-ssta-gold transition-colors">
                    <Linkedin className="mr-2" size={20} />
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Leadership Values" 
            subtitle="The principles that guide our leadership team"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-ssta-gold">
              <h3 className="text-xl font-bold mb-4 text-ssta-dark">Saudi-First Leadership</h3>
              <p className="text-gray-700">
                We are committed to empowering Saudi nationals to lead the security industry, ensuring that our training aligns with the Kingdom's cultural values and strategic priorities.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-ssta-gold">
              <h3 className="text-xl font-bold mb-4 text-ssta-dark">Global Excellence</h3>
              <p className="text-gray-700">
                We bring world-class security expertise to the Kingdom, combining international best practices with local knowledge to deliver training that meets the highest global standards.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-ssta-gold">
              <h3 className="text-xl font-bold mb-4 text-ssta-dark">Vision 2030 Alignment</h3>
              <p className="text-gray-700">
                Our leadership team is deeply committed to supporting the Kingdom's Vision 2030 goals, particularly in terms of Saudisation, capability development, and economic diversification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Quote */}
      <section className="py-16 bg-ssta-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="text-2xl md:text-3xl italic font-light max-w-4xl mx-auto mb-8">
            "We don't train guards — we develop professionals. Our mission is to raise the standard, raise the reputation, and raise the next generation of Saudi security leaders."
          </blockquote>
          <p className="text-xl font-bold text-ssta-gold">— Nawaf Y M Alqahtani, CEO</p>
        </div>
      </section>

      {/* Team Photo */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <img 
              src="/lovable-uploads/bb5a7104-ae03-483a-b8c7-f84430f68d6d.png" 
              alt="SSTA Leadership Team" 
              className="w-full h-[400px] object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ssta-dark/80 to-transparent/30 flex items-end">
              <div className="p-8">
                <h3 className="text-3xl font-bold text-white mb-2">Leadership That Delivers</h3>
                <p className="text-white/90 max-w-2xl">
                  Our diverse leadership team combines Saudi vision with international security expertise to create a truly world-class security training academy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction 
        title="Work With Our Expert Team"
        description="Contact us to discuss how our leadership team can help elevate your organization's security capabilities."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </>
  );
};

export default Leadership;
