
import React from "react";
import { cn } from "@/lib/utils";

interface DoorHotspotProps {
  id: string;
  x: number;
  y: number;
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}

const DoorHotspot: React.FC<DoorHotspotProps> = ({
  id,
  x,
  y,
  title,
  description,
  isActive,
  onClick,
}) => {
  return (
    <div
      className="group"
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -50%)",
        zIndex: isActive ? 30 : 10,
      }}
    >
      {/* Hotspot button */}
      <button
        className={cn(
          "hotspot transition-all duration-300",
          isActive ? "bg-luxury-accent scale-110" : "bg-luxury-accent bg-opacity-70 hover:scale-110"
        )}
        onClick={onClick}
        aria-label={title}
      >
        <span className="sr-only">{title}</span>
        <span className="text-white text-xs font-bold">{isActive ? "×" : "+"}</span>
      </button>
      
      {/* Hotspot content */}
      <div
        className={cn(
          "hotspot-content transition-all duration-300",
          isActive
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2 pointer-events-none"
        )}
        style={{
          top: "calc(100% + 10px)",
          left: x > 50 ? "auto" : "0",
          right: x > 50 ? "0" : "auto",
          minWidth: "180px",
          maxWidth: "200px",
        }}
      >
        <h4 className="text-luxury-text text-base font-serif mb-1">{title}</h4>
        <p className="text-luxury-text/80 text-xs">{description}</p>
      </div>
    </div>
  );
};

export default DoorHotspot;
