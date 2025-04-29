
import React from "react";

const CraftsmanshipSection: React.FC = () => {
  return (
    <section id="craftsmanship" className="py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif mb-3 text-center">
          Unparalleled <span className="luxury-gradient">Craftsmanship</span>
        </h2>
        <p className="text-center text-luxury-text/70 mb-16 max-w-2xl mx-auto">
          Every door is handcrafted by master artisans with decades of experience, using time-honored techniques and the finest materials.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-secondary p-8 rounded-lg transition-all hover:shadow-lg">
            <div className="w-12 h-12 mb-4 text-luxury-accent">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3L4 9V21H20V9L12 3Z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif mb-3">Premium Materials</h3>
            <p className="text-luxury-text/70 text-sm">
              We source the finest hardwoods and metals from sustainable suppliers around the world, ensuring each component meets our exacting standards.
            </p>
          </div>
          
          <div className="bg-secondary p-8 rounded-lg transition-all hover:shadow-lg">
            <div className="w-12 h-12 mb-4 text-luxury-accent">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <line x1="9" y1="21" x2="9" y2="9" />
              </svg>
            </div>
            <h3 className="text-xl font-serif mb-3">Master Craftsmanship</h3>
            <p className="text-luxury-text/70 text-sm">
              Our artisans train for over a decade to perfect their craft, combining traditional techniques with modern precision engineering.
            </p>
          </div>
          
          <div className="bg-secondary p-8 rounded-lg transition-all hover:shadow-lg">
            <div className="w-12 h-12 mb-4 text-luxury-accent">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <h3 className="text-xl font-serif mb-3">Bespoke Design</h3>
            <p className="text-luxury-text/70 text-sm">
              Each door is custom designed to your specifications, creating a truly unique entry point that reflects your personal style and complements your home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftsmanshipSection;
