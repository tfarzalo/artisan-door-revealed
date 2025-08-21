import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, Paintbrush, Eye, Wrench, Lock, Sparkles, Square } from "lucide-react";

interface OptionCategory {
  id: string;
  name: string;
  description: string;
  features: string[];
  specifications: { [key: string]: string };
  icon: React.ReactNode;
}

const optionCategories: OptionCategory[] = [
  {
    id: "prefinishing",
    name: "Prefinishing",
    description: "Master artisan finishing with custom stains and protective clear coats to maximize the beauty of natural wood grain.",
    features: [
      "12-step finishing process",
      "Custom stain matching",
      "UV-resistant clear coat",
      "Enhanced wood grain",
      "Weather protection"
    ],
    specifications: {
      "Finishes Available": "Chestnut, Russet, Parchment, Coco, Cinnamon",
      "Wood Types": "Mahogany, Knotty Alder, Accoya",
      "Process": "Hand-applied by master artisans",
      "Protection": "Multi-layer protective clear coat"
    },
    icon: <Paintbrush className="w-6 h-6" />
  },
  {
    id: "glass",
    name: "Glass Options",
    description: "Low-emissivity glass options with various textures and privacy levels for energy efficiency and aesthetic appeal.",
    features: [
      "Low-E energy efficiency",
      "UV protection",
      "Multiple textures",
      "Privacy ratings 1-9",
      "Custom sizing"
    ],
    specifications: {
      "Type": "Low-E (low-emissivity)",
      "Options": "Clear, Flemish, Seedy, Fluted",
      "Privacy Levels": "Ratings 1-9 available",
      "Benefits": "UV protection, energy efficient"
    },
    icon: <Eye className="w-6 h-6" />
  },
  {
    id: "hardware",
    name: "Hinges & Sills",
    description: "Premium hardware including ball bearing hinges and adjustable sill systems for smooth operation and weather protection.",
    features: [
      "4×4 Ball bearing hinges",
      "Concealed hinge options",
      "Adjustable sill systems",
      "Weather sealing",
      "ADA compliance"
    ],
    specifications: {
      "Hinges": "4×4 Ball Bearing, Concealed options",
      "Finishes": "Oil Rubbed Bronze, Satin Nickel",
      "Sills": "Adjustable Inswing, Outswing Bump",
      "Special Features": "ADA compliant options"
    },
    icon: <Wrench className="w-6 h-6" />
  },
  {
    id: "locking",
    name: "Security Systems",
    description: "Advanced multipoint locking systems and handlesets for enhanced security and smooth operation.",
    features: [
      "Ashland® 3-Point Lock",
      "Stainless steel construction",
      "Vertical shootbolts",
      "Smart lock integration",
      "Premium handlesets"
    ],
    specifications: {
      "System": "Ashland® 3-Point Lock with vertical shootbolts",
      "Material": "Stainless steel construction",
      "Recommended": "Doors 8'0″ and taller",
      "Smart Options": "Electronic lock integration available"
    },
    icon: <Lock className="w-6 h-6" />
  },
  {
    id: "decorative",
    name: "Decorative Accents",
    description: "Handcrafted decorative elements including clavos, straps, and grilles to enhance your door's character.",
    features: [
      "Hand-forged clavos",
      "Decorative straps",
      "Protective grilles",
      "Multiple finishes",
      "Custom designs"
    ],
    specifications: {
      "Clavos": "Square & round wrought-iron designs",
      "Straps": "Hinge & corner decorative hardware",
      "Grilles": "Tall & short protective options",
      "Styles": "Rustic to elegant finishes"
    },
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    id: "trim",
    name: "Brickmould & Casing",
    description: "Custom trim profiles and casing options to perfectly frame your door and integrate with your home's architecture.",
    features: [
      "Custom profile matching",
      "Architectural integration",
      "Multiple wood species",
      "Prefinishing available",
      "Installation hardware"
    ],
    specifications: {
      "Profiles": "Standard and custom trim profiles",
      "Materials": "Matching door wood species",
      "Finishes": "Prefinishing services available",
      "Installation": "Complete hardware package"
    },
    icon: <Square className="w-6 h-6" />
  }
];

