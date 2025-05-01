
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CollectionDetail from "./pages/CollectionDetail";
import StyleSelection from "./pages/StyleSelection";
import DoorOptions from "./pages/DoorOptions";
import Search from "./pages/Search";
import Filter from "./pages/Filter";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/collection/:collectionId" element={<CollectionDetail />} />
          <Route path="/collection/:collectionId/subcollection/:subcollectionId" element={<StyleSelection />} />
          <Route path="/collection/:collectionId/subcollection/:subcollectionId/style/:styleId" element={<DoorOptions />} />
          <Route path="/search" element={<Search />} />
          <Route path="/filter" element={<Filter />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
