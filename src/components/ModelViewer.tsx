
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
        'style'?: React.CSSProperties;
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
  const [isLoading, setIsLoading] = useState(true);
  
  // Ensure model path has the correct format for URL
  const modelUrl = modelPath.startsWith('http') ? modelPath : `/models/${modelPath}`;

  useEffect(() => {
    const modelViewer = modelViewerRef.current;
    
    if (modelViewer) {
      // Handle successful load
      modelViewer.addEventListener('load', () => {
        console.log('Model loaded successfully:', modelUrl);
        setHasError(false);
        setIsLoading(false);
      });
      
      // Handle load error
      modelViewer.addEventListener('error', (event) => {
        console.error('Error loading model:', event);
        setHasError(true);
        setIsLoading(false);
        toast({
          variant: "destructive",
          title: "Model loading error",
          description: "There was a problem loading the 3D model. Make sure the file exists in the public/models directory."
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
          <p className="text-sm text-gray-500 mt-2">Check that the file exists at path: {modelUrl}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-luxury-accent"></div>
        </div>
      )}
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
        style={{ width: '100%', height: '100%' }}
        className={`${className}`}
      />
    </>
  );
};

export default ModelViewer;
