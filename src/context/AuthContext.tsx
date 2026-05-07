"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { toast } from 'sonner';
import { useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';
import type { Id } from '../../convex/_generated/dataModel';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAdmin: boolean;
  login: (userData: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const convexUserId = user?.id as Id<"users"> | undefined;
  const convexUser = useQuery(
    api.users.getUser,
    convexUserId ? { userId: convexUserId } : "skip"
  );

  useEffect(() => {
    const savedUser = localStorage.getItem('seo2026_user');
    if (savedUser) {
      try {
        const parsed = JSON.parse(savedUser);
        setUser({
          id: parsed.id,
          name: parsed.name,
          email: parsed.email,
          role: parsed.role || "user",
        });
      } catch {
        localStorage.removeItem('seo2026_user');
      }
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (convexUser && user) {
      setUser(prev => {
        if (!prev) return prev;
        const updatedRole = convexUser.role || prev.role;
        if (prev.role !== updatedRole || prev.name !== convexUser.name) {
          const updated = { ...prev, role: updatedRole, name: convexUser.name };
          localStorage.setItem('seo2026_user', JSON.stringify(updated));
          return updated;
        }
        return prev;
      });
    }
  }, [convexUser, user]);

  const login = useCallback((userData: User) => {
    setUser(userData);
    localStorage.setItem('seo2026_user', JSON.stringify(userData));

    if (userData.role === "admin") {
      toast.success("Welcome back, admin!");
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('seo2026_user');
    toast.success("Logged out successfully");
  }, []);

  const isAdmin = user?.role === "admin";

  return (
    <AuthContext.Provider value={{ user, isLoading, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};