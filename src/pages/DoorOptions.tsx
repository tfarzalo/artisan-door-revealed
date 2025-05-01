
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronLeft, Menu, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent,
  CardFooter 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface DoorOption {
  id: string;
  name: string;
  size: string;
  material: string;
  glassType: string;
  image: string;
}

// Mock data - would be fetched from API in a real app
const doorsData: Record<string, DoorOption[]> = {
  "alexandria-modern-farmhouse": [
    { 
      id: "alexandria-mf-1", 
      name: "Alexandria MF-100", 
      size: "36″ × 80″", 
      material: "Mahogany", 
      glassType: "Clear", 
      image: "/images/door1.jpg" 
    },
    { 
      id: "alexandria-mf-2", 
      name: "Alexandria MF-200", 
      size: "42″ × 84″", 
      material: "Oak", 
      glassType: "Frosted", 
      image: "/images/door2.jpg" 
    },
    { 
      id: "alexandria-mf-3", 
      name: "Alexandria MF-300", 
      size: "36″ × 84″", 
      material: "Cherry", 
      glassType: "Textured", 
      image: "/images/door3.jpg" 
    },
    { 
      id: "alexandria-mf-4", 
      name: "Alexandria MF-400", 
      size: "42″ × 80″", 
      material: "Walnut", 
      glassType: "Stained", 
      image: "/images/door4.jpg" 
    },
  ],
  // More door options for other style combinations would be added here
};

const styleNames: Record<string, string> = {
  "modern-farmhouse": "Modern Farmhouse",
  "contemporary": "Contemporary",
  "transitional": "Transitional",
  "traditional": "Traditional",
  "art-deco": "Art Deco",
  "classic": "Classic",
  "victorian": "Victorian",
};

const DoorOptions = () => {
  const { collectionId, subcollectionId, styleId } = useParams<{ 
    collectionId: string, 
    subcollectionId: string,
    styleId: string
  }>();
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  
  const collection = collectionId || "";
  const subcollection = subcollectionId || "";
  const style = styleId || "";
  const styleName = styleNames[style] || "Style";
  
  const doorKey = `${subcollection}-${style}`;
  const doors = doorsData[doorKey] || [];

  return (
    <div className="flex flex-col min-h-screen bg-luxury-bg text-luxury-text">
      {/* App-like header */}
      <header className="fixed top-0 left-0 right-0 z-40 px-4 py-3 bg-white bg-opacity-95 backdrop-blur-sm border-b border-luxury-text/10 flex justify-between items-center">
        <div className="flex items-center">
          <button 
            className="p-2 hover:bg-luxury-text/5 rounded-full transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu className="w-5 h-5 text-luxury-text/80" />
          </button>
          <h1 className="text-lg font-serif ml-4">Artisan Doors</h1>
        </div>
        <div className="flex items-center space-x-2">
          <Link to="/search">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Search className="w-5 h-5 text-luxury-text/80" />
            </Button>
          </Link>
          <Link to="/filter">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Filter className="w-5 h-5 text-luxury-text/80" />
            </Button>
          </Link>
        </div>
      </header>
      
      {/* Side menu (same as previous pages) */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-5">
          <h2 className="text-xl font-serif mb-6">Browse</h2>
          <ul className="space-y-4">
            <li className="border-b border-luxury-text/10 pb-3">
              <Link to="/" className="text-luxury-text hover:text-luxury-accent transition-colors">Collections</Link>
            </li>
            <li className="border-b border-luxury-text/10 pb-3">
              <Link to="/search" className="text-luxury-text hover:text-luxury-accent transition-colors">Search</Link>
            </li>
            <li className="border-b border-luxury-text/10 pb-3">
              <Link to="/filter" className="text-luxury-text hover:text-luxury-accent transition-colors">Filter</Link>
            </li>
            <li className="border-b border-luxury-text/10 pb-3">
              <Link to="/favorites" className="text-luxury-text hover:text-luxury-accent transition-colors">Favorites</Link>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Overlay when menu is open */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
      
      <main className="flex-1 pt-16 pb-16 px-5">
        <div className="max-w-4xl mx-auto">
          {/* Back button and title */}
          <div className="flex items-center mt-4 mb-4">
            <Link to={`/collection/${collection}/subcollection/${subcollection}`}>
              <Button variant="ghost" size="icon" className="rounded-full mr-2">
                <ChevronLeft className="w-5 h-5" />
              </Button>
            </Link>
            <h2 className="text-2xl font-serif">{styleName} Doors</h2>
          </div>
          
          {/* Tabs for filtering */}
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mt-4">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="interior">Interior</TabsTrigger>
              <TabsTrigger value="exterior">Exterior</TabsTrigger>
              <TabsTrigger value="specialty">Specialty</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {doors.map((door) => (
                  <Link to={`/door/${door.id}`} key={door.id}>
                    <Card className="h-full hover:shadow-md transition-shadow border-luxury-text/10">
                      <CardContent className="p-4">
                        <div className="h-48 flex items-center justify-center bg-secondary/20 rounded-md mb-3">
                          <div className="relative w-[80px] h-[160px] bg-gradient-to-r from-wood-dark via-wood to-wood-light rounded-t-lg overflow-hidden shadow-md">
                            {/* Door handle */}
                            <div className="absolute right-3 top-1/2 w-2 h-6 bg-[#B8860B] rounded-full"></div>
                            
                            {/* Door panels - different for each door */}
                            <div className="absolute top-2 left-2 right-2 bottom-2 border-2 border-wood-dark/30 rounded"></div>
                            <div className="absolute top-4 left-4 right-4 bottom-4 border border-wood-dark/20 rounded"></div>
                          </div>
                        </div>
                        <h3 className="font-serif text-center">{door.name}</h3>
                        <div className="mt-2 text-xs text-luxury-text/70 flex justify-between">
                          <span>{door.size}</span>
                          <span>{door.material}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="interior" className="mt-4">
              <div className="text-center py-8 text-luxury-text/70">
                Interior door options will be displayed here
              </div>
            </TabsContent>
            
            <TabsContent value="exterior" className="mt-4">
              <div className="text-center py-8 text-luxury-text/70">
                Exterior door options will be displayed here
              </div>
            </TabsContent>
            
            <TabsContent value="specialty" className="mt-4">
              <div className="text-center py-8 text-luxury-text/70">
                Specialty door options will be displayed here
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      {/* App-like bottom navigation (same as previous pages) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-luxury-text/10 px-5 py-2 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link to="/">
            <button className="text-xs text-luxury-text opacity-100 flex flex-col items-center gap-1">
              <span className="block h-1 w-8 bg-luxury-accent"></span>
              Collections
            </button>
          </Link>
          <Link to="/search">
            <button className="text-xs text-luxury-text opacity-70 hover:opacity-100 flex flex-col items-center gap-1">
              <span className="block h-1 w-8 bg-transparent"></span>
              Search
            </button>
          </Link>
          <Link to="/filter">
            <button className="text-xs text-luxury-text opacity-70 hover:opacity-100 flex flex-col items-center gap-1">
              <span className="block h-1 w-8 bg-transparent"></span>
              Filter
            </button>
          </Link>
        </div>
        <Link to="/contact">
          <button className="text-xs px-3 py-2 bg-luxury-text text-white rounded">
            Request Info
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DoorOptions;
