"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

interface AuthMonsterProps {
  isPasswordFocused: boolean;
  emailValue: string;
}

const AuthMonster = ({ isPasswordFocused, emailValue }: AuthMonsterProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for the eyes
  const eyeX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const eyeY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  useEffect(() => {
    // Calculate eye position based on email length to simulate "watching" the typing
    if (!isPasswordFocused) {
      const offset = Math.min(emailValue.length * 2, 20) - 10;
      mouseX.set(offset);
      mouseY.set(0);
    }
  }, [emailValue, isPasswordFocused, mouseX, mouseY]);

  return (
    <div className="relative w-48 h-48 mx-auto mb-8 flex items-center justify-center">
      {/* Monster Body */}
      <motion.div
        animate={{
          scale: [1, 1.02, 1],
          rotate: isPasswordFocused ? [0, -1, 1, 0] : 0,
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative w-32 h-32 bg-[#1877F2] rounded-[2.5rem] shadow-2xl shadow-blue-500/20 flex items-center justify-center"
      >
        {/* Eyes Container */}
        <div className="flex gap-4 mb-4">
          {[0, 1].map((i) => (
            <div key={i} className="w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden">
              <motion.div
                style={{ x: eyeX, y: eyeY }}
                animate={{
                  scaleY: isPasswordFocused ? 0.1 : 1,
                }}
                className="w-4 h-4 bg-slate-900 rounded-full"
              />
            </div>
          ))}
        </div>

        {/* Mouth */}
        <motion.div
          animate={{
            height: isPasswordFocused ? 4 : 8,
            width: isPasswordFocused ? 12 : 24,
            borderRadius: 10,
          }}
          className="absolute bottom-8 bg-slate-900/20"
        />

        {/* Hands */}
        <motion.div
          initial={false}
          animate={{
            y: isPasswordFocused ? -60 : 40,
            rotate: isPasswordFocused ? 0 : 10,
            opacity: isPasswordFocused ? 1 : 0.4,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="absolute -left-4 flex gap-20 pointer-events-none"
        >
          <div className="w-10 h-12 bg-[#1877F2] border-4 border-blue-400/30 rounded-2xl shadow-lg" />
          <div className="w-10 h-12 bg-[#1877F2] border-4 border-blue-400/30 rounded-2xl shadow-lg" />
        </motion.div>
      </motion.div>

      {/* Decorative Sparkles */}
      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full blur-xl"
      />
    </div>
  );
};

export default AuthMonster;