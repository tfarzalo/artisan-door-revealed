
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, Menu, Search as SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
  const [menuOpen, setMenuOpen] = useState(false);
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
        <div className="flex items-center">
          <Link to="/">
            <Button variant="ghost" size="sm">
              Home
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
          <div className="mt-6 mb-8">
            <h2 className="text-2xl font-serif mb-4">Search</h2>
            <form onSubmit={handleSearch} className="flex gap-2">
              <Input 
                type="text" 
                placeholder="Search for doors, collections, styles..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-grow"
              />
              <Button type="submit">
                <SearchIcon className="w-4 h-4 mr-2" />
                Search
              </Button>
            </form>
          </div>
          
          {/* Search Results */}
          {searchResults.length > 0 ? (
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-4">Results</h3>
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
            <div className="text-center py-8 text-luxury-text/70">
              No results found for "{searchQuery}"
            </div>
          ) : (
            <div className="text-center py-8 text-luxury-text/70">
              Enter a search term to find doors, collections, and styles
            </div>
          )}
        </div>
      </main>
      
      {/* App-like bottom navigation (same as previous pages) */}
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
