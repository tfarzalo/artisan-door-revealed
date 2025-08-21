import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCollections } from "@/hooks/useCollections";
import { Skeleton } from "@/components/ui/skeleton";

const BuildersDoors = () => {
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
      default:
        return <div className="relative w-20 h-40 bg-white border-2 border-gray-300 rounded-t-lg shadow-md">
            <div className="absolute right-2 top-1/2 w-2 h-5 bg-gray-800 rounded-full"></div>
          </div>;
    }
  };

  return <div className="min-h-screen bg-white">
      <main className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Navigation Menu */}
          <div className="flex justify-center mb-12">
            <nav className="flex space-x-8">
              <Link to="/" className="text-lg text-gray-600 hover:text-[#cb7524] transition-colors">
                Standard Doors
              </Link>
              <Link to="/builders-doors" className="text-lg text-[#cb7524] font-semibold border-b-2 border-[#cb7524] pb-1">
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
            <h1 className="text-5xl md:text-6xl mb-6 tracking-tight text-[#cb7524] font-semibold">Rio Quick-Ship Doors</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed px-[20px] py-0">Builder-focused door solutions that are competitively priced and ready to ship. Perfect for volume projects with convenient packaging and mix & match options.</p>
            
            {/* Key Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-[#cb7524] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">$</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Competitively Priced</h3>
                <p className="text-sm text-gray-600">Budget-friendly solutions</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-[#cb7524] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">⚡</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Ready to Ship</h3>
                <p className="text-sm text-gray-600">Quick delivery times</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-[#cb7524] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">📦</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Conveniently Packaged</h3>
                <p className="text-sm text-gray-600">Easy handling</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-[#cb7524] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">🔧</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Mix & Match Options</h3>
                <p className="text-sm text-gray-600">Flexible configurations</p>
              </div>
            </div>
          </div>
          
          {/* Rio Door Models Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* Rio Aberdeen 1LT */}
            <Card className="group border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg mb-6 overflow-hidden">
                  <div className="transform group-hover:scale-105 transition-transform">
                    <div className="relative w-20 h-40 bg-white border-2 border-gray-300 rounded-t-lg shadow-md">
                      <div className="absolute right-2 top-1/2 w-2 h-5 bg-gray-800 rounded-full"></div>
                      <div className="absolute inset-4 border border-gray-200 rounded-sm">
                        <div className="absolute top-2 left-2 right-2 h-6 bg-blue-100 border border-blue-200 rounded-sm"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-light text-gray-900 text-center mb-3">
                  Rio Aberdeen 1LT
                </h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>Config:</strong> E-04</p>
                  <p><strong>Sizes:</strong> 5'4″×6'8″, 5'4″×8'0″</p>
                  <p><strong>Glass:</strong> Clear/Flemish IG Low E</p>
                  <p><strong>Handing:</strong> RHIS, LHIS</p>
                  <p><strong>Finish:</strong> Unfinished</p>
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6">
                <Button variant="outline" className="w-full text-gray-900 border-gray-300 hover:bg-gray-50 group-hover:border-gray-400 transition-colors">
                  View Details
                </Button>
              </CardFooter>
            </Card>

            {/* Rio Aberdeen 6LT SDL */}
            <Card className="group border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg mb-6 overflow-hidden">
                  <div className="transform group-hover:scale-105 transition-transform">
                    <div className="relative w-20 h-40 bg-white border-2 border-gray-300 rounded-t-lg shadow-md">
                      <div className="absolute right-2 top-1/2 w-2 h-5 bg-gray-800 rounded-full"></div>
                      <div className="absolute inset-4 grid grid-cols-2 gap-1">
                        {[...Array(6)].map((_, i) => (
                          <div key={i} className="bg-blue-100 border border-blue-200 rounded-sm"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-light text-gray-900 text-center mb-3">
                  Rio Aberdeen 6LT SDL
                </h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>Config:</strong> E-04, E-17</p>
                  <p><strong>Sizes:</strong> 5'4″×8'0″, 6'0″×8'0″</p>
                  <p><strong>Glass:</strong> Clear/Flemish IG Low E</p>
                  <p><strong>Handing:</strong> RHIS, LHIS</p>
                  <p><strong>Finish:</strong> Unfinished</p>
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6">
                <Button variant="outline" className="w-full text-gray-900 border-gray-300 hover:bg-gray-50 group-hover:border-gray-400 transition-colors">
                  View Details
                </Button>
              </CardFooter>
            </Card>

            {/* Rio Alexandria 4LT TDL */}
            <Card className="group border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg mb-6 overflow-hidden">
                  <div className="transform group-hover:scale-105 transition-transform">
                    <div className="relative w-20 h-40 bg-white border-2 border-gray-300 rounded-t-lg shadow-md">
                      <div className="absolute right-2 top-1/2 w-2 h-5 bg-gray-800 rounded-full"></div>
                      <div className="absolute inset-4 grid grid-cols-2 grid-rows-2 gap-1">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className="bg-amber-100 border border-amber-200 rounded-sm"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-light text-gray-900 text-center mb-3">
                  Rio Alexandria 4LT TDL
                </h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>Config:</strong> E-01, E-04</p>
                  <p><strong>Sizes:</strong> 3'0″×8'0″, 6'0″×8'0″</p>
                  <p><strong>Glass:</strong> Clear Beveled/Flemish IG Low E</p>
                  <p><strong>Handing:</strong> RHIS, LHIS</p>
                  <p><strong>Finish:</strong> Unfinished (Chestnut available)</p>
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6">
                <Button variant="outline" className="w-full text-gray-900 border-gray-300 hover:bg-gray-50 group-hover:border-gray-400 transition-colors">
                  View Details
                </Button>
              </CardFooter>
            </Card>

            {/* Rio Alexandria 6LT TDL */}
            <Card className="group border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg mb-6 overflow-hidden">
                  <div className="transform group-hover:scale-105 transition-transform">
                    <div className="relative w-20 h-40 bg-white border-2 border-gray-300 rounded-t-lg shadow-md">
                      <div className="absolute right-2 top-1/2 w-2 h-5 bg-gray-800 rounded-full"></div>
                      <div className="absolute inset-4 grid grid-cols-2 grid-rows-3 gap-1">
                        {[...Array(6)].map((_, i) => (
                          <div key={i} className="bg-amber-100 border border-amber-200 rounded-sm"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-light text-gray-900 text-center mb-3">
                  Rio Alexandria 6LT TDL
                </h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>Config:</strong> E-01, E-04</p>
                  <p><strong>Sizes:</strong> Multiple sizes available</p>
                  <p><strong>Glass:</strong> Clear Beveled/Flemish IG Low E</p>
                  <p><strong>Handing:</strong> RHIS, LHIS</p>
                  <p><strong>Finish:</strong> Unfinished (Chestnut available)</p>
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6">
                <Button variant="outline" className="w-full text-gray-900 border-gray-300 hover:bg-gray-50 group-hover:border-gray-400 transition-colors">
                  View Details
                </Button>
              </CardFooter>
            </Card>

            {/* Rio Alexandria 8LT TDL */}
            <Card className="group border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg mb-6 overflow-hidden">
                  <div className="transform group-hover:scale-105 transition-transform">
                    <div className="relative w-20 h-40 bg-white border-2 border-gray-300 rounded-t-lg shadow-md">
                      <div className="absolute right-2 top-1/2 w-2 h-5 bg-gray-800 rounded-full"></div>
                      <div className="absolute inset-4 grid grid-cols-2 grid-rows-4 gap-1">
                        {[...Array(8)].map((_, i) => (
                          <div key={i} className="bg-amber-100 border border-amber-200 rounded-sm"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-light text-gray-900 text-center mb-3">
                  Rio Alexandria 8LT TDL
                </h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>Config:</strong> E-04</p>
                  <p><strong>Size:</strong> 5'4″×8'0″</p>
                  <p><strong>Glass:</strong> Flemish IG Low E</p>
                  <p><strong>Handing:</strong> RHIS, LHIS</p>
                  <p><strong>Finish:</strong> Unfinished</p>
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6">
                <Button variant="outline" className="w-full text-gray-900 border-gray-300 hover:bg-gray-50 group-hover:border-gray-400 transition-colors">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Product Counter */}
          <div className="text-center mt-12">
            <p className="text-gray-600">
              5 Rio Quick-Ship door models available
            </p>
          </div>
        </div>
      </main>
    </div>;
};

export default BuildersDoors;