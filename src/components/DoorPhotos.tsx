
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface DoorPhotosProps {
  className?: string;
}

const DoorPhotos: React.FC<DoorPhotosProps> = ({ className = "" }) => {
  // Collection of door photos from Unsplash
  const doorImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      alt: "Modern wooden door with glass panels"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      alt: "Contemporary entrance door with steel frame"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      alt: "Classic wooden door with traditional design"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      alt: "Luxury door with ornate details"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      alt: "Elegant entrance with arched doorway"
    }
  ];

  return (
    <div className={`w-full ${className}`}>
      <Carousel className="w-full max-w-xs mx-auto">
        <CarouselContent>
          {doorImages.map((image) => (
            <CarouselItem key={image.id}>
              <div className="p-1">
                <div className="h-64 rounded-md overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default DoorPhotos;
