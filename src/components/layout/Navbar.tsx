"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Menu, X, BookOpen, Zap, CreditCard, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { toast } from "sonner";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isDocsPage = location.pathname === "/docs";

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    
    if (isDocsPage) {
      navigate(`/#${id}`);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleLogoClick = () => {
    if (isDocsPage) {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: "Features", id: "features", icon: Zap },
    { name: "Workflow", id: "how-it-works", icon: BookOpen },
    { name: "Pricing", id: "pricing", icon: CreditCard },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-white/5 bg-white/80 dark:bg-black/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div 
            className="flex items-center gap-2 font-bold text-xl tracking-tight cursor-pointer group" 
            onClick={handleLogoClick}
          >
            <div className="h-8 w-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="hidden sm:inline">SEO<span className="text-indigo-600 dark:text-indigo-400">2026</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="hover:text-indigo-600 dark:hover:text-white transition-colors"
              >
                {link.name}
              </button>
            ))}
            <Link 
              to="/docs" 
              className={cn(
                "transition-colors",
                isDocsPage ? "text-indigo-600 dark:text-white" : "hover:text-indigo-600 dark:hover:text-white"
              )}
            >
              Docs
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            className="hidden sm:flex gap-2" 
            onClick={() => toast.info("Login system is currently being integrated.")}
          >
            <LogIn className="h-4 w-4" />
            Log in
          </Button>
          <Button 
            onClick={() => isDocsPage ? navigate("/#tool") : scrollToSection('tool')}
            className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/20"
          >
            Get Started
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-0 top-16 z-40 bg-white dark:bg-black md:hidden transition-all duration-300 ease-in-out",
        isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
      )}>
        <div className="flex flex-col p-6 gap-6">
          {navLinks.map((link) => (
            <button 
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="flex items-center gap-4 text-lg font-semibold text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors"
            >
              <link.icon className="h-5 w-5 text-indigo-500" />
              {link.name}
            </button>
          ))}
          <Link 
            to="/docs" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-4 text-lg font-semibold text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors"
          >
            <BookOpen className="h-5 w-5 text-indigo-500" />
            Documentation
          </Link>
          <div className="pt-6 border-t border-slate-100 dark:border-white/5">
            <Button 
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white h-12 rounded-xl"
              onClick={() => {
                setIsMobileMenuOpen(false);
                toast.info("Login system is currently being integrated.");
              }}
            >
              Log in to Dashboard
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;