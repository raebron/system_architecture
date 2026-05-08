'use client';

import { motion } from 'framer-motion';
import { CharacterProps } from '@/lib/types';

export default function Jake({ className = '', expression = 'happy', animated = false }: CharacterProps) {
  const getEyes = () => {
    switch (expression) {
      case 'happy': return (
        <>
          <circle cx="80" cy="80" r="4" fill="#0080AA" />
          <circle cx="120" cy="80" r="4" fill="#0080AA" />
          <circle cx="82" cy="79" r="1.5" fill="white" />
          <circle cx="122" cy="79" r="1.5" fill="white" />
        </>
      );
      case 'stressed': return (
        <>
          <circle cx="80" cy="82" r="5" fill="#0080AA" />
          <circle cx="120" cy="82" r="5" fill="#0080AA" />
          <circle cx="82" cy="80" r="2" fill="white" />
          <circle cx="122" cy="80" r="2" fill="white" />
          <line x1="68" y1="70" x2="88" y2="74" stroke="#0080AA" strokeWidth="2.5" />
          <line x1="132" y1="70" x2="112" y2="74" stroke="#0080AA" strokeWidth="2.5" />
          {/* Sweat drops */}
          <motion.circle cx="145" cy="70" r="3" fill="#80DFFF" animate={{ y: [0, 15], opacity: [1, 0] }} transition={{ duration: 1, repeat: Infinity }} />
          <motion.circle cx="55" cy="75" r="2" fill="#80DFFF" animate={{ y: [0, 12], opacity: [1, 0] }} transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }} />
        </>
      );
      case 'sleeping': return (
        <>
          <path d="M72,80 L88,88" stroke="#0080AA" strokeWidth="3" strokeLinecap="round" />
          <path d="M72,88 L88,80" stroke="#0080AA" strokeWidth="3" strokeLinecap="round" />
          <path d="M112,80 L128,88" stroke="#0080AA" strokeWidth="3" strokeLinecap="round" />
          <path d="M112,88 L128,80" stroke="#0080AA" strokeWidth="3" strokeLinecap="round" />
          <motion.text x="140" y="55" fill="#80DFFF" fontSize="14" fontFamily="monospace" animate={{ y: [55, 45], opacity: [1, 0] }} transition={{ duration: 2, repeat: Infinity }}>Z</motion.text>
          <motion.text x="155" y="45" fill="#80DFFF" fontSize="18" fontFamily="monospace" animate={{ y: [45, 30], opacity: [1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}>Z</motion.text>
          <motion.text x="165" y="30" fill="#80DFFF" fontSize="22" fontFamily="monospace" animate={{ y: [30, 10], opacity: [1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }}>Z</motion.text>
        </>
      );
      default: return (
        <>
          <circle cx="80" cy="82" r="4" fill="#0080AA" />
          <circle cx="120" cy="82" r="4" fill="#0080AA" />
        </>
      );
    }
  };

  const getMouth = () => {
    switch (expression) {
      case 'happy': return <path d="M85,100 Q100,112 115,100" stroke="#0080AA" strokeWidth="2.5" fill="none" />;
      case 'stressed': return <path d="M85,105 Q92,98 100,105 Q108,98 115,105" stroke="#0080AA" strokeWidth="2" fill="none" />;
      case 'sleeping': return <path d="M90,103 Q100,108 110,103" stroke="#0080AA" strokeWidth="2" fill="none" />;
      default: return <path d="M90,102 Q100,108 110,102" stroke="#0080AA" strokeWidth="2" fill="none" />;
    }
  };

  const isSleeping = expression === 'sleeping';

  return (
    <motion.svg
      viewBox="0 0 200 300"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      animate={animated && !isSleeping ? { y: [0, -5, 0] } : isSleeping ? { rotate: 90 } : {}}
      transition={animated && !isSleeping ? { duration: 1.5, repeat: Infinity, ease: 'easeInOut' } : { duration: 0.5 }}
    >
      <defs>
        <radialGradient id="jake-head" cx="50%" cy="40%">
          <stop offset="0%" stopColor="#F5DEB3" />
          <stop offset="100%" stopColor="#DEB887" />
        </radialGradient>
        <linearGradient id="jake-jersey" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00BFFF" />
          <stop offset="100%" stopColor="#0080AA" />
        </linearGradient>
      </defs>

      {/* Sweatband */}
      <rect x="58" y="62" width="84" height="8" rx="4" fill="#FF4444" stroke="#CC0000" strokeWidth="1" />

      {/* Head */}
      <ellipse cx="100" cy="80" rx="42" ry="45" fill="url(#jake-head)" stroke="#A0845C" strokeWidth="2" />

      {/* Short hair */}
      <path d="M58,70 Q60,40 100,35 Q140,40 142,70" fill="#8B4513" stroke="#6B3410" strokeWidth="1" />

      {getEyes()}
      {getMouth()}

      {/* Body / Jersey */}
      <rect x="65" y="125" width="70" height="75" rx="5" fill="url(#jake-jersey)" stroke="#0080AA" strokeWidth="2" />
      {/* Jersey number */}
      <text x="100" y="165" textAnchor="middle" fill="white" fontSize="14" fontFamily="monospace" fontWeight="bold">#API</text>

      {/* Muscular arms */}
      <path d="M65,135 Q40,145 30,170 Q28,180 35,178" stroke="#DEB887" strokeWidth="10" strokeLinecap="round" fill="none" />
      <path d="M135,135 Q160,145 170,170 Q172,180 165,178" stroke="#DEB887" strokeWidth="10" strokeLinecap="round" fill="none" />

      {/* Shorts */}
      <rect x="70" y="198" width="60" height="30" rx="3" fill="#1a0a2e" stroke="#0080AA" strokeWidth="1" />

      {/* Legs */}
      <line x1="85" y1="228" x2="82" y2="270" stroke="#DEB887" strokeWidth="8" strokeLinecap="round" />
      <line x1="115" y1="228" x2="118" y2="270" stroke="#DEB887" strokeWidth="8" strokeLinecap="round" />
      {/* Sneakers */}
      <ellipse cx="82" cy="276" rx="14" ry="6" fill="#00BFFF" stroke="#0080AA" strokeWidth="1" />
      <ellipse cx="118" cy="276" rx="14" ry="6" fill="#00BFFF" stroke="#0080AA" strokeWidth="1" />
    </motion.svg>
  );
}
