'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Moxie from '@/characters/Moxie';

export default function S16_MoxieMCP({ isPresenting }: { isPresenting: boolean }) {
  const [connected, setConnected] = useState(false);
  const [confetti, setConfetti] = useState<Array<{ x: number; y: number; color: string; delay: number }>>([]);

  const handleConnect = () => {
    setConnected(true);
    const particles = Array.from({ length: 30 }, (_, i) => ({
      x: 50 + (Math.random() - 0.5) * 80,
      y: 50 + (Math.random() - 0.5) * 60,
      color: ['#FF6EC7', '#00FFFF', '#39FF14', '#FFD700', '#BF00FF', '#FF6600'][i % 6],
      delay: Math.random() * 0.5,
    }));
    setConfetti(particles);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-full flex flex-col items-center justify-center px-8 relative overflow-hidden"
    >
      {/* Confetti */}
      {confetti.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full pointer-events-none"
          style={{ backgroundColor: p.color, left: `${p.x}%`, top: '50%' }}
          animate={{ y: [-200, 400], rotate: [0, 720], opacity: [1, 0] }}
          transition={{ duration: 2 + Math.random(), delay: p.delay }}
        />
      ))}

      <motion.h2
        className="font-retro text-moxie text-xl md:text-2xl mb-2"
        style={{ textShadow: '0 0 10px #FFD700, 0 0 20px #FFD700' }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Moxie the MCP
      </motion.h2>

      <div className="flex items-center gap-8 my-6">
        {/* LLMs side */}
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <svg viewBox="0 0 40 40" className="w-10 h-10">
                <circle cx="20" cy="20" r="16" fill="#FFD700" opacity="0.8" />
                <rect x="10" y="17" width="8" height="4" rx="1" fill="#1a0a2e" />
                <rect x="22" y="17" width="8" height="4" rx="1" fill="#1a0a2e" />
              </svg>
              <span className="font-retro text-[8px] text-moxie/60">LLM</span>
            </div>
          ))}
        </motion.div>

        {/* Connection lines (left) */}
        {connected && (
          <motion.svg viewBox="0 0 60 120" className="w-12 h-24">
            {[0, 1, 2].map((i) => (
              <motion.line
                key={i}
                x1="0" y1={20 + i * 40} x2="60" y2="60"
                stroke="#FFD700" strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
              />
            ))}
          </motion.svg>
        )}

        {/* Moxie */}
        <motion.div
          className="cursor-pointer relative"
          onClick={handleConnect}
          whileHover={{ scale: connected ? 1 : 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: 'spring' }}
        >
          <Moxie className="w-36 h-36" animated={connected} />
          {!connected && (
            <motion.div
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 font-retro text-[8px] text-moxie whitespace-nowrap"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              CLICK TO CONNECT
            </motion.div>
          )}
        </motion.div>

        {/* Connection lines (right) */}
        {connected && (
          <motion.svg viewBox="0 0 60 120" className="w-12 h-24">
            <motion.line x1="0" y1="60" x2="60" y2="30" stroke="#FF6EC7" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.3 }} />
            <motion.line x1="0" y1="60" x2="60" y2="90" stroke="#39FF14" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.5 }} />
            <motion.text x="55" y="25" fill="#FF6EC7" fontSize="7" fontFamily="monospace" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>API</motion.text>
            <motion.text x="55" y="95" fill="#39FF14" fontSize="7" fontFamily="monospace" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>DB</motion.text>
          </motion.svg>
        )}

        {/* House side */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <svg viewBox="0 0 120 160" className="w-24 h-32">
            <polygon points="60,10 10,60 110,60" fill="#FF6EC7" opacity="0.7" />
            <rect x="15" y="60" width="90" height="90" fill="#FFD1CC" opacity="0.7" stroke="#FF6EC7" strokeWidth="1.5" />
            <text x="60" y="85" textAnchor="middle" fill="#FF6EC7" fontSize="8" fontFamily="monospace">Jake</text>
            <line x1="15" y1="100" x2="105" y2="100" stroke="#FF6EC7" strokeWidth="0.5" strokeDasharray="4,4" />
            <text x="60" y="120" textAnchor="middle" fill="#39FF14" fontSize="8" fontFamily="monospace">Zane</text>
          </svg>
          <span className="font-retro text-[8px] text-jessica/60">THE SERVER</span>
        </motion.div>
      </div>

      <motion.p
        className="font-body text-xl text-white/80 text-center max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        {connected
          ? 'Moxie connects LLMs to applications at the API layer or even at the Database layer. She makes everything more glamorous and more amaze.'
          : 'MCP — Model Context Protocol. The bridge between LLMs and applications.'}
      </motion.p>

      {connected && (
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, type: 'spring' }}
        >
          <h3
            className="font-retro text-2xl md:text-3xl"
            style={{ background: 'linear-gradient(90deg, #FF6EC7, #00FFFF, #39FF14, #FFD700, #BF00FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            NOW YOU KNOW ARCHITECTURE!
          </h3>
          <motion.p
            className="font-body text-lg text-white/40 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            ...sort of
          </motion.p>
        </motion.div>
      )}
    </motion.div>
  );
}
