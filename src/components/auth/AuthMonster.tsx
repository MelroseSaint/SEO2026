"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence, useTransform } from "framer-motion";

interface AuthMonsterProps {
  isPasswordFocused: boolean;
  emailValue: string;
  passwordLength: number;
  isEmailValid: boolean;
  isHoveringSubmit: boolean;
}

const AuthMonster = ({ 
  isPasswordFocused, 
  emailValue, 
  passwordLength, 
  isEmailValid,
  isHoveringSubmit 
}: AuthMonsterProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseNear, setIsMouseNear] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const eyeX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const eyeY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  // Glasses movement - slightly more exaggerated than eyes for depth
  const glassesX = useTransform(eyeX, (val) => val * 1.2);
  const glassesY = useTransform(eyeY, (val) => val * 1.1);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || isPasswordFocused) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const dist = Math.sqrt(Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2));
      setIsMouseNear(dist < 120);

      if (emailValue.length === 0) {
        const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
        const distance = Math.min(dist / 8, 15);
        mouseX.set(Math.cos(angle) * distance);
        mouseY.set(Math.sin(angle) * distance);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [emailValue, isPasswordFocused, mouseX, mouseY]);

  useEffect(() => {
    if (isPasswordFocused) {
      mouseX.set(0);
      mouseY.set(12);
    } else if (emailValue.length > 0) {
      const offset = Math.min(emailValue.length * 1.8, 30) - 15;
      mouseX.set(offset);
      mouseY.set(0);
    }
  }, [emailValue, isPasswordFocused, mouseX, mouseY]);

  const isTypingEmail = emailValue.length > 0 && !isPasswordFocused;
  const isPasswordShort = passwordLength > 0 && passwordLength < 8;

  return (
    <div ref={containerRef} className="relative w-48 h-48 mx-auto mb-4 flex items-center justify-center">
      {/* Monster Body */}
      <motion.div
        animate={{
          y: isHoveringSubmit ? [0, -12, 0] : (isTypingEmail ? [0, -4, 0] : 0),
          scale: isHoveringSubmit ? 1.15 : (isEmailValid && !isPasswordFocused ? 1.08 : (isMouseNear && !isPasswordFocused ? 1.1 : 1)),
          rotate: isPasswordFocused ? (isPasswordShort ? [0, -3, 3, 0] : 0) : 0,
          backgroundColor: isEmailValid ? "#10b981" : (isPasswordFocused ? "#4f46e5" : "#1877F2"),
        }}
        transition={{
          y: { duration: isHoveringSubmit ? 0.3 : 0.2, repeat: (isHoveringSubmit || isTypingEmail) ? Infinity : 0 },
          rotate: { duration: 0.1, repeat: isPasswordShort ? Infinity : 0 },
          backgroundColor: { duration: 0.5 },
          type: "spring",
          stiffness: 200
        }}
        className="relative w-32 h-32 rounded-[2.5rem] shadow-2xl shadow-blue-500/20 flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Blushing */}
        <AnimatePresence>
          {(emailValue.length > 12 || isHoveringSubmit) && !isPasswordFocused && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex justify-between px-4 items-center pointer-events-none"
            >
              <div className="w-8 h-5 bg-red-400/60 rounded-full blur-md" />
              <div className="w-8 h-5 bg-red-400/60 rounded-full blur-md" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Eyebrows */}
        <div className="flex gap-10 mb-1 z-10">
          {[0, 1].map((i) => (
            <motion.div
              key={i}
              animate={{
                y: isMouseNear && !isPasswordFocused ? -10 : (isPasswordFocused ? -4 : (isEmailValid || isHoveringSubmit ? -6 : 0)),
                rotate: isPasswordFocused ? (i === 0 ? 25 : -25) : (isMouseNear && !isPasswordFocused ? (i === 0 ? -15 : 15) : 0),
                scaleX: isEmailValid ? 1.2 : 1,
              }}
              className="w-7 h-1.5 bg-slate-900/50 rounded-full"
            />
          ))}
        </div>

        {/* Eyes Container */}
        <div className="relative flex gap-5 mb-4 z-10">
          {[0, 1].map((i) => (
            <div key={i} className="w-9 h-9 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-inner">
              <motion.div
                style={{ x: eyeX, y: eyeY }}
                animate={{
                  scale: isMouseNear && !isPasswordFocused ? 1.3 : 1,
                  scaleY: isPasswordFocused ? (passwordLength > 12 ? 0.5 : 0.15) : 1,
                }}
                className="w-5 h-5 bg-slate-900 rounded-full"
              />
            </div>
          ))}

          {/* Glasses */}
          <motion.div 
            style={{ x: glassesX, y: glassesY }}
            animate={{
              opacity: isPasswordFocused ? 0.3 : 1,
              scale: isEmailValid ? 1.05 : 1,
            }}
            className="absolute -inset-x-4 -top-1 flex items-center justify-center pointer-events-none"
          >
            <div className="flex items-center">
              <div className="w-12 h-12 border-[3px] border-slate-900/80 rounded-full bg-white/10 backdrop-blur-[1px] relative">
                <div className="absolute top-2 right-2 w-3 h-1 bg-white/40 rounded-full rotate-45" />
              </div>
              <div className="w-6 h-[3px] bg-slate-900/80 -mx-1" />
              <div className="w-12 h-12 border-[3px] border-slate-900/80 rounded-full bg-white/10 backdrop-blur-[1px] relative">
                <div className="absolute top-2 right-2 w-3 h-1 bg-white/40 rounded-full rotate-45" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mouth */}
        <motion.div
          animate={{
            height: isMouseNear && !isPasswordFocused ? 18 : (isPasswordFocused ? 5 : (isEmailValid || isHoveringSubmit ? 14 : 8)),
            width: isMouseNear && !isPasswordFocused ? 18 : (isPasswordFocused ? 14 : (isEmailValid || isHoveringSubmit ? 28 : 20)),
            borderRadius: isMouseNear && !isPasswordFocused ? "50%" : (isEmailValid || isHoveringSubmit ? "0 0 20px 20px" : "10px"),
            backgroundColor: isEmailValid ? "rgba(6, 78, 59, 0.4)" : "rgba(15, 23, 42, 0.4)"
          }}
          className="absolute bottom-8"
        />

        {/* Hands (Covering Eyes) */}
        <motion.div
          initial={false}
          animate={{
            y: isPasswordFocused ? (passwordLength > 12 ? -30 : -60) : 60,
            x: isPasswordFocused && passwordLength > 12 ? (passwordLength % 2 === 0 ? -4 : 4) : 0,
          }}
          transition={{ type: "spring", stiffness: 250, damping: 25 }}
          className="absolute inset-0 flex justify-center items-center pointer-events-none z-20"
        >
          <div className="flex gap-16">
            <motion.div 
              animate={{ rotate: isPasswordFocused ? -15 : 0 }}
              className="w-14 h-18 bg-inherit border-4 border-white/10 rounded-2xl shadow-2xl" 
            />
            <motion.div 
              animate={{ rotate: isPasswordFocused ? 15 : 0 }}
              className="w-14 h-18 bg-inherit border-4 border-white/10 rounded-2xl shadow-2xl" 
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Ears/Horns */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            rotate: isTypingEmail || isHoveringSubmit ? [-8, 8, -8] : -12,
            scale: isEmailValid ? 1.2 : 1,
          }}
          transition={{ duration: 0.3, repeat: (isTypingEmail || isHoveringSubmit) ? Infinity : 0 }}
          className="absolute top-4 left-6 w-7 h-10 bg-inherit rounded-t-full"
          style={{ backgroundColor: isEmailValid ? "#10b981" : (isPasswordFocused ? "#4f46e5" : "#1877F2") }}
        />
        <motion.div
          animate={{ 
            rotate: isTypingEmail || isHoveringSubmit ? [8, -8, 8] : 12,
            scale: isEmailValid ? 1.2 : 1,
          }}
          transition={{ duration: 0.3, repeat: (isTypingEmail || isHoveringSubmit) ? Infinity : 0 }}
          className="absolute top-4 right-6 w-7 h-10 bg-inherit rounded-t-full"
          style={{ backgroundColor: isEmailValid ? "#10b981" : (isPasswordFocused ? "#4f46e5" : "#1877F2") }}
        />
      </div>
    </div>
  );
};

export default AuthMonster;