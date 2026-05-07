"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Menu, X, BookOpen, Zap, CreditCard, LogIn, LogOut, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import BackendStatus from "@/components/backend-status";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, isAdmin, logout } = useAuth();

  const isDocsPage = location.pathname === "/docs";
  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";

  const handleLogoClick = () => {
    navigate("/");
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "Features", path: "/features", icon: Zap },
    { name: "Workflow", path: "/workflow", icon: BookOpen },
    { name: "Pricing", path: "/pricing", icon: CreditCard },
  ];

  const authedLinks = [
    ...navLinks,
    { name: "Dashboard", path: "/dashboard", icon: Zap },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-white/5 bg-white/90 dark:bg-[#0f0f0f]/90 backdrop-blur-xl">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div
            className="flex items-center gap-2 font-bold text-xl tracking-tight cursor-pointer group"
            onClick={handleLogoClick}
          >
            <div className="h-8 w-8 bg-[#1877F2] rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="hidden sm:inline">
              SEO<span className="text-[#1877F2]">2026</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
{(user ? authedLinks : navLinks).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "transition-colors",
                  location.pathname === link.path
                    ? "text-[#1877F2] dark:text-white"
                    : "hover:text-[#1877F2] dark:hover:text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/docs"
              className={cn(
                "transition-colors",
                isDocsPage ? "text-[#1877F2] dark:text-white" : "hover:text-[#1877F2] dark:hover:text-white"
              )}
            >
              Docs
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <BackendStatus />
          <ThemeToggle />

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-10 w-10 rounded-full p-0 overflow-hidden border border-slate-200 dark:border-white/10"
                >
                  <div className="h-full w-full bg-blue-500/10 flex items-center justify-center text-[#1877F2] font-bold">
                    {user.name?.charAt(0).toUpperCase() || "U"}
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate("/dashboard")}>
                  <Zap className="mr-2 h-4 w-4" />
                  <span>Dashboard</span>
                </DropdownMenuItem>
                {isAdmin && (
                  <DropdownMenuItem onClick={() => navigate("/settings")} className="text-[#1877F2]">
                    <Shield className="mr-2 h-4 w-4" />
                    <span>Admin</span>
                  </DropdownMenuItem>
                )}
                <DropdownMenuItem onClick={() => navigate("/docs")}>
                  <BookOpen className="mr-2 h-4 w-4" />
                  <span>Documentation</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout} className="text-red-600 focus:text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button
                variant="ghost"
                className="hidden sm:flex gap-2"
                onClick={() => navigate("/login")}
              >
                <LogIn className="h-4 w-4" />
                Log in
              </Button>
              <Button
                onClick={() => navigate("/signup")}
                className="bg-[#1877F2] hover:bg-[#166fe5] text-white shadow-lg shadow-blue-500/20 rounded-lg"
              >
                Get Started
              </Button>
            </>
          )}

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
      <div
        className={cn(
          "fixed inset-0 top-16 z-40 bg-white dark:bg-[#0f0f0f] md:hidden transition-all duration-300 ease-in-out",
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        )}
      >
        <div className="flex flex-col p-6 gap-6">
          {(user ? authedLinks : navLinks).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-4 text-lg font-semibold text-slate-600 dark:text-slate-400 hover:text-[#1877F2] dark:hover:text-white transition-colors"
            >
              <link.icon className="h-5 w-5 text-[#1877F2]" />
              {link.name}
            </Link>
          ))}
          <Link
            to="/docs"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-4 text-lg font-semibold text-slate-600 dark:text-slate-400 hover:text-[#1877F2] dark:hover:text-white transition-colors"
          >
            <BookOpen className="h-5 w-5 text-[#1877F2]" />
            Documentation
          </Link>
          <div className="pt-6 border-t border-slate-100 dark:border-white/5 space-y-4">
            {user ? (
              <Button
                variant="destructive"
                className="w-full h-12 rounded-xl"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  logout();
                }}
              >
                Log out
              </Button>
            ) : (
              <Button
                className="w-full bg-[#1877F2] hover:bg-[#166fe5] text-white h-12 rounded-xl"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  navigate("/login");
                }}
              >
                Log in to Dashboard
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
