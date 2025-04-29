
import React, { useState } from "react";
import DoorShowcase from "@/components/DoorShowcase";
import { ChevronRight, ChevronLeft, Menu } from "lucide-react";

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-luxury-bg text-luxury-text overflow-hidden">
      {/* App-like header */}
      <header className="fixed top-0 left-0 right-0 z-40 px-4 py-3 bg-white bg-opacity-95 backdrop-blur-sm border-b border-luxury-text/10 flex justify-between items-center">
        <div className="flex items-center">
          <button 
            className="p-2 hover:bg-luxury-text/5 rounded-full transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu className="w-5 h-5 text-luxury-text/80" />
          </button>
          <h1 className="text-lg font-serif ml-4">Artisan Doors</h1>
        </div>
        <div className="flex items-center space-x-1">
          <button className="p-2 hover:bg-luxury-text/5 rounded-full transition-colors">
            <ChevronLeft className="w-5 h-5 text-luxury-text/80" />
          </button>
          <span className="text-sm">1/5</span>
          <button className="p-2 hover:bg-luxury-text/5 rounded-full transition-colors">
            <ChevronRight className="w-5 h-5 text-luxury-text/80" />
          </button>
        </div>
      </header>
      
      {/* Side menu */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-5">
          <h2 className="text-xl font-serif mb-6">Collection</h2>
          <ul className="space-y-4">
            <li className="border-b border-luxury-text/10 pb-3">
              <a href="#" className="text-luxury-text hover:text-luxury-accent transition-colors">Classic Mahogany</a>
            </li>
            <li className="border-b border-luxury-text/10 pb-3">
              <a href="#" className="text-luxury-text hover:text-luxury-accent transition-colors">Modern Walnut</a>
            </li>
            <li className="border-b border-luxury-text/10 pb-3">
              <a href="#" className="text-luxury-text hover:text-luxury-accent transition-colors">Carved Oak</a>
            </li>
            <li className="border-b border-luxury-text/10 pb-3">
              <a href="#" className="text-luxury-text hover:text-luxury-accent transition-colors">Custom Design</a>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Overlay when menu is open */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
      
      <main className="pt-16 pb-8 px-5">
        {/* Magazine-style layout */}
        <div className="max-w-4xl mx-auto">
          {/* Feature title */}
          <div className="mb-8 mt-4">
            <div className="text-luxury-accent text-sm font-medium tracking-wider uppercase mb-2">Featured Design</div>
            <h2 className="text-3xl md:text-4xl font-serif">The Sovereign Collection</h2>
            <p className="text-luxury-text/70 mt-2 max-w-md">
              Handcrafted perfection, where timeless elegance meets uncompromising quality
            </p>
          </div>
          
          {/* Image and interactive showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <p className="text-sm text-luxury-text/80 mb-6 leading-relaxed">
                Hover over different areas of the door to discover the exceptional craftsmanship 
                and attention to detail that defines an Artisan door. Each element is 
                meticulously crafted using time-honored techniques and premium materials.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-luxury-accent mr-3"></div>
                  <span className="text-sm">Premium Hardwoods</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-luxury-accent mr-3"></div>
                  <span className="text-sm">Hand-forged Hardware</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-luxury-accent mr-3"></div>
                  <span className="text-sm">Proprietary Finish</span>
                </div>
              </div>
              
              <p className="text-xs text-luxury-text/60 italic border-l-2 border-luxury-accent pl-3">
                "Our craftsmen train for over five years before they're entrusted with creating 
                doors for our Sovereign Collection."
              </p>
            </div>
            
            <div className="showcase-container order-1 md:order-2">
              <DoorShowcase />
            </div>
          </div>
        </div>
      </main>
      
      {/* App-like bottom navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-luxury-text/10 px-5 py-2 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button className="text-xs text-luxury-text opacity-70 hover:opacity-100 flex flex-col items-center gap-1">
            <span className="block h-1 w-8 bg-luxury-accent"></span>
            Details
          </button>
          <button className="text-xs text-luxury-text opacity-70 hover:opacity-100 flex flex-col items-center gap-1">
            <span className="block h-1 w-8 bg-transparent"></span>
            Gallery
          </button>
          <button className="text-xs text-luxury-text opacity-70 hover:opacity-100 flex flex-col items-center gap-1">
            <span className="block h-1 w-8 bg-transparent"></span>
            Specs
          </button>
        </div>
        <button className="text-xs px-3 py-2 bg-luxury-text text-white rounded">
          Request Info
        </button>
      </div>
    </div>
  );
};

export default Index;
