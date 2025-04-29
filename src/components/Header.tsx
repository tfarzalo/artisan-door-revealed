
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="py-6 px-6 md:px-12 flex justify-between items-center">
      <div className="flex items-center">
        <span className="text-xl sm:text-2xl font-serif font-medium tracking-tight text-luxury-text">
          <span className="luxury-gradient">Artisan</span> Doors
        </span>
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a href="#collection" className="text-sm font-medium text-luxury-text/80 hover:text-luxury-accent transition-colors">
              Collection
            </a>
          </li>
          <li>
            <a href="#craftsmanship" className="text-sm font-medium text-luxury-text/80 hover:text-luxury-accent transition-colors">
              Craftsmanship
            </a>
          </li>
          <li>
            <a href="#contact" className="text-sm font-medium text-luxury-text/80 hover:text-luxury-accent transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
