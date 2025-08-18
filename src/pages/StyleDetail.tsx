import React, { useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useStyleBySlug } from "@/hooks/useStyles";
import { useDoorBySlug } from "@/hooks/useDoors";
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
          {/* Breadcrumb Navigation */}
          {!isLoading && door && style && (
            <Breadcrumb className="mb-8">
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
                  <BreadcrumbLink asChild>
                    <Link to={`/door/${door.slug}`}>{door.name}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{style.name}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          )}

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
                    <h3 className="text-xl font-medium text-gray-900 mb-4">Style Configurations</h3>
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
                      
                      {/* Style-specific configurations */}
                      <div 
                        ref={scrollContainerRef}
                        className="flex gap-4 overflow-x-auto scroll-smooth pb-8 snap-x snap-mandatory scrollbar-hide"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                      >
                        {(() => {
                          const getConfigurationsForStyle = (styleName: string) => {
                            switch (styleName?.toLowerCase()) {
                              case 'burlwood iron':
                                return [
                                  { name: "E-01", description: "Single lite clear glass with square top", specs: "3'0\" x 8'0\" x 1¾\"" },
                                  { name: "E-01B", description: "Single lite with flemish glass option", specs: "3'0\" x 8'0\" x 1¾\"" },
                                  { name: "E-04", description: "Decorative iron grille pattern", specs: "3'0\" x 8'0\" x 1¾\"" },
                                  { name: "E-17", description: "Traditional iron scrollwork design", specs: "3'0\" x 8'0\" x 1¾\"" },
                                  { name: "E-19", description: "Contemporary iron grid pattern", specs: "3'0\" x 8'0\" x 1¾\"" },
                                  { name: "E-04 6'8\"", description: "E-04 pattern in standard height", specs: "3'0\" x 6'8\" x 1¾\"" },
                                  { name: "E-17 6'8\"", description: "E-17 pattern in standard height", specs: "3'0\" x 6'8\" x 1¾\"" }
                                ];
                              case 'redwood iron':
                                return [
                                  { name: "E-01 Redwood", description: "Single lite with redwood finish", specs: "3'0\" x 8'0\" x 1¾\"" },
                                  { name: "E-04 Redwood", description: "Iron grille with redwood stain", specs: "3'0\" x 8'0\" x 1¾\"" },
                                  { name: "E-17 Redwood", description: "Scrollwork with redwood finish", specs: "3'0\" x 8'0\" x 1¾\"" }
                                ];
                              case 'solid panel':
                                return [
                                  { name: "Raised Panel", description: "Traditional raised panel design", specs: "3'0\" x 8'0\" x 1¾\"" },
                                  { name: "Flat Panel", description: "Contemporary flat panel style", specs: "3'0\" x 8'0\" x 1¾\"" },
                                  { name: "Custom Texture", description: "Custom wood grain patterns", specs: "Various sizes" }
                                ];
                              case '6lt clear':
                                return [
                                  { name: "6LT Clear", description: "Six lite clear glass configuration", specs: "3'0\" x 8'0\" x 1¾\"" },
                                  { name: "6LT Low-E", description: "Energy efficient glazing", specs: "3'0\" x 8'0\" x 1¾\"" },
                                  { name: "6LT Privacy", description: "Obscured glass option", specs: "3'0\" x 8'0\" x 1¾\"" }
                                ];
                              case 'leaded 6lt':
                                return [
                                  { name: "Traditional Lead", description: "Classic leaded glass pattern", specs: "3'0\" x 8'0\" x 1¾\"" },
                                  { name: "Decorative Lead", description: "Custom decorative patterns", specs: "3'0\" x 8'0\" x 1¾\"" },
                                  { name: "Colored Glass", description: "Stained glass inserts", specs: "3'0\" x 8'0\" x 1¾\"" }
                                ];
                              default:
                                return [
                                  { name: "Standard", description: "Standard door configuration", specs: "3'0\" x 8'0\" x 1¾\"" },
                                  { name: "Custom Size", description: "Custom sizing available", specs: "Various" },
                                  { name: "Hardware Options", description: "Multiple hardware finishes", specs: "Standard" }
                                ];
                            }
                          };
                          
                          return getConfigurationsForStyle(style?.name || '').map((config, index) => (
                            <div key={index} className="flex-none w-56 snap-start">
                              <div className="h-72 mb-3 bg-white rounded-lg flex items-center justify-center border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-center text-gray-600 p-4">
                                  <div className="text-5xl mb-3 text-gray-400">{style?.icon || '🚪'}</div>
                                  <p className="text-base font-semibold text-gray-900 mb-1">{config.name}</p>
                                  <p className="text-xs text-gray-500 mb-2">{config.specs}</p>
                                </div>
                              </div>
                              <p className="text-sm text-gray-700 text-center font-medium px-2 leading-tight">
                                {config.description}
                              </p>
                            </div>
                          ));
                        })()}
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
              <div className="text-center mb-8">
                <h2 className="text-3xl font-light text-gray-900 mb-4">More {door.name} Styles</h2>
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