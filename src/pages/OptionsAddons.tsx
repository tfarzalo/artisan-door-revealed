import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { OptionsShowcase } from "@/components/OptionsShowcase";
import { OptionsProcess } from "@/components/OptionsProcess";
import { ArrowRight, Settings, Sparkles, Shield } from "lucide-react";

const OptionsAddons = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Menu */}
      <div className="flex justify-center py-6">
        <nav className="flex space-x-8">
          <Link to="/" className="text-lg text-muted-foreground hover:text-primary transition-colors">
            Standard Doors
          </Link>
          <Link to="/builders-doors" className="text-lg text-muted-foreground hover:text-primary transition-colors">
            Builder's Doors
          </Link>
          <Link to="/custom-doors" className="text-lg text-muted-foreground hover:text-primary transition-colors">
            Custom Doors
          </Link>
          <Link to="/options-addons" className="text-lg text-primary font-semibold border-b-2 border-primary pb-1">
            Options & Addons
          </Link>
        </nav>
      </div>
      
      {/* Hero Section */}
      <section className="py-20 px-6 text-center bg-gradient-to-b from-background via-muted/30 to-background">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif text-foreground mb-6 tracking-tight">
            Options & Add-ons
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
            Complete your door system with professional finishing, premium glass options, quality hardware, 
            and decorative accents. Each option is carefully selected to enhance both beauty and performance.
          </p>
          
          {/* Key Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Settings className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Available Options</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Finish Options</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Security Features</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <div className="p-3 bg-primary/10 rounded-full">
                  <ArrowRight className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Customizable</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              Browse Options
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline">
              Request Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Options Showcase */}
      <OptionsShowcase />

      {/* Options Process */}
      <OptionsProcess />
    </div>
  );
};

export default OptionsAddons;