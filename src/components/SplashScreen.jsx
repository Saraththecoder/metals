import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import logoImg from '../assets/logo.png';

export default function SplashScreen({ finishLoading }) {
  useEffect(() => {
    // Hide splash screen after 2.8 seconds
    const timer = setTimeout(() => {
      finishLoading();
    }, 2800);
    return () => clearTimeout(timer);
  }, [finishLoading]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
      style={{ background: 'var(--c-bg)' }}
    >
      <div className="relative flex flex-col items-center justify-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 1
          }}
          className="relative w-32 h-32 mb-6 flex items-center justify-center"
        >
          {/* Hexagon shape using SVG */}
          <motion.svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            className="absolute inset-0 z-10"
          >
            <motion.polygon
              points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
              fill="none"
              stroke="var(--c-blue)"
              strokeWidth="2.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </motion.svg>
          
          <motion.div 
            className="z-20 flex items-center justify-center"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
          >
            <img 
              src={logoImg} 
              alt="Company Logo" 
              style={{ width: '72px', height: '72px', objectFit: 'contain' }} 
            />
          </motion.div>
        </motion.div>

        {/* Text animation */}
        <div className="overflow-hidden">
          <motion.h1
            className="heading-lg text-center"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          >
            GK METALS <span style={{ color: 'var(--c-blue)' }}>&</span> MINERALS
          </motion.h1>
        </div>
        
        {/* Subtitle with fade in */}
        <motion.p
          className="mt-3 text-sm font-semibold tracking-[0.3em] uppercase text-center"
          style={{ color: 'var(--c-text-muted)', fontFamily: "'Inter'" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Premium Industrial Materials
        </motion.p>
        
        {/* Loading bar */}
        <motion.div 
          className="mt-10 w-48 h-1 rounded-full overflow-hidden"
          style={{ background: 'var(--c-border-lt)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="h-full lotus-gradient"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ delay: 1.5, duration: 1, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
