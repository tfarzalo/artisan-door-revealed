
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCollections } from "@/hooks/useCollections";
import { Skeleton } from "@/components/ui/skeleton";
import { Search, MapPin } from "lucide-react";

const Index = () => {
  const { data: collections, isLoading, error } = useCollections();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter collections based on selected category and search
  const filteredCollections = collections?.filter(collection => {
    const matchesCategory = selectedCategory ? collection.slug === selectedCategory : true;
    const matchesSearch = searchQuery ? 
      collection.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      collection.description?.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { slug: 'signature', name: 'Signature' },
    { slug: 'traditional', name: 'Traditional' },
    { slug: 'modern', name: 'Modern' },
    { slug: 'coastal', name: 'Coastal' },
    { slug: 'wynstellar', name: 'Wynstellar' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <main className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
              Door Collections
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Discover over 300 standard door styles, each hand-assembled by skilled artisans and individually evaluated to meet our exceptional quality standards.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="px-8 py-6 text-lg font-medium bg-gray-900 hover:bg-gray-800 text-white">
                Find My Door
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg font-medium border-gray-300 text-gray-900 hover:bg-gray-50">
                <MapPin className="w-5 h-5 mr-2" />
                Find a Dealer
              </Button>
            </div>
          </div>

          {/* Search and Filter Section */}
          <div className="mb-12">
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search collections..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-3 text-lg border-gray-200 focus:border-gray-400 focus:ring-gray-400"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center">
              <Button
                variant={selectedCategory === null ? "default" : "ghost"}
                onClick={() => setSelectedCategory(null)}
                className={`px-6 py-2 text-base font-medium ${
                  selectedCategory === null 
                    ? "bg-gray-900 text-white hover:bg-gray-800" 
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                All Collections
              </Button>
              {categories.map((category) => (
                <Button
                  key={category.slug}
                  variant={selectedCategory === category.slug ? "default" : "ghost"}
                  onClick={() => setSelectedCategory(category.slug)}
                  className={`px-6 py-2 text-base font-medium ${
                    selectedCategory === category.slug 
                      ? "bg-gray-900 text-white hover:bg-gray-800" 
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Collection Grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <Card key={i} className="border-gray-200">
                  <CardContent className="p-6">
                    <Skeleton className="h-64 w-full rounded-lg mb-6" />
                    <Skeleton className="h-6 w-32 mx-auto" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-light text-gray-900 mb-4">Unable to load collections</h3>
              <p className="text-gray-600">Please try again later.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {filteredCollections?.map((collection) => (
                <Link to={`/collection/${collection.slug}`} key={collection.id}>
                  <Card className="group border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg mb-6 overflow-hidden">
                        {/* Clean Door Preview */}
                        <div className="relative w-20 h-40 bg-white border-2 border-gray-300 rounded-t-lg shadow-md transform group-hover:scale-105 transition-transform">
                          {/* Door handle */}
                          <div className="absolute right-2 top-1/2 w-2 h-5 bg-gray-800 rounded-full"></div>
                          
                          {/* Minimalist door patterns */}
                          {collection.slug === 'signature' && (
                            <div className="absolute inset-3 border border-gray-200 rounded-sm">
                              <div className="absolute top-2 left-2 right-2 h-8 border border-gray-200 rounded-sm"></div>
                              <div className="absolute bottom-2 left-2 right-2 h-8 border border-gray-200 rounded-sm"></div>
                            </div>
                          )}
                          {collection.slug === 'traditional' && (
                            <div className="absolute inset-3">
                              <div className="absolute top-0 left-0 right-0 h-1/3 border border-gray-200"></div>
                              <div className="absolute bottom-0 left-0 right-0 h-1/3 border border-gray-200"></div>
                            </div>
                          )}
                          {collection.slug === 'modern' && (
                            <div className="absolute left-3 right-3 top-6 bottom-6 border-l-2 border-gray-300"></div>
                          )}
                          {collection.slug === 'coastal' && (
                            <div className="absolute inset-3 bg-gradient-to-b from-gray-100 to-transparent rounded-sm"></div>
                          )}
                          {collection.slug === 'wynstellar' && (
                            <div className="absolute inset-3">
                              <div className="absolute top-3 left-2 right-2 h-0.5 bg-gray-300"></div>
                              <div className="absolute bottom-3 left-2 right-2 h-0.5 bg-gray-300"></div>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-light text-gray-900 text-center mb-3">
                        {collection.name}
                      </h3>
                      {collection.description && (
                        <p className="text-sm text-gray-600 text-center leading-relaxed line-clamp-2">
                          {collection.description}
                        </p>
                      )}
                    </CardContent>
                    <CardFooter className="px-6 pb-6">
                      <Button 
                        variant="outline" 
                        className="w-full text-gray-900 border-gray-300 hover:bg-gray-50 group-hover:border-gray-400 transition-colors"
                      >
                        View Collection
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          )}

          {/* Results Counter */}
          {!isLoading && !error && (
            <div className="text-center mt-12">
              <p className="text-gray-600">
                Showing {filteredCollections?.length || 0} of {collections?.length || 0} collections
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;
