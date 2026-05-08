'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Jessica from '@/characters/Jessica';

const quotes = [
  "OMG I love guests!",
  "Does this CSS make me look fat?",
  "I literally cannot even without JavaScript",
  "My therapist says I have dependency issues",
  "I'm not high-maintenance, I'm RESPONSIVE",
  "Is it hot in here or is my server overheating?",
  "I only render for people I like",
];

export default function S04_JessicaTheUI({ isPresenting }: { isPresenting: boolean }) {
  const [clickCount, setClickCount] = useState(0);
  const currentQuote = quotes[clickCount % quotes.length];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-full flex flex-col items-center justify-center px-8"
    >
      <motion.h2
        className="font-retro text-jessica text-xl md:text-2xl mb-4 text-neon-glow"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Jessica the UI
      </motion.h2>

      {/* Title words staggered */}
      <div className="flex gap-6 mb-6">
        {['Beautiful.', 'Bombshell.', 'Dumb.'].map((word, i) => (
          <motion.span
            key={word}
            className="font-body text-3xl text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.3 }}
          >
            {word}
          </motion.span>
        ))}
      </div>

      <div className="relative flex flex-col items-center">
        {/* Speech bubble */}
        {clickCount > 0 && (
          <motion.div
            key={clickCount}
            initial={{ opacity: 0, scale: 0.5, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-jessica/20 border-2 border-jessica rounded-2xl px-6 py-3 mb-4 relative max-w-sm"
          >
            <span className="font-body text-xl text-jessica-light">{currentQuote}</span>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-jessica/20 border-b-2 border-r-2 border-jessica rotate-45" />
          </motion.div>
        )}

        {/* Jessica - clickable */}
        <motion.div
          className="cursor-pointer"
          onClick={() => setClickCount((c) => c + 1)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Jessica className="w-48 h-48 md:w-56 md:h-56" expression="happy" animated />
        </motion.div>

        <motion.p
          className="font-body text-sm text-white/40 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          click her for hot takes
        </motion.p>
      </div>

      {/* Brain with X */}
      <motion.div
        className="mt-4 flex items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <svg viewBox="0 0 50 50" className="w-10 h-10">
          <path d="M25,8 Q35,8 38,15 Q42,18 40,25 Q42,32 38,35 Q35,42 25,42 Q15,42 12,35 Q8,32 10,25 Q8,18 12,15 Q15,8 25,8Z" fill="none" stroke="#FF6EC7" strokeWidth="2" />
          <line x1="15" y1="15" x2="35" y2="35" stroke="#FF4444" strokeWidth="3" />
          <line x1="35" y1="15" x2="15" y2="35" stroke="#FF4444" strokeWidth="3" />
        </svg>
        <span className="font-body text-xl text-white/60">She&apos;s the frontend — pretty face, empty head</span>
      </motion.div>
    </motion.div>
  );
}
