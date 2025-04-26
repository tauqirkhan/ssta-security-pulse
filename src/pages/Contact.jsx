import React from "react";
import { Mail, MapPin, Phone, CheckCircle } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh
    setIsSubmitting(true);

    try {
      await fetch("https://formspree.io/f/meogjkal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setIsSubmitted(true);
      toast({
        title: "Message Sent",
        description:
          "Thank you for contacting SSTA. We will get back to you shortly.",
        variant: "default",
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Unable to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section with improved visibility */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-ssta-navy to-ssta-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold animate-fade-in">
            Contact SSTA
          </h1>
          <p
            className="mt-4 text-lg md:text-xl text-white/90 animate-fade-in opacity-0"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            Get in touch with our team today
          </p>
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
                    <h3 className="text-lg font-bold mb-1 text-ssta-dark">
                      Our Location
                    </h3>
                    <p className="text-gray-600"> Riyadh, Saudi Arabia</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-ssta-gold/10 p-3 rounded-full flex-shrink-0 mr-4">
                    <Mail className="text-ssta-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-ssta-dark">
                      Email Us
                    </h3>
                    <p className="text-gray-600">enquiry.ssta@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-ssta-gold/10 p-3 rounded-full flex-shrink-0 mr-4">
                    <Phone className="text-ssta-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-ssta-dark">
                      Call Us
                    </h3>
                    <p className="text-gray-600">+966 50 575 3717</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <div className="rounded-lg shadow-md w-full h-60 overflow-hidden">
                  <img
                    src="/section_images/office.jpg"
                    alt="SSTA Office Location"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <div className="bg-green-100 p-3 rounded-full mb-6">
                    <CheckCircle className="text-green-600 w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-ssta-dark">
                    Message Received!
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Thank you for contacting SSTA. Our team will review your
                    inquiry and get back to you shortly.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-ssta-navy hover:bg-ssta-dark text-white"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className="text-2xl font-bold mb-6 text-ssta-dark">
                    Send Us a Message
                  </h3>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          autocomplete="off"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ssta-gold"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="organization"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          Organization
                        </label>
                        <input
                          type="text"
                          id="organization"
                          name="organization"
                          value={formData.organization}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ssta-gold"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ssta-gold"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          autocomplete="off"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ssta-gold"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ssta-gold"
                      ></textarea>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-ssta-gold hover:bg-ssta-gold-light text-ssta-dark font-bold py-3"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              )}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* SSTA Office Location */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-ssta-dark mb-4">
                SSTA Office Location
              </h3>
              <div className="prose text-gray-600">
                <p className="mb-2">Riyadh, Kingdom of Saudi Arabia</p>
              </div>
            </div>

            {/* Location Map */}
            <div className="bg-white rounded-lg shadow-md p-6 h-full">
              <h3 className="text-xl font-bold text-ssta-dark mb-4">
                Location Map
              </h3>
              <div className="w-full h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.291244581539!2d46.7134375!3d24.7135831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1709901234567!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
