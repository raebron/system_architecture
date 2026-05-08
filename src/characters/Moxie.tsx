'use client';

import { motion } from 'framer-motion';
import { CharacterProps } from '@/lib/types';

export default function Moxie({ className = '', animated = false }: CharacterProps) {
  const connectionLines = [
    { x1: 100, y1: 120, x2: 30, y2: 200, delay: 0 },
    { x1: 100, y1: 120, x2: 170, y2: 200, delay: 0.2 },
    { x1: 100, y1: 120, x2: 20, y2: 140, delay: 0.4 },
    { x1: 100, y1: 120, x2: 180, y2: 140, delay: 0.6 },
  ];

  const sparkles = [
    { cx: 45, cy: 80, delay: 0 }, { cx: 155, cy: 90, delay: 0.4 },
    { cx: 60, cy: 170, delay: 0.8 }, { cx: 140, cy: 180, delay: 1.2 },
  ];

  return (
    <svg viewBox="0 0 200 300" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="moxie-body" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#FFE766" />
          <stop offset="100%" stopColor="#FFD700" />
        </radialGradient>
        <linearGradient id="moxie-rainbow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FF6EC7" />
          <stop offset="25%" stopColor="#00FFFF" />
          <stop offset="50%" stopColor="#39FF14" />
          <stop offset="75%" stopColor="#BF00FF" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>
      </defs>

      {/* Crown */}
      <path d="M72,40 L78,25 L88,35 L100,20 L112,35 L122,25 L128,40Z" fill="#FFD700" stroke="#B39700" strokeWidth="1.5" />
      <circle cx="100" cy="25" r="4" fill="#FF6EC7" />

      {/* Head */}
      <circle cx="100" cy="65" r="30" fill="url(#moxie-body)" stroke="#B39700" strokeWidth="2" />

      {/* Eyelashes */}
      <path d="M82,55 Q78,50 75,48" stroke="#B39700" strokeWidth="1.5" fill="none" />
      <path d="M85,53 Q82,47 80,44" stroke="#B39700" strokeWidth="1.5" fill="none" />
      <path d="M118,55 Q122,50 125,48" stroke="#B39700" strokeWidth="1.5" fill="none" />
      <path d="M115,53 Q118,47 120,44" stroke="#B39700" strokeWidth="1.5" fill="none" />

      {/* Eyes */}
      <circle cx="88" cy="62" r="4" fill="#B39700" />
      <circle cx="112" cy="62" r="4" fill="#B39700" />
      <circle cx="89" cy="61" r="1.5" fill="white" />
      <circle cx="113" cy="61" r="1.5" fill="white" />

      {/* Smile */}
      <path d="M88,76 Q100,86 112,76" stroke="#B39700" strokeWidth="2" fill="none" />

      {/* Hub body */}
      <circle cx="100" cy="140" r="40" fill="url(#moxie-body)" stroke="#B39700" strokeWidth="2.5" />
      <circle cx="100" cy="140" r="28" fill="none" stroke="url(#moxie-rainbow)" strokeWidth="3" />
      {/* Center dot */}
      <circle cx="100" cy="140" r="8" fill="#B39700" />
      <circle cx="100" cy="140" r="4" fill="#FFE766" />

      {/* Connection lines */}
      {connectionLines.map((line, i) => (
        <motion.line
          key={i}
          x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2}
          stroke="url(#moxie-rainbow)"
          strokeWidth="3"
          strokeLinecap="round"
          animate={animated ? { opacity: [0.3, 1, 0.3] } : {}}
          transition={animated ? { duration: 1.5, delay: line.delay, repeat: Infinity } : {}}
        />
      ))}

      {/* Connection endpoints */}
      {connectionLines.map((line, i) => (
        <motion.circle
          key={`ep-${i}`}
          cx={line.x2} cy={line.y2} r="6"
          fill="#FFD700" stroke="#B39700" strokeWidth="1.5"
          animate={animated ? { scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] } : {}}
          transition={animated ? { duration: 1.5, delay: line.delay, repeat: Infinity } : {}}
        />
      ))}

      {/* MCP label */}
      <text x="100" y="240" textAnchor="middle" fill="#FFD700" fontSize="12" fontFamily="monospace" fontWeight="bold">MCP</text>

      {/* Sparkles */}
      {animated && sparkles.map((s, i) => (
        <motion.g key={`sp-${i}`} animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }} transition={{ duration: 2, delay: s.delay, repeat: Infinity }}>
          <path d={`M${s.cx},${s.cy - 5} L${s.cx + 1.5},${s.cy - 1.5} L${s.cx + 5},${s.cy} L${s.cx + 1.5},${s.cy + 1.5} L${s.cx},${s.cy + 5} L${s.cx - 1.5},${s.cy + 1.5} L${s.cx - 5},${s.cy} L${s.cx - 1.5},${s.cy - 1.5}Z`} fill="#FFD700" />
        </motion.g>
      ))}
    </svg>
  );
}