export const OptionsShowcase: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState("prefinishing");

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-foreground mb-4">
            Options & Add-ons
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Complete your door system with professional finishing, premium glass options, quality hardware, 
            and decorative accents. Each option is carefully selected to enhance both beauty and performance.
          </p>
          <Badge variant="secondary" className="px-4 py-2 text-sm">
            Professional installation available
          </Badge>
        </div>

        <Tabs value={selectedOption} onValueChange={setSelectedOption} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-12 bg-muted/50 p-2 rounded-xl">
            {optionCategories.map((option) => (
              <TabsTrigger
                key={option.id}
                value={option.id}
                className="flex flex-col items-center gap-2 p-4 rounded-lg font-medium transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg hover:bg-muted/80"
              >
                <div className="p-1">
                  {option.icon}
                </div>
                <span className="text-xs font-serif text-center leading-tight">{option.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {optionCategories.map((option) => (
            <TabsContent key={option.id} value={option.id} className="mt-12 animate-fade-in">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-primary/10 rounded-xl backdrop-blur-sm">
                      {option.icon}
                    </div>
                    <h3 className="text-3xl font-serif text-foreground">
                      {option.name}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                    {option.description}
                  </p>

                  <div className="space-y-6 mb-10">
                    <div>
                      <h4 className="font-serif text-lg text-foreground mb-4">Key Features:</h4>
                      <div className="grid gap-3">
                        {option.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-serif text-lg text-foreground mb-4">Specifications:</h4>
                      <div className="space-y-3">
                        {Object.entries(option.specifications).map(([key, value], index) => (
                          <div key={index} className="flex flex-col gap-1 p-3 bg-background/60 rounded-lg border">
                            <span className="font-medium text-sm text-primary">{key}:</span>
                            <span className="text-foreground">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-xl">
                    Learn More About {option.name}
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>

                <div className="relative">
                  <Card className="overflow-hidden shadow-xl border-0 bg-gradient-to-br from-muted/30 to-background">
                    <CardContent className="p-0">
                      <div className="h-96 bg-gradient-to-br from-muted/40 via-background to-muted/20 flex items-center justify-center relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
                        <div className="transform scale-150 relative z-10">
                          {option.id === "prefinishing" && (
                            <div className="relative w-32 h-64 bg-gradient-to-b from-amber-800 to-amber-900 border-4 border-muted-foreground rounded-t-2xl shadow-xl">
                              <div className="absolute right-4 top-1/2 w-3 h-8 bg-yellow-600 rounded-full shadow-md"></div>
                              <div className="absolute inset-6 border-2 border-amber-600/60 rounded-lg"></div>
                              <div className="absolute top-8 left-6 right-6 h-1 bg-amber-700/80 rounded"></div>
                              <div className="absolute bottom-8 left-6 right-6 h-1 bg-amber-700/80 rounded"></div>
                            </div>
                          )}
                          {option.id === "glass" && (
                            <div className="relative w-32 h-64 bg-white border-4 border-muted-foreground rounded-t-2xl shadow-xl">
                              <div className="absolute right-4 top-1/2 w-3 h-8 bg-muted-foreground rounded-full"></div>
                              <div className="absolute inset-6 rounded-lg bg-gradient-to-br from-blue-50/80 via-transparent to-blue-100/80 border-2 border-blue-200 backdrop-blur-sm">
                                <div className="absolute inset-2 bg-white/20 backdrop-blur-sm rounded-lg"></div>
                                <div className="absolute top-2 left-2 w-2 h-2 bg-blue-300 rounded-full"></div>
                              </div>
                            </div>
                          )}
                          {option.id === "hardware" && (
                            <div className="relative w-32 h-64 bg-white border-4 border-muted-foreground rounded-t-2xl shadow-xl">
                              <div className="absolute right-4 top-1/2 w-3 h-8 bg-yellow-600 rounded-full shadow-md"></div>
                              <div className="absolute right-2 top-8 w-4 h-12 bg-muted-foreground rounded-sm shadow-md"></div>
                              <div className="absolute right-2 bottom-8 w-4 h-12 bg-muted-foreground rounded-sm shadow-md"></div>
                              <div className="absolute bottom-2 left-4 right-4 h-3 bg-stone-600 rounded-sm shadow-md"></div>
                            </div>
                          )}
                          {option.id === "locking" && (
                            <div className="relative w-32 h-64 bg-white border-4 border-muted-foreground rounded-t-2xl shadow-xl">
                              <div className="absolute right-4 top-1/2 w-4 h-10 bg-yellow-600 rounded-lg shadow-md"></div>
                              <div className="absolute left-2 top-6 w-2 h-6 bg-muted-foreground rounded-full"></div>
                              <div className="absolute left-2 top-1/2 w-4 h-8 bg-stone-800 rounded-sm transform -translate-y-1/2"></div>
                              <div className="absolute left-2 bottom-6 w-2 h-6 bg-muted-foreground rounded-full"></div>
                            </div>
                          )}
                          {option.id === "decorative" && (
                            <div className="relative w-32 h-64 bg-white border-4 border-muted-foreground rounded-t-2xl shadow-xl">
                              <div className="absolute right-4 top-1/2 w-3 h-8 bg-yellow-600 rounded-full"></div>
                              <div className="absolute top-6 left-6 w-2 h-2 bg-stone-700 rounded-full"></div>
                              <div className="absolute top-12 left-8 w-2 h-2 bg-stone-700 rounded-full"></div>
                              <div className="absolute bottom-12 left-6 w-2 h-2 bg-stone-700 rounded-full"></div>
                              <div className="absolute bottom-6 left-8 w-2 h-2 bg-stone-700 rounded-full"></div>
                              <div className="absolute top-16 left-4 right-4 h-px bg-stone-600"></div>
                              <div className="absolute bottom-16 left-4 right-4 h-px bg-stone-600"></div>
                            </div>
                          )}
                          {option.id === "trim" && (
                            <div className="relative w-32 h-64 bg-white border-4 border-muted-foreground rounded-t-2xl shadow-xl">
                              <div className="absolute right-4 top-1/2 w-3 h-8 bg-yellow-600 rounded-full"></div>
                              <div className="absolute -top-2 left-0 right-0 h-4 bg-amber-600 rounded-t-2xl"></div>
                              <div className="absolute -left-2 top-0 bottom-4 w-4 bg-amber-600"></div>
                              <div className="absolute -right-2 top-0 bottom-4 w-4 bg-amber-600"></div>
                              <div className="absolute inset-6 border-2 border-muted-foreground/30 rounded-lg"></div>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Feature highlights */}
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    {option.features.slice(0, 4).map((feature, index) => (
                      <div key={index} className="text-center p-3 bg-muted/20 rounded-lg">
                        <div className="w-2 h-2 bg-primary rounded-full mx-auto mb-2"></div>
                        <span className="text-xs text-muted-foreground">{feature}</span>
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