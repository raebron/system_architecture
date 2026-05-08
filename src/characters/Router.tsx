'use client';

import { motion } from 'framer-motion';

export default function Router({
  className = '',
  active = false,
}: {
  className?: string;
  active?: boolean;
}) {
  return (
    <svg viewBox="0 0 200 150" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="router-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#444" />
          <stop offset="100%" stopColor="#222" />
        </linearGradient>
      </defs>

      {/* Antenna */}
      <line x1="100" y1="40" x2="100" y2="75" stroke="#666" strokeWidth="3" strokeLinecap="round" />
      <circle cx="100" cy="37" r="4" fill="#888" />

      {/* Signal waves */}
      {active && (
        <>
          <motion.path
            d="M80,30 Q100,15 120,30"
            fill="none" stroke="#00FFFF" strokeWidth="2"
            animate={{ opacity: [0, 1, 0], y: [0, -5, -10] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <motion.path
            d="M70,22 Q100,2 130,22"
            fill="none" stroke="#00FFFF" strokeWidth="1.5"
            animate={{ opacity: [0, 0.7, 0], y: [0, -5, -10] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
          />
          <motion.path
            d="M60,15 Q100,-8 140,15"
            fill="none" stroke="#00FFFF" strokeWidth="1"
            animate={{ opacity: [0, 0.4, 0], y: [0, -5, -10] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
          />
        </>
      )}

      {/* Router body */}
      <rect x="30" y="75" width="140" height="40" rx="6" fill="url(#router-body)" stroke="#555" strokeWidth="2" />

      {/* Lights */}
      <motion.circle cx="55" cy="95" r="4" fill={active ? '#39FF14' : '#333'} animate={active ? { opacity: [1, 0.3, 1] } : {}} transition={{ duration: 0.8, repeat: Infinity }} />
      <motion.circle cx="75" cy="95" r="4" fill={active ? '#00BFFF' : '#333'} animate={active ? { opacity: [1, 0.3, 1] } : {}} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} />
      <motion.circle cx="95" cy="95" r="4" fill={active ? '#FFD700' : '#333'} animate={active ? { opacity: [1, 0.3, 1] } : {}} transition={{ duration: 0.7, repeat: Infinity, delay: 0.4 }} />
      <circle cx="115" cy="95" r="4" fill="#333" />

      {/* Ventilation slots */}
      <line x1="130" y1="82" x2="160" y2="82" stroke="#555" strokeWidth="1" />
      <line x1="130" y1="87" x2="160" y2="87" stroke="#555" strokeWidth="1" />
      <line x1="130" y1="92" x2="160" y2="92" stroke="#555" strokeWidth="1" />
      <line x1="130" y1="97" x2="160" y2="97" stroke="#555" strokeWidth="1" />
      <line x1="130" y1="102" x2="160" y2="102" stroke="#555" strokeWidth="1" />

      {/* Feet */}
      <rect x="45" y="115" width="10" height="5" rx="1" fill="#333" />
      <rect x="145" y="115" width="10" height="5" rx="1" fill="#333" />

      {/* beep boop beep text */}
      {active && (
        <motion.text
          x="100" y="140"
          textAnchor="middle"
          fill="#00FFFF"
          fontSize="11"
          fontFamily="monospace"
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          beep boop beep
        </motion.text>
      )}
    </svg>
  );
}
