import { Suspense, useEffect, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LanguageProvider } from "./contexts/LanguageContext";
const Index = lazy(() => import("./pages/Index"));
const Capabilities = lazy(() => import("./pages/Capabilities"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const PageFallback = () => (
  <div className="min-h-screen bg-bg-primary text-text-secondary flex items-center justify-center">
    <div className="flex items-center gap-2 text-sm font-medium">
      <span className="h-2 w-2 rounded-full bg-[--pulse-primary] animate-ping" aria-hidden="true" />
      <span>Loading experience…</span>
    </div>
  </div>
);

const App = () => {
  useEffect(() => {
    document.title = 'FabrikTakt';
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <LanguageProvider>
            <Toaster />
            <Sonner />
            <Suspense fallback={<PageFallback />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/capabilities" element={<Capabilities />} />
                <Route path="/contact" element={<Contact />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </LanguageProvider>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
