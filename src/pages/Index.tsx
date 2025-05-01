
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import DoorCollection from "@/components/DoorCollection";
import AppHeader from "@/components/AppHeader";
import { useCollections } from "@/hooks/useCollections";
import { Skeleton } from "@/components/ui/skeleton";

const Index = () => {
  const { data: collections, isLoading, error } = useCollections();

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
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="h-full border-luxury-text/10">
                  <CardContent className="p-4">
                    <Skeleton className="h-48 w-full rounded-md" />
                  </CardContent>
                  <CardFooter className="pb-4">
                    <Skeleton className="h-6 w-32 mx-auto" />
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-8 text-red-500">
              An error occurred while fetching collections. Please try again later.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {collections?.map((collection) => (
                <Link to={`/collection/${collection.slug}`} key={collection.id}>
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
          )}
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
