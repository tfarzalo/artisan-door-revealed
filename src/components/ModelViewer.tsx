
import React, { useEffect, useRef, useState } from 'react';
import '@google/model-viewer';
import { toast } from '@/components/ui/use-toast';

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
        'alt'?: string;
        'loading'?: 'eager' | 'lazy' | 'auto';
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
  const [hasError, setHasError] = useState(false);
  
  // Ensure model path has the correct format for URL
  const modelUrl = modelPath.startsWith('http') ? modelPath : `/models/${modelPath}`;

  useEffect(() => {
    const modelViewer = modelViewerRef.current;
    
    if (modelViewer) {
      // Handle successful load
      modelViewer.addEventListener('load', () => {
        console.log('Model loaded successfully:', modelUrl);
        setHasError(false);
      });
      
      // Handle load error
      modelViewer.addEventListener('error', (event) => {
        console.error('Error loading model:', event);
        setHasError(true);
        toast({
          variant: "destructive",
          title: "Model loading error",
          description: "There was a problem loading the 3D model."
        });
      });
    }

    return () => {
      if (modelViewer) {
        modelViewer.removeEventListener('load', () => {});
        modelViewer.removeEventListener('error', () => {});
      }
    };
  }, [modelUrl]);

  if (hasError) {
    return (
      <div className={`flex items-center justify-center bg-secondary/20 w-full h-full ${className}`}>
        <div className="text-center p-4">
          <p className="text-red-500">Error loading 3D model</p>
          <p className="text-sm text-gray-500 mt-2">Check that the file exists and is correctly formatted</p>
        </div>
      </div>
    );
  }

  return (
    <model-viewer
      ref={modelViewerRef}
      src={modelUrl}
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
      alt="3D door model"
      loading="eager"
      className={`w-full h-full ${className}`}
    />
  );
};

export default ModelViewer;
