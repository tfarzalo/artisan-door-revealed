
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import DoorHotspot from "./DoorHotspot";

// Define the hotspot data
interface Hotspot {
  id: string;
  x: number;
  y: number;
  title: string;
  description: string;
}

const doorHotspots: Hotspot[] = [
  {
    id: "handle",
    x: 75,
    y: 50,
    title: "Custom Handle",
    description: "Hand-forged brass handle with antique finish. Each handle is crafted by master artisans and features our signature oak leaf motif."
  },
  {
    id: "wood",
    x: 40, 
    y: 40,
    title: "Premium Hardwood",
    description: "Sustainably sourced mahogany with a 12-step finishing process that enhances the natural wood grain while providing superior protection."
  },
  {
    id: "hinge",
    x: 10,
    y: 50,
    title: "Concealed Hinges",
    description: "High-performance concealed hinges ensure smooth, silent operation and perfect alignment. Rated for over 200,000 cycles."
  },
  {
    id: "panel",
    x: 50,
    y: 70,
    title: "Hand-carved Panels",
    description: "Each decorative panel is hand-carved by our master craftsmen using traditional techniques passed down through generations."
  },
  {
    id: "finish",
    x: 60,
    y: 25,
    title: "Exclusive Finish",
    description: "Our proprietary multi-layer finish provides unmatched depth and luster while offering superior protection against the elements."
  },
];

const DoorShowcase: React.FC = () => {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  return (
    <div className="doorway w-full max-w-3xl aspect-[9/16]">
      <div className="relative w-full h-full">
        {/* The main door image */}
        <div className="absolute inset-0 bg-wood-dark rounded-t-lg">
          {/* Door frame */}
          <div className="absolute inset-0 border-8 md:border-12 border-wood-walnut rounded-t-lg">
            {/* Door panel */}
            <div className="absolute inset-2 md:inset-4 bg-gradient-to-b from-wood to-wood-dark rounded-sm flex items-center justify-center">
              {/* Door center panel with decorative element */}
              <div className="w-2/3 h-4/5 border-2 border-metal-brass rounded-sm flex items-center justify-center">
                <div className="w-full h-full m-4 bg-wood bg-opacity-50 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-24 md:h-24 text-metal-brass opacity-50">
                    {/* Decorative element */}
                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                      <path
                        d="M12 3L4 9V21H20V9L12 3Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 21V15C9 13.8954 9.89543 13 11 13H13C14.1046 13 15 13.8954 15 15V21"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Door handle */}
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2 w-4 h-16 bg-metal-brass rounded-full"></div>
          
          {/* Hotspots */}
          {doorHotspots.map((hotspot) => (
            <DoorHotspot
              key={hotspot.id}
              id={hotspot.id}
              x={hotspot.x}
              y={hotspot.y}
              title={hotspot.title}
              description={hotspot.description}
              isActive={activeHotspot === hotspot.id}
              onClick={() => setActiveHotspot(activeHotspot === hotspot.id ? null : hotspot.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoorShowcase;
