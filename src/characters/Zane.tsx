'use client';

import { motion } from 'framer-motion';
import { CharacterProps } from '@/lib/types';

export default function Zane({ className = '', expression = 'angry', animated = false }: CharacterProps) {
  const getEyes = () => {
    switch (expression) {
      case 'angry': return (
        <>
          <line x1="70" y1="74" x2="90" y2="80" stroke="#1A8A0A" strokeWidth="3" strokeLinecap="round" />
          <line x1="130" y1="74" x2="110" y2="80" stroke="#1A8A0A" strokeWidth="3" strokeLinecap="round" />
          <circle cx="80" cy="84" r="3" fill="#1A8A0A" />
          <circle cx="120" cy="84" r="3" fill="#1A8A0A" />
        </>
      );
      case 'happy': return (
        <>
          <circle cx="80" cy="82" r="3" fill="#1A8A0A" />
          <circle cx="120" cy="82" r="3" fill="#1A8A0A" />
        </>
      );
      case 'sleeping': return (
        <>
          <path d="M72,82 L88,88" stroke="#1A8A0A" strokeWidth="3" strokeLinecap="round" />
          <path d="M72,88 L88,82" stroke="#1A8A0A" strokeWidth="3" strokeLinecap="round" />
          <path d="M112,82 L128,88" stroke="#1A8A0A" strokeWidth="3" strokeLinecap="round" />
          <path d="M112,88 L128,82" stroke="#1A8A0A" strokeWidth="3" strokeLinecap="round" />
        </>
      );
      default: return (
        <>
          <circle cx="80" cy="82" r="3.5" fill="#1A8A0A" />
          <circle cx="120" cy="82" r="3.5" fill="#1A8A0A" />
        </>
      );
    }
  };

  const getMouth = () => {
    switch (expression) {
      case 'angry': return <path d="M85,105 Q100,98 115,105" stroke="#1A8A0A" strokeWidth="2.5" fill="none" />;
      case 'happy': return <path d="M90,102 Q100,108 110,102" stroke="#1A8A0A" strokeWidth="2" fill="none" />;
      default: return <line x1="88" y1="103" x2="112" y2="103" stroke="#1A8A0A" strokeWidth="2" />;
    }
  };

  return (
    <motion.svg
      viewBox="0 0 200 300"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      animate={animated ? { rotateZ: [-2, 2, -2] } : {}}
      transition={animated ? { duration: 2, repeat: Infinity, ease: 'easeInOut' } : {}}
    >
      <defs>
        <radialGradient id="zane-head" cx="50%" cy="40%">
          <stop offset="0%" stopColor="#E8E0D0" />
          <stop offset="100%" stopColor="#D4C8B0" />
        </radialGradient>
        <linearGradient id="zane-hoodie" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2D2D2D" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
      </defs>

      {/* Hoodie */}
      <path d="M55,65 Q60,40 100,35 Q140,40 145,65 Q150,70 150,130 L50,130 Q50,70 55,65Z" fill="url(#zane-hoodie)" stroke="#39FF14" strokeWidth="1" opacity="0.9" />

      {/* Head */}
      <ellipse cx="100" cy="80" rx="40" ry="45" fill="url(#zane-head)" stroke="#A09880" strokeWidth="2" />

      {/* Hoodie shadow on face */}
      <path d="M60,65 Q65,50 100,45 Q135,50 140,65" fill="none" stroke="#39FF14" strokeWidth="1.5" opacity="0.5" />

      {getEyes()}
      {getMouth()}

      {/* Body / Hoodie body */}
      <rect x="55" y="125" width="90" height="85" rx="5" fill="url(#zane-hoodie)" stroke="#39FF14" strokeWidth="1" opacity="0.9" />
      {/* Hoodie pocket */}
      <rect x="75" y="170" width="50" height="20" rx="3" fill="none" stroke="#39FF14" strokeWidth="1" opacity="0.4" />

      {/* Arms crossed */}
      <path d="M55,145 Q35,165 65,180 Q80,185 90,170" stroke="#2D2D2D" strokeWidth="12" strokeLinecap="round" fill="none" />
      <path d="M145,145 Q165,165 135,180 Q120,185 110,170" stroke="#2D2D2D" strokeWidth="12" strokeLinecap="round" fill="none" />

      {/* Pants */}
      <rect x="60" y="208" width="80" height="35" rx="3" fill="#1a1a1a" />

      {/* Legs */}
      <line x1="82" y1="243" x2="80" y2="275" stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round" />
      <line x1="118" y1="243" x2="120" y2="275" stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round" />
      <rect x="70" y="273" width="20" height="8" rx="2" fill="#39FF14" opacity="0.6" />
      <rect x="110" y="273" width="20" height="8" rx="2" fill="#39FF14" opacity="0.6" />

      {/* Filing cabinets */}
      <rect x="5" y="200" width="30" height="80" rx="2" fill="#333" stroke="#39FF14" strokeWidth="1" opacity="0.5" />
      <line x1="5" y1="225" x2="35" y2="225" stroke="#39FF14" strokeWidth="0.5" opacity="0.4" />
      <line x1="5" y1="250" x2="35" y2="250" stroke="#39FF14" strokeWidth="0.5" opacity="0.4" />
      <rect x="165" y="210" width="30" height="70" rx="2" fill="#333" stroke="#39FF14" strokeWidth="1" opacity="0.5" />
      <line x1="165" y1="235" x2="195" y2="235" stroke="#39FF14" strokeWidth="0.5" opacity="0.4" />
      <line x1="165" y1="255" x2="195" y2="255" stroke="#39FF14" strokeWidth="0.5" opacity="0.4" />
    </motion.svg>
  );
}
