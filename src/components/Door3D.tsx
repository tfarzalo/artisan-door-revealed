import React from 'react';
import { Canvas } from '@react-three/fiber';
import useSpline from '@splinetool/r3f-spline';
import { OrthographicCamera } from '@react-three/drei';

interface Door3DProps {
  onInteraction?: () => void;
}

function DoorScene({ onInteraction }: { onInteraction?: () => void }) {
  const { nodes, materials } = useSpline('https://prod.spline.design/DyyALePNrOp5z50M/scene.splinecode');
  
  return (
    <>
      <color attach="background" args={['#74757a']} />
      <group dispose={null}>
        <scene name="Scene 1">
          <group 
            name="2bfb4e9d-96eb-4b94-ad94-29e5cba5245b" 
            rotation={[-1.03, 1.17, 0.76]} 
            scale={100}
            onPointerDown={onInteraction}
          >
            <mesh
              name="tripo_node_9e84ab66-c507-4d45-ba20-aca3680a8168"
              geometry={nodes['tripo_node_9e84ab66-c507-4d45-ba20-aca3680a8168']?.geometry}
              material={nodes['tripo_node_9e84ab66-c507-4d45-ba20-aca3680a8168']?.material}
              castShadow
              receiveShadow
              position={[-0.03, -0.07, 0]}
              scale={1.65}
            />
          </group>
          <directionalLight
            name="Directional Light"
            castShadow
            intensity={0.7}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={-10000}
            shadow-camera-far={100000}
            shadow-camera-left={-1000}
            shadow-camera-right={1000}
            shadow-camera-top={1000}
            shadow-camera-bottom={-1000}
            position={[200, 300, 300]}
          />
          <OrthographicCamera name="1" makeDefault={true} far={10000} near={-50000} />
          <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
        </scene>
      </group>
    </>
  );
}

export const Door3D: React.FC<Door3DProps> = ({ onInteraction }) => {
  return (
    <div className="w-full h-full">
      <Canvas
        style={{
          width: '588px',
          height: '933px'
        }}
      >
        <DoorScene onInteraction={onInteraction} />
      </Canvas>
    </div>
  );
};