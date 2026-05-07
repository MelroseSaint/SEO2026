"use client";

import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import Sidebar from "@/components/dashboard/Sidebar";
import Onboarding from "@/pages/Onboarding";
import { useOnboarding } from "@/context/OnboardingContext";

const AuthenticatedLayout = () => {
  const { user, isLoading } = useAuth();
  const { isOpen } = useOnboarding();
  const [collapsed, setCollapsed] = React.useState(false);
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0f0f0f]">
        <div className="h-8 w-8 border-2 border-[#1877F2] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f0f0f]">
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
      <div
        className="transition-all duration-300 min-h-screen"
        style={{ marginLeft: collapsed ? 72 : 260 }}
      >
        <Outlet />
      </div>
      {isOpen && <Onboarding />}
    </div>
  );
};

export default AuthenticatedLayout;
