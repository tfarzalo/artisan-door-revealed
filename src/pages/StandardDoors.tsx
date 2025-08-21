import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCollections } from "@/hooks/useCollections";
import { Skeleton } from "@/components/ui/skeleton";
import { Home } from "lucide-react";

const StandardDoors = () => {
  const {
    data: collections,
    isLoading,
    error
  } = useCollections();

  const getCollectionIcon = (slug: string) => {
    switch (slug) {
      case 'signature-doors':
        return <div className="relative w-20 h-40 bg-white border-2 border-gray-300 rounded-t-lg shadow-md">
            <div className="absolute right-2 top-1/2 w-2 h-5 bg-gray-800 rounded-full"></div>
            <div className="absolute inset-3 border border-gray-200 rounded-sm">
              <div className="absolute top-2 left-2 right-2 h-8 border border-gray-200 rounded-sm"></div>
              <div className="absolute bottom-2 left-2 right-2 h-8 border border-gray-200 rounded-sm"></div>
            </div>
          </div>;
      case 'traditional-doors':
        return <div className="relative w-20 h-40 bg-white border-2 border-gray-300 rounded-t-lg shadow-md">
            <div className="absolute right-2 top-1/2 w-2 h-5 bg-gray-800 rounded-full"></div>
            <div className="absolute inset-3">
              <div className="absolute top-0 left-0 right-0 h-1/3 border border-gray-200"></div>
              <div className="absolute bottom-0 left-0 right-0 h-1/3 border border-gray-200"></div>
            </div>
          </div>;
      case 'modern-doors':
        return <div className="relative w-20 h-40 bg-white border-2 border-gray-300 rounded-t-lg shadow-md">
            <div className="absolute right-2 top-1/2 w-2 h-5 bg-gray-800 rounded-full"></div>
            <div className="absolute left-3 right-3 top-6 bottom-6 border-l-2 border-gray-300"></div>
          </div>;
      case 'slimline-doors':
        return <div className="relative w-20 h-40 bg-white border-2 border-gray-300 rounded-t-lg shadow-md">
            <div className="absolute right-2 top-1/2 w-2 h-5 bg-gray-800 rounded-full"></div>
            <div className="absolute left-1/2 top-4 bottom-4 w-0.5 bg-gray-300 transform -translate-x-1/2"></div>
          </div>;
      case 'luxe-pivot-doors':
        return <div className="relative w-20 h-40 bg-white border-2 border-gray-300 rounded-t-lg shadow-md">
            <div className="absolute right-2 top-1/2 w-2 h-5 bg-gray-800 rounded-full"></div>
            <div className="absolute inset-3">
              <div className="absolute top-3 left-2 right-2 h-0.5 bg-gray-300"></div>
              <div className="absolute bottom-3 left-2 right-2 h-0.5 bg-gray-300"></div>
              <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-gray-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>;
      case 'hurricane-doors':
        return <div className="relative w-20 h-40 bg-white border-2 border-gray-300 rounded-t-lg shadow-md">
            <div className="absolute right-2 top-1/2 w-2 h-5 bg-gray-800 rounded-full"></div>
            <div className="absolute inset-3 bg-gradient-to-b from-blue-100 to-transparent rounded-sm border-2 border-blue-200"></div>
          </div>;
      case 'interior-doors':
        return <div className="relative w-20 h-40 bg-white border-2 border-gray-300 rounded-t-lg shadow-md">
            <div className="absolute right-2 top-1/2 w-2 h-5 bg-gray-800 rounded-full"></div>
            <div className="absolute inset-3">
              <div className="absolute top-2 left-2 right-1/2 bottom-2 border border-gray-200"></div>
              <div className="absolute top-2 left-1/2 right-2 bottom-2 border border-gray-200"></div>
            </div>
          </div>;
      case 'discontinued-clearance':
        return <div className="relative w-20 h-40 bg-white border-2 border-gray-300 rounded-t-lg shadow-md">
            <div className="absolute right-2 top-1/2 w-2 h-5 bg-gray-800 rounded-full"></div>
            <div className="absolute inset-3 border border-red-200 rounded-sm bg-red-50"></div>
          </div>;
      default:
        return <div className="relative w-20 h-40 bg-white border-2 border-gray-300 rounded-t-lg shadow-md">
            <div className="absolute right-2 top-1/2 w-2 h-5 bg-gray-800 rounded-full"></div>
          </div>;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Navigation Menu */}
          <div className="flex justify-center mb-12">
            <nav className="flex items-center space-x-8">
              <Link to="/" className="text-lg text-gray-600 hover:text-[#cb7524] transition-colors flex items-center gap-2">
                <Home size={20} />
                Home
              </Link>
              <Link to="/standard-doors" className="text-lg text-[#cb7524] font-semibold border-b-2 border-[#cb7524] pb-1">
                Standard Doors
              </Link>
              <Link to="/builders-doors" className="text-lg text-gray-600 hover:text-[#cb7524] transition-colors">
                Builder's Doors
              </Link>
              <Link to="/custom-doors" className="text-lg text-gray-600 hover:text-[#cb7524] transition-colors">
                Custom Doors
              </Link>
              <Link to="/options-addons" className="text-lg text-gray-600 hover:text-[#cb7524] transition-colors">
                Options & Addons
              </Link>
            </nav>
          </div>
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl mb-6 tracking-tight text-[#cb7524] font-semibold">Standard Entry Doors</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed px-[20px] py-0">Choose from over 300 Standard Door Styles, each being hand-assembled by skilled artisans and individually evaluated to meet our exceptional quality standards.</p>
          </div>
          
          {/* Collections Grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                <Card key={i} className="border-gray-200">
                  <CardContent className="p-6">
                    <Skeleton className="h-64 w-full rounded-lg mb-6" />
                    <Skeleton className="h-6 w-32 mx-auto" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-light text-gray-900 mb-4">Unable to load collections</h3>
              <p className="text-gray-600">Please try again later.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {collections?.map(collection => (
                <Link to={`/collection/${collection.slug}`} key={collection.id}>
                  <Card className="group border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg mb-6 overflow-hidden">
                        <div className="transform group-hover:scale-105 transition-transform">
                          {getCollectionIcon(collection.slug)}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-light text-gray-900 text-center mb-3">
                        {collection.name}
                      </h3>
                      {collection.description && (
                        <p className="text-sm text-gray-600 text-center leading-relaxed line-clamp-2">
                          {collection.description}
                        </p>
                      )}
                    </CardContent>
                    <CardFooter className="px-6 pb-6">
                      <Button variant="outline" className="w-full text-gray-900 border-gray-300 hover:bg-gray-50 group-hover:border-gray-400 transition-colors">
                        Browse Category
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          )}

          {/* Collections Counter */}
          {!isLoading && !error && (
            <div className="text-center mt-12">
              <p className="text-gray-600">
                {collections?.length || 0} door collection categories available
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default StandardDoors;