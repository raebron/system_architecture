'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Browser from '@/characters/Browser';
import Router from '@/characters/Router';

export default function S08_TheRequest({ isPresenting }: { isPresenting: boolean }) {
  const [phase, setPhase] = useState(0);

  const handleGo = () => {
    if (phase === 0) {
      setPhase(1);
      setTimeout(() => setPhase(2), 1200);
      setTimeout(() => setPhase(3), 2500);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-full flex flex-col items-center justify-center px-8"
    >
      <motion.h2
        className="font-retro text-neon-cyan text-lg md:text-xl mb-2 text-neon-glow"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        What Happens When You Visit a Website?
      </motion.h2>
      <motion.p
        className="font-body text-lg text-white/80 mb-6 text-center max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Let&apos;s use my favorite website: damndelicious.net. Fantastic family-friendly multi-cultural recipes that are mostly healthy.
      </motion.p>

      <div className="flex items-center gap-8 relative">
        {/* Browser */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="relative"
        >
          <Browser className="w-64 md:w-80" url="damndelicious.net" />
          {phase === 0 && (
            <motion.button
              onClick={handleGo}
              className="absolute bottom-12 left-1/2 -translate-x-1/2 font-retro text-xs bg-neon-cyan/20 border-2 border-neon-cyan text-neon-cyan px-6 py-2 rounded-lg hover:bg-neon-cyan/30 transition-colors"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              GO →
            </motion.button>
          )}
        </motion.div>

        {/* Request packet */}
        {phase >= 1 && (
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <svg viewBox="0 0 60 30" className="w-16">
              <rect x="5" y="5" width="50" height="20" rx="4" fill="#FFD700" stroke="#B39700" strokeWidth="1.5" />
              <text x="30" y="19" textAnchor="middle" fill="white" fontSize="8" fontFamily="monospace">GET</text>
            </svg>
          </motion.div>
        )}

        {/* Arrow */}
        {phase >= 1 && (
          <motion.svg
            viewBox="0 0 60 20"
            className="w-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <line x1="5" y1="10" x2="50" y2="10" stroke="#00FFFF" strokeWidth="2" />
            <polygon points="45,5 55,10 45,15" fill="#00FFFF" />
          </motion.svg>
        )}

        {/* Router */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Router className="w-40" active={phase >= 2} />
        </motion.div>

        {/* DNS arrow */}
        {phase >= 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2"
          >
            <svg viewBox="0 0 60 20" className="w-12">
              <line x1="5" y1="10" x2="50" y2="10" stroke="#BF00FF" strokeWidth="2" />
              <polygon points="45,5 55,10 45,15" fill="#BF00FF" />
            </svg>
            <motion.div
              className="font-retro text-xs text-preston"
              animate={{ opacity: [0, 1, 0.7, 1] }}
              transition={{ duration: 1 }}
            >
              DNS lookup...
            </motion.div>
          </motion.div>
        )}
      </div>

      {phase === 0 && (
        <motion.p
          className="font-body text-sm text-white/40 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          click GO to start the request journey
        </motion.p>
      )}
    </motion.div>
  );
}
