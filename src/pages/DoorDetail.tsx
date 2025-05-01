
import React from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import AppHeader from "@/components/AppHeader";
import { useDoorBySlug, useDoorImages, useDoorFeatures } from "@/hooks/useDoors";
import DoorShowcase from "@/components/DoorShowcase";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

const DoorDetail = () => {
  const { doorSlug } = useParams<{ doorSlug: string }>();
  
  const {
    data: door,
    isLoading: doorLoading,
    error: doorError
  } = useDoorBySlug(doorSlug || "");
  
  const {
    data: doorImages,
    isLoading: imagesLoading
  } = useDoorImages(door?.id);
  
  const {
    data: doorFeatures,
    isLoading: featuresLoading
  } = useDoorFeatures(door?.id);

  const isLoading = doorLoading || imagesLoading || featuresLoading;

  if (doorError) {
    return (
      <div className="flex flex-col min-h-screen bg-white text-luxury-text">
        <AppHeader />
        <div className="flex-1 pt-20 px-5">
          <div className="max-w-4xl mx-auto text-center py-12">
            <h2 className="text-2xl font-serif mb-4">Door Not Found</h2>
            <p className="mb-6">The door you are looking for doesn't exist or has been removed.</p>
            <Link to="/">
              <Button>Back to Collections</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white text-luxury-text">
      <AppHeader />
      
      <main className="flex-1 pt-16 pb-16 px-5">
        <div className="max-w-4xl mx-auto">
          {/* Back button and title */}
          <div className="flex items-center mt-4 mb-4">
            <Link to={door ? `/collection/${door.collection?.slug}` : "/"}>
              <Button variant="ghost" size="icon" className="rounded-full mr-2">
                <ChevronLeft className="w-5 h-5" />
              </Button>
            </Link>
            {isLoading ? (
              <Skeleton className="h-8 w-48" />
            ) : (
              <h2 className="text-2xl font-serif">{door?.name}</h2>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            {/* Door Visualization */}
            <div>
              {isLoading ? (
                <Skeleton className="aspect-[9/16] w-full rounded-lg" />
              ) : (
                <DoorShowcase />
              )}
            </div>
            
            {/* Door Information */}
            <div>
              {isLoading ? (
                <div className="space-y-4">
                  <Skeleton className="h-8 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                  <div className="pt-6">
                    <Skeleton className="h-6 w-1/2" />
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <Skeleton className="h-16 w-full" />
                      <Skeleton className="h-16 w-full" />
                      <Skeleton className="h-16 w-full" />
                      <Skeleton className="h-16 w-full" />
                    </div>
                  </div>
                </div>
              ) : door ? (
                <>
                  <h3 className="text-2xl font-serif mb-4">{door.name}</h3>
                  <p className="text-luxury-text/80 mb-6">
                    {door.description || 
                      "This exquisite door combines timeless design with premium craftsmanship, crafted specifically to enhance your home's elegance with unmatched quality."}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {door.collection && (
                      <div className="border border-luxury-text/10 p-3 rounded-md">
                        <span className="text-xs text-luxury-text/60 block">Collection</span>
                        <span className="font-medium">{door.collection.name}</span>
                      </div>
                    )}
                    {door.subcollection && (
                      <div className="border border-luxury-text/10 p-3 rounded-md">
                        <span className="text-xs text-luxury-text/60 block">Series</span>
                        <span className="font-medium">{door.subcollection.name}</span>
                      </div>
                    )}
                    {door.material && (
                      <div className="border border-luxury-text/10 p-3 rounded-md">
                        <span className="text-xs text-luxury-text/60 block">Material</span>
                        <span className="font-medium">{door.material}</span>
                      </div>
                    )}
                    {door.size && (
                      <div className="border border-luxury-text/10 p-3 rounded-md">
                        <span className="text-xs text-luxury-text/60 block">Size</span>
                        <span className="font-medium">{door.size}</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Features */}
                  {doorFeatures && doorFeatures.length > 0 && (
                    <div className="mt-8">
                      <h4 className="text-lg font-medium mb-4">Features</h4>
                      <ul className="list-disc list-inside space-y-2">
                        {doorFeatures.map((feature) => (
                          <li key={feature.id} className="text-luxury-text/80">
                            <span className="font-medium">{feature.feature_name}:</span> {feature.feature_value}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Contact Button */}
                  <div className="mt-8">
                    <Link to="/contact">
                      <Button className="w-full">Request More Information</Button>
                    </Link>
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </main>
      
      {/* App-like bottom navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-luxury-text/10 px-5 py-2 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link to="/">
            <button className="text-xs text-luxury-text opacity-100 flex flex-col items-center gap-1">
              <span className="block h-1 w-8 bg-luxury-accent"></span>
              Collections
            </button>
          </Link>
          <Link to="/search">
            <button className="text-xs text-luxury-text opacity-70 hover:opacity-100 flex flex-col items-center gap-1">
              <span className="block h-1 w-8 bg-transparent"></span>
              Search
            </button>
          </Link>
          <Link to="/filter">
            <button className="text-xs text-luxury-text opacity-70 hover:opacity-100 flex flex-col items-center gap-1">
              <span className="block h-1 w-8 bg-transparent"></span>
              Filter
            </button>
          </Link>
        </div>
        <Link to="/contact">
          <button className="text-xs px-3 py-2 bg-luxury-text text-white rounded">
            Request Info
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DoorDetail;
