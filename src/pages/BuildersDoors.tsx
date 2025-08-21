import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const BuildersDoors = () => {
  // Rio Quick-Ship Door styles data
  const rioStyles = [
    {
      id: 1,
      name: "Rio Aberdeen 1LT",
      slug: "rio-aberdeen-1lt",
      configuration: "E-04",
      sizes: "5'4\" x 6'8\", 5'4\" x 8'0\"",
      glass: "Clear IG Low E, Flemish IG Low E",
      handing: "RHIS, LHIS",
      finish: "Unfinished"
    },
    {
      id: 2,
      name: "Rio Aberdeen 6LT SDL",
      slug: "rio-aberdeen-6lt-sdl",
      configuration: "E-04, E-17",
      sizes: "5'4\" x 8'0\", 6'0\" x 8'0\"",
      glass: "Clear IG Low E, Flemish IG Low E",
      handing: "RHIS, LHIS",
      finish: "Unfinished"
    },
    {
      id: 3,
      name: "Rio Alexandria 4LT TDL",
      slug: "rio-alexandria-4lt-tdl",
      configuration: "E-01, E-04",
      sizes: "3'0\" x 8'0\", 6'0\" x 8'0\"",
      glass: "Clear Beveled IG Low E, Flemish IG Low E",
      handing: "RHIS, LHIS",
      finish: "Unfinished (Chestnut pre-finish E-01 Clear Beveled RHIS only)"
    },
    {
      id: 4,
      name: "Rio Alexandria 6LT TDL",
      slug: "rio-alexandria-6lt-tdl",
      configuration: "E-01, E-04",
      sizes: "3'0\" x 6'8\", 3'0\" x 8'0\", 5'4\" x 8'0\", 6'0\" x 6'8\", 6'0\" x 8'0\"",
      glass: "Clear Beveled IG Low E, Flemish IG Low E",
      handing: "RHIS, LHIS",
      finish: "Unfinished (Chestnut pre-finish 3'0\" and 6'0\" x 8'0\" only)"
    },
    {
      id: 5,
      name: "Rio Alexandria 8LT TDL",
      slug: "rio-alexandria-8lt-tdl",
      configuration: "E-04",
      sizes: "5'4\" x 8'0\"",
      glass: "Flemish IG Low E",
      handing: "RHIS, LHIS",
      finish: "Unfinished"
    },
    {
      id: 6,
      name: "Rio Astoria Arch",
      slug: "rio-astoria-arch",
      configuration: "E-04",
      sizes: "5'4\" x 8'0\"",
      glass: "Clear IG Low E",
      handing: "RHIS, LHIS",
      finish: "Unfinished"
    },
    {
      id: 7,
      name: "Rio Jefferson 1LT",
      slug: "rio-jefferson-1lt",
      configuration: "E-04",
      sizes: "3'0\" x 8'0\", 5'4\" x 8'0\", 6'0\" x 8'0\"",
      glass: "Clear IG Low E, Flemish IG Low E",
      handing: "RHIS, LHIS",
      finish: "Unfinished"
    },
    {
      id: 8,
      name: "Rio Jefferson 6LT SDL",
      slug: "rio-jefferson-6lt-sdl",
      configuration: "E-04",
      sizes: "5'4\" x 8'0\", 6'0\" x 8'0\"",
      glass: "Clear IG Low E, Flemish IG Low E",
      handing: "RHIS, LHIS",
      finish: "Unfinished"
    }
  ];
  
  const getRioStyleIcon = (slug: string) => {
    const baseClass = "relative w-20 h-40 bg-white border-2 border-gray-300 rounded-t-lg shadow-md";
    const handleClass = "absolute right-2 top-1/2 w-2 h-5 bg-gray-800 rounded-full";
    
    switch (true) {
      case slug.includes('aberdeen-1lt'):
        return <div className={baseClass}>
            <div className={handleClass}></div>
            <div className="absolute inset-3 border border-gray-200 rounded-sm">
              <div className="absolute top-4 left-2 right-2 h-6 border border-gray-200 rounded-sm bg-blue-50"></div>
            </div>
          </div>;
      case slug.includes('aberdeen-6lt'):
        return <div className={baseClass}>
            <div className={handleClass}></div>
            <div className="absolute inset-3">
              <div className="grid grid-cols-2 gap-1 h-full p-1">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="border border-gray-200 bg-blue-50 rounded-sm"></div>
                ))}
              </div>
            </div>
          </div>;
      case slug.includes('alexandria-4lt'):
        return <div className={baseClass}>
            <div className={handleClass}></div>
            <div className="absolute inset-3">
              <div className="grid grid-cols-2 grid-rows-2 gap-1 h-full p-1">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="border border-gray-200 bg-amber-50 rounded-sm"></div>
                ))}
              </div>
            </div>
          </div>;
      case slug.includes('alexandria-6lt'):
        return <div className={baseClass}>
            <div className={handleClass}></div>
            <div className="absolute inset-3">
              <div className="grid grid-cols-2 gap-1 h-full p-1">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="border border-gray-200 bg-amber-50 rounded-sm"></div>
                ))}
              </div>
            </div>
          </div>;
      case slug.includes('alexandria-8lt'):
        return <div className={baseClass}>
            <div className={handleClass}></div>
            <div className="absolute inset-3">
              <div className="grid grid-cols-2 gap-1 h-full p-1">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="border border-gray-200 bg-amber-50 rounded-sm"></div>
                ))}
              </div>
            </div>
          </div>;
      case slug.includes('astoria-arch'):
        return <div className={baseClass}>
            <div className={handleClass}></div>
            <div className="absolute inset-3 border border-gray-200 rounded-sm">
              <div className="absolute top-2 left-2 right-2 h-8 bg-green-50 rounded-t-full border border-gray-200"></div>
            </div>
          </div>;
      case slug.includes('jefferson-1lt'):
        return <div className={baseClass}>
            <div className={handleClass}></div>
            <div className="absolute inset-3 border border-gray-200 rounded-sm">
              <div className="absolute top-4 left-2 right-2 h-6 border border-gray-200 rounded-sm bg-purple-50"></div>
            </div>
          </div>;
      case slug.includes('jefferson-6lt'):
        return <div className={baseClass}>
            <div className={handleClass}></div>
            <div className="absolute inset-3">
              <div className="grid grid-cols-2 gap-1 h-full p-1">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="border border-gray-200 bg-purple-50 rounded-sm"></div>
                ))}
              </div>
            </div>
          </div>;
      default:
        return <div className={baseClass}>
            <div className={handleClass}></div>
          </div>;
    }
  };

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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed px-[20px] py-0">High-quality doors ready to ship for your building projects. Cost-effective solutions with quick turnaround times.</p>
            <div className="flex flex-wrap justify-center gap-6 text-lg text-gray-700 font-medium">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#cb7524] rounded-full"></div>
                <span>Competitively Priced</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#cb7524] rounded-full"></div>
                <span>Ready to Ship</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#cb7524] rounded-full"></div>
                <span>Conveniently Packaged</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#cb7524] rounded-full"></div>
                <span>Mix & Match Options</span>
              </div>
            </div>
          </div>
          
          {/* Rio Styles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {rioStyles.map(style => (
              <Link to={`/door/${style.slug}`} key={style.id}>
                <Card className="group border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg mb-6 overflow-hidden">
                      <div className="transform group-hover:scale-105 transition-transform">
                        {getRioStyleIcon(style.slug)}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-light text-gray-900 text-center mb-3">
                      {style.name}
                    </h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div>
                        <span className="font-medium">Config:</span> {style.configuration}
                      </div>
                      <div>
                        <span className="font-medium">Sizes:</span> {style.sizes}
                      </div>
                      <div>
                        <span className="font-medium">Glass:</span> {style.glass}
                      </div>
                      <div>
                        <span className="font-medium">Handing:</span> {style.handing}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="px-6 pb-6">
                    <Button variant="outline" className="w-full text-gray-900 border-gray-300 hover:bg-gray-50 group-hover:border-gray-400 transition-colors">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>

          {/* Styles Counter */}
          <div className="text-center mt-12">
            <p className="text-gray-600">
              {rioStyles.length} Rio Quick-Ship door styles available
            </p>
          </div>
        </div>
      </main>
    </div>;
};

export default BuildersDoors;