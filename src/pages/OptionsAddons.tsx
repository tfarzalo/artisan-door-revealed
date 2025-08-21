import React from "react";
import { useLocation } from "react-router-dom";
import { NavigationMenu } from "@/components/NavigationMenu";
import { HeroSection } from "@/components/HeroSection";
import { OptionsShowcase } from "@/components/OptionsShowcase";
import { OptionsProcess } from "@/components/OptionsProcess";
import { Settings, Sparkles, Shield, Target } from "lucide-react";

const OptionsAddons = () => {
  const location = useLocation();
  
  const heroStats = [
    { icon: Settings, number: "50+", label: "Available Options" },
    { icon: Sparkles, number: "15+", label: "Finish Options" },
    { icon: Shield, number: "10+", label: "Security Features" },
    { icon: Target, number: "100%", label: "Customizable" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavigationMenu currentPath={location.pathname} />
      
      <HeroSection
        title="Options & Add-ons"
        subtitle="Complete your door system with professional finishing, premium glass options, quality hardware, and decorative accents. Each option is carefully selected to enhance both beauty and performance."
        stats={heroStats}
        primaryAction="Browse Options"
        secondaryAction="Request Quote"
      />

      <div className="space-y-0">
        <OptionsShowcase />
        <OptionsProcess />
      </div>
    </div>
  );
};

export default OptionsAddons;