
import React, { useRef, useState, useEffect } from "react";
import { DoorPlaceholder } from "@/components/DoorPlaceholder";

interface DoorCollectionProps {
  modelPath: string;
}

const DoorCollection: React.FC<DoorCollectionProps> = ({ modelPath }) => {
  const [isRotating, setIsRotating] = useState(false);
  const rotateTimeoutRef = useRef<number | null>(null);
  const doorRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);
  
  // Subtle auto-rotation when component mounts
  useEffect(() => {
    const initialRotation = setTimeout(() => {
      setIsRotating(true);
      setRotation(prev => prev + 5);
      
      const interval = setInterval(() => {
        setRotation(prev => prev + 5);
      }, 100);
      
      // Stop after a brief rotation
      setTimeout(() => {
        clearInterval(interval);
        setIsRotating(false);
      }, 800);
    }, 300);
    
    return () => {
      if (initialRotation) clearTimeout(initialRotation);
      if (rotateTimeoutRef.current) clearTimeout(rotateTimeoutRef.current);
    };
  }, []);
  
  const handleRotate = () => {
    if (isRotating) return;
    
    setIsRotating(true);
    let currentRotation = rotation;
    
    const interval = setInterval(() => {
      currentRotation += 10;
      setRotation(currentRotation);
    }, 50);
    
    // Stop after a full rotation
    rotateTimeoutRef.current = window.setTimeout(() => {
      clearInterval(interval);
      setIsRotating(false);
    }, 1800);
  };
  
  return (
    <div 
      className="relative w-full h-full cursor-pointer"
      onClick={handleRotate}
    >
      <div 
        ref={doorRef}
        className="transition-transform duration-300"
        style={{ 
          transform: `rotateY(${rotation}deg)`,
          transformStyle: 'preserve-3d',
          transition: isRotating ? 'transform 0.05s linear' : 'transform 0.3s ease-out'
        }}
      >
        <DoorPlaceholder />
      </div>
      <div className="absolute bottom-2 right-2 text-xs bg-white px-2 py-1 rounded-full shadow-sm opacity-70 hover:opacity-100 transition-opacity">
        Rotate
      </div>
    </div>
  );
};

export default DoorCollection;
