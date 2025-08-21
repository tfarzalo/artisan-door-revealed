import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CustomDesignShowcase } from "@/components/CustomDesignShowcase";
import { TimberShowcase } from "@/components/TimberShowcase";
import { CustomProcess } from "@/components/CustomProcess";
import { ArrowRight, Star, Award, Users } from "lucide-react";

const CustomDoors = () => {
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
          <Link to="/custom-doors" className="text-lg text-primary font-semibold border-b-2 border-primary pb-1">
            Custom Doors
          </Link>
          <Link to="/options-addons" className="text-lg text-muted-foreground hover:text-primary transition-colors">
            Options & Addons
          </Link>
        </nav>
      </div>
      
      {/* Hero Section */}
      <section className="py-20 px-6 text-center bg-gradient-to-b from-background via-muted/30 to-background">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif text-foreground mb-6 tracking-tight">
            Custom Doors
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
            Bring your inspiration to life with the help of DSA's Custom Design Specialists. 
            We can accommodate almost any request or idea, from custom configurations and glass designs, 
            to fitting uncommon sizes and everything in between.
          </p>
          
          {/* Key Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Star className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Award className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Custom Doors</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Users className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Dealer Network</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <div className="p-3 bg-primary/10 rounded-full">
                  <ArrowRight className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="text-3xl font-bold text-primary mb-2">∞</div>
              <div className="text-muted-foreground">Design Possibilities</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              Start Your Custom Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline">
              View Custom Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Custom Design Showcase */}
      <CustomDesignShowcase />

      {/* Timber Showcase */}
      <TimberShowcase />

      {/* Custom Process */}
      <CustomProcess />
    </div>
  );
};

export default CustomDoors;