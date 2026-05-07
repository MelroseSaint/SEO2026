"use client";

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import { PlanProvider } from './context/PlanContext';
import Index from './pages/Index';
import Docs from './pages/Docs';
import Report from './pages/Report';
import NotFound from './pages/NotFound';
import { Toaster } from 'sonner';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <PlanProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/report/:id" element={<Report />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster position="top-center" richColors />
        </PlanProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
