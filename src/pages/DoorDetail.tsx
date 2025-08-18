
import React, { useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useDoorBySlug, useDoorImages, useDoorFeatures } from "@/hooks/useDoors";
import DoorShowcase from "@/components/DoorShowcase";
import InteractionHint from "@/components/InteractionHint";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const DoorDetail = () => {
  const [showInteractionHint, setShowInteractionHint] = useState(true);
  const { doorSlug } = useParams<{ doorSlug: string }>();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Handle both doorSlug and subcollection slug routes
  const slugToQuery = doorSlug || "";
  
  const {
    data: door,
    isLoading: doorLoading,
    error: doorError
  } = useDoorBySlug(slugToQuery);
  
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
      <div className="min-h-screen bg-white">
        <main className="px-6 py-12">
          <div className="max-w-7xl mx-auto text-center py-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Door Not Found</h2>
            <p className="text-xl text-gray-600 mb-8">The door you are looking for doesn't exist or has been removed.</p>
            <Link to="/">
              <Button size="lg" className="px-8 py-6 text-lg font-medium bg-gray-900 hover:bg-gray-800 text-white">
                Back to Collections
              </Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <main className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          {!isLoading && door && (
            <div className="text-center mb-16">
              {/* Breadcrumb Navigation */}
              <Breadcrumb className="mb-6 justify-center">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/">Home</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to={`/collection/${door.collection?.slug}`}>
                        {door.collection?.name}
                      </Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>{door.name}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <h1 className="text-5xl md:text-6xl mb-6 tracking-tight text-[#cb7524] font-semibold">
                {door.name}
              </h1>
              {door.description && (
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed px-[20px] py-0">
                  {door.description}
                </p>
              )}
            </div>
          )}

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Door Visualization */}
            <div className="space-y-6">
              {isLoading ? (
                <Skeleton className="aspect-[9/16] w-full rounded-lg" />
              ) : (
                <div className="relative rounded-lg flex items-center justify-center">
                  <InteractionHint isVisible={showInteractionHint} />
                  <DoorShowcase onInteraction={() => setShowInteractionHint(false)} />
                </div>
              )}
            </div>
            
            {/* Door Information */}
            <div className="space-y-8">
              {isLoading ? (
                <div className="space-y-6">
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-6 w-1/2" />
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <Skeleton className="h-20" />
                    <Skeleton className="h-20" />
                    <Skeleton className="h-20" />
                    <Skeleton className="h-20" />
                  </div>
                </div>
              ) : door ? (
                <>

                  {/* Door Collection Styles Carousel */}
                  {doorImages && doorImages.length > 0 && (
                    <div>
                      <h3 className="text-xl font-medium text-gray-900 mb-4">Door Collection Styles</h3>
                      <div className="relative">
                        {/* Navigation Arrows */}
                        <Button
                          variant="outline"
                          size="icon"
                          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-md"
                          onClick={() => {
                            if (scrollContainerRef.current) {
                              scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
                            }
                          }}
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-md"
                          onClick={() => {
                            if (scrollContainerRef.current) {
                              scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
                            }
                          }}
                        >
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                        
                        {/* Carousel Container */}
                        <div 
                          ref={scrollContainerRef}
                          className="flex gap-4 overflow-x-auto scroll-smooth pb-8 snap-x snap-mandatory scrollbar-hide"
                          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                          {doorImages.map((image, index) => {
                            // Map alt_text to proper style slugs
                            const getStyleSlug = (altText: string) => {
                              if (altText.includes('Burlwood Iron')) return 'burlwood-iron';
                              if (altText.includes('Redwood Iron')) return 'redwood-iron';
                              if (altText.includes('Solid Panel')) return 'solid-panel';
                              if (altText.includes('6LT') && !altText.includes('Leaded')) return '6lt-clear';
                              if (altText.includes('Leaded 6LT')) return 'leaded-6lt';
                              if (altText.includes('1LT')) return '1lt-full';
                              if (altText.includes('3LT SDL')) return '3lt-sdl';
                              return `style-${index + 1}`;
                            };
                            
                            const styleSlug = getStyleSlug(image.alt_text || '');
                            
                            return (
                              <Link 
                                key={image.id} 
                                to={`/door/${door.slug}/style/${styleSlug}`}
                                className="flex-none w-48 snap-start group cursor-pointer"
                              >
                                <div className="h-64 mb-3">
                                  <img
                                    src={image.image_url}
                                    alt={image.alt_text || `${door.name} style ${index + 1}`}
                                    className="w-full h-full object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300"
                                  />
                                </div>
                                <p className="text-sm text-gray-600 text-center font-medium px-1 leading-tight group-hover:text-gray-900 transition-colors">
                                  {image.alt_text}
                                </p>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Specifications Grid */}
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-4">Specifications</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {door.material && (
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <span className="text-sm text-gray-500 block mb-1">Material</span>
                          <span className="font-medium text-gray-900">{door.material}</span>
                        </div>
                      )}
                      {door.size && (
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <span className="text-sm text-gray-500 block mb-1">Size</span>
                          <span className="font-medium text-gray-900">{door.size}</span>
                        </div>
                      )}
                      {door.glasstype && (
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <span className="text-sm text-gray-500 block mb-1">Glass Type</span>
                          <span className="font-medium text-gray-900">{door.glasstype}</span>
                        </div>
                      )}
                      {door.doortype && (
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <span className="text-sm text-gray-500 block mb-1">Door Type</span>
                          <span className="font-medium text-gray-900">{door.doortype}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  {doorFeatures && doorFeatures.length > 0 && (
                    <div>
                      <h3 className="text-xl font-medium text-gray-900 mb-4">Features & Benefits</h3>
                      <div className="space-y-3">
                        {doorFeatures.map((feature) => (
                          <div key={feature.id} className="flex justify-between items-center py-2 border-b border-gray-100">
                            <span className="font-medium text-gray-700">{feature.feature_name}</span>
                            <span className="text-gray-600">{feature.feature_value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons - Moved to Hero Section */}
                </>
              ) : null}
            </div>
          </div>

          {/* Action Buttons */}
          {door && (
            <div className="flex flex-wrap gap-4 justify-center mt-16 mb-8">
              <Link to="/contact">
                <Button size="lg" className="px-8 py-6 text-lg font-medium bg-gray-900 hover:bg-gray-800 text-white">
                  Request Quote
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg font-medium border-gray-300 text-gray-900 hover:bg-gray-50">
                Find a Dealer
              </Button>
            </div>
          )}

          {/* Related Products */}
          {door?.collection && (
            <div className="border-t border-gray-200 pt-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-light text-gray-900 mb-4">More from {door.collection.name}</h2>
                <Link to={`/collection/${door.collection.slug}`}>
                  <Button variant="outline" size="lg" className="px-8 py-6 text-lg font-medium border-gray-300 text-gray-900 hover:bg-gray-50">
                    View All {door.collection.name}
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default DoorDetail;
