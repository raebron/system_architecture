'use client';

import { motion } from 'framer-motion';
import Jessica from '@/characters/Jessica';
import Jake from '@/characters/Jake';
import Zane from '@/characters/Zane';

export default function S07_HowTheyTalk({ isPresenting }: { isPresenting: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-full flex flex-col items-center justify-center px-8"
    >
      <motion.h2
        className="font-retro text-neon-cyan text-xl md:text-2xl mb-2 text-neon-glow"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        How the Roomies Talk
      </motion.h2>
      <motion.p
        className="font-body text-xl text-white/80 mb-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        The roomies talk to each other in special languages.
      </motion.p>

      <div className="flex flex-col items-center gap-2 relative">
        {/* Jessica */}
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Jessica className="w-24 h-24" expression="happy" />
          <div>
            <div className="font-retro text-jessica text-xs">Jessica UI</div>
            <motion.div
              className="bg-jessica/10 border border-jessica/30 rounded-lg px-3 py-1 mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <span className="font-body text-sm text-jessica-light">&quot;Hey Jake, API me!&quot;</span>
            </motion.div>
          </div>
        </motion.div>

        {/* API Arrow */}
        <motion.div className="flex items-center gap-3 my-1">
          <svg viewBox="0 0 200 40" className="w-48">
            <defs>
              <linearGradient id="api-arrow" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#FF6EC7" />
                <stop offset="100%" stopColor="#00BFFF" />
              </linearGradient>
            </defs>
            <motion.line
              x1="20" y1="20" x2="180" y2="20"
              stroke="url(#api-arrow)" strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            />
            <motion.polygon
              points="175,12 190,20 175,28"
              fill="#00BFFF"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
            />
            <motion.polygon
              points="25,12 10,20 25,28"
              fill="#FF6EC7"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
            />
            {/* Data packet traveling */}
            <motion.rect
              x="0" y="14" width="16" height="12" rx="2"
              fill="#FFD700"
              animate={{ x: [20, 170, 20] }}
              transition={{ duration: 3, repeat: Infinity, delay: 2 }}
            />
          </svg>
          <div className="text-center">
            <div className="font-retro text-neon-pink text-xs">API</div>
            <div className="font-body text-xs text-white/50">their love language</div>
          </div>
        </motion.div>

        {/* Jake */}
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Jake className="w-24 h-24" expression="happy" />
          <div>
            <div className="font-retro text-jake text-xs">Jake Services</div>
            <motion.div
              className="bg-jake/10 border border-jake/30 rounded-lg px-3 py-1 mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              <span className="font-body text-sm text-jake-light">&quot;SQL time, bro&quot;</span>
            </motion.div>
          </div>
        </motion.div>

        {/* SQL Arrow */}
        <motion.div className="flex items-center gap-3 my-1">
          <svg viewBox="0 0 200 40" className="w-48">
            <motion.line
              x1="20" y1="20" x2="180" y2="20"
              stroke="#39FF14" strokeWidth="3"
              strokeDasharray="8,4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
            />
            <motion.polygon
              points="175,12 190,20 175,28"
              fill="#39FF14"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
            />
            <motion.polygon
              points="25,12 10,20 25,28"
              fill="#39FF14"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
            />
            {/* SQL packet */}
            <motion.rect
              x="0" y="14" width="16" height="12" rx="2"
              fill="#39FF14"
              opacity="0.7"
              animate={{ x: [20, 170, 20] }}
              transition={{ duration: 4, repeat: Infinity, delay: 2.5 }}
            />
          </svg>
          <div className="text-center">
            <div className="font-retro text-zane text-xs">SQL</div>
            <div className="font-body text-xs text-white/50">the ONLY words Zane accepts</div>
          </div>
        </motion.div>

        {/* Zane */}
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 }}
        >
          <Zane className="w-24 h-24" expression="angry" />
          <div>
            <div className="font-retro text-zane text-xs">Zane Database</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
