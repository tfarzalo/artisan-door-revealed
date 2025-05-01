
import React, { useRef } from "react";
import { DoorPlaceholder } from "@/components/DoorPlaceholder";

interface DoorCollectionProps {
  modelPath: string;
}

const DoorCollection: React.FC<DoorCollectionProps> = ({ modelPath }) => {
  // In a real implementation, this would load a 3D model
  // For now, we'll use a placeholder component
  
  return (
    <div className="relative w-full h-full cursor-pointer">
      <DoorPlaceholder />
      <div className="absolute bottom-2 right-2 text-xs bg-white px-2 py-1 rounded-full shadow-sm">
        Rotate
      </div>
    </div>
  );
};

export default DoorCollection;
