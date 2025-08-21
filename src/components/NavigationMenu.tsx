import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavigationMenuProps {
  currentPath: string;
}

const navigationItems = [
  { path: "/", label: "Standard Doors" },
  { path: "/builders-doors", label: "Builder's Doors" },
  { path: "/custom-doors", label: "Custom Doors" },
  { path: "/options-addons", label: "Options & Addons" }
];

export const NavigationMenu: React.FC<NavigationMenuProps> = ({ currentPath }) => {
  return (
    <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="flex justify-center py-6">
        <nav className="flex space-x-8">
          {navigationItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-lg font-medium transition-colors hover:text-primary",
                currentPath === item.path
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};