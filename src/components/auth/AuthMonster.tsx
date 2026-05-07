"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || isPasswordFocused) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate distance for "surprised" reaction
      const dist = Math.sqrt(Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2));
      setIsMouseNear(dist < 100);

      if (emailValue.length === 0) {
        // Follow mouse if not typing
        const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
        const distance = Math.min(dist / 10, 12);
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
      mouseY.set(10);
    } else if (emailValue.length > 0) {
      // Follow typing progress
      const offset = Math.min(emailValue.length * 1.5, 25) - 12.5;
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
          y: isHoveringSubmit ? [0, -10, 0] : (isTypingEmail ? [0, -4, 0] : 0),
          scale: isHoveringSubmit ? 1.1 : (isEmailValid && !isPasswordFocused ? 1.05 : (isMouseNear && !isPasswordFocused ? 1.1 : 1)),
          rotate: isPasswordFocused ? (isPasswordShort ? [0, -2, 2, 0] : 0) : 0,
        }}
        transition={{
          y: { duration: isHoveringSubmit ? 0.4 : 0.2, repeat: (isHoveringSubmit || isTypingEmail) ? Infinity : 0 },
          rotate: { duration: 0.1, repeat: isPasswordShort ? Infinity : 0 },
          type: "spring",
          stiffness: 200
        }}
        className="relative w-32 h-32 bg-[#1877F2] rounded-[2.5rem] shadow-2xl shadow-blue-500/20 flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Blushing */}
        <AnimatePresence>
          {(emailValue.length > 15 || isHoveringSubmit) && !isPasswordFocused && (
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
                y: isMouseNear && !isPasswordFocused ? -8 : (isPasswordFocused ? -2 : (isEmailValid || isHoveringSubmit ? -4 : 0)),
                rotate: isPasswordFocused ? (i === 0 ? 20 : -20) : (isMouseNear && !isPasswordFocused ? (i === 0 ? -10 : 10) : 0),
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
                  scale: isMouseNear && !isPasswordFocused ? 1.2 : 1,
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
            height: isMouseNear && !isPasswordFocused ? 16 : (isPasswordFocused ? 4 : (isEmailValid || isHoveringSubmit ? 12 : 6)),
            width: isMouseNear && !isPasswordFocused ? 16 : (isPasswordFocused ? 12 : (isEmailValid || isHoveringSubmit ? 24 : 16)),
            borderRadius: isMouseNear && !isPasswordFocused ? "50%" : (isEmailValid || isHoveringSubmit ? "0 0 20px 20px" : "10px"),
            backgroundColor: "rgba(15, 23, 42, 0.3)"
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

      {/* Ears/Horns */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: isTypingEmail || isHoveringSubmit ? [-5, 5, -5] : 0 }}
          transition={{ duration: 0.3, repeat: Infinity }}
          className="absolute top-4 left-6 w-6 h-8 bg-[#1877F2] rounded-t-full -rotate-12"
        />
        <motion.div
          animate={{ rotate: isTypingEmail || isHoveringSubmit ? [5, -5, 5] : 0 }}
          transition={{ duration: 0.3, repeat: Infinity }}
          className="absolute top-4 right-6 w-6 h-8 bg-[#1877F2] rounded-t-full rotate-12"
        />
      </div>
    </div>
  );
};

export default AuthMonster;