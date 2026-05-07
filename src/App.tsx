"use client";

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import { PlanProvider } from './context/PlanContext';
import { AuthProvider } from './context/AuthContext';
import { OnboardingProvider } from './context/OnboardingContext';
import Index from './pages/Index';
import Docs from './pages/Docs';
import Report from './pages/Report';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Features from './pages/Features';
import Workflow from './pages/Workflow';
import PricingPage from './pages/Pricing';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import ContentAnalyzer from './pages/ContentAnalyzer';
import OptimizationHistory from './pages/History';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';
import AuthenticatedLayout from './components/dashboard/AuthenticatedLayout';
import { Toaster } from 'sonner';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <AuthProvider>
          <OnboardingProvider>
            <PlanProvider>
              <Routes>
                {/* Public routes */}
                <Route path="/" element={<Index />} />
                <Route path="/features" element={<Features />} />
                <Route path="/workflow" element={<Workflow />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/docs" element={<Docs />} />
                <Route path="/report/:id" element={<Report />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

                {/* Authenticated routes with sidebar */}
                <Route element={<AuthenticatedLayout />}>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/analyze" element={<ContentAnalyzer />} />
                  <Route path="/history" element={<OptimizationHistory />} />
                  <Route path="/settings" element={<Settings />} />
                </Route>

                <Route path="*" element={<NotFound />} />
              </Routes>
              <Toaster position="top-center" richColors />
            </PlanProvider>
          </OnboardingProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
