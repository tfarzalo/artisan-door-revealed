import React from 'react';
import Spline from '@splinetool/react-spline';

export const Door3D: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Spline
        scene="https://prod.spline.design/V87hvaKUiXkjZymI/scene.splinecode"
        style={{
          width: '100%',
          height: '100%',
          minHeight: '400px'
        }}
      />
    </div>
  );
};