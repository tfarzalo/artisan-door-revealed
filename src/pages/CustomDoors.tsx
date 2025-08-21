import React from "react";
import { useLocation } from "react-router-dom";
import { NavigationMenu } from "@/components/NavigationMenu";
import { HeroSection } from "@/components/HeroSection";
import { CustomDesignShowcase } from "@/components/CustomDesignShowcase";
import { TimberShowcase } from "@/components/TimberShowcase";
import { CustomProcess } from "@/components/CustomProcess";
import { Star, Award, Users, Infinity } from "lucide-react";

const CustomDoors = () => {
  const location = useLocation();
  
  const heroStats = [
    { icon: Star, number: "50+", label: "Years Experience" },
    { icon: Award, number: "1000+", label: "Custom Doors" },
    { icon: Users, number: "500+", label: "Dealer Network" },
    { icon: Infinity, number: "∞", label: "Design Possibilities" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavigationMenu currentPath={location.pathname} />
      
      <HeroSection
        title="Custom Doors"
        subtitle="Bring your inspiration to life with the help of DSA's Custom Design Specialists. We can accommodate almost any request or idea, from custom configurations and glass designs, to fitting uncommon sizes and everything in between."
        stats={heroStats}
        primaryAction="Start Your Custom Project"
        secondaryAction="View Custom Gallery"
      />

      <div className="space-y-0">
        <CustomDesignShowcase />
        <TimberShowcase />
        <CustomProcess />
      </div>
    </div>
  );
};

export default CustomDoors;