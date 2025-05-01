
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 md:px-12 bg-gray-50 border-t border-luxury-text/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-serif mb-4">
              <span className="luxury-gradient">Artisan</span> Doors
            </h4>
            <p className="text-sm text-luxury-text/70 max-w-xs">
              Crafting bespoke doors for discerning clients worldwide since 1978. Each door is a masterpiece of artisanship and engineering.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-serif mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-luxury-text/70">
              <li>123 Craftsman Way</li>
              <li>Luxury Heights, CA 90210</li>
              <li>info@artisandoors.com</li>
              <li>+1 (800) ARTISAN</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-serif mb-4">Learn More</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-luxury-text/70 hover:text-luxury-accent transition-colors">
                  Design Process
                </a>
              </li>
              <li>
                <a href="#" className="text-luxury-text/70 hover:text-luxury-accent transition-colors">
                  Materials
                </a>
              </li>
              <li>
                <a href="#" className="text-luxury-text/70 hover:text-luxury-accent transition-colors">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="text-luxury-text/70 hover:text-luxury-accent transition-colors">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-luxury-text/10 text-center text-xs text-luxury-text/50">
          © {new Date().getFullYear()} Artisan Doors. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
