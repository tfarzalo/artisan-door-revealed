import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, LucideIcon } from "lucide-react";

interface StatItem {
  icon: LucideIcon;
  number: string;
  label: string;
}

interface HeroSectionProps {
  title: string;
  subtitle: string;
  stats: StatItem[];
  primaryAction: string;
  secondaryAction?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  stats,
  primaryAction,
  secondaryAction,
  onPrimaryClick,
  onSecondaryClick
}) => {
  return (
    <section className="py-20 px-6 text-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      {/* Content */}
      <div className="max-w-6xl mx-auto relative">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-foreground mb-6 tracking-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-16 leading-relaxed">
          {subtitle}
        </p>
        
        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="flex items-center justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-xl font-semibold"
            onClick={onPrimaryClick}
          >
            {primaryAction}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          {secondaryAction && (
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-3 rounded-xl font-semibold"
              onClick={onSecondaryClick}
            >
              {secondaryAction}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};