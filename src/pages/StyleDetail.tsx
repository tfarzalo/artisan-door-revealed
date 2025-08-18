import React, { useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useStyleBySlug } from "@/hooks/useStyles";
import { useDoorBySlug } from "@/hooks/useDoors";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

const StyleDetail = () => {
  const { doorSlug, styleSlug } = useParams<{ doorSlug: string; styleSlug: string }>();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const {
    data: door,
    isLoading: doorLoading,
    error: doorError
  } = useDoorBySlug(doorSlug || "");
  
  const {
    data: style,
    isLoading: styleLoading,
    error: styleError
  } = useStyleBySlug(styleSlug || "");

  const isLoading = doorLoading || styleLoading;

  if (doorError || styleError) {
    return (
      <div className="min-h-screen bg-white">
        <main className="px-6 py-12">
          <div className="max-w-7xl mx-auto text-center py-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Style Not Found</h2>
            <p className="text-xl text-gray-600 mb-8">The style you are looking for doesn't exist or has been removed.</p>
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
            <Link to={door ? `/door/${door.slug}` : "/"}>
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
                    {door?.collection?.name} / {door?.subcollection?.name} / {door?.name}
                  </p>
                  <h1 className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight">
                    {style?.name}
                  </h1>
                </>
              )}
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Style Visualization */}
            <div className="space-y-6">
              {isLoading ? (
                <Skeleton className="aspect-[9/16] w-full rounded-lg" />
              ) : (
                <div className="bg-gray-50 rounded-lg p-8 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-6xl mb-4">{style?.icon}</div>
                    <p>3D Preview Coming Soon</p>
                  </div>
                </div>
              )}
            </div>
            
            {/* Style Information */}
            <div className="space-y-8">
              {isLoading ? (
                <div className="space-y-6">
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-6 w-1/2" />
                </div>
              ) : style ? (
                <>
                  {/* Description */}
                  <div>
                    <p className="text-xl text-gray-600 leading-relaxed mb-6">
                      {style.description || `Explore the ${style.name} style featuring distinctive design elements that make each door unique.`}
                    </p>
                  </div>

                  {/* Door Configurations for This Style */}
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-4">Door Configurations</h3>
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
                      
                      {/* Placeholder configurations */}
                      <div 
                        ref={scrollContainerRef}
                        className="flex gap-4 overflow-x-auto scroll-smooth pb-8 snap-x snap-mandatory scrollbar-hide"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                      >
                        {[
                          { name: "Single Panel", description: "Classic single panel design" },
                          { name: "6 Lite", description: "Six glass panels arrangement" },
                          { name: "Full Lite", description: "Full glass panel door" },
                          { name: "Decorative Glass", description: "Custom decorative glass options" }
                        ].map((config, index) => (
                          <div key={index} className="flex-none w-48 snap-start">
                            <div className="h-64 mb-3 bg-gray-100 rounded-lg flex items-center justify-center">
                              <div className="text-center text-gray-500">
                                <div className="text-4xl mb-2">🚪</div>
                                <p className="text-sm">{config.name}</p>
                              </div>
                            </div>
                            <p className="text-sm text-gray-600 text-center font-medium px-1 leading-tight">
                              {config.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

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

          {/* Related Styles */}
          {door && (
            <div className="border-t border-gray-200 pt-16">
              <h2 className="text-3xl font-light text-gray-900 mb-8">More {door.name} Styles</h2>
              <div className="text-center py-8">
                <Link to={`/door/${door.slug}`}>
                  <Button variant="outline" size="lg" className="px-8 py-6 text-lg font-medium border-gray-300 text-gray-900 hover:bg-gray-50">
                    View All {door.name} Styles
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

export default StyleDetail;