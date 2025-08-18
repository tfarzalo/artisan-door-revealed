import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Group, Box3, Vector3, PerspectiveCamera } from 'three';

const DoorModel: React.FC = () => {
  const { scene } = useGLTF('https://fcakeqzotfpugrivavji.supabase.co/storage/v1/object/public/media/door-test-2.gltf');
  const { camera, size } = useThree();
  
  useEffect(() => {
    if (scene && camera instanceof PerspectiveCamera) {
      // Calculate bounding box
      const box = new Box3().setFromObject(scene);
      const center = box.getCenter(new Vector3());
      const size_box = box.getSize(new Vector3());
      
      // Center the model
      scene.position.copy(center).multiplyScalar(-1);
      
      // Much closer camera positioning for larger appearance
      const maxDim = Math.max(size_box.x, size_box.y, size_box.z);
      const aspectRatio = size.width / size.height;
      
      // Calculate distance to fill 80% of viewport height
      const fov = camera.fov * (Math.PI / 180);
      const distance = (maxDim / (2 * Math.tan(fov / 2))) * 0.4; // Much smaller multiplier
      
      camera.position.set(0, 0, distance);
      camera.lookAt(0, 0, 0);
      camera.updateProjectionMatrix();
    }
  }, [scene, camera, size]);

  return <primitive object={scene} />;
};

const DoorMesh: React.FC<{ rotation: number }> = ({ rotation }) => {
  const doorRef = useRef<Group>(null);
  
  useFrame(() => {
    if (doorRef.current) {
      doorRef.current.rotation.y = rotation;
    }
  });

  return (
    <group ref={doorRef}>
      <DoorModel />
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
      <Canvas 
        camera={{ position: [0, 0, 2], fov: 50 }}
        className="w-full h-full"
        style={{ background: 'transparent' }}
        gl={{ antialias: true }}
        onCreated={({ camera }) => {
          camera.position.set(0, 0, 2);
        }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight 
          position={[10, 10, 10]} 
          intensity={1.2} 
          castShadow 
        />
        <directionalLight position={[-10, 10, 10]} intensity={0.6} />
        
        <DoorMesh rotation={rotation} />
      </Canvas>
    </div>
  );
};