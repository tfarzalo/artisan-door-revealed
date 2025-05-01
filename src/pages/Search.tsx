
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import AppHeader from "@/components/AppHeader";
import { useSearchDoors } from "@/hooks/useDoors";
import { useCollections } from "@/hooks/useCollections";
import { Skeleton } from "@/components/ui/skeleton";

const Search = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q") || "";
  
  const { 
    data: doorResults, 
    isLoading: doorsLoading 
  } = useSearchDoors(query);
  
  const {
    data: collections,
    isLoading: collectionsLoading
  } = useCollections();

  // Filter collections based on search query
  const filteredCollections = collections?.filter(
    collection => collection.name.toLowerCase().includes(query.toLowerCase())
  ) || [];

  const isLoading = doorsLoading || collectionsLoading;

  return (
    <div className="flex flex-col min-h-screen bg-white text-luxury-text">
      {/* Integrated header with search bar */}
      <AppHeader />
      
      <main className="flex-1 pt-16 pb-16 px-5 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          {/* Search Results */}
          {isLoading ? (
            <div className="mt-6 space-y-4">
              <Skeleton className="h-8 w-32" />
              {[1, 2, 3, 4].map(i => (
                <Skeleton key={i} className="h-24 w-full" />
              ))}
            </div>
          ) : (doorResults?.length || filteredCollections.length) > 0 ? (
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-4">
                Results ({(doorResults?.length || 0) + filteredCollections.length})
              </h3>
              <div className="space-y-4">
                {doorResults?.map((door) => (
                  <Link to={`/door/${door.slug}`} key={door.id}>
                    <div className="p-4 border border-luxury-text/10 rounded-md hover:bg-secondary/10 transition-colors">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">{door.name}</h4>
                          <p className="text-sm text-luxury-text/70">
                            {door.collection?.name} · {door.subcollection?.name}
                          </p>
                        </div>
                        <ChevronLeft className="w-5 h-5 rotate-180" />
                      </div>
                    </div>
                  </Link>
                ))}
                {filteredCollections.map((collection) => (
                  <Link to={`/collection/${collection.slug}`} key={collection.id}>
                    <div className="p-4 border border-luxury-text/10 rounded-md hover:bg-secondary/10 transition-colors">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">{collection.name}</h4>
                          <p className="text-sm text-luxury-text/70">Collection</p>
                        </div>
                        <ChevronLeft className="w-5 h-5 rotate-180" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : query ? (
            <div className="text-center py-8 text-luxury-text/70 animate-fade-in">
              No results found for "{query}"
            </div>
          ) : (
            <div className="text-center py-8 text-luxury-text/70 animate-fade-in">
              Enter a search term to find doors, collections, and styles
            </div>
          )}
        </div>
      </main>
      
      {/* App-like bottom navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-luxury-text/10 px-5 py-2 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link to="/">
            <button className="text-xs text-luxury-text opacity-70 hover:opacity-100 flex flex-col items-center gap-1">
              <span className="block h-1 w-8 bg-transparent"></span>
              Collections
            </button>
          </Link>
          <Link to="/search">
            <button className="text-xs text-luxury-text opacity-100 flex flex-col items-center gap-1">
              <span className="block h-1 w-8 bg-luxury-accent"></span>
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

export default Search;
