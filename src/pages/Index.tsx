
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import AppHeader from "@/components/AppHeader";
import { useCollections } from "@/hooks/useCollections";
import { Skeleton } from "@/components/ui/skeleton";
import { DoorOpen, Home, Sparkles, Building, Waves, Zap } from "lucide-react";

const Index = () => {
  const { data: collections, isLoading, error } = useCollections();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Collection icons mapping
  const collectionIcons = {
    signature: Sparkles,
    traditional: Home,
    modern: Building,
    coastal: Waves,
    wynstellar: Zap,
  };

  // Filter collections based on selected category
  const filteredCollections = selectedCategory 
    ? collections?.filter(collection => collection.slug === selectedCategory)
    : collections;

  const categories = [
    { slug: 'signature', name: 'Signature', color: 'bg-primary' },
    { slug: 'traditional', name: 'Traditional', color: 'bg-secondary' },
    { slug: 'modern', name: 'Modern', color: 'bg-accent' },
    { slug: 'coastal', name: 'Coastal', color: 'bg-blue-500' },
    { slug: 'wynstellar', name: 'Wynstellar', color: 'bg-purple-500' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <AppHeader />
      
      <main className="flex-1 pt-16 pb-16 px-5">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="mb-8 mt-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <DoorOpen className="w-8 h-8 text-primary" />
              <h1 className="text-4xl md:text-5xl font-serif">DSA Doors</h1>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif mb-3 text-muted-foreground">Premium Door Collections</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Discover over 300 standard door styles, each hand-assembled by skilled artisans and individually evaluated to meet our exceptional quality standards.
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                onClick={() => setSelectedCategory(null)}
                className="mb-2"
              >
                All Collections
              </Button>
              {categories.map((category) => (
                <Button
                  key={category.slug}
                  variant={selectedCategory === category.slug ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.slug)}
                  className="mb-2"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Collection Grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="h-full">
                  <CardContent className="p-6">
                    <Skeleton className="h-48 w-full rounded-md mb-4" />
                    <Skeleton className="h-6 w-32 mx-auto" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <DoorOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-serif mb-2">Unable to load collections</h3>
              <p className="text-muted-foreground">Please try again later.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCollections?.map((collection) => {
                const IconComponent = collectionIcons[collection.slug as keyof typeof collectionIcons] || DoorOpen;
                return (
                  <Link to={`/collection/${collection.slug}`} key={collection.id}>
                    <Card className="h-full hover:shadow-lg transition-all duration-300 group border-2 hover:border-primary/20">
                      <CardHeader className="pb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <IconComponent className="w-6 h-6 text-primary" />
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {collection.name.replace(' Collection', '')}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="px-6 pb-4">
                        <div className="h-40 flex items-center justify-center bg-muted/30 rounded-lg mb-4 relative overflow-hidden group-hover:bg-muted/50 transition-colors">
                          {/* Interactive Door Preview */}
                          <div className="relative w-[60px] h-[120px] bg-gradient-to-br from-amber-800 via-amber-700 to-amber-900 rounded-t-md overflow-hidden shadow-lg transform group-hover:scale-105 transition-transform">
                            {/* Door handle */}
                            <div className="absolute right-2 top-1/2 w-1.5 h-4 bg-yellow-600 rounded-full shadow-sm"></div>
                            
                            {/* Different door patterns for different collections */}
                            {collection.slug === 'signature' && (
                              <div className="absolute inset-2 border border-amber-900/40 rounded-sm">
                                <div className="absolute top-1 left-1 right-1 h-6 border border-amber-900/30 rounded-sm"></div>
                                <div className="absolute bottom-1 left-1 right-1 h-6 border border-amber-900/30 rounded-sm"></div>
                              </div>
                            )}
                            {collection.slug === 'traditional' && (
                              <div className="absolute inset-2">
                                <div className="absolute top-0 left-0 right-0 h-1/3 border border-amber-900/40"></div>
                                <div className="absolute bottom-0 left-0 right-0 h-1/3 border border-amber-900/40"></div>
                              </div>
                            )}
                            {collection.slug === 'modern' && (
                              <div className="absolute left-2 right-2 top-4 bottom-4 border-l-2 border-amber-900/50"></div>
                            )}
                            {collection.slug === 'coastal' && (
                              <div className="absolute inset-2 bg-gradient-to-b from-blue-100/20 to-transparent rounded-sm"></div>
                            )}
                            {collection.slug === 'wynstellar' && (
                              <div className="absolute inset-2">
                                <div className="absolute top-2 left-1 right-1 h-0.5 bg-amber-900/40"></div>
                                <div className="absolute bottom-2 left-1 right-1 h-0.5 bg-amber-900/40"></div>
                              </div>
                            )}
                          </div>
                        </div>
                        <h3 className="font-serif text-lg text-center group-hover:text-primary transition-colors">
                          {collection.name}
                        </h3>
                        {collection.description && (
                          <p className="text-sm text-muted-foreground mt-2 text-center line-clamp-2">
                            {collection.description}
                          </p>
                        )}
                      </CardContent>
                      <CardFooter className="pt-0 pb-6">
                        <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          View Collection
                        </Button>
                      </CardFooter>
                    </Card>
                  </Link>
                );
              })}
            </div>
          )}

          {/* Featured Info */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-serif mb-4">Why Choose DSA Doors?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="p-4">
                <Sparkles className="w-8 h-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Handcrafted Quality</h4>
                <p className="text-sm text-muted-foreground">Each door is hand-assembled by skilled artisans</p>
              </div>
              <div className="p-4">
                <Home className="w-8 h-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold mb-2">300+ Styles</h4>
                <p className="text-sm text-muted-foreground">Choose from our extensive collection of door styles</p>
              </div>
              <div className="p-4">
                <DoorOpen className="w-8 h-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Quality Standards</h4>
                <p className="text-sm text-muted-foreground">Individually evaluated to meet exceptional standards</p>
              </div>
            </div>
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
