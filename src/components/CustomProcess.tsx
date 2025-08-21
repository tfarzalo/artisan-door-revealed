import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Palette, Hammer, Truck, CheckCircle } from "lucide-react";

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Consultation",
    description: "Take your inspiration photo to your DSA Dealer for expert guidance and design planning.",
    icon: <MessageSquare className="w-8 h-8" />,
    details: [
      "Bring inspiration photos",
      "Discuss design requirements",
      "Review size specifications", 
      "Explore material options"
    ]
  },
  {
    id: 2,
    title: "Custom Design",
    description: "Our Custom Design Specialists work with your dealer to create your one-of-a-kind entryway.",
    icon: <Palette className="w-8 h-8" />,
    details: [
      "Professional design consultation",
      "3D rendering and visualization",
      "Material and finish selection",
      "Approval and refinement process"
    ]
  },
  {
    id: 3,
    title: "Artisan Crafting",
    description: "Master wood artisans handcraft your door using traditional techniques and premium materials.",
    icon: <Hammer className="w-8 h-8" />,
    details: [
      "Hand-selected premium timber",
      "Traditional joinery techniques",
      "Custom glass and ironwork",
      "Professional finishing process"
    ]
  },
  {
    id: 4,
    title: "Quality Assurance",
    description: "Rigorous quality control ensures your door meets our exacting standards for excellence.",
    icon: <CheckCircle className="w-8 h-8" />,
    details: [
      "Multi-point quality inspection",
      "Finish and hardware verification",
      "Dimensional accuracy check",
      "Final protective packaging"
    ]
  },
  {
    id: 5,
    title: "Delivery & Installation",
    description: "Professional delivery and installation by our network of certified door professionals.",
    icon: <Truck className="w-8 h-8" />,
    details: [
      "Coordinated delivery scheduling",
      "Professional installation service",
      "Final adjustments and testing",
      "Care and maintenance guidance"
    ]
  }
];

export const CustomProcess: React.FC = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-foreground mb-4">
            Your Custom Door Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From initial inspiration to final installation, our proven process ensures your custom door 
            exceeds expectations at every step. Experience luxury craftsmanship designed to your specifications.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <Card 
                key={step.id} 
                className="relative border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
              >
                <CardContent className="p-6 text-center">
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {step.id}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-4 mt-2">
                    <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      {step.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-2 mb-6">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                        {detail}
                      </div>
                    ))}
                  </div>

                  {/* Arrow for larger screens */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <div className="w-0 h-0 border-l-4 border-l-primary border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-muted/50 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif text-foreground mb-4">
              Ready to Begin Your Custom Door Project?
            </h3>
            <p className="text-muted-foreground mb-6">
              Connect with a DSA Dealer near you to start your custom door journey. 
              Our network of professionals extends across the Northeast, Mid-Atlantic, and Southeast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Find Your Local Dealer
              </Button>
              <Button size="lg" variant="outline">
                View Custom Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};