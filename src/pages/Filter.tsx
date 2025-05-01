
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, Menu, Search as SearchIcon, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from "@/components/ui/accordion";

interface FilterOption {
  id: string;
  label: string;
}

const Filter = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({
    collections: [],
    materials: [],
    sizes: [],
    styles: [],
    glassTypes: [],
  });

  const filterCategories = {
    collections: [
      { id: "signature", label: "Signature Collection" },
      { id: "traditional", label: "Traditional Collection" },
      { id: "modern", label: "Modern Collection" },
      { id: "fullview", label: "Full View Collection" },
      { id: "port", label: "Port Collection" },
      { id: "custom", label: "Custom Designed" },
    ],
    materials: [
      { id: "mahogany", label: "Mahogany" },
      { id: "oak", label: "Oak" },
      { id: "cherry", label: "Cherry" },
      { id: "walnut", label: "Walnut" },
      { id: "knotty-alder", label: "Knotty Alder" },
    ],
    sizes: [
      { id: "36x80", label: "36″ × 80″" },
      { id: "42x80", label: "42″ × 80″" },
      { id: "36x84", label: "36″ × 84″" },
      { id: "42x84", label: "42″ × 84″" },
      { id: "custom", label: "Custom Size" },
    ],
    styles: [
      { id: "modern-farmhouse", label: "Modern Farmhouse" },
      { id: "contemporary", label: "Contemporary" },
      { id: "transitional", label: "Transitional" },
      { id: "traditional", label: "Traditional" },
      { id: "art-deco", label: "Art Deco" },
    ],
    glassTypes: [
      { id: "clear", label: "Clear" },
      { id: "frosted", label: "Frosted" },
      { id: "textured", label: "Textured" },
      { id: "stained", label: "Stained" },
      { id: "none", label: "No Glass" },
    ],
  };

  const toggleFilter = (category: string, id: string) => {
    setSelectedFilters(prev => {
      const currentFilters = [...(prev[category] || [])];
      const filterIndex = currentFilters.indexOf(id);
      
      if (filterIndex >= 0) {
        currentFilters.splice(filterIndex, 1);
      } else {
        currentFilters.push(id);
      }
      
      return {
        ...prev,
        [category]: currentFilters
      };
    });
  };

  const clearFilters = () => {
    setSelectedFilters({
      collections: [],
      materials: [],
      sizes: [],
      styles: [],
      glassTypes: [],
    });
  };

  const countSelectedFilters = () => {
    return Object.values(selectedFilters).reduce((count, filters) => count + filters.length, 0);
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
          <div className="mt-6 mb-4 flex justify-between items-center">
            <h2 className="text-2xl font-serif">Filter Doors</h2>
            <Button variant="ghost" onClick={clearFilters}>
              Clear All
            </Button>
          </div>
          
          {/* Filter Accordion */}
          <div className="mt-4">
            <Accordion type="multiple" defaultValue={["collections"]}>
              {Object.entries(filterCategories).map(([category, options]) => (
                <AccordionItem value={category} key={category}>
                  <AccordionTrigger className="text-base">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2 pl-1">
                      {options.map((option) => (
                        <div key={option.id} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`${category}-${option.id}`}
                            checked={selectedFilters[category]?.includes(option.id)}
                            onCheckedChange={() => toggleFilter(category, option.id)}
                          />
                          <label 
                            htmlFor={`${category}-${option.id}`}
                            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          {/* Apply Filters Button */}
          <div className="mt-6 flex justify-center">
            <Button className="w-full md:w-auto" disabled={countSelectedFilters() === 0}>
              View {countSelectedFilters() > 0 ? `(${countSelectedFilters()} filters)` : "Results"}
            </Button>
          </div>
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
            <button className="text-xs text-luxury-text opacity-70 hover:opacity-100 flex flex-col items-center gap-1">
              <span className="block h-1 w-8 bg-transparent"></span>
              Search
            </button>
          </Link>
          <Link to="/filter">
            <button className="text-xs text-luxury-text opacity-100 flex flex-col items-center gap-1">
              <span className="block h-1 w-8 bg-luxury-accent"></span>
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

export default Filter;
