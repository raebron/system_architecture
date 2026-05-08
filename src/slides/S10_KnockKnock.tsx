'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Jessica from '@/characters/Jessica';

export default function S10_KnockKnock({ isPresenting }: { isPresenting: boolean }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 800),
      setTimeout(() => setStep(2), 1500),
      setTimeout(() => setStep(3), 2200),
      setTimeout(() => setStep(4), 3200),
      setTimeout(() => setStep(5), 4200),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-full flex flex-col items-center justify-center px-8"
    >
      <motion.h2
        className="font-retro text-neon-pink text-2xl md:text-3xl mb-6 text-neon-glow"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Knock Knock
      </motion.h2>

      <div className="relative w-64 h-80">
        {/* Door frame */}
        <svg viewBox="0 0 200 300" className="w-full h-full">
          {/* Door frame */}
          <rect x="20" y="10" width="160" height="280" rx="5" fill="none" stroke="#CC3399" strokeWidth="4" />

          {/* Door */}
          <motion.g
            animate={step >= 4 ? { scaleX: 0.3, originX: '20px' } : {}}
            transition={{ duration: 0.5, type: 'spring' }}
          >
            <rect x="25" y="15" width="150" height="270" rx="3" fill="#FF6EC7" />
            {/* Door decorations */}
            <rect x="45" y="40" width="110" height="60" rx="3" fill="#CC3399" opacity="0.3" />
            <rect x="45" y="120" width="110" height="60" rx="3" fill="#CC3399" opacity="0.3" />
            {/* Door knocker */}
            <circle cx="145" cy="150" r="10" fill="#FFD700" stroke="#B39700" strokeWidth="2" />
            <circle cx="145" cy="150" r="5" fill="#B39700" />
            {/* Peephole */}
            <circle cx="100" cy="100" r="6" fill="#1a0a2e" stroke="#CC3399" strokeWidth="1" />
          </motion.g>

          {/* Flowers at base */}
          <circle cx="30" cy="285" r="5" fill="#FF6EC7" opacity="0.5" />
          <circle cx="45" cy="280" r="6" fill="#FFD700" opacity="0.5" />
          <circle cx="155" cy="283" r="5" fill="#FF6EC7" opacity="0.5" />
          <circle cx="170" cy="278" r="6" fill="#BF00FF" opacity="0.5" />
        </svg>

        {/* Knock text */}
        {step >= 1 && step < 4 && (
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.5, 1] }}
            transition={{ duration: 0.3 }}
          >
            <span className="font-retro text-3xl text-white">KNOCK</span>
          </motion.div>
        )}
        {step >= 2 && step < 4 && (
          <motion.div
            className="absolute top-[40%] left-[55%]"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.3, 1] }}
            transition={{ duration: 0.3 }}
          >
            <span className="font-retro text-2xl text-neon-pink">KNOCK</span>
          </motion.div>
        )}
        {step >= 3 && step < 4 && (
          <motion.div
            className="absolute top-[60%] left-[40%]"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.8, 1] }}
            transition={{ duration: 0.3 }}
          >
            <span className="font-retro text-4xl text-neon-cyan">KNOCK!</span>
          </motion.div>
        )}

        {/* Jessica behind door */}
        {step >= 4 && (
          <motion.div
            className="absolute top-[15%] left-[10%]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: 'spring' }}
          >
            <Jessica className="w-32 h-32" expression="happy" animated />
          </motion.div>
        )}
      </div>

      {/* Speech bubble */}
      {step >= 5 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="bg-jessica/20 border-2 border-jessica rounded-2xl px-8 py-4 mt-4"
        >
          <span className="font-retro text-jessica text-sm md:text-base">OMG I LOVE GUESTS!</span>
        </motion.div>
      )}

      <motion.p
        className="font-body text-lg text-white/60 mt-6 text-center max-w-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.5 }}
      >
        Your router gives the IP back to your browser, and you go knock knock knock on Jessica&apos;s door.
      </motion.p>
    </motion.div>
  );
}
