import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCollections } from "@/hooks/useCollections";
import { Skeleton } from "@/components/ui/skeleton";

const CustomDoors = () => {
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
              <Link to="/builders-doors" className="text-lg text-gray-600 hover:text-[#cb7524] transition-colors">
                Builder's Doors
              </Link>
              <Link to="/custom-doors" className="text-lg text-[#cb7524] font-semibold border-b-2 border-[#cb7524] pb-1">
                Custom Doors
              </Link>
              <Link to="/options-addons" className="text-lg text-gray-600 hover:text-[#cb7524] transition-colors">
                Options & Addons
              </Link>
            </nav>
          </div>
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl mb-6 tracking-tight text-[#cb7524] font-semibold">Custom Doors</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed px-[20px] py-0">Bring your inspiration to life with custom design specialists. From unique configurations to decorative glass designs, we create one-of-a-kind entryways crafted by real wood artisans.</p>
            
            {/* Key Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-[#cb7524] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">✨</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Custom Configurations</h3>
                <p className="text-sm text-gray-600">Unique sizes & designs</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-[#cb7524] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">🎨</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Decorative Glass</h3>
                <p className="text-sm text-gray-600">Custom & leaded designs</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-[#cb7524] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">🔧</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Wrought Iron</h3>
                <p className="text-sm text-gray-600">Decorative ironwork</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-[#cb7524] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">🪵</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Premium Timber</h3>
                <p className="text-sm text-gray-600">Finest wood materials</p>
              </div>
            </div>
          </div>
          
          {/* Custom Design Elements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* Custom Glass Design */}
            <Card className="group border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg mb-6 overflow-hidden">
                  <div className="transform group-hover:scale-105 transition-transform">
                    <div className="relative w-20 h-40 bg-white border-2 border-gray-300 rounded-t-lg shadow-md">
                      <div className="absolute right-2 top-1/2 w-2 h-5 bg-gray-800 rounded-full"></div>
                      <div className="absolute inset-4 rounded-sm bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 border border-blue-200">
                        <div className="absolute inset-2 bg-white/30 rounded-full"></div>
                        <div className="absolute top-1 left-1 w-2 h-2 bg-blue-300 rounded-full"></div>
                        <div className="absolute bottom-1 right-1 w-2 h-2 bg-purple-300 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-light text-gray-900 text-center mb-3">
                  Custom Glass Design
                </h3>
                <p className="text-sm text-gray-600 text-center leading-relaxed line-clamp-3">
                  Unique decorative glass patterns and designs tailored to your aesthetic preferences and architectural style.
                </p>
              </CardContent>
              <CardFooter className="px-6 pb-6">
                <Button variant="outline" className="w-full text-gray-900 border-gray-300 hover:bg-gray-50 group-hover:border-gray-400 transition-colors">
                  Explore Options
                </Button>
              </CardFooter>
            </Card>

            {/* Custom Leaded Glass */}
            <Card className="group border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg mb-6 overflow-hidden">
                  <div className="transform group-hover:scale-105 transition-transform">
                    <div className="relative w-20 h-40 bg-white border-2 border-gray-300 rounded-t-lg shadow-md">
                      <div className="absolute right-2 top-1/2 w-2 h-5 bg-gray-800 rounded-full"></div>
                      <div className="absolute inset-4 rounded-sm border border-gray-400">
                        <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-px bg-gray-400">
                          {[...Array(9)].map((_, i) => (
                            <div key={i} className={`${i % 2 === 0 ? 'bg-amber-100' : 'bg-blue-100'} border-gray-400`}></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-light text-gray-900 text-center mb-3">
                  Custom Leaded Design
                </h3>
                <p className="text-sm text-gray-600 text-center leading-relaxed line-clamp-3">
                  Traditional leaded glass craftsmanship with modern techniques for timeless elegance and sophistication.
                </p>
              </CardContent>
              <CardFooter className="px-6 pb-6">
                <Button variant="outline" className="w-full text-gray-900 border-gray-300 hover:bg-gray-50 group-hover:border-gray-400 transition-colors">
                  View Patterns
                </Button>
              </CardFooter>
            </Card>

            {/* Custom Iron */}
            <Card className="group border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg mb-6 overflow-hidden">
                  <div className="transform group-hover:scale-105 transition-transform">
                    <div className="relative w-20 h-40 bg-white border-2 border-gray-300 rounded-t-lg shadow-md">
                      <div className="absolute right-2 top-1/2 w-2 h-5 bg-gray-800 rounded-full"></div>
                      <div className="absolute inset-4 rounded-sm border border-gray-200">
                        <div className="absolute inset-2 flex items-center justify-center">
                          <div className="w-8 h-12 border-2 border-gray-700 rounded-full bg-gray-100"></div>
                          <div className="absolute top-1 left-1/2 w-1 h-8 bg-gray-700 transform -translate-x-1/2"></div>
                          <div className="absolute bottom-1 left-1/2 w-6 h-1 bg-gray-700 transform -translate-x-1/2"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-light text-gray-900 text-center mb-3">
                  Custom Iron
                </h3>
                <p className="text-sm text-gray-600 text-center leading-relaxed line-clamp-3">
                  Decorative wrought iron designs for slabs, transoms, or side lites with intricate patterns and details.
                </p>
              </CardContent>
              <CardFooter className="px-6 pb-6">
                <Button variant="outline" className="w-full text-gray-900 border-gray-300 hover:bg-gray-50 group-hover:border-gray-400 transition-colors">
                  Iron Options
                </Button>
              </CardFooter>
            </Card>

            {/* Custom Transom */}
            <Card className="group border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg mb-6 overflow-hidden">
                  <div className="transform group-hover:scale-105 transition-transform">
                    <div className="relative w-20 h-40 bg-white border-2 border-gray-300 rounded-t-lg shadow-md">
                      <div className="absolute right-2 top-1/2 w-2 h-5 bg-gray-800 rounded-full"></div>
                      <div className="absolute top-2 left-3 right-3 h-8 bg-blue-100 border border-blue-200 rounded-sm">
                        <div className="absolute inset-1 border border-blue-300 rounded-sm"></div>
                      </div>
                      <div className="absolute bottom-4 left-3 right-3 top-12 border border-gray-200 rounded-sm"></div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-light text-gray-900 text-center mb-3">
                  Custom Transom
                </h3>
                <p className="text-sm text-gray-600 text-center leading-relaxed line-clamp-3">
                  Custom transom designs to complement your door and enhance natural light flow into your space.
                </p>
              </CardContent>
              <CardFooter className="px-6 pb-6">
                <Button variant="outline" className="w-full text-gray-900 border-gray-300 hover:bg-gray-50 group-hover:border-gray-400 transition-colors">
                  Transom Styles
                </Button>
              </CardFooter>
            </Card>

            {/* Mahogany */}
            <Card className="group border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg mb-6 overflow-hidden">
                  <div className="transform group-hover:scale-105 transition-transform">
                    <div className="relative w-20 h-40 bg-gradient-to-b from-amber-800 to-amber-900 border-2 border-amber-700 rounded-t-lg shadow-md">
                      <div className="absolute right-2 top-1/2 w-2 h-5 bg-yellow-600 rounded-full"></div>
                      <div className="absolute inset-4 border border-amber-600 rounded-sm opacity-60"></div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-light text-gray-900 text-center mb-3">
                  Mahogany
                </h3>
                <p className="text-sm text-gray-600 text-center leading-relaxed line-clamp-3">
                  Premium mahogany timber with rich grain patterns and natural durability for lasting beauty.
                </p>
              </CardContent>
              <CardFooter className="px-6 pb-6">
                <Button variant="outline" className="w-full text-gray-900 border-gray-300 hover:bg-gray-50 group-hover:border-gray-400 transition-colors">
                  View Finishes
                </Button>
              </CardFooter>
            </Card>

            {/* Knotty Alder */}
            <Card className="group border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg mb-6 overflow-hidden">
                  <div className="transform group-hover:scale-105 transition-transform">
                    <div className="relative w-20 h-40 bg-gradient-to-b from-amber-600 to-amber-700 border-2 border-amber-600 rounded-t-lg shadow-md">
                      <div className="absolute right-2 top-1/2 w-2 h-5 bg-yellow-500 rounded-full"></div>
                      <div className="absolute top-6 left-6 w-2 h-2 bg-amber-800 rounded-full"></div>
                      <div className="absolute bottom-8 left-8 w-1 h-1 bg-amber-900 rounded-full"></div>
                      <div className="absolute inset-4 border border-amber-500 rounded-sm opacity-60"></div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-light text-gray-900 text-center mb-3">
                  Knotty Alder
                </h3>
                <p className="text-sm text-gray-600 text-center leading-relaxed line-clamp-3">
                  Rustic knotty alder with distinctive character marks and warm tones for a natural aesthetic.
                </p>
              </CardContent>
              <CardFooter className="px-6 pb-6">
                <Button variant="outline" className="w-full text-gray-900 border-gray-300 hover:bg-gray-50 group-hover:border-gray-400 transition-colors">
                  Explore Wood
                </Button>
              </CardFooter>
            </Card>

            {/* Accoya */}
            <Card className="group border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg mb-6 overflow-hidden">
                  <div className="transform group-hover:scale-105 transition-transform">
                    <div className="relative w-20 h-40 bg-gradient-to-b from-yellow-100 to-yellow-200 border-2 border-yellow-300 rounded-t-lg shadow-md">
                      <div className="absolute right-2 top-1/2 w-2 h-5 bg-yellow-600 rounded-full"></div>
                      <div className="absolute inset-4 border border-yellow-400 rounded-sm opacity-60"></div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-light text-gray-900 text-center mb-3">
                  Accoya
                </h3>
                <p className="text-sm text-gray-600 text-center leading-relaxed line-clamp-3">
                  Sustainably modified timber with enhanced durability and stability, perfect for extreme climates.
                </p>
              </CardContent>
              <CardFooter className="px-6 pb-6">
                <Button variant="outline" className="w-full text-gray-900 border-gray-300 hover:bg-gray-50 group-hover:border-gray-400 transition-colors">
                  Learn More
                </Button>
              </CardFooter>
            </Card>

            {/* Premium Options */}
            <Card className="group border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg mb-6 overflow-hidden">
                  <div className="transform group-hover:scale-105 transition-transform">
                    <div className="relative w-20 h-40 bg-gradient-to-b from-gray-700 to-gray-800 border-2 border-gray-600 rounded-t-lg shadow-md">
                      <div className="absolute right-2 top-1/2 w-2 h-5 bg-yellow-500 rounded-full"></div>
                      <div className="absolute inset-4 border border-gray-500 rounded-sm opacity-60"></div>
                      <div className="absolute top-3 left-3 w-1 h-1 bg-white rounded-full"></div>
                      <div className="absolute bottom-3 right-3 w-1 h-1 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-light text-gray-900 text-center mb-3">
                  Premium Woods
                </h3>
                <p className="text-sm text-gray-600 text-center leading-relaxed line-clamp-3">
                  American Walnut, White Oak, and primed options for the ultimate in luxury and customization.
                </p>
              </CardContent>
              <CardFooter className="px-6 pb-6">
                <Button variant="outline" className="w-full text-gray-900 border-gray-300 hover:bg-gray-50 group-hover:border-gray-400 transition-colors">
                  Premium Options
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Custom Options Counter */}
          <div className="text-center mt-12">
            <p className="text-gray-600">
              8 custom design elements and timber options available
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Work with our Custom Design Specialists to bring your vision to life
            </p>
          </div>
        </div>
      </main>
    </div>;
};

export default CustomDoors;