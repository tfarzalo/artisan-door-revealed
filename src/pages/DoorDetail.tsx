
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
          {/* Back Navigation */}
          <div className="flex items-center mb-8">
            <Link to={door ? `/collection/${door.collection?.slug}` : "/"}>
              <Button variant="ghost" size="icon" className="mr-3 hover:bg-gray-100">
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </Button>
            </Link>
            <div>
              {isLoading ? (
                <Skeleton className="h-12 w-64" />
              ) : (
                <>
                  <p className="text-sm text-gray-500 mb-1">
                    {door?.collection?.name} / {door?.subcollection?.name}
                  </p>
                  <h1 className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight">
                    {door?.name}
                  </h1>
                </>
              )}
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Door Visualization */}
            <div className="space-y-6">
              {isLoading ? (
                <Skeleton className="aspect-[9/16] w-full rounded-lg" />
              ) : (
                <div className="bg-gray-50 rounded-lg p-8 flex items-center justify-center">
                  <DoorShowcase />
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
                  {/* Description */}
                  <div>
                    <p className="text-xl text-gray-600 leading-relaxed mb-6">
                      {door.description}
                    </p>
                  </div>

                  {/* Door Configurations Carousel */}
                  {doorImages && doorImages.length > 0 && (
                    <div>
                      <h3 className="text-xl font-medium text-gray-900 mb-4">Door Configurations</h3>
                      <div className="relative">
                        <div className="flex gap-4 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory">
                          {doorImages.map((image, index) => (
                            <div key={image.id} className="flex-none w-48 h-64 snap-start">
                              <img
                                src={image.image_url}
                                alt={image.alt_text || `${door.name} configuration ${index + 1}`}
                                className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                              />
                            </div>
                          ))}
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

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Link to="/contact" className="flex-1">
                      <Button size="lg" className="w-full px-8 py-6 text-lg font-medium bg-gray-900 hover:bg-gray-800 text-white">
                        Request Quote
                      </Button>
                    </Link>
                    <Button size="lg" variant="outline" className="flex-1 px-8 py-6 text-lg font-medium border-gray-300 text-gray-900 hover:bg-gray-50">
                      Find a Dealer
                    </Button>
                  </div>
                </>
              ) : null}
            </div>
          </div>

          {/* Related Products */}
          {door?.collection && (
            <div className="border-t border-gray-200 pt-16">
              <h2 className="text-3xl font-light text-gray-900 mb-8">More from {door.collection.name}</h2>
              <div className="text-center py-8">
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
