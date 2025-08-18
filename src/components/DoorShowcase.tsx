
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import DoorHotspot from "./DoorHotspot";
import { Door3D } from "./Door3D";

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
    <div className="doorway w-full max-w-md aspect-[9/16] mx-auto">
      <div className="relative w-full h-full">
        <Door3D />
        
        {/* Hotspot overlay */}
        <div className="absolute inset-0 pointer-events-none">
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
