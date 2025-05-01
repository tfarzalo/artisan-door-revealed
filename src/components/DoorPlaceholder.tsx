
import React from "react";

export const DoorPlaceholder: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-[80px] h-[160px] bg-gradient-to-r from-wood-dark via-wood to-wood-light rounded-t-lg overflow-hidden shadow-md">
        {/* Door handle */}
        <div className="absolute right-3 top-1/2 w-2 h-6 bg-[#B8860B] rounded-full"></div>
        
        {/* Door panels */}
        <div className="absolute top-2 left-2 right-2 bottom-2 border-2 border-wood-dark/30 rounded"></div>
        <div className="absolute top-4 left-4 right-4 bottom-4 border border-wood-dark/20 rounded"></div>
      </div>
    </div>
  );
};
