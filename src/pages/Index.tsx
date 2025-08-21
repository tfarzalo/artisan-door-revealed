import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl mb-12 tracking-tight text-[#cb7524] font-semibold">DSA Doors</h1>
        
        <nav className="space-y-6">
          <Link 
            to="/standard-doors" 
            className="block text-2xl text-gray-800 hover:text-[#cb7524] transition-colors font-light"
          >
            Standard Entry Doors
          </Link>
          
          <Link 
            to="/builders-doors" 
            className="block text-2xl text-gray-800 hover:text-[#cb7524] transition-colors font-light"
          >
            Builder's Doors
          </Link>
          
          <Link 
            to="/custom-doors" 
            className="block text-2xl text-gray-800 hover:text-[#cb7524] transition-colors font-light"
          >
            Custom Doors
          </Link>
          
          <Link 
            to="/options-addons" 
            className="block text-2xl text-gray-800 hover:text-[#cb7524] transition-colors font-light"
          >
            Options & Addons
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Index;