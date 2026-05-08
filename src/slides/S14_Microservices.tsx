'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Jake from '@/characters/Jake';
import Jessica from '@/characters/Jessica';

const jakes = [
  { name: 'Jake Search', color: '#00BFFF', jersey: 'SEARCH', desc: 'finds recipes' },
  { name: 'Jake Photos', color: '#39FF14', jersey: 'PHOTOS', desc: 'displays images' },
  { name: 'Jake Recipes', color: '#FF6600', jersey: 'RECIPE', desc: 'enters new recipes' },
];

export default function S14_Microservices({ isPresenting }: { isPresenting: boolean }) {
  const [deadJakes, setDeadJakes] = useState<Set<number>>(new Set());

  const toggleJake = (i: number) => {
    setDeadJakes((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  const aliveCount = 3 - deadJakes.size;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-full flex flex-col items-center justify-center px-8"
    >
      <motion.h2
        className="font-retro text-neon-cyan text-lg md:text-xl mb-2 text-neon-glow"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        What If We Gave Jessica a Harem?
      </motion.h2>
      <motion.p
        className="font-body text-xl text-white/80 mb-6 text-center max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Uber had this idea: instead of one Jake, give her multiple specialized Jakes. This is called <span className="text-neon-cyan">Microservices</span>.
      </motion.p>

      {/* Jessica */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mb-4"
      >
        <Jessica className="w-24 h-24" expression="happy" animated />
      </motion.div>

      {/* API arrows */}
      <div className="flex gap-4 mb-2">
        {jakes.map((_, i) => (
          <motion.svg key={i} viewBox="0 0 20 30" className="w-4 h-6" initial={{ opacity: 0 }} animate={{ opacity: deadJakes.has(i) ? 0.2 : 1 }} transition={{ delay: 0.8 + i * 0.1 }}>
            <line x1="10" y1="0" x2="10" y2="25" stroke="#FF6EC7" strokeWidth="2" />
            <polygon points="5,20 10,30 15,20" fill="#FF6EC7" />
          </motion.svg>
        ))}
      </div>

      {/* Three Jakes */}
      <motion.div
        className="flex gap-6 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        {jakes.map((jake, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => toggleJake(i)}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + i * 0.2 }}
          >
            <div className="relative">
              <Jake
                className="w-24 h-24"
                expression={deadJakes.has(i) ? 'sleeping' : 'happy'}
                animated={!deadJakes.has(i)}
              />
              {deadJakes.has(i) && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                >
                  <div className="bg-red-900/80 rounded-full px-3 py-1">
                    <span className="font-retro text-[8px] text-red-300">DOWN</span>
                  </div>
                </motion.div>
              )}
            </div>
            <div className="text-center mt-1">
              <div className="font-retro text-[8px]" style={{ color: jake.color }}>{jake.jersey}</div>
              <div className="font-body text-xs text-white/50">{jake.desc}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Status */}
      <motion.div
        className="bg-black/40 border border-neon-cyan/30 rounded-lg px-6 py-3 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="font-retro text-xs text-neon-cyan mb-1">SERVICE STATUS</div>
        <div className="flex gap-3">
          {jakes.map((jake, i) => (
            <span key={i} className="font-mono text-xs" style={{ color: deadJakes.has(i) ? '#FF4444' : '#39FF14' }}>
              {jake.jersey}: {deadJakes.has(i) ? '✗ DOWN' : '✓ UP'}
            </span>
          ))}
        </div>
        <div className="font-body text-sm text-white/60 mt-2">
          {aliveCount === 3 && 'All systems operational! Jessica is fully dressed.'}
          {aliveCount === 2 && 'One Jake is down, but the site mostly works!'}
          {aliveCount === 1 && 'Two Jakes down — site is barely hanging on...'}
          {aliveCount === 0 && 'All Jakes are asleep. Jessica is naked again. 😱'}
        </div>
      </motion.div>

      <motion.p className="font-body text-sm text-white/30 mt-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
        click a Jake to take him down — the others keep working
      </motion.p>

      {deadJakes.size > 0 && (
        <motion.button
          onClick={() => setDeadJakes(new Set())}
          className="mt-2 font-retro text-[8px] text-neon-green border border-neon-green/30 px-4 py-1 rounded hover:bg-neon-green/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          REVIVE ALL
        </motion.button>
      )}
    </motion.div>
  );
}
