import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCollections } from "@/hooks/useCollections";
import { Skeleton } from "@/components/ui/skeleton";

const OptionsAddons = () => {
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
              <Link to="/custom-doors" className="text-lg text-gray-600 hover:text-[#cb7524] transition-colors">
                Custom Doors
              </Link>
              <Link to="/options-addons" className="text-lg text-[#cb7524] font-semibold border-b-2 border-[#cb7524] pb-1">
                Options & Addons
              </Link>
            </nav>
          </div>
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl mb-6 tracking-tight text-[#cb7524] font-semibold">Options & Add-ons</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed px-[20px] py-0">Complete your door system with professional finishing, premium glass options, quality hardware, and decorative accents. Each option is carefully selected to enhance both beauty and performance.</p>
            
            {/* Key Categories */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto mb-12">
              <div className="text-center p-3">
                <div className="w-10 h-10 bg-[#cb7524] rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white text-sm font-bold">🎨</span>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">Prefinishing</h4>
                <p className="text-xs text-gray-600">Custom stains</p>
              </div>
              <div className="text-center p-3">
                <div className="w-10 h-10 bg-[#cb7524] rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white text-sm font-bold">🪟</span>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">Glass</h4>
                <p className="text-xs text-gray-600">Low-E options</p>
              </div>
              <div className="text-center p-3">
                <div className="w-10 h-10 bg-[#cb7524] rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white text-sm font-bold">🔧</span>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">Hinges & Sills</h4>
                <p className="text-xs text-gray-600">Premium hardware</p>
              </div>
              <div className="text-center p-3">
                <div className="w-10 h-10 bg-[#cb7524] rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white text-sm font-bold">🚪</span>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">Handlesets</h4>
                <p className="text-xs text-gray-600">Security systems</p>
              </div>
              <div className="text-center p-3">
                <div className="w-10 h-10 bg-[#cb7524] rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white text-sm font-bold">✨</span>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">Decorative</h4>
                <p className="text-xs text-gray-600">Accents & grilles</p>
              </div>
              <div className="text-center p-3">
                <div className="w-10 h-10 bg-[#cb7524] rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white text-sm font-bold">📐</span>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">Brickmould</h4>
                <p className="text-xs text-gray-600">Trim profiles</p>
              </div>
            </div>
          </div>
          
          {/* Options & Add-ons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* Prefinishing Options */}
            <Card className="group border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg mb-6 overflow-hidden">
                  <div className="transform group-hover:scale-105 transition-transform">
                    <div className="relative w-20 h-40 bg-gradient-to-b from-amber-800 to-amber-900 border-2 border-amber-700 rounded-t-lg shadow-md">
                      <div className="absolute right-2 top-1/2 w-2 h-5 bg-yellow-600 rounded-full"></div>
                      <div className="absolute top-3 left-3 right-3 bottom-3 rounded-sm bg-gradient-to-br from-amber-700 to-amber-800 opacity-70"></div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-light text-gray-900 text-center mb-3">
                  Prefinishing
                </h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>Options:</strong> Chestnut, Russet, Parchment, Coco, Cinnamon</p>
                  <p><strong>Wood Types:</strong> Mahogany, Knotty Alder, Accoya</p>
                  <p><strong>Service:</strong> Master artisan finishing</p>
                  <p><strong>Protection:</strong> Custom stain + clear coat</p>
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6">
                <Button variant="outline" className="w-full text-gray-900 border-gray-300 hover:bg-gray-50 group-hover:border-gray-400 transition-colors">
                  View Finishes
                </Button>
              </CardFooter>
            </Card>

            {/* Glass Options */}
            <Card className="group border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg mb-6 overflow-hidden">
                  <div className="transform group-hover:scale-105 transition-transform">
                    <div className="relative w-20 h-40 bg-white border-2 border-gray-300 rounded-t-lg shadow-md">
                      <div className="absolute right-2 top-1/2 w-2 h-5 bg-gray-800 rounded-full"></div>
                      <div className="absolute inset-4 rounded-sm bg-gradient-to-br from-blue-50 via-transparent to-blue-100 border border-blue-200">
                        <div className="absolute inset-2 bg-white/30 backdrop-blur-sm rounded-sm"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-light text-gray-900 text-center mb-3">
                  Glass Options
                </h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>Type:</strong> Low-E (low-emissivity)</p>
                  <p><strong>Options:</strong> Clear, Flemish, Seedy, Fluted</p>
                  <p><strong>Privacy:</strong> Ratings 1-9 available</p>
                  <p><strong>Benefits:</strong> UV protection, energy efficient</p>
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6">
                <Button variant="outline" className="w-full text-gray-900 border-gray-300 hover:bg-gray-50 group-hover:border-gray-400 transition-colors">
                  Glass Types
                </Button>
              </CardFooter>
            </Card>

            {/* Hinges & Sills */}
            <Card className="group border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg mb-6 overflow-hidden">
                  <div className="transform group-hover:scale-105 transition-transform">
                    <div className="relative w-20 h-40 bg-white border-2 border-gray-300 rounded-t-lg shadow-md">
                      <div className="absolute right-2 top-1/2 w-2 h-5 bg-gray-800 rounded-full"></div>
                      <div className="absolute right-1 top-4 w-3 h-8 bg-gray-700 rounded-sm"></div>
                      <div className="absolute right-1 bottom-4 w-3 h-8 bg-gray-700 rounded-sm"></div>
                      <div className="absolute bottom-1 left-3 right-3 h-2 bg-gray-600 rounded-sm"></div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-light text-gray-900 text-center mb-3">
                  Hinges & Sills
                </h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>Hinges:</strong> 4×4 Ball Bearing, Concealed</p>
                  <p><strong>Finishes:</strong> Oil Rubbed Bronze, Satin Nickel</p>
                  <p><strong>Sills:</strong> Adjustable Inswing, Outswing Bump</p>
                  <p><strong>Special:</strong> ADA compliant options</p>
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6">
                <Button variant="outline" className="w-full text-gray-900 border-gray-300 hover:bg-gray-50 group-hover:border-gray-400 transition-colors">
                  Hardware Options
                </Button>
              </CardFooter>
            </Card>

            {/* Multipoint Locking */}
            <Card className="group border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg mb-6 overflow-hidden">
                  <div className="transform group-hover:scale-105 transition-transform">
                    <div className="relative w-20 h-40 bg-white border-2 border-gray-300 rounded-t-lg shadow-md">
                      <div className="absolute right-2 top-1/2 w-2 h-5 bg-yellow-600 rounded-full"></div>
                      <div className="absolute left-1 top-2 w-1 h-4 bg-gray-800 rounded-full"></div>
                      <div className="absolute left-1 top-1/2 w-3 h-6 bg-gray-900 rounded-sm transform -translate-y-1/2"></div>
                      <div className="absolute left-1 bottom-2 w-1 h-4 bg-gray-800 rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-light text-gray-900 text-center mb-3">
                  Multipoint Locking
                </h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>System:</strong> Ashland® 3-Point Lock</p>
                  <p><strong>Features:</strong> Vertical shootbolts + deadbolt</p>
                  <p><strong>Material:</strong> Stainless steel construction</p>
                  <p><strong>Recommended:</strong> Doors 8'0″ and taller</p>
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6">
                <Button variant="outline" className="w-full text-gray-900 border-gray-300 hover:bg-gray-50 group-hover:border-gray-400 transition-colors">
                  Lock Systems
                </Button>
              </CardFooter>
            </Card>

            {/* Handlesets */}
            <Card className="group border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg mb-6 overflow-hidden">
                  <div className="transform group-hover:scale-105 transition-transform">
                    <div className="relative w-20 h-40 bg-white border-2 border-gray-300 rounded-t-lg shadow-md">
                      <div className="absolute right-2 top-1/2 w-3 h-8 bg-yellow-600 rounded-lg"></div>
                      <div className="absolute right-3 top-1/2 w-1 h-4 bg-gray-800 rounded-full transform -translate-y-1/2"></div>
                      <div className="absolute right-1 top-1/4 w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-light text-gray-900 text-center mb-3">
                  Handlesets
                </h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>Types:</strong> Multipoint & Non-multipoint</p>
                  <p><strong>Styles:</strong> Traditional to modern designs</p>
                  <p><strong>Smart Options:</strong> Electronic lock integration</p>
                  <p><strong>Finishes:</strong> Multiple finish options</p>
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6">
                <Button variant="outline" className="w-full text-gray-900 border-gray-300 hover:bg-gray-50 group-hover:border-gray-400 transition-colors">
                  Handle Styles
                </Button>
              </CardFooter>
            </Card>

            {/* Decorative Accents */}
            <Card className="group border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg mb-6 overflow-hidden">
                  <div className="transform group-hover:scale-105 transition-transform">
                    <div className="relative w-20 h-40 bg-white border-2 border-gray-300 rounded-t-lg shadow-md">
                      <div className="absolute right-2 top-1/2 w-2 h-5 bg-gray-800 rounded-full"></div>
                      <div className="absolute top-3 left-4 w-1 h-1 bg-gray-800 rounded-full"></div>
                      <div className="absolute top-6 left-6 w-1 h-1 bg-gray-800 rounded-full"></div>
                      <div className="absolute bottom-6 left-4 w-1 h-1 bg-gray-800 rounded-full"></div>
                      <div className="absolute bottom-3 left-6 w-1 h-1 bg-gray-800 rounded-full"></div>
                      <div className="absolute top-8 left-3 right-3 h-px bg-gray-600"></div>
                      <div className="absolute bottom-8 left-3 right-3 h-px bg-gray-600"></div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-light text-gray-900 text-center mb-3">
                  Decorative Accents
                </h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>Clavos:</strong> Square & round wrought-iron</p>
                  <p><strong>Straps:</strong> Hinge & corner decorative hardware</p>
                  <p><strong>Grilles:</strong> Tall & short protective grilles</p>
                  <p><strong>Style:</strong> Rustic to elegant finishes</p>
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6">
                <Button variant="outline" className="w-full text-gray-900 border-gray-300 hover:bg-gray-50 group-hover:border-gray-400 transition-colors">
                  Decorative Options
                </Button>
              </CardFooter>
            </Card>

            {/* Brickmould & Casing */}
            <Card className="group border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg mb-6 overflow-hidden">
                  <div className="transform group-hover:scale-105 transition-transform">
                    <div className="relative w-20 h-40 bg-white border-2 border-gray-300 rounded-t-lg shadow-md">
                      <div className="absolute right-2 top-1/2 w-2 h-5 bg-gray-800 rounded-full"></div>
                      <div className="absolute inset-0 border-4 border-amber-700 rounded-t-lg"></div>
                      <div className="absolute top-2 left-2 right-2 h-1 bg-amber-600 rounded-full"></div>
                      <div className="absolute bottom-2 left-2 right-2 h-1 bg-amber-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-light text-gray-900 text-center mb-3">
                  Brickmould & Casing
                </h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>Standard:</strong> 180 (Mahogany), S4S (Alder)</p>
                  <p><strong>Profiles:</strong> Williamsburg, RB3, 445, 470</p>
                  <p><strong>Premium:</strong> Lafayette decorative profile</p>
                  <p><strong>Usage:</strong> Both brickmould and casing</p>
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6">
                <Button variant="outline" className="w-full text-gray-900 border-gray-300 hover:bg-gray-50 group-hover:border-gray-400 transition-colors">
                  Trim Profiles
                </Button>
              </CardFooter>
            </Card>

            {/* Energy Star & Certifications */}
            <Card className="group border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg mb-6 overflow-hidden">
                  <div className="transform group-hover:scale-105 transition-transform">
                    <div className="relative w-20 h-40 bg-gradient-to-b from-blue-600 to-blue-700 border-2 border-blue-500 rounded-t-lg shadow-md">
                      <div className="absolute right-2 top-1/2 w-2 h-5 bg-yellow-400 rounded-full"></div>
                      <div className="absolute top-4 left-1/2 w-6 h-6 bg-white rounded-full transform -translate-x-1/2">
                        <div className="absolute top-1 left-1 w-4 h-4 bg-blue-600 rounded-full"></div>
                        <div className="absolute top-2 left-2 w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div className="absolute bottom-6 left-1/2 w-8 h-2 bg-white rounded-full transform -translate-x-1/2"></div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-light text-gray-900 text-center mb-3">
                  Certifications
                </h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>Energy Star:</strong> Qualified products</p>
                  <p><strong>NFRC:</strong> Certified ratings</p>
                  <p><strong>Accoya:</strong> Sustainable timber certified</p>
                  <p><strong>Quality:</strong> Industry standard compliance</p>
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6">
                <Button variant="outline" className="w-full text-gray-900 border-gray-300 hover:bg-gray-50 group-hover:border-gray-400 transition-colors">
                  View Certifications
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Options Counter */}
          <div className="text-center mt-12">
            <p className="text-gray-600">
              8 major option categories with hundreds of customization choices
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Contact your DSA representative for detailed specifications and pricing
            </p>
          </div>
        </div>
      </main>
    </div>;
};

export default OptionsAddons;