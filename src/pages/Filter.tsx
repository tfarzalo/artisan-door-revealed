
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Filter as FilterIcon, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface FilterOption {
  id: string;
  label: string;
}

const Filter = () => {
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
    <div className="min-h-screen bg-white">
      <main className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb Navigation */}
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Filter Doors</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl mb-6 tracking-tight text-[#cb7524] font-semibold">Filter Doors</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed px-[20px] py-0">
              Narrow down your search with our advanced filtering options. Find doors by collection, material, size, and style preferences.
            </p>
          </div>

          {/* Filter Controls */}
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-3xl font-light text-gray-900">Filter Options</h2>
              <Button variant="ghost" onClick={clearFilters} className="text-gray-600 hover:text-gray-900">
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
                              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700"
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
            <div className="mt-8 flex justify-center">
              <Button size="lg" className="px-8 py-6 text-lg font-medium bg-gray-900 hover:bg-gray-800 text-white" disabled={countSelectedFilters() === 0}>
                View {countSelectedFilters() > 0 ? `(${countSelectedFilters()} filters)` : "Results"}
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Filter;
