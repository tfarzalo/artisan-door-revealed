
import React, { useEffect, useRef } from 'react';
import '@google/model-viewer';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        src: string;
        'ar'?: boolean;
        'ar-modes'?: string;
        'camera-controls'?: boolean;
        'tone-mapping'?: string;
        'poster'?: string;
        'shadow-intensity'?: string;
        'auto-rotate'?: boolean;
        'rotation-per-second'?: string;
        'field-of-view'?: string;
        'environment-image'?: string;
        'exposure'?: string;
      }, HTMLElement>;
    }
  }
}

interface ModelViewerProps {
  modelPath: string;
  posterPath?: string;
  className?: string;
}

const ModelViewer: React.FC<ModelViewerProps> = ({ 
  modelPath, 
  posterPath = "", 
  className = ""
}) => {
  const modelViewerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // You can add any initialization logic here
    const modelViewer = modelViewerRef.current;
    
    // Example of how you might interact with the model-viewer
    if (modelViewer) {
      // For example, you could add event listeners
      modelViewer.addEventListener('load', () => {
        console.log('Model loaded successfully');
      });
    }

    return () => {
      // Clean up if needed
      if (modelViewer) {
        modelViewer.removeEventListener('load', () => {});
      }
    };
  }, []);

  return (
    <model-viewer
      ref={modelViewerRef}
      src={modelPath}
      ar
      ar-modes="webxr scene-viewer quick-look"
      camera-controls
      tone-mapping="neutral"
      poster={posterPath}
      shadow-intensity="1"
      auto-rotate
      rotation-per-second="30deg"
      field-of-view="30deg"
      environment-image="neutral"
      exposure="0.5"
      className={`w-full h-full ${className}`}
    />
  );
};

export default ModelViewer;
