"use client";

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import { PlanProvider } from './context/PlanContext';
import { AuthProvider } from './context/AuthContext';
import Index from './pages/Index';
import Docs from './pages/Docs';
import Report from './pages/Report';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Features from './pages/Features';
import Workflow from './pages/Workflow';
import PricingPage from './pages/Pricing';
import NotFound from './pages/NotFound';
import { Toaster } from 'sonner';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <AuthProvider>
          <PlanProvider>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/features" element={<Features />} />
              <Route path="/workflow" element={<Workflow />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/docs" element={<Docs />} />
              <Route path="/report/:id" element={<Report />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Toaster position="top-center" richColors />
          </PlanProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
