import React from 'react';
import Spline from '@splinetool/react-spline';

interface Door3DProps {
  onInteraction?: () => void;
}

export const Door3D: React.FC<Door3DProps> = ({ onInteraction }) => {
  const handleSplineMouseDown = () => {
    if (onInteraction) {
      onInteraction();
    }
  };

  return (
    <div className="w-full h-full">
      <Spline
        scene="https://prod.spline.design/DyyALePNrOp5z50M/scene.splinecode"
        onMouseDown={handleSplineMouseDown}
        style={{
          width: '588px',
          height: '933px'
        }}
      />
    </div>
  );
};