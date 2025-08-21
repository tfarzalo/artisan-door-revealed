import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TreePine, Shield, Leaf } from "lucide-react";

interface TimberType {
  id: string;
  name: string;
  description: string;
  characteristics: string[];
  finishes: string[];
  icon: React.ReactNode;
  gradient: string;
}

const timberOptions: TimberType[] = [
  {
    id: "mahogany",
    name: "Mahogany",
    description: "Premium mahogany timber with rich grain patterns and natural durability for lasting beauty and elegance.",
    characteristics: [
      "Rich, deep grain patterns",
      "Natural water resistance",
      "Excellent dimensional stability",
      "Takes stain beautifully",
      "Premium hardwood density"
    ],
    finishes: ["Unfinished", "Chestnut", "Russet", "Parchment", "Coco", "Cinnamon", "Distressed Chestnut", "Distressed Russet"],
    icon: <TreePine className="w-6 h-6" />,
    gradient: "from-amber-800 to-amber-900"
  },
  {
    id: "knotty-alder",
    name: "Knotty Alder",
    description: "Rustic knotty alder with distinctive character marks and warm tones for a natural, welcoming aesthetic.",
    characteristics: [
      "Distinctive knot patterns",
      "Warm, natural character",
      "Excellent paint adhesion",
      "Sustainable hardwood",
      "Unique grain variation"
    ],
    finishes: ["Unfinished", "Chestnut", "Russet", "Parchment", "Coco", "Cinnamon", "Distressed Chestnut", "Distressed Russet"],
    icon: <Leaf className="w-6 h-6" />,
    gradient: "from-amber-600 to-amber-700"
  },
  {
    id: "accoya",
    name: "Accoya",
    description: "Sustainably modified timber with enhanced durability and stability, engineered for extreme climates.",
    characteristics: [
      "Acetylated modification",
      "Superior rot resistance",
      "Dimensional stability",
      "50-year above ground warranty",
      "Class 1 durability rating"
    ],
    finishes: ["Unfinished", "Ebony", "Parchment", "Cinnamon"],
    icon: <Shield className="w-6 h-6" />,
    gradient: "from-yellow-200 to-yellow-300"
  },
  {
    id: "american-walnut",
    name: "American Walnut",
    description: "Rich, dark hardwood with stunning chocolate tones and exceptional grain patterns for luxury applications.",
    characteristics: [
      "Rich chocolate tones",
      "Exceptional grain beauty",
      "Premium hardwood density",
      "Natural lustrous finish",
      "Highly sought-after species"
    ],
    finishes: ["Natural", "Custom Stained"],
    icon: <TreePine className="w-6 h-6" />,
    gradient: "from-amber-900 to-stone-800"
  },
  {
    id: "white-oak",
    name: "White Oak",
    description: "Classic American hardwood with prominent grain and natural tannins, perfect for traditional and modern designs.",
    characteristics: [
      "Prominent ray patterns",
      "Natural tannin content",
      "Excellent strength properties",
      "Traditional craftsmanship wood",
      "Versatile finishing options"
    ],
    finishes: ["Natural", "Custom Stained"],
    icon: <TreePine className="w-6 h-6" />,
    gradient: "from-stone-200 to-stone-300"
  }
];

export const TimberShowcase: React.FC = () => {
  const [selectedTimber, setSelectedTimber] = useState("mahogany");

  return (
    <section className="py-24 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-foreground mb-4">
            Premium Timber Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            We are among the top wood door suppliers in the United States. Choose from our exceptional
            selection of sustainably sourced hardwoods, each with unique characteristics and finishing options.
          </p>
          <Badge variant="secondary" className="px-4 py-2 text-sm">
            Professional finishing services available
          </Badge>
        </div>

        <Tabs value={selectedTimber} onValueChange={setSelectedTimber} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
            {timberOptions.map((timber) => (
              <TabsTrigger
                key={timber.id}
                value={timber.id}
                className="flex items-center gap-2 p-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {timber.icon}
                <span className="hidden sm:inline">{timber.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {timberOptions.map((timber) => (
            <TabsContent key={timber.id} value={timber.id} className="mt-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      {timber.icon}
                    </div>
                    <h3 className="text-3xl font-serif text-foreground">
                      {timber.name}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                    {timber.description}
                  </p>

                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Characteristics:</h4>
                      <div className="grid gap-2">
                        {timber.characteristics.map((char, index) => (
                          <div key={index} className="flex items-center gap-2 text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                            {char}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Available Finishes:</h4>
                      <div className="flex flex-wrap gap-2">
                        {timber.finishes.map((finish, index) => (
                          <Badge key={index} variant="outline" className="px-3 py-1">
                            {finish}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    View {timber.name} Finishes
                  </Button>
                </div>

                <div className="relative">
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="h-96 bg-gradient-to-br from-muted via-background to-muted flex items-center justify-center">
                        <div className="transform scale-150">
                          <div className={`relative w-32 h-64 bg-gradient-to-b ${timber.gradient} border-4 border-muted-foreground rounded-t-2xl shadow-xl`}>
                            <div className="absolute right-4 top-1/2 w-3 h-8 bg-yellow-600 rounded-full shadow-md"></div>
                            
                            {/* Wood grain effects */}
                            <div className="absolute inset-6 border-2 border-black/20 rounded-lg opacity-60"></div>
                            
                            {timber.id === "knotty-alder" && (
                              <>
                                <div className="absolute top-12 left-8 w-3 h-3 bg-amber-900 rounded-full"></div>
                                <div className="absolute bottom-16 left-12 w-2 h-2 bg-amber-950 rounded-full"></div>
                                <div className="absolute top-20 right-8 w-1 h-1 bg-amber-800 rounded-full"></div>
                              </>
                            )}
                            
                            {timber.id === "accoya" && (
                              <div className="absolute inset-8 bg-yellow-100/40 rounded-md border border-yellow-400/30"></div>
                            )}
                            
                            {timber.id === "american-walnut" && (
                              <div className="absolute inset-6 bg-gradient-to-br from-amber-700/30 to-stone-700/30 rounded-lg"></div>
                            )}
                            
                            {timber.id === "white-oak" && (
                              <>
                                <div className="absolute top-8 left-6 right-6 h-1 bg-stone-400/40"></div>
                                <div className="absolute top-16 left-6 right-6 h-1 bg-stone-400/30"></div>
                                <div className="absolute top-24 left-6 right-6 h-1 bg-stone-400/40"></div>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Finish samples */}
                  <div className="mt-6 grid grid-cols-4 gap-2">
                    {timber.finishes.slice(0, 4).map((finish, index) => (
                      <div key={index} className="text-center">
                        <div className={`w-12 h-8 bg-gradient-to-b ${timber.gradient} rounded border border-muted-foreground/30 mx-auto mb-1 opacity-${80 - index * 15}`}></div>
                        <span className="text-xs text-muted-foreground">{finish}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};