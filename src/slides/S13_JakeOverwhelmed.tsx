'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Jake from '@/characters/Jake';
import Jessica from '@/characters/Jessica';

export default function S13_JakeOverwhelmed({ isPresenting }: { isPresenting: boolean }) {
  const [ballCount, setBallCount] = useState(0);

  const phase = ballCount < 3 ? 'calm' : ballCount < 6 ? 'busy' : ballCount < 9 ? 'frantic' : 'crashed';

  const balls = Array.from({ length: Math.min(ballCount, 20) }, (_, i) => ({
    id: i,
    x: 15 + Math.random() * 70,
    y: 10 + Math.random() * 60,
    color: ['#00FFFF', '#FF6EC7', '#39FF14', '#FFD700', '#BF00FF', '#FF6600'][i % 6],
  }));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-full flex flex-col items-center justify-center px-8 relative"
    >
      {/* Red overlay when crashed */}
      {phase === 'crashed' && (
        <motion.div
          className="absolute inset-0 bg-red-900/30 z-10 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
      )}

      <motion.h2
        className="font-retro text-neon-pink text-xl md:text-2xl mb-2 text-neon-glow"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {phase === 'crashed' ? 'SITE DOWN' : 'The Scaling Problem'}
      </motion.h2>

      {phase === 'frantic' && (
        <motion.p
          className="font-retro text-jessica text-sm mb-4"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        >
          JAKE JAKE JAKE JAKE JAKE!
        </motion.p>
      )}

      <div className="relative w-full max-w-lg h-64">
        {phase !== 'crashed' ? (
          <>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <Jake
                className="w-36 h-36"
                expression={phase === 'calm' ? 'happy' : 'stressed'}
                animated
              />
            </div>

            {balls.map((ball) => (
              <motion.div
                key={ball.id}
                className="absolute z-10"
                style={{ left: `${ball.x}%`, top: `${ball.y}%` }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  x: [0, (Math.random() - 0.5) * 40],
                  y: [0, (Math.random() - 0.5) * 40],
                }}
                transition={{ duration: 1 + Math.random(), repeat: Infinity, repeatType: 'reverse' }}
              >
                <svg viewBox="0 0 30 30" className="w-6 h-6">
                  <circle cx="15" cy="15" r="12" fill={ball.color} opacity="0.8" />
                  <text x="15" y="18" textAnchor="middle" fill="white" fontSize="6" fontFamily="monospace">REQ</text>
                </svg>
              </motion.div>
            ))}
          </>
        ) : (
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center z-20"
            initial={{ scale: 0, rotateZ: -5 }}
            animate={{ scale: 1, rotateZ: 0 }}
          >
            <div className="bg-black border-4 border-red-500 rounded-lg p-8 text-center relative">
              <div className="font-retro text-red-500 text-lg mb-2">503</div>
              <div className="font-retro text-red-400 text-xs mb-4">SERVICE UNAVAILABLE</div>
              <Jake className="w-20 h-20 mx-auto opacity-40" expression="sleeping" />
              <div className="font-body text-sm text-red-300 mt-2">Jake has left the chat</div>
            </div>
            <motion.div
              className="mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Jessica className="w-16 h-16" expression="embarrassed" />
              <p className="font-body text-sm text-jessica/60 mt-1">naked again...</p>
            </motion.div>
          </motion.div>
        )}
      </div>

      <motion.p className="font-body text-lg text-white/70 mt-2" key={phase}>
        {phase === 'calm' && "Jake's got this. Easy peasy."}
        {phase === 'busy' && "Getting busy in here..."}
        {phase === 'frantic' && "Too many requests! Jake can't keep up!"}
        {phase === 'crashed' && "Jessica is naked in front of ALL her visitors."}
      </motion.p>

      {phase !== 'crashed' && (
        <motion.button
          onClick={() => setBallCount((c) => c + 2)}
          className="mt-4 font-retro text-xs bg-red-900/50 border-2 border-red-500 text-red-300 px-6 py-2 rounded-lg hover:bg-red-900/70 transition-colors"
          whileTap={{ scale: 0.95 }}
        >
          🏀 THROW MORE BALLS
        </motion.button>
      )}
      {phase === 'crashed' && (
        <motion.button
          onClick={() => setBallCount(0)}
          className="mt-4 font-retro text-xs bg-neon-cyan/10 border border-neon-cyan text-neon-cyan px-6 py-2 rounded-lg hover:bg-neon-cyan/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          RESTART
        </motion.button>
      )}
    </motion.div>
  );
}
