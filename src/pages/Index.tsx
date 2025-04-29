
import React from "react";
import Header from "@/components/Header";
import DoorShowcase from "@/components/DoorShowcase";
import CraftsmanshipSection from "@/components/CraftsmanshipSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-luxury-bg text-luxury-text">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-12 md:py-20 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 space-y-6 animate-fade-in">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif">
                  Exquisite <span className="luxury-gradient">Custom Doors</span> for Discerning Homes
                </h1>
                <p className="text-lg text-luxury-text/70 max-w-md">
                  Discover our collection of handcrafted entry doors, where artistry meets engineering excellence.
                </p>
                <div className="pt-4">
                  <a 
                    href="#collection"
                    className="inline-flex items-center px-6 py-3 bg-luxury-text text-luxury-bg rounded hover:bg-luxury-accent transition-colors"
                  >
                    Explore Collection
                  </a>
                </div>
              </div>
              
              <div className="md:w-1/2 showcase-container animate-scale-in">
                <DoorShowcase />
              </div>
            </div>
          </div>
        </section>
        
        {/* Collection Section */}
        <section id="collection" className="py-16 px-6 md:px-12 bg-secondary">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif mb-3 text-center">
              Our <span className="luxury-gradient">Collection</span>
            </h2>
            <p className="text-center text-luxury-text/70 mb-12 max-w-2xl mx-auto">
              Hover over different areas of the door to discover the exceptional craftsmanship and attention to detail that defines an Artisan door.
            </p>
            
            <div className="flex justify-center">
              <div className="max-w-3xl w-full">
                <DoorShowcase />
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-sm text-luxury-text/70 max-w-md mx-auto mb-8">
                Each door is a unique masterpiece, tailored to your exact specifications and handcrafted by our master artisans.
              </p>
              <a 
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-luxury-text/20 rounded hover:bg-luxury-text hover:text-luxury-bg transition-colors"
              >
                Request Consultation
              </a>
            </div>
          </div>
        </section>
        
        {/* Craftsmanship Section */}
        <CraftsmanshipSection />
        
        {/* Contact Section */}
        <section id="contact" className="py-16 px-6 md:px-12 bg-secondary">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif mb-3 text-center">
              Begin Your <span className="luxury-gradient">Journey</span>
            </h2>
            <p className="text-center text-luxury-text/70 mb-12 max-w-2xl mx-auto">
              Contact our design consultants to start creating your bespoke door masterpiece.
            </p>
            
            <div className="bg-white bg-opacity-70 p-8 rounded-lg shadow-lg">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-luxury-text mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-luxury-text/20 rounded focus:outline-none focus:ring-1 focus:ring-luxury-accent"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-luxury-text mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-luxury-text/20 rounded focus:outline-none focus:ring-1 focus:ring-luxury-accent"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-luxury-text mb-2">
                    Message
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border border-luxury-text/20 rounded focus:outline-none focus:ring-1 focus:ring-luxury-accent h-32"
                    placeholder="Tell us about your project"
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-luxury-text text-luxury-bg rounded hover:bg-luxury-accent transition-colors"
                  >
                    Send Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
