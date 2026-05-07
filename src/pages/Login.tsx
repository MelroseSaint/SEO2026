"use client";

import React from "react";
import AuthForm from "@/components/auth/AuthForm";
import Navbar from "@/components/layout/Navbar";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0f0f0f] text-slate-900 dark:text-white">
      <Navbar />
      <main className="container mx-auto px-4 flex items-center justify-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full flex justify-center"
        >
          <AuthForm type="login" />
        </motion.div>
      </main>
    </div>
  );
};

export default Login;