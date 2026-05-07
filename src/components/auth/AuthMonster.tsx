"use client";

import React, { useEffect } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

interface AuthMonsterProps {
  isPasswordFocused: boolean;
  emailValue: string;
  passwordLength: number;
  isEmailValid: boolean;
}

const AuthMonster = ({ isPasswordFocused, emailValue, passwordLength, isEmailValid }: AuthMonsterProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const eyeX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const eyeY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  useEffect(() => {
    if (!isPasswordFocused) {
      const offset = Math.min(emailValue.length * 1.5, 25) - 12.5;
      mouseX.set(offset);
      mouseY.set(0);
    } else {
      mouseX.set(0);
      mouseY.set(10);
    }
  }, [emailValue, isPasswordFocused, mouseX, mouseY]);

  const isTypingEmail = emailValue.length > 0 && !isPasswordFocused;
  const isPasswordShort = passwordLength > 0 && passwordLength < 8;

  return (
    <div className="relative w-48 h-48 mx-auto mb-4 flex items-center justify-center">
      {/* Monster Body */}
      <motion.div
        animate={{
          y: isTypingEmail ? [0, -4, 0] : 0,
          scale: isEmailValid && !isPasswordFocused ? 1.05 : 1,
          rotate: isPasswordFocused ? (isPasswordShort ? [0, -2, 2, 0] : 0) : 0,
        }}
        transition={{
          y: { duration: 0.2, repeat: isTypingEmail ? Infinity : 0 },
          rotate: { duration: 0.1, repeat: isPasswordShort ? Infinity : 0 },
          type: "spring",
          stiffness: 200
        }}
        className="relative w-32 h-32 bg-[#1877F2] rounded-[2.5rem] shadow-2xl shadow-blue-500/20 flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Blushing */}
        <AnimatePresence>
          {emailValue.length > 15 && !isPasswordFocused && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex justify-between px-4 items-center pointer-events-none"
            >
              <div className="w-6 h-4 bg-red-400 rounded-full blur-md" />
              <div className="w-6 h-4 bg-red-400 rounded-full blur-md" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Eyebrows */}
        <div className="flex gap-8 mb-1">
          {[0, 1].map((i) => (
            <motion.div
              key={i}
              animate={{
                y: isPasswordFocused ? -2 : (isEmailValid ? -4 : 0),
                rotate: isPasswordFocused ? (i === 0 ? 20 : -20) : 0,
              }}
              className="w-6 h-1 bg-slate-900/40 rounded-full"
            />
          ))}
        </div>

        {/* Eyes */}
        <div className="flex gap-4 mb-4">
          {[0, 1].map((i) => (
            <div key={i} className="w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden">
              <motion.div
                style={{ x: eyeX, y: eyeY }}
                animate={{
                  scaleY: isPasswordFocused ? (passwordLength > 12 ? 0.4 : 0.1) : 1,
                }}
                className="w-4 h-4 bg-slate-900 rounded-full"
              />
            </div>
          ))}
        </div>

        {/* Mouth */}
        <motion.div
          animate={{
            height: isPasswordFocused ? 4 : (isEmailValid ? 12 : 6),
            width: isPasswordFocused ? 12 : (isEmailValid ? 24 : 16),
            borderRadius: isEmailValid && !isPasswordFocused ? "0 0 20px 20px" : "10px",
            backgroundColor: isEmailValid && !isPasswordFocused ? "rgba(15, 23, 42, 0.4)" : "rgba(15, 23, 42, 0.2)"
          }}
          className="absolute bottom-8"
        />

        {/* Hands (Covering Eyes) */}
        <motion.div
          initial={false}
          animate={{
            y: isPasswordFocused ? (passwordLength > 12 ? -35 : -65) : 50,
            x: isPasswordFocused && passwordLength > 12 ? (passwordLength % 2 === 0 ? -5 : 5) : 0,
          }}
          transition={{ type: "spring", stiffness: 250, damping: 25 }}
          className="absolute inset-0 flex justify-center items-center pointer-events-none"
        >
          <div className="flex gap-16">
            <motion.div 
              animate={{ rotate: isPasswordFocused ? -10 : 0 }}
              className="w-12 h-16 bg-[#1877F2] border-4 border-blue-400/20 rounded-2xl shadow-xl" 
            />
            <motion.div 
              animate={{ rotate: isPasswordFocused ? 10 : 0 }}
              className="w-12 h-16 bg-[#1877F2] border-4 border-blue-400/20 rounded-2xl shadow-xl" 
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Ears/Horns that wiggle */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: isTypingEmail ? [-5, 5, -5] : 0 }}
          transition={{ duration: 0.3, repeat: Infinity }}
          className="absolute top-4 left-6 w-6 h-8 bg-[#1877F2] rounded-t-full -rotate-12"
        />
        <motion.div
          animate={{ rotate: isTypingEmail ? [5, -5, 5] : 0 }}
          transition={{ duration: 0.3, repeat: Infinity }}
          className="absolute top-4 right-6 w-6 h-8 bg-[#1877F2] rounded-t-full rotate-12"
        />
      </div>
    </div>
  );
};

export default AuthMonster;