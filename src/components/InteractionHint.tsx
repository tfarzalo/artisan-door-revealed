import React, { useEffect, useState } from "react";
import { RotateCcw, Hand } from "lucide-react";

const InteractionHint = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000); // Hide after 4 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10 animate-fade-in">
      <div className="bg-gray-900/90 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 text-sm">
        <div className="flex items-center gap-1 animate-pulse">
          <Hand className="w-4 h-4" />
          <RotateCcw className="w-4 h-4 animate-[spin_2s_ease-in-out_infinite]" />
        </div>
        <span>Drag to rotate the door</span>
      </div>
    </div>
  );
};

export default InteractionHint;