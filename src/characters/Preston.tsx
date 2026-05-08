'use client';

import { motion } from 'framer-motion';
import { CharacterProps } from '@/lib/types';

export default function Preston({ className = '', expression = 'cool', animated = false }: CharacterProps) {
  return (
    <motion.svg
      viewBox="0 0 200 300"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      animate={animated ? { rotateZ: [-1, 1, -1] } : {}}
      transition={animated ? { duration: 3, repeat: Infinity, ease: 'easeInOut' } : {}}
    >
      <defs>
        <radialGradient id="preston-head" cx="50%" cy="40%">
          <stop offset="0%" stopColor="#E8D8C8" />
          <stop offset="100%" stopColor="#D4C0A8" />
        </radialGradient>
        <linearGradient id="preston-coat" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4A0080" />
          <stop offset="100%" stopColor="#2D004D" />
        </linearGradient>
      </defs>

      {/* Fedora hat */}
      <ellipse cx="100" cy="48" rx="50" ry="8" fill="#2D004D" />
      <path d="M60,48 Q65,25 100,20 Q135,25 140,48Z" fill="#4A0080" stroke="#BF00FF" strokeWidth="1" />

      {/* Head */}
      <ellipse cx="100" cy="78" rx="35" ry="38" fill="url(#preston-head)" stroke="#A09070" strokeWidth="2" />

      {/* Sunglasses */}
      <rect x="68" y="72" width="25" height="14" rx="3" fill="#1a0a2e" stroke="#BF00FF" strokeWidth="1.5" />
      <rect x="107" y="72" width="25" height="14" rx="3" fill="#1a0a2e" stroke="#BF00FF" strokeWidth="1.5" />
      <line x1="93" y1="79" x2="107" y2="79" stroke="#BF00FF" strokeWidth="1.5" />
      {/* Glint on glasses */}
      <line x1="73" y1="75" x2="78" y2="77" stroke="white" strokeWidth="1" opacity="0.5" />

      {/* Smirk */}
      <path d="M88,98 Q100,104 115,96" stroke="#8B6B50" strokeWidth="2" fill="none" />

      {/* Trench coat */}
      <path d="M55,115 L40,260 Q100,275 160,260 L145,115Z" fill="url(#preston-coat)" stroke="#BF00FF" strokeWidth="1.5" />
      {/* Coat collar */}
      <path d="M65,115 L80,135 L100,120 L120,135 L135,115" fill="#4A0080" stroke="#BF00FF" strokeWidth="1" />
      {/* Coat buttons */}
      <circle cx="100" cy="155" r="3" fill="#BF00FF" opacity="0.6" />
      <circle cx="100" cy="180" r="3" fill="#BF00FF" opacity="0.6" />
      <circle cx="100" cy="205" r="3" fill="#BF00FF" opacity="0.6" />
      {/* Belt */}
      <rect x="60" y="190" width="80" height="6" rx="2" fill="#2D004D" stroke="#BF00FF" strokeWidth="1" />

      {/* Arms - holding DNS book */}
      <path d="M55,140 Q30,170 50,195" stroke="#4A0080" strokeWidth="10" strokeLinecap="round" fill="none" />
      <path d="M145,140 Q170,170 150,195" stroke="#4A0080" strokeWidth="10" strokeLinecap="round" fill="none" />

      {/* DNS Book */}
      <rect x="55" y="185" width="90" height="35" rx="3" fill="#D966FF" stroke="#BF00FF" strokeWidth="2" />
      <text x="100" y="207" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="monospace">DNS</text>

      {/* Shoes */}
      <ellipse cx="80" cy="270" rx="15" ry="6" fill="#2D004D" stroke="#BF00FF" strokeWidth="1" />
      <ellipse cx="120" cy="270" rx="15" ry="6" fill="#2D004D" stroke="#BF00FF" strokeWidth="1" />
    </motion.svg>
  );
}
