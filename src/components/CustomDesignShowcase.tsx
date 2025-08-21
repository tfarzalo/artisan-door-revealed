import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, Palette, Wrench, Grid3X3, Crown } from "lucide-react";

interface DesignOption {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}

const designOptions: DesignOption[] = [
  {
    id: "glass",
    title: "Custom Glass Design",
    description: "Unique decorative glass patterns and designs tailored to your aesthetic preferences and architectural style.",
    features: [
      "Decorative glass patterns",
      "Textured glass options",
      "Colored glass accents",
      "Beveled glass designs",
      "Custom etching"
    ],
    icon: <Palette className="w-6 h-6" />
  },
  {
    id: "leaded",
    title: "Custom Leaded Design",
    description: "Traditional leaded glass craftsmanship with modern techniques for timeless elegance and sophistication.",
    features: [
      "Traditional came construction",
      "Zinc or brass came options",
      "Multiple glass types",
      "Custom pattern design",
      "Restoration techniques"
    ],
    icon: <Grid3X3 className="w-6 h-6" />
  },
  {
    id: "iron",
    title: "Custom Iron Work",
    description: "Decorative wrought iron designs for slabs, transoms, or side lites with intricate patterns and details.",
    features: [
      "Hand-forged ironwork",
      "Custom scroll patterns",
      "Protective coatings",
      "Integrated glass panels",
      "Weather-resistant finishes"
    ],
    icon: <Wrench className="w-6 h-6" />
  },
  {
    id: "transom",
    title: "Custom Transoms",
    description: "Custom transom designs to complement your door and enhance natural light flow into your space.",
    features: [
      "Arched or rectangular",
      "Matching door styles",
      "Glass or wood options",
      "Decorative mullions",
      "Size customization"
    ],
    icon: <Crown className="w-6 h-6" />
  }
];

export const CustomDesignShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState("glass");
  const activeOption = designOptions.find(option => option.id === activeTab);

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-foreground mb-4">
            Custom Design Elements
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            DSA uses only the finest custom door materials. From decorative wrought iron to custom leaded glass,
            your dream entryway awaits professional craftsmanship.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-16 bg-muted/30 p-1 rounded-2xl border">
            {designOptions.map((option) => (
              <TabsTrigger
                key={option.id}
                value={option.id}
                className="flex items-center gap-3 p-4 rounded-xl font-medium transition-all duration-300 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm hover:bg-muted/50"
              >
                <div className="p-1">
                  {option.icon}
                </div>
                <span className="hidden sm:inline font-serif">{option.title.replace('Custom ', '')}</span>
                <span className="sm:hidden font-serif text-sm">{option.title.split(' ')[1]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {designOptions.map((option) => (
            <TabsContent key={option.id} value={option.id} className="mt-12 animate-fade-in">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-1 lg:order-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-primary/10 rounded-2xl">
                      {option.icon}
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-serif text-foreground">
                      {option.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                    {option.description}
                  </p>

                  <div className="space-y-6 mb-10">
                    <div>
                      <h4 className="font-serif text-lg text-foreground mb-4">Key Features:</h4>
                      <div className="space-y-3">
                        {option.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span className="text-muted-foreground leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-2xl font-semibold">
                    Explore {option.title}
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>

                <div className="relative order-2 lg:order-1">
                  <Card className="overflow-hidden shadow-2xl border-0 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <div className="h-80 flex items-center justify-center relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-muted/20 to-transparent rounded-lg" />
                        <div className="transform scale-125 relative z-10">
                          {option.id === "glass" && (
                            <div className="relative w-32 h-64 bg-white border-4 border-muted-foreground rounded-t-2xl shadow-xl">
                              <div className="absolute right-4 top-1/2 w-3 h-8 bg-muted-foreground rounded-full"></div>
                              <div className="absolute inset-6 rounded-lg bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 border-2 border-blue-200">
                                <div className="absolute inset-4 bg-white/40 rounded-full"></div>
                                <div className="absolute top-2 left-2 w-3 h-3 bg-blue-400 rounded-full"></div>
                                <div className="absolute bottom-2 right-2 w-3 h-3 bg-purple-400 rounded-full"></div>
                                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-pink-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                              </div>
                            </div>
                          )}
                          {option.id === "leaded" && (
                            <div className="relative w-32 h-64 bg-white border-4 border-muted-foreground rounded-t-2xl shadow-xl">
                              <div className="absolute right-4 top-1/2 w-3 h-8 bg-muted-foreground rounded-full"></div>
                              <div className="absolute inset-6 rounded-lg border-2 border-muted-foreground">
                                <div className="absolute inset-0 grid grid-cols-4 grid-rows-6 gap-1 bg-muted-foreground p-1">
                                  {[...Array(24)].map((_, i) => (
                                    <div 
                                      key={i} 
                                      className={`${
                                        i % 3 === 0 ? 'bg-amber-200' : 
                                        i % 3 === 1 ? 'bg-blue-200' : 'bg-green-200'
                                      } border border-muted-foreground/20`}
                                    ></div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                          {option.id === "iron" && (
                            <div className="relative w-32 h-64 bg-white border-4 border-muted-foreground rounded-t-2xl shadow-xl">
                              <div className="absolute right-4 top-1/2 w-3 h-8 bg-muted-foreground rounded-full"></div>
                              <div className="absolute inset-6 rounded-lg border-2 border-muted-foreground/30">
                                <div className="absolute inset-4 flex items-center justify-center">
                                  <div className="relative">
                                    <div className="w-12 h-16 border-4 border-muted-foreground rounded-full bg-muted/30"></div>
                                    <div className="absolute top-2 left-1/2 w-2 h-12 bg-muted-foreground transform -translate-x-1/2"></div>
                                    <div className="absolute bottom-2 left-1/2 w-8 h-2 bg-muted-foreground transform -translate-x-1/2 rounded-full"></div>
                                    <div className="absolute top-4 left-0 w-3 h-3 border-2 border-muted-foreground rounded-full"></div>
                                    <div className="absolute top-4 right-0 w-3 h-3 border-2 border-muted-foreground rounded-full"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                          {option.id === "transom" && (
                            <div className="relative w-32 h-64 bg-white border-4 border-muted-foreground rounded-t-2xl shadow-xl">
                              <div className="absolute right-4 top-1/2 w-3 h-8 bg-muted-foreground rounded-full"></div>
                              <div className="absolute top-4 left-4 right-4 h-12 bg-gradient-to-r from-blue-100 to-purple-100 border-2 border-blue-200 rounded-lg">
                                <div className="absolute inset-2 border border-blue-300 rounded-md"></div>
                                <div className="absolute top-1/2 left-1/2 w-1 h-8 bg-blue-300 transform -translate-x-1/2 -translate-y-1/2"></div>
                              </div>
                              <div className="absolute bottom-6 left-4 right-4 top-20 border-2 border-muted-foreground/30 rounded-lg"></div>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};