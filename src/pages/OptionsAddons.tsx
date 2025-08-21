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
  
  // Options and addon categories
  const optionsAddons = [
    {
      id: 'hardware-collection',
      name: 'Hardware Collection',
      description: 'Premium door hardware including handles, locks, hinges, and decorative elements',
      icon: <div className="relative w-20 h-40 bg-white border-2 border-gray-300 rounded-t-lg shadow-md">
        <div className="absolute right-2 top-1/2 w-3 h-6 bg-[#cb7524] rounded-sm shadow-sm"></div>
        <div className="absolute right-3 top-1/2 w-1 h-1 bg-gray-800 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute inset-3 border border-gray-200 rounded-sm"></div>
      </div>
    },
    {
      id: 'glass-options',
      name: 'Glass & Glazing',
      description: 'Decorative glass panels, sidelights, transoms, and energy-efficient glazing options',
      icon: <div className="relative w-20 h-40 bg-white border-2 border-gray-300 rounded-t-lg shadow-md">
        <div className="absolute right-2 top-1/2 w-2 h-5 bg-gray-800 rounded-full"></div>
        <div className="absolute inset-3 border border-gray-200 rounded-sm bg-gradient-to-br from-blue-50 to-cyan-50">
          <div className="absolute top-2 left-2 right-2 h-6 border border-blue-200 rounded-sm bg-blue-100 opacity-60"></div>
          <div className="absolute bottom-2 left-2 right-2 h-6 border border-blue-200 rounded-sm bg-blue-100 opacity-60"></div>
        </div>
      </div>
    },
    {
      id: 'security-features',
      name: 'Security Features',
      description: 'Advanced security systems, reinforced frames, multi-point locks, and smart access',
      icon: <div className="relative w-20 h-40 bg-white border-2 border-gray-300 rounded-t-lg shadow-md">
        <div className="absolute right-2 top-1/2 w-2 h-5 bg-gray-800 rounded-full"></div>
        <div className="absolute inset-3 border-2 border-red-400 rounded-sm">
          <div className="absolute top-1/2 left-1/2 w-2 h-3 bg-red-500 rounded-sm transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-2 right-2 w-1 h-1 bg-green-500 rounded-full"></div>
        </div>
      </div>
    },
    {
      id: 'weatherization',
      name: 'Weather Protection',
      description: 'Weatherstripping, thresholds, storm doors, and climate control accessories',
      icon: <div className="relative w-20 h-40 bg-white border-2 border-gray-300 rounded-t-lg shadow-md">
        <div className="absolute right-2 top-1/2 w-2 h-5 bg-gray-800 rounded-full"></div>
        <div className="absolute inset-3 border border-gray-200 rounded-sm bg-gradient-to-b from-gray-100 to-blue-100">
          <div className="absolute top-1 left-1 w-1 h-1 bg-blue-400 rounded-full"></div>
          <div className="absolute top-3 right-2 w-1 h-1 bg-blue-400 rounded-full"></div>
          <div className="absolute bottom-2 left-2 w-1 h-1 bg-blue-400 rounded-full"></div>
        </div>
      </div>
    },
    {
      id: 'finishing-stains',
      name: 'Finishes & Stains',
      description: 'Custom stains, paints, protective coatings, and specialty finish treatments',
      icon: <div className="relative w-20 h-40 bg-white border-2 border-gray-300 rounded-t-lg shadow-md">
        <div className="absolute right-2 top-1/2 w-2 h-5 bg-gray-800 rounded-full"></div>
        <div className="absolute inset-3 border border-gray-200 rounded-sm">
          <div className="absolute top-1 left-1 right-1 h-2 bg-gradient-to-r from-amber-200 to-amber-400 rounded-sm"></div>
          <div className="absolute top-4 left-1 right-1 h-2 bg-gradient-to-r from-red-200 to-red-400 rounded-sm"></div>
          <div className="absolute bottom-1 left-1 right-1 h-2 bg-gradient-to-r from-green-200 to-green-400 rounded-sm"></div>
        </div>
      </div>
    },
    {
      id: 'smart-technology',
      name: 'Smart Technology',
      description: 'Smart locks, video doorbells, keyless entry, and home automation integration',
      icon: <div className="relative w-20 h-40 bg-white border-2 border-gray-300 rounded-t-lg shadow-md">
        <div className="absolute right-2 top-1/2 w-2 h-5 bg-gray-800 rounded-full"></div>
        <div className="absolute inset-3 border border-gray-200 rounded-sm">
          <div className="absolute top-2 left-2 w-3 h-2 bg-blue-500 rounded-sm"></div>
          <div className="absolute top-2 right-2 w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
          <div className="absolute bottom-2 left-2 right-2 h-1 bg-gray-300 rounded-sm"></div>
        </div>
      </div>
    },
    {
      id: 'decorative-elements',
      name: 'Decorative Elements',
      description: 'Carvings, moldings, panels, medallions, and architectural accent pieces',
      icon: <div className="relative w-20 h-40 bg-white border-2 border-gray-300 rounded-t-lg shadow-md">
        <div className="absolute right-2 top-1/2 w-2 h-5 bg-gray-800 rounded-full"></div>
        <div className="absolute inset-3 border border-gray-200 rounded-sm">
          <div className="absolute top-2 left-2 w-2 h-2 border border-purple-400 rounded-full"></div>
          <div className="absolute top-2 right-2 w-1 h-4 border border-purple-400 rounded-sm"></div>
          <div className="absolute bottom-2 left-2 right-2 h-1 border border-purple-400 rounded-sm"></div>
        </div>
      </div>
    },
    {
      id: 'installation-accessories',
      name: 'Installation & Tools',
      description: 'Professional installation tools, templates, and hardware mounting systems',
      icon: <div className="relative w-20 h-40 bg-white border-2 border-gray-300 rounded-t-lg shadow-md">
        <div className="absolute right-2 top-1/2 w-2 h-5 bg-gray-800 rounded-full"></div>
        <div className="absolute inset-3">
          <div className="absolute top-2 left-2 w-1 h-8 bg-orange-400 rounded-sm"></div>
          <div className="absolute top-4 left-4 right-2 h-1 bg-orange-400 rounded-sm"></div>
          <div className="absolute bottom-3 right-2 w-2 h-2 bg-gray-400 rounded-sm"></div>
        </div>
      </div>
    }
  ];

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
            <h1 className="text-5xl md:text-6xl mb-6 tracking-tight text-[#cb7524] font-semibold">Options & Addons</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed px-[20px] py-0">Enhance your doors with premium hardware, glass options, finishes, and accessories. Complete your installation with professional-grade components.</p>
          </div>
          
          {/* Options & Addons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {optionsAddons.map(option => 
              <Card key={option.id} className="group border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg mb-6 overflow-hidden">
                    <div className="transform group-hover:scale-105 transition-transform">
                      {option.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-light text-gray-900 text-center mb-3">
                    {option.name}
                  </h3>
                  <p className="text-sm text-gray-600 text-center leading-relaxed line-clamp-2">
                    {option.description}
                  </p>
                </CardContent>
                <CardFooter className="px-6 pb-6">
                  <Button variant="outline" className="w-full text-gray-900 border-gray-300 hover:bg-gray-50 group-hover:border-gray-400 transition-colors">
                    Browse Options
                  </Button>
                </CardFooter>
              </Card>
            )}
          </div>

          {/* Options Counter */}
          <div className="text-center mt-12">
            <p className="text-gray-600">
              {optionsAddons.length} option categories available
            </p>
          </div>
        </div>
      </main>
    </div>;
};

export default OptionsAddons;