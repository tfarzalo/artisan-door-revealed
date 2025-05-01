
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="py-6 px-6 md:px-12 flex justify-between items-center">
      <div className="flex items-center">
        <img 
          src="/lovable-uploads/c3b81731-3372-46e3-937e-fffe2146a4ba.png" 
          alt="DSA Master Crafted Doors" 
          className="h-12 md:h-16"
        />
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a href="#collection" className="text-sm font-medium text-dsa-blue hover:text-dsa-orange transition-colors">
              Collection
            </a>
          </li>
          <li>
            <a href="#craftsmanship" className="text-sm font-medium text-dsa-blue hover:text-dsa-orange transition-colors">
              Craftsmanship
            </a>
          </li>
          <li>
            <a href="#contact" className="text-sm font-medium text-dsa-blue hover:text-dsa-orange transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
