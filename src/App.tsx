"use client";

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import { PlanProvider } from './context/PlanContext';
import Index from './pages/Index';
import { Toaster } from 'sonner';

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <PlanProvider>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
        <Toaster position="top-center" richColors />
      </PlanProvider>
    </ThemeProvider>
  );
}

export default App;