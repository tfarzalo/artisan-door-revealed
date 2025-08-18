import React from 'react';
import Spline from '@splinetool/react-spline';

export const Door3D: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Spline
        scene="https://prod.spline.design/DyyALePNrOp5z50M/scene.splinecode"
        style={{
          width: '588px',
          height: '933px'
        }}
      />
    </div>
  );
};