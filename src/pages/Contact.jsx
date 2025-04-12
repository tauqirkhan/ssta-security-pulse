
import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-ssta-navy to-ssta-dark">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              Contact SSTA
            </h1>
            <p className="text-xl text-white font-medium animate-fade-in opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              Get in touch with our team today
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionTitle 
                title="Get in Touch" 
                subtitle="Have questions about our training programs? Contact us today."
                centered={false}
              />
              
              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <div className="bg-ssta-gold/10 p-3 rounded-full flex-shrink-0 mr-4">
                    <MapPin className="text-ssta-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-ssta-dark">Our Location</h3>
                    <p className="text-gray-600">
                      SSTA Headquarters, Riyadh Business District<br />
                      Riyadh, Saudi Arabia
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-ssta-gold/10 p-3 rounded-full flex-shrink-0 mr-4">
                    <Mail className="text-ssta-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-ssta-dark">Email Us</h3>
                    <p className="text-gray-600">
                      info@ssta-academy.com<br />
                      training@ssta-academy.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-ssta-gold/10 p-3 rounded-full flex-shrink-0 mr-4">
                    <Phone className="text-ssta-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-ssta-dark">Call Us</h3>
                    <p className="text-gray-600">
                      +966 12 345 6789<br />
                      +966 12 345 6780
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <img 
                  src="https://placehold.co/800x500/navy/white?text=SSTA+Office" 
                  alt="SSTA Office" 
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
            </div>
            
            <div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-6 text-ssta-dark">Send us a Message</h3>
                
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-ssta-gold focus:border-transparent" 
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-ssta-gold focus:border-transparent" 
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-ssta-gold focus:border-transparent" 
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-ssta-gold focus:border-transparent">
                      <option value="">Please select</option>
                      <option value="training">Training Inquiry</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="career">Career Information</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-ssta-gold focus:border-transparent" 
                      rows="5"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  <Button className="w-full bg-ssta-navy hover:bg-ssta-dark text-white">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Visit Us" 
            subtitle="Our training academy is conveniently located in Riyadh's business district"
          />
          
          <div className="mt-8 rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://placehold.co/1200x400/navy/white?text=Location+Map" 
              alt="SSTA Location Map" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
