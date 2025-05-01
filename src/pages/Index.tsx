
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import DoorCollection from "@/components/DoorCollection";
import AppHeader from "@/components/AppHeader";

const collections = [
  { id: "signature", name: "Signature Collection", modelPath: "/models/signature-door.glb" },
  { id: "traditional", name: "Traditional Collection", modelPath: "/models/traditional-door.glb" },
  { id: "modern", name: "Modern Collection", modelPath: "/models/modern-door.glb" },
  { id: "fullview", name: "Full View Collection", modelPath: "/models/fullview-door.glb" },
  { id: "port", name: "Port Collection", modelPath: "/models/port-door.glb" },
  { id: "custom", name: "Custom Designed", modelPath: "/models/custom-door.glb" },
];

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-luxury-text">
      {/* App-like header with search */}
      <AppHeader />
      
      <main className="flex-1 pt-16 pb-16 px-5">
        <div className="max-w-4xl mx-auto">
          {/* Title Section */}
          <div className="mb-8 mt-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-3">Select a Collection</h2>
            <p className="text-luxury-text/70 max-w-md mx-auto">
              Browse our curated door collections or search for specific styles
            </p>
          </div>
          
          {/* Collection Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.map((collection) => (
              <Link to={`/collection/${collection.id}`} key={collection.id}>
                <Card className="h-full hover:shadow-md transition-shadow border-luxury-text/10">
                  <CardContent className="p-4">
                    <div className="h-48 flex items-center justify-center bg-secondary/20 rounded-md mb-3">
                      <DoorCollection modelPath={collection.modelPath} />
                    </div>
                  </CardContent>
                  <CardFooter className="pb-4">
                    <h3 className="text-center w-full font-serif">{collection.name}</h3>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      
      {/* App-like bottom navigation */}
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

export default Index;
