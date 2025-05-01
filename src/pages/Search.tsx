
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search as SearchIcon, FilterIcon, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

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
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }
    
    // Filter results based on search query
    const filteredResults = allResults.filter((result) =>
      result.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.collection.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.subcollection.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setSearchResults(filteredResults);
  };

  const getResultLink = (result: SearchResult) => {
    if (result.type === "collection") {
      return `/collection/${result.id}`;
    }
    return `/door/${result.id}`;
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-luxury-text">
      {/* Integrated header with search bar */}
      <header className="fixed top-0 left-0 right-0 z-40 px-4 py-3 bg-white bg-opacity-95 backdrop-blur-sm border-b border-luxury-text/10 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <h1 className="text-lg font-serif">Artisan Doors</h1>
          </Link>
        </div>
        
        <div className="flex items-center flex-grow mx-4">
          <form onSubmit={handleSearch} className="flex gap-2 flex-grow max-w-md mx-auto">
            <div className="relative flex-grow">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                type="text" 
                placeholder="Search doors, collections..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-3 w-full"
              />
            </div>
            <Button type="submit" size="sm" variant="ghost" className="px-2">
              Search
            </Button>
          </form>
        </div>
        
        <div className="flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <FilterIcon className="h-4 w-4" />
                <span className="sr-only md:not-sr-only">Filter</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Filter By</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Collection</DropdownMenuItem>
              <DropdownMenuItem>Style</DropdownMenuItem>
              <DropdownMenuItem>Material</DropdownMenuItem>
              <DropdownMenuItem>Size</DropdownMenuItem>
              <DropdownMenuSeparator />
              <Link to="/filter" className="w-full">
                <Button variant="outline" size="sm" className="w-full mt-2">
                  Advanced Filters
                </Button>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      
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
          ) : searchQuery ? (
            <div className="text-center py-8 text-luxury-text/70 animate-fade-in">
              No results found for "{searchQuery}"
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
