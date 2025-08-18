import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Box, Cylinder } from '@react-three/drei';
import { Group } from 'three';

const DoorMesh: React.FC<{ rotation: number }> = ({ rotation }) => {
  const doorRef = useRef<Group>(null);
  
  useFrame(() => {
    if (doorRef.current) {
      doorRef.current.rotation.y = rotation;
    }
  });

  return (
    <group ref={doorRef}>
      {/* Door frame */}
      <Box args={[0.1, 4, 2]} position={[-1.1, 0, 0]}>
        <meshStandardMaterial color="#8B4513" />
      </Box>
      <Box args={[0.1, 4, 2]} position={[1.1, 0, 0]}>
        <meshStandardMaterial color="#8B4513" />
      </Box>
      <Box args={[2.2, 0.1, 2]} position={[0, 2, 0]}>
        <meshStandardMaterial color="#8B4513" />
      </Box>
      
      {/* Main door panel */}
      <Box args={[2, 3.8, 0.1]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#654321" />
      </Box>
      
      {/* Door panels - decorative rectangles */}
      <Box args={[0.8, 1.5, 0.12]} position={[0, 0.8, 0.01]}>
        <meshStandardMaterial color="#5D4E37" />
      </Box>
      <Box args={[0.8, 1.5, 0.12]} position={[0, -0.8, 0.01]}>
        <meshStandardMaterial color="#5D4E37" />
      </Box>
      
      {/* Door handle */}
      <Cylinder args={[0.03, 0.03, 0.15]} position={[0.8, 0, 0.15]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#B8860B" />
      </Cylinder>
      
      {/* Hinges */}
      <Cylinder args={[0.05, 0.05, 0.1]} position={[-0.95, 1.5, 0.05]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#696969" />
      </Cylinder>
      <Cylinder args={[0.05, 0.05, 0.1]} position={[-0.95, -1.5, 0.05]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#696969" />
      </Cylinder>
    </group>
  );
};

export const Door3D: React.FC = () => {
  const [rotation, setRotation] = useState(0);
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
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <directionalLight position={[-5, 5, 5]} intensity={0.3} />
        
        <DoorMesh rotation={rotation} />
        
        {/* Disable orbit controls to prevent conflicts */}
        <OrbitControls enableRotate={false} enableZoom={false} enablePan={false} />
      </Canvas>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-muted-foreground text-sm">
        Drag to rotate door
      </div>
    </div>
  );
};