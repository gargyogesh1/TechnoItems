import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/app/about/page";
import BlogPage from "./pages/app/blog/page";
import BlogDetailsPage from "./pages/app/blog-details/page";
import BlogSidebarPage from "./pages/app/blog-sidebar/page";
import ContactPage from "./pages/app/contact/page";
import SigninPage from "./pages/app/signin/page";
import SignupPage from "./pages/app/signup/page";
import Service from "./pages/services/service";
import StartUp from "./pages/app/startup";
import ErrorPage from "./pages/app/error/page";
import NotFound from "./pages/NotFound";
import "@/styles/index.css";
import "@/styles/st.css";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/TechnoItem">
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog-details" element={<BlogDetailsPage />} />
            <Route path="/blog-sidebar" element={<BlogSidebarPage />} />
            <Route path="/blog-sidebar/:slug" element={<BlogSidebarPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/service" element={<Service />} />
            <Route path="/service/:serviceType" element={<Service />} />
            {/* <Route path="/startup" element={<StartUp />} /> */}
            <Route path="/startup/:category" element={<StartUp />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
