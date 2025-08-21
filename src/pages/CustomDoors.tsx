import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCollections } from "@/hooks/useCollections";
import { Skeleton } from "@/components/ui/skeleton";
import { Home } from "lucide-react";

const CustomDoors = () => {
  const {
    data: collections,
    isLoading,
    error
  } = useCollections();
  
  // Custom door service categories
  const customServices = [
    {
      id: 'architectural-millwork',
      name: 'Architectural Millwork',
      description: 'Custom millwork and architectural elements crafted to your specifications',
      icon: <div className="relative w-20 h-40 bg-white border-2 border-[#cb7524] rounded-t-lg shadow-md">
        <div className="absolute right-2 top-1/2 w-2 h-5 bg-gray-800 rounded-full"></div>
        <div className="absolute inset-3 border border-[#cb7524] rounded-sm">
          <div className="absolute top-2 left-2 right-2 h-8 border border-[#cb7524] rounded-sm"></div>
          <div className="absolute bottom-2 left-2 right-2 h-8 border border-[#cb7524] rounded-sm"></div>
          <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-[#cb7524] rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>
    },
    {
      id: 'heritage-restoration',
      name: 'Heritage Restoration',
      description: 'Expert restoration of historical and heritage doors to original specifications',
      icon: <div className="relative w-20 h-40 bg-white border-2 border-[#8b5a2b] rounded-t-lg shadow-md">
        <div className="absolute right-2 top-1/2 w-2 h-5 bg-gray-800 rounded-full"></div>
        <div className="absolute inset-3">
          <div className="absolute top-1 left-1 right-1 h-6 border-2 border-[#8b5a2b] rounded-sm bg-gradient-to-b from-amber-50 to-amber-100"></div>
          <div className="absolute bottom-1 left-1 right-1 h-6 border-2 border-[#8b5a2b] rounded-sm bg-gradient-to-b from-amber-50 to-amber-100"></div>
        </div>
      </div>
    },
    {
      id: 'bespoke-design',
      name: 'Bespoke Design',
      description: 'One-of-a-kind doors designed from concept to completion for your unique vision',
      icon: <div className="relative w-20 h-40 bg-white border-2 border-purple-400 rounded-t-lg shadow-md">
        <div className="absolute right-2 top-1/2 w-2 h-5 bg-gray-800 rounded-full"></div>
        <div className="absolute inset-3">
          <div className="absolute top-2 left-2 w-3 h-3 border border-purple-400 rounded-full"></div>
          <div className="absolute top-2 right-2 w-2 h-8 border border-purple-400 rounded-sm"></div>
          <div className="absolute bottom-2 left-2 right-2 h-2 border border-purple-400 rounded-sm"></div>
        </div>
      </div>
    },
    {
      id: 'specialty-materials',
      name: 'Specialty Materials',
      description: 'Exotic woods, metals, and composite materials for unique door construction',
      icon: <div className="relative w-20 h-40 bg-white border-2 border-green-500 rounded-t-lg shadow-md">
        <div className="absolute right-2 top-1/2 w-2 h-5 bg-gray-800 rounded-full"></div>
        <div className="absolute inset-3">
          <div className="absolute top-1 left-1 right-1/2 bottom-1/2 border border-green-500 rounded-sm bg-green-50"></div>
          <div className="absolute top-1/2 left-1/2 right-1 bottom-1 border border-green-600 rounded-sm bg-green-100"></div>
          <div className="absolute bottom-1/2 left-1 right-1/2 top-1/2 border border-green-400 rounded-sm bg-green-25"></div>
        </div>
      </div>
    },
    {
      id: 'oversized-doors',
      name: 'Oversized & Pivot Doors',
      description: 'Large format and pivot doors for grand entrances and modern architecture',
      icon: <div className="relative w-20 h-40 bg-white border-2 border-blue-500 rounded-t-lg shadow-md">
        <div className="absolute left-1 top-1/2 w-2 h-5 bg-gray-800 rounded-full"></div>
        <div className="absolute inset-3 border-l-4 border-blue-500">
          <div className="absolute top-2 left-2 w-1 h-8 bg-blue-500 rounded-sm"></div>
          <div className="absolute bottom-2 left-2 w-1 h-8 bg-blue-500 rounded-sm"></div>
        </div>
      </div>
    },
    {
      id: 'commercial-custom',
      name: 'Commercial Custom',
      description: 'Custom commercial door solutions for offices, retail, and hospitality',
      icon: <div className="relative w-20 h-40 bg-white border-2 border-gray-400 rounded-t-lg shadow-md">
        <div className="absolute right-2 top-1/2 w-2 h-5 bg-gray-800 rounded-full"></div>
        <div className="absolute inset-3 border border-gray-400 rounded-sm">
          <div className="absolute top-1 left-1 right-1 h-4 bg-gray-100 border border-gray-300"></div>
          <div className="absolute bottom-1 left-1 right-1 h-4 bg-gray-100 border border-gray-300"></div>
        </div>
      </div>
    },
    {
      id: 'consultation-design',
      name: 'Design Consultation',
      description: 'Professional design consultation and 3D visualization services',
      icon: <div className="relative w-20 h-40 bg-white border-2 border-orange-400 rounded-t-lg shadow-md">
        <div className="absolute right-2 top-1/2 w-2 h-5 bg-gray-800 rounded-full"></div>
        <div className="absolute inset-3">
          <div className="absolute top-2 left-2 w-4 h-4 border border-orange-400 rounded-full bg-orange-50"></div>
          <div className="absolute bottom-2 left-2 right-2 h-1 bg-orange-400 rounded-sm"></div>
          <div className="absolute top-6 right-2 w-2 h-6 border border-orange-400 rounded-sm"></div>
        </div>
      </div>
    },
    {
      id: 'installation-service',
      name: 'Professional Installation',
      description: 'Expert installation services for all custom door projects',
      icon: <div className="relative w-20 h-40 bg-white border-2 border-red-400 rounded-t-lg shadow-md">
        <div className="absolute right-2 top-1/2 w-2 h-5 bg-gray-800 rounded-full"></div>
        <div className="absolute inset-3">
          <div className="absolute top-2 left-2 w-1 h-8 bg-red-400 rounded-sm"></div>
          <div className="absolute top-4 left-4 right-2 h-1 bg-red-400 rounded-sm"></div>
          <div className="absolute bottom-2 left-2 right-2 h-1 bg-red-400 rounded-sm"></div>
        </div>
      </div>
    }
  ];

  return <div className="min-h-screen bg-white">
      <main className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Navigation Menu */}
          <div className="flex justify-center mb-12">
            <nav className="flex items-center space-x-8">
              <Link to="/" className="text-lg text-gray-600 hover:text-[#cb7524] transition-colors flex items-center gap-2">
                <Home size={20} />
                Home
              </Link>
              <Link to="/standard-doors" className="text-lg text-gray-600 hover:text-[#cb7524] transition-colors">
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed px-[20px] py-0">Unique, made-to-order doors crafted to your exact specifications. From architectural millwork to one-of-a-kind designs, we bring your vision to life.</p>
          </div>
          
          {/* Custom Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {customServices.map(service => 
              <Card key={service.id} className="group border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg mb-6 overflow-hidden">
                    <div className="transform group-hover:scale-105 transition-transform">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-light text-gray-900 text-center mb-3">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-600 text-center leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                </CardContent>
                <CardFooter className="px-6 pb-6">
                  <Button variant="outline" className="w-full text-gray-900 border-gray-300 hover:bg-gray-50 group-hover:border-gray-400 transition-colors">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            )}
          </div>

          {/* Services Counter */}
          <div className="text-center mt-12">
            <p className="text-gray-600">
              {customServices.length} custom door services available
            </p>
          </div>
        </div>
      </main>
    </div>;
};

export default CustomDoors;