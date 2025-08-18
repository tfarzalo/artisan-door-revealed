import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { Group } from 'three';

// Define the hotspot data
interface Hotspot {
  id: string;
  x: number;
  y: number;
  z: number;
  title: string;
  description: string;
}

const doorHotspots: Hotspot[] = [
  {
    id: "handle",
    x: 0.8,
    y: 0,
    z: 0.15,
    title: "Custom Handle",
    description: "Hand-forged brass handle with antique finish. Each handle is crafted by master artisans and features our signature oak leaf motif."
  },
  {
    id: "wood",
    x: -0.5, 
    y: 0.5,
    z: 0.06,
    title: "Premium Hardwood",
    description: "Sustainably sourced mahogany with a 12-step finishing process that enhances the natural wood grain while providing superior protection."
  },
  {
    id: "hinge",
    x: -0.95,
    y: 0,
    z: 0.05,
    title: "Concealed Hinges",
    description: "High-performance concealed hinges ensure smooth, silent operation and perfect alignment. Rated for over 200,000 cycles."
  },
  {
    id: "panel",
    x: 0,
    y: -0.8,
    z: 0.06,
    title: "Hand-carved Panels",
    description: "Each decorative panel is hand-carved by our master craftsmen using traditional techniques passed down through generations."
  },
  {
    id: "finish",
    x: 0.3,
    y: 1.2,
    z: 0.06,
    title: "Exclusive Finish",
    description: "Our proprietary multi-layer finish provides unmatched depth and luster while offering superior protection against the elements."
  },
];

const DoorMesh: React.FC<{ rotation: number; activeHotspot: string | null; setActiveHotspot: (id: string | null) => void }> = ({ rotation, activeHotspot, setActiveHotspot }) => {
  const doorRef = useRef<Group>(null);
  
  useFrame(() => {
    if (doorRef.current) {
      doorRef.current.rotation.y = rotation;
    }
  });

  return (
    <group ref={doorRef}>
      {/* Door frame */}
      <mesh position={[-1.1, 0, 0]}>
        <boxGeometry args={[0.1, 4, 2]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      <mesh position={[1.1, 0, 0]}>
        <boxGeometry args={[0.1, 4, 2]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      <mesh position={[0, 2, 0]}>
        <boxGeometry args={[2.2, 0.1, 2]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      
      {/* Main door panel */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 3.8, 0.1]} />
        <meshStandardMaterial color="#654321" />
      </mesh>
      
      {/* Door panels - decorative rectangles */}
      <mesh position={[0, 0.8, 0.01]}>
        <boxGeometry args={[0.8, 1.5, 0.12]} />
        <meshStandardMaterial color="#5D4E37" />
      </mesh>
      <mesh position={[0, -0.8, 0.01]}>
        <boxGeometry args={[0.8, 1.5, 0.12]} />
        <meshStandardMaterial color="#5D4E37" />
      </mesh>
      
      {/* Door handle */}
      <mesh position={[0.8, 0, 0.15]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.15]} />
        <meshStandardMaterial color="#B8860B" />
      </mesh>
      
      {/* Hinges */}
      <mesh position={[-0.95, 1.5, 0.05]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.1]} />
        <meshStandardMaterial color="#696969" />
      </mesh>
      <mesh position={[-0.95, -1.5, 0.05]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.1]} />
        <meshStandardMaterial color="#696969" />
      </mesh>
      
      {/* 3D Hotspots */}
      {doorHotspots.map((hotspot) => (
        <Html
          key={hotspot.id}
          position={[hotspot.x, hotspot.y, hotspot.z]}
          distanceFactor={5}
          transform
          sprite
        >
          <div
            className="group"
            style={{
              transform: "translate(-50%, -50%)",
              zIndex: activeHotspot === hotspot.id ? 30 : 10,
            }}
          >
            {/* Hotspot button - optimized for touch and visibility */}
            <button
              className={`w-4 h-4 rounded-full border border-white shadow-lg transition-all duration-300 pointer-events-auto flex items-center justify-center ${
                activeHotspot === hotspot.id ? 'bg-luxury-accent scale-125' : 'bg-luxury-accent bg-opacity-90 hover:scale-110'
              }`}
              onClick={() => setActiveHotspot(activeHotspot === hotspot.id ? null : hotspot.id)}
              aria-label={hotspot.title}
            >
              <span className="text-white text-[10px] font-bold leading-none">
                {activeHotspot === hotspot.id ? "×" : "+"}
              </span>
            </button>
            
            {/* Hotspot content - improved readability */}
            <div
              className={`absolute top-5 w-44 p-3 bg-white rounded-md shadow-xl border transition-all duration-300 ${
                activeHotspot === hotspot.id
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-1 pointer-events-none"
              }`}
              style={{
                left: hotspot.x > 0 ? "-176px" : "0",
                borderTop: "2px solid #B8860B",
              }}
            >
              <span className="text-luxury-accent text-[10px] font-medium uppercase tracking-wide block mb-1">Feature</span>
              <h4 className="text-luxury-text text-xs font-serif mb-1 leading-tight">{hotspot.title}</h4>
              <p className="text-luxury-text/80 text-[10px] leading-relaxed">{hotspot.description}</p>
            </div>
          </div>
        </Html>
      ))}
    </group>
  );
};

export const Door3D: React.FC = () => {
  const [rotation, setRotation] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [lastX, setLastX] = useState(0);

  const handleMouseDown = (event: React.MouseEvent) => {
    setIsDragging(true);
    setLastX(event.clientX);
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!isDragging) return;
    
    const deltaX = event.clientX - lastX;
    const newRotation = rotation + deltaX * 0.01;
    
    // Limit rotation to 90 degrees left and right
    const clampedRotation = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, newRotation));
    setRotation(clampedRotation);
    setLastX(event.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div 
      className="w-full h-full cursor-grab active:cursor-grabbing"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={0.8} 
          castShadow 
        />
        <directionalLight position={[-5, 5, 5]} intensity={0.3} />
        
        <DoorMesh rotation={rotation} activeHotspot={activeHotspot} setActiveHotspot={setActiveHotspot} />
      </Canvas>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-muted-foreground text-sm">
        Drag to rotate door
      </div>
    </div>
  );
};