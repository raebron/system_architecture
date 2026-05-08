'use client';

import { motion } from 'framer-motion';
import { CharacterProps } from '@/lib/types';

export default function Jessica({ className = '', expression = 'happy', animated = false }: CharacterProps) {
  const getEyes = () => {
    switch (expression) {
      case 'happy': return (
        <>
          <motion.path d="M75,85 Q80,78 85,85" stroke="#CC3399" strokeWidth="2.5" fill="none" />
          <motion.path d="M115,85 Q120,78 125,85" stroke="#CC3399" strokeWidth="2.5" fill="none" />
          <circle cx="73" cy="78" r="3" fill="#FF6EC7" />
          <circle cx="127" cy="78" r="3" fill="#FF6EC7" />
        </>
      );
      case 'embarrassed': return (
        <>
          <circle cx="80" cy="82" r="3" fill="#CC3399" />
          <circle cx="120" cy="82" r="3" fill="#CC3399" />
          <circle cx="70" cy="90" r="8" fill="#FF6EC7" opacity="0.4" />
          <circle cx="130" cy="90" r="8" fill="#FF6EC7" opacity="0.4" />
        </>
      );
      case 'stressed': return (
        <>
          <circle cx="80" cy="82" r="4" fill="#CC3399" />
          <circle cx="120" cy="82" r="4" fill="#CC3399" />
          <line x1="70" y1="72" x2="90" y2="76" stroke="#CC3399" strokeWidth="2" />
          <line x1="130" y1="72" x2="110" y2="76" stroke="#CC3399" strokeWidth="2" />
        </>
      );
      case 'cool': return (
        <>
          <rect x="65" y="76" width="30" height="12" rx="6" fill="#1a0a2e" />
          <rect x="105" y="76" width="30" height="12" rx="6" fill="#1a0a2e" />
          <line x1="95" y1="82" x2="105" y2="82" stroke="#1a0a2e" strokeWidth="2" />
        </>
      );
      default: return (
        <>
          <circle cx="80" cy="82" r="4" fill="#CC3399" />
          <circle cx="120" cy="82" r="4" fill="#CC3399" />
        </>
      );
    }
  };

  const getMouth = () => {
    switch (expression) {
      case 'happy': return <path d="M85,100 Q100,115 115,100" stroke="#CC3399" strokeWidth="2.5" fill="none" />;
      case 'embarrassed': return <circle cx="100" cy="105" rx="8" ry="5" fill="#CC3399" opacity="0.6" />;
      case 'stressed': return <path d="M85,105 Q100,100 115,105" stroke="#CC3399" strokeWidth="2" fill="none" />;
      default: return <path d="M90,102 Q100,110 110,102" stroke="#CC3399" strokeWidth="2" fill="none" />;
    }
  };

  const sparkles = [
    { cx: 40, cy: 60, delay: 0 }, { cx: 160, cy: 50, delay: 0.3 },
    { cx: 30, cy: 140, delay: 0.6 }, { cx: 170, cy: 130, delay: 0.9 },
    { cx: 55, cy: 30, delay: 1.2 }, { cx: 145, cy: 170, delay: 0.5 },
  ];

  return (
    <svg viewBox="0 0 200 300" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="jess-head" cx="50%" cy="40%">
          <stop offset="0%" stopColor="#FFD4E8" />
          <stop offset="100%" stopColor="#FFB3D9" />
        </radialGradient>
        <linearGradient id="jess-dress" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF6EC7" />
          <stop offset="100%" stopColor="#CC3399" />
        </linearGradient>
      </defs>

      {/* Hair */}
      <path d="M50,75 Q30,30 60,25 Q80,15 100,20 Q120,15 140,25 Q170,30 150,75 Q155,55 145,50 Q130,40 100,38 Q70,40 55,50 Q45,55 50,75Z" fill="#1a0a2e" stroke="#CC3399" strokeWidth="1" />
      <path d="M48,75 Q35,100 40,140 Q42,150 50,145" fill="#1a0a2e" stroke="#CC3399" strokeWidth="1" />
      <path d="M152,75 Q165,100 160,140 Q158,150 150,145" fill="#1a0a2e" stroke="#CC3399" strokeWidth="1" />

      {/* Head */}
      <ellipse cx="100" cy="80" rx="45" ry="50" fill="url(#jess-head)" stroke="#CC3399" strokeWidth="2" />

      {/* Crown */}
      <path d="M80,32 L85,22 L92,30 L100,18 L108,30 L115,22 L120,32" fill="#FFD700" stroke="#B39700" strokeWidth="1.5" />

      {getEyes()}
      {getMouth()}

      {/* Body / Dress */}
      <path d="M70,125 L60,230 Q100,245 140,230 L130,125Z" fill="url(#jess-dress)" stroke="#CC3399" strokeWidth="2" />
      <path d="M75,125 Q100,135 125,125" fill="none" stroke="#FFB3E6" strokeWidth="1" />

      {/* Arms */}
      {expression === 'embarrassed' ? (
        <>
          <path d="M65,150 Q50,140 60,125" stroke="#FFB3D9" strokeWidth="8" strokeLinecap="round" fill="none" />
          <path d="M135,150 Q150,140 140,125" stroke="#FFB3D9" strokeWidth="8" strokeLinecap="round" fill="none" />
        </>
      ) : (
        <>
          <path d="M65,145 Q40,160 35,180" stroke="#FFB3D9" strokeWidth="8" strokeLinecap="round" fill="none" />
          <path d="M135,145 Q160,160 165,180" stroke="#FFB3D9" strokeWidth="8" strokeLinecap="round" fill="none" />
        </>
      )}

      {/* Legs */}
      <line x1="85" y1="230" x2="80" y2="275" stroke="#FFB3D9" strokeWidth="7" strokeLinecap="round" />
      <line x1="115" y1="230" x2="120" y2="275" stroke="#FFB3D9" strokeWidth="7" strokeLinecap="round" />
      <ellipse cx="80" cy="280" rx="12" ry="5" fill="#CC3399" />
      <ellipse cx="120" cy="280" rx="12" ry="5" fill="#CC3399" />

      {/* Sparkles */}
      {animated && sparkles.map((s, i) => (
        <motion.g key={i} animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }} transition={{ duration: 2, delay: s.delay, repeat: Infinity }}>
          <path d={`M${s.cx},${s.cy - 6} L${s.cx + 2},${s.cy - 2} L${s.cx + 6},${s.cy} L${s.cx + 2},${s.cy + 2} L${s.cx},${s.cy + 6} L${s.cx - 2},${s.cy + 2} L${s.cx - 6},${s.cy} L${s.cx - 2},${s.cy - 2}Z`} fill="#FFD700" />
        </motion.g>
      ))}
    </svg>
  );
}
