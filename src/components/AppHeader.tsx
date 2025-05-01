
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search as SearchIcon, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

interface AppHeaderProps {
  searchEnabled?: boolean;
}

const AppHeader: React.FC<AppHeaderProps> = ({ searchEnabled = true }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 py-3 bg-gray-50 border-b border-luxury-text/10 flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/">
          <img 
            src="/lovable-uploads/c3b81731-3372-46e3-937e-fffe2146a4ba.png" 
            alt="DSA Master Crafted Doors" 
            className="h-8"
          />
        </Link>
      </div>
      
      {searchEnabled && (
        <div className="flex items-center flex-grow mx-4">
          <form onSubmit={handleSearch} className="flex gap-2 flex-grow max-w-md mx-auto">
            <div className="relative flex-grow">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                type="text" 
                placeholder="Search doors, collections..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-3 w-full"
              />
            </div>
            <Button type="submit" size="sm" variant="ghost" className="px-2">
              Search
            </Button>
          </form>
        </div>
      )}
      
      <div className="flex items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Filter className="h-4 w-4" />
              <span className="sr-only md:not-sr-only">Filter</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>Filter By</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Collection</DropdownMenuItem>
            <DropdownMenuItem>Style</DropdownMenuItem>
            <DropdownMenuItem>Material</DropdownMenuItem>
            <DropdownMenuItem>Size</DropdownMenuItem>
            <DropdownMenuSeparator />
            <Link to="/filter" className="w-full">
              <Button variant="outline" size="sm" className="w-full mt-2">
                Advanced Filters
              </Button>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default AppHeader;
