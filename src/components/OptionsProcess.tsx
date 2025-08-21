import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Truck, Shield } from "lucide-react";

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  timeframe: string;
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Consultation",
    description: "Discuss your options and requirements with your DSA dealer to select the perfect add-ons for your door.",
    icon: <CheckCircle className="w-8 h-8" />,
    timeframe: "Same day"
  },
  {
    id: 2,
    title: "Manufacturing",
    description: "Your selected options are integrated during the door manufacturing process for seamless quality.",
    icon: <Clock className="w-8 h-8" />,
    timeframe: "2-4 weeks"
  },
  {
    id: 3,
    title: "Quality Control", 
    description: "Each door with options undergoes rigorous quality testing to ensure all components meet our standards.",
    icon: <Shield className="w-8 h-8" />,
    timeframe: "Included"
  },
  {
    id: 4,
    title: "Delivery",
    description: "Professional delivery and installation ensures your door and all options are properly fitted.",
    icon: <Truck className="w-8 h-8" />,
    timeframe: "Scheduled"
  }
];

export const OptionsProcess: React.FC = () => {
  return (
    <section className="py-24 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-foreground mb-4">
            How Options & Add-ons Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our streamlined process ensures your selected options are seamlessly integrated 
            into your door system with professional quality and installation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {processSteps.map((step, index) => (
            <Card 
              key={step.id} 
              className="relative border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group text-center"
            >
              <CardContent className="p-6">
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
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {step.description}
                </p>

                {/* Timeframe */}
                <Badge variant="outline" className="text-primary border-primary/30">
                  {step.timeframe}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-background/60 border rounded-xl p-8 max-w-4xl mx-auto backdrop-blur-sm">
            <h3 className="text-2xl font-serif text-foreground mb-4">
              Ready to Customize Your Door?
            </h3>
            <p className="text-muted-foreground mb-6">
              Browse our complete selection of options and add-ons to create the perfect door system 
              that combines beauty, security, and performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Browse All Options
              </Button>
              <Button size="lg" variant="outline">
                Find Local Dealer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};