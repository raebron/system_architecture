'use client';

import { motion } from 'framer-motion';

export default function S01_TitleSlide({ isPresenting }: { isPresenting: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-full flex items-center justify-center relative"
    >
      <div className="relative">
        {/* Retro TV */}
        <svg viewBox="0 0 700 500" className="w-[80vw] max-w-4xl">
          <defs>
            <linearGradient id="tv-body" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#555" />
              <stop offset="100%" stopColor="#333" />
            </linearGradient>
            <pattern id="scanlines" patternUnits="userSpaceOnUse" width="4" height="4">
              <line x1="0" y1="0" x2="4" y2="0" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
            </pattern>
          </defs>

          {/* TV Body */}
          <rect x="30" y="30" width="640" height="420" rx="30" fill="url(#tv-body)" stroke="#666" strokeWidth="3" />

          {/* Screen bezel */}
          <rect x="60" y="50" width="480" height="360" rx="15" fill="#111" stroke="#444" strokeWidth="2" />

          {/* Screen */}
          <rect x="70" y="60" width="460" height="340" rx="10" fill="#0a0520" />

          {/* Scanlines overlay */}
          <rect x="70" y="60" width="460" height="340" rx="10" fill="url(#scanlines)" opacity="0.3" />

          {/* TV knobs */}
          <circle cx="590" cy="150" r="25" fill="#444" stroke="#555" strokeWidth="2" />
          <circle cx="590" cy="150" r="15" fill="#333" stroke="#555" strokeWidth="1" />
          <line x1="590" y1="135" x2="590" y2="145" stroke="#888" strokeWidth="2" />

          <circle cx="590" cy="230" r="25" fill="#444" stroke="#555" strokeWidth="2" />
          <circle cx="590" cy="230" r="15" fill="#333" stroke="#555" strokeWidth="1" />

          {/* Speaker grille */}
          <rect x="565" y="300" width="50" height="80" rx="5" fill="#333" />
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <line key={i} x1="570" y1={310 + i * 10} x2="610" y2={310 + i * 10} stroke="#555" strokeWidth="1" />
          ))}

          {/* Antenna */}
          <line x1="200" y1="50" x2="160" y2="10" stroke="#888" strokeWidth="3" strokeLinecap="round" />
          <line x1="400" y1="50" x2="440" y2="10" stroke="#888" strokeWidth="3" strokeLinecap="round" />
          <circle cx="160" cy="8" r="4" fill="#FF6EC7" />
          <circle cx="440" cy="8" r="4" fill="#00FFFF" />

          {/* TV feet */}
          <rect x="150" y="450" width="40" height="20" rx="3" fill="#444" />
          <rect x="420" y="450" width="40" height="20" rx="3" fill="#444" />
        </svg>

        {/* Text overlay ON the TV screen */}
        <div className="absolute inset-0 flex items-center justify-center" style={{ paddingRight: '15%', paddingBottom: '5%' }}>
          <div className="text-center" style={{ marginTop: '-20px' }}>
            <motion.h1
              className="font-retro text-neon-pink text-2xl md:text-3xl mb-4 text-neon-glow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              System Architecture
            </motion.h1>
            <motion.h2
              className="font-retro text-neon-cyan text-sm md:text-lg mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              for Non-Technical People
            </motion.h2>
            <motion.p
              className="font-body text-neon-yellow text-lg md:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.7, 1] }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              A Moderately Inappropriate Guide
            </motion.p>
            <motion.div
              className="mt-8 font-retro text-xs text-neon-green"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.5, 1] }}
              transition={{ delay: 2.5, duration: 1, repeat: Infinity, repeatDelay: 1 }}
            >
              ▶ PRESS → TO BEGIN
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
