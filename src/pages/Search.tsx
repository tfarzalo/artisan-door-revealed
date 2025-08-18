
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronLeft, MapPin } from "lucide-react";
import { useSearchDoors } from "@/hooks/useDoors";
import { useCollections } from "@/hooks/useCollections";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

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
                <BreadcrumbPage>Search</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl mb-6 tracking-tight text-[#cb7524] font-semibold">Search Doors</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed px-[20px] py-0">
              Find the perfect door for your home. Search by style, material, collection, or any feature that matters to you.
            </p>
          </div>

          {/* Search Results */}
          {isLoading ? (
            <div className="space-y-4">
              <Skeleton className="h-8 w-32" />
              {[1, 2, 3, 4].map(i => (
                <Skeleton key={i} className="h-24 w-full" />
              ))}
            </div>
          ) : (doorResults?.length || filteredCollections.length) > 0 ? (
            <div>
              <h3 className="text-2xl font-light text-gray-900 mb-6">
                Search Results ({(doorResults?.length || 0) + filteredCollections.length})
              </h3>
              <div className="space-y-4">
                {doorResults?.map((door) => (
                  <Link to={`/door/${door.slug}`} key={door.id}>
                    <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-xl font-light text-gray-900 mb-1">{door.name}</h4>
                          <p className="text-gray-600">
                            {door.collection?.name} · {door.subcollection?.name}
                          </p>
                        </div>
                        <ChevronLeft className="w-6 h-6 rotate-180 text-gray-400" />
                      </div>
                    </div>
                  </Link>
                ))}
                {filteredCollections.map((collection) => (
                  <Link to={`/collection/${collection.slug}`} key={collection.id}>
                    <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-xl font-light text-gray-900 mb-1">{collection.name}</h4>
                          <p className="text-gray-600">Collection</p>
                        </div>
                        <ChevronLeft className="w-6 h-6 rotate-180 text-gray-400" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : query ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-light text-gray-900 mb-4">No results found</h3>
              <p className="text-gray-600">No results found for "{query}". Try different keywords.</p>
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-light text-gray-900 mb-4">Start Your Search</h3>
              <p className="text-gray-600">Enter a search term to find doors, collections, and styles</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Search;
