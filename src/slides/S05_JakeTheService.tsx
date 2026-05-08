'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Jake from '@/characters/Jake';

export default function S05_JakeTheService({ isPresenting }: { isPresenting: boolean }) {
  const [ballCount, setBallCount] = useState(3);

  const balls = Array.from({ length: Math.min(ballCount, 15) }, (_, i) => ({
    id: i,
    x: 50 + Math.sin(i * 1.8) * 35,
    y: 20 + Math.cos(i * 1.2) * 25,
    delay: i * 0.15,
    color: ['#00FFFF', '#FF6EC7', '#39FF14', '#FFD700', '#BF00FF'][i % 5],
  }));

  const statusText = ballCount < 5 ? "Jake's got this." : ballCount < 8 ? "Still going strong..." : ballCount < 12 ? "Getting warm..." : "This is fine. 🔥";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-full flex flex-col items-center justify-center px-8"
    >
      <motion.h2
        className="font-retro text-jake text-xl md:text-2xl mb-2 text-neon-glow"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        The Pure Athlete
      </motion.h2>
      <motion.p
        className="font-body text-xl text-white/80 mb-4 text-center max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Jake the Service Layer catches the ball, throws the ball, on repeat all day. He is also dumb.
      </motion.p>

      <div
        className="relative w-full max-w-lg h-72 cursor-pointer"
        onClick={() => setBallCount((c) => c + 1)}
      >
        {/* Jake center */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Jake
            className="w-40 h-40"
            expression={ballCount < 8 ? 'happy' : 'stressed'}
            animated
          />
        </div>

        {/* Balls orbiting */}
        {balls.map((ball) => (
          <motion.div
            key={ball.id}
            className="absolute"
            style={{ left: `${ball.x}%`, top: `${ball.y}%` }}
            animate={{
              x: [0, Math.sin(ball.id) * 30, 0],
              y: [0, Math.cos(ball.id) * 20, 0],
            }}
            transition={{ duration: 2 + ball.delay, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg viewBox="0 0 30 30" className="w-8 h-8">
              <circle cx="15" cy="15" r="12" fill={ball.color} opacity="0.8" />
              <circle cx="12" cy="12" r="3" fill="white" opacity="0.4" />
              <text x="15" y="18" textAnchor="middle" fill="white" fontSize="6" fontFamily="monospace">
                {['GET', 'POST', 'PUT', 'REQ', 'API'][ball.id % 5]}
              </text>
            </svg>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="font-body text-lg text-jake-light"
        key={statusText}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {statusText}
      </motion.p>

      <motion.p
        className="font-body text-sm text-white/40 mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        click to throw more balls
      </motion.p>
    </motion.div>
  );
}
