
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import AppHeader from "@/components/AppHeader";

interface SearchResult {
  id: string;
  name: string;
  collection: string;
  subcollection: string;
  type: string;
}

// Mock search results - would be fetched from API in a real app
const allResults: SearchResult[] = [
  { 
    id: "alexandria-mf-1", 
    name: "Alexandria MF-100", 
    collection: "Signature Collection", 
    subcollection: "Alexandria", 
    type: "door" 
  },
  { 
    id: "tiffany-classic-1", 
    name: "Tiffany Classic 200", 
    collection: "Signature Collection", 
    subcollection: "Tiffany", 
    type: "door" 
  },
  {
    id: "modern-minimalist-1",
    name: "Modern Minimalist 150",
    collection: "Modern Collection",
    subcollection: "Minimalist",
    type: "door"
  },
  {
    id: "signature",
    name: "Signature Collection",
    collection: "",
    subcollection: "",
    type: "collection"
  },
  {
    id: "modern",
    name: "Modern Collection",
    collection: "",
    subcollection: "",
    type: "collection"
  },
];

const Search = () => {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q") || "";

  useEffect(() => {
    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }
    
    // Filter results based on search query
    const filteredResults = allResults.filter((result) =>
      result.name.toLowerCase().includes(query.toLowerCase()) ||
      result.collection.toLowerCase().includes(query.toLowerCase()) ||
      result.subcollection.toLowerCase().includes(query.toLowerCase())
    );
    
    setSearchResults(filteredResults);
  }, [query]);

  const getResultLink = (result: SearchResult) => {
    if (result.type === "collection") {
      return `/collection/${result.id}`;
    }
    return `/door/${result.id}`;
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-luxury-text">
      {/* Integrated header with search bar */}
      <AppHeader />
      
      <main className="flex-1 pt-16 pb-16 px-5 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          {/* Search Results */}
          {searchResults.length > 0 ? (
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-4">Results ({searchResults.length})</h3>
              <div className="space-y-4">
                {searchResults.map((result) => (
                  <Link to={getResultLink(result)} key={`${result.type}-${result.id}`}>
                    <div className="p-4 border border-luxury-text/10 rounded-md hover:bg-secondary/10 transition-colors">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">{result.name}</h4>
                          {result.type === "door" && (
                            <p className="text-sm text-luxury-text/70">
                              {result.collection} · {result.subcollection}
                            </p>
                          )}
                          {result.type === "collection" && (
                            <p className="text-sm text-luxury-text/70">Collection</p>
                          )}
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
