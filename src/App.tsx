
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Index from "./pages/Index";
import CollectionDetail from "./pages/CollectionDetail";
import StyleSelection from "./pages/StyleSelection";
import DoorOptions from "./pages/DoorOptions";
import DoorDetail from "./pages/DoorDetail";
import Search from "./pages/Search";
import Filter from "./pages/Filter";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

// Wrapper component for route animations
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="flex-1 w-full"
      >
        <Routes location={location}>
          <Route path="/" element={<Index />} />
          <Route path="/collection/:collectionId" element={<CollectionDetail />} />
          <Route path="/collection/:collectionId/subcollection/:subcollectionId" element={<StyleSelection />} />
          <Route path="/collection/:collectionId/subcollection/:subcollectionId/style/:styleId" element={<DoorOptions />} />
          <Route path="/door/:doorSlug" element={<DoorDetail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/filter" element={<Filter />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
