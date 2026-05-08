'use client';

import { motion } from 'framer-motion';

const houseColors = ['#FFB3B3', '#B3D9FF', '#B3FFB3', '#FFE0B3', '#E0B3FF'];

export default function S15_LLMsArrive({ isPresenting }: { isPresenting: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-full flex flex-col items-center justify-center px-8"
      style={{ background: 'linear-gradient(180deg, #1a0a3e 0%, #2d1b69 50%, #1a0a2e 100%)' }}
    >
      <motion.h2
        className="font-retro text-xl md:text-2xl mb-2"
        style={{ background: 'linear-gradient(90deg, #FF6EC7, #00FFFF, #39FF14, #BF00FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Then Something Different Happened...
      </motion.h2>

      <svg viewBox="0 0 800 300" className="w-full max-w-4xl mt-4">
        {/* Street */}
        <rect x="0" y="220" width="800" height="80" fill="#222" />
        <line x1="0" y1="260" x2="800" y2="260" stroke="#FFD700" strokeWidth="2" strokeDasharray="20,15" />

        {/* Neon houses */}
        {houseColors.map((color, i) => {
          const x = 350 + i * 90;
          return (
            <motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 + i * 0.1 }}>
              <rect x={x} y={140} width={70} height={80} fill={color} opacity="0.3" stroke={color} strokeWidth="1" />
              <polygon points={`${x - 5},140 ${x + 35},105 ${x + 75},140`} fill={color} opacity="0.3" stroke={color} strokeWidth="1" />
              {/* Neon glow */}
              <rect x={x} y={140} width={70} height={80} fill="none" stroke={color} strokeWidth="2" opacity="0.6" />
            </motion.g>
          );
        })}

        {/* LLM Characters walking in */}
        {[0, 1, 2].map((i) => (
          <motion.g
            key={i}
            initial={{ x: -100 }}
            animate={{ x: 80 + i * 70 }}
            transition={{ delay: 0.8 + i * 0.3, duration: 2, type: 'spring' }}
          >
            {/* Cool character */}
            <circle cx={0} cy={170} r={20} fill="#FFD700" opacity="0.9" />
            {/* Sunglasses */}
            <rect x={-14} y={165} width={12} height={6} rx="2" fill="#1a0a2e" />
            <rect x={2} y={165} width={12} height={6} rx="2" fill="#1a0a2e" />
            <line x1={-2} y1={168} x2={2} y2={168} stroke="#1a0a2e" strokeWidth="1.5" />
            {/* Body */}
            <rect x={-12} y={190} width={24} height={30} rx="3" fill="#FFD700" opacity="0.7" />
            {/* Sparkle */}
            <motion.circle
              cx={15} cy={155} r={3} fill="white"
              animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.4 }}
            />
            {/* Label */}
            <text x={0} y={240} textAnchor="middle" fill="#FFD700" fontSize="8" fontFamily="monospace">LLM</text>
          </motion.g>
        ))}

        {/* Barrier */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }}>
          <rect x={310} y={120} width={8} height={120} fill="#FF4444" opacity="0.7" />
          <motion.line
            x1={310} y1={130} x2={314} y2={130}
            stroke="#FF4444" strokeWidth="4"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <text x={320} y={180} fill="#FF4444" fontSize="10" fontFamily="monospace" fontWeight="bold">NO</text>
          <text x={314} y={195} fill="#FF4444" fontSize="10" fontFamily="monospace" fontWeight="bold">ENTRY</text>

          {/* Question marks above LLMs */}
          {[0, 1, 2].map((i) => (
            <motion.text
              key={i}
              x={90 + i * 70}
              y={145}
              fill="#FFD700"
              fontSize="20"
              fontFamily="monospace"
              animate={{ y: [145, 135, 145] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
            >
              ?
            </motion.text>
          ))}
        </motion.g>
      </svg>

      <motion.p
        className="font-body text-xl text-white/80 text-center max-w-2xl mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        LLMs entered the neighborhood. They were cool. They could transform everything. But they couldn&apos;t talk to applications...
      </motion.p>

      <motion.p
        className="font-retro text-lg text-neon-cyan mt-4"
        style={{ textShadow: '0 0 10px #00FFFF, 0 0 20px #00FFFF' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.7, 1] }}
        transition={{ delay: 3.5, duration: 1.5 }}
      >
        until...
      </motion.p>
    </motion.div>
  );
}
