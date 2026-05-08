'use client';

import { motion } from 'framer-motion';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } } };
const item = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200 } } };

const houseColors = ['#FFB3B3', '#B3D9FF', '#B3FFB3', '#FFE0B3', '#E0B3FF'];

export default function S02_TheNeighborhood({ isPresenting }: { isPresenting: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-full flex flex-col items-center justify-center px-8"
    >
      <motion.h2
        className="font-retro text-neon-pink text-xl md:text-2xl mb-2 text-neon-glow"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        The Neighborhood
      </motion.h2>
      <motion.p
        className="font-body text-2xl text-white/80 mb-8 text-center max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        We&apos;re going to build an application, but we&apos;re going to build it in the 90s, because times were simpler there.
      </motion.p>

      <svg viewBox="0 0 800 350" className="w-full max-w-4xl">
        {/* Sky gradient */}
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2d1b69" />
            <stop offset="100%" stopColor="#1a0a2e" />
          </linearGradient>
        </defs>

        {/* Sun */}
        <motion.circle
          cx="700" cy="60" r="40"
          fill="#FFD700"
          animate={{ filter: ['drop-shadow(0 0 10px #FFD700)', 'drop-shadow(0 0 20px #FFD700)', 'drop-shadow(0 0 10px #FFD700)'] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        {/* Sun rays */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <motion.line
            key={i}
            x1={700 + Math.cos((angle * Math.PI) / 180) * 45}
            y1={60 + Math.sin((angle * Math.PI) / 180) * 45}
            x2={700 + Math.cos((angle * Math.PI) / 180) * 55}
            y2={60 + Math.sin((angle * Math.PI) / 180) * 55}
            stroke="#FFD700" strokeWidth="2" strokeLinecap="round"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}

        {/* Clouds */}
        <motion.g animate={{ x: [0, 10, 0] }} transition={{ duration: 8, repeat: Infinity }}>
          <ellipse cx="150" cy="50" rx="40" ry="15" fill="white" opacity="0.1" />
          <ellipse cx="170" cy="45" rx="30" ry="12" fill="white" opacity="0.1" />
        </motion.g>

        {/* Street */}
        <rect x="0" y="260" width="800" height="90" fill="#333" />
        <line x1="0" y1="305" x2="800" y2="305" stroke="#FFD700" strokeWidth="2" strokeDasharray="20,15" />

        {/* Street sign */}
        <rect x="50" y="170" width="3" height="90" fill="#888" />
        <rect x="30" y="165" width="80" height="20" rx="2" fill="#2D004D" stroke="#BF00FF" strokeWidth="1" />
        <text x="70" y="179" textAnchor="middle" fill="#BF00FF" fontSize="8" fontFamily="monospace">INTERNET AVE</text>

        {/* Houses */}
        <motion.g variants={container} initial="hidden" animate="show">
          {houseColors.map((color, i) => {
            const x = 100 + i * 140;
            const isServer = i === 2;
            return (
              <motion.g key={i} variants={item}>
                {/* House body */}
                <rect x={x} y={isServer ? 140 : 160} width={isServer ? 120 : 90} height={isServer ? 120 : 100} fill={isServer ? '#FFD1CC' : color} stroke={isServer ? '#FF6EC7' : '#666'} strokeWidth={isServer ? 2.5 : 1.5} />
                {/* Roof */}
                <polygon
                  points={isServer ? `${x - 10},${140} ${x + 60},${isServer ? 90 : 120} ${x + 130},${140}` : `${x - 5},160 ${x + 45},120 ${x + 95},160`}
                  fill={isServer ? '#FF6EC7' : '#666'}
                  stroke={isServer ? '#CC3399' : '#555'}
                  strokeWidth="1.5"
                />
                {/* Door */}
                <rect x={x + (isServer ? 45 : 30)} y={isServer ? 220 : 230} width={isServer ? 30 : 22} height={isServer ? 40 : 30} rx="2" fill={isServer ? '#CC3399' : '#555'} />
                {/* Window */}
                <rect x={x + (isServer ? 18 : 12)} y={isServer ? 165 : 180} width={isServer ? 25 : 18} height={isServer ? 25 : 18} fill="#B3E5FF" stroke={isServer ? '#CC3399' : '#666'} strokeWidth="1" />
                <rect x={x + (isServer ? 78 : 58)} y={isServer ? 165 : 180} width={isServer ? 25 : 18} height={isServer ? 25 : 18} fill="#B3E5FF" stroke={isServer ? '#CC3399' : '#666'} strokeWidth="1" />

                {isServer && (
                  <>
                    {/* Glow effect */}
                    <rect x={x - 5} y={135} width={130} height={130} fill="none" stroke="#FF6EC7" strokeWidth="1" opacity="0.3" filter="url(#glow)" />
                    {/* Label */}
                    <rect x={x + 15} y={100} width={90} height={22} rx="3" fill="#1a0a2e" stroke="#FF6EC7" strokeWidth="1.5" />
                    <text x={x + 60} y={115} textAnchor="middle" fill="#FF6EC7" fontSize="10" fontFamily="monospace" fontWeight="bold">THE SERVER</text>
                    {/* IP Address */}
                    <rect x={x + 20} y={270} width={80} height={16} rx="3" fill="#1a0a2e" stroke="#00FFFF" strokeWidth="1" />
                    <text x={x + 60} y={282} textAnchor="middle" fill="#00FFFF" fontSize="8" fontFamily="monospace">192.168.1.1</text>
                  </>
                )}

                {/* Picket fence */}
                {[0, 1, 2, 3].map((f) => (
                  <rect key={f} x={x + f * 25 + 5} y={245} width={4} height={15} fill="white" opacity="0.3" />
                ))}
              </motion.g>
            );
          })}
        </motion.g>
      </svg>
    </motion.div>
  );
}
