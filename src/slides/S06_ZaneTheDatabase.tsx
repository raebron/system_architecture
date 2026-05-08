'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Zane from '@/characters/Zane';

export default function S06_ZaneTheDatabase({ isPresenting }: { isPresenting: boolean }) {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<'none' | 'rejected' | 'accepted'>('none');

  const handleSubmit = () => {
    if (input.trim().toLowerCase().startsWith('select')) {
      setResponse('accepted');
    } else if (input.trim().length > 0) {
      setResponse('rejected');
    }
    setTimeout(() => setResponse('none'), 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-full flex flex-col items-center justify-center px-8"
      style={{ background: 'linear-gradient(180deg, #0a1a0a 0%, #1a0a2e 100%)' }}
    >
      <motion.h2
        className="font-retro text-zane text-xl md:text-2xl mb-2"
        style={{ textShadow: '0 0 10px #39FF14, 0 0 20px #39FF14' }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        The Jerk in the Basement
      </motion.h2>
      <motion.p
        className="font-body text-xl text-white/80 mb-6 text-center max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Zane only answers if you talk to him in HIS language. SQL. He&apos;s got all the answers — he just won&apos;t give them up easily.
      </motion.p>

      <div className="relative flex flex-col items-center">
        {/* Speech bubble */}
        <AnimatePresence>
          {response === 'rejected' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black/50 border-2 border-zane/30 rounded-xl px-6 py-3 mb-4"
            >
              <span className="font-mono text-lg text-zane/50">...</span>
            </motion.div>
          )}
          {response === 'accepted' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black/80 border-2 border-zane rounded-xl px-6 py-3 mb-4"
            >
              <p className="font-mono text-sm text-zane mb-1">Fine. Here&apos;s your data:</p>
              <div className="font-mono text-xs text-zane/70">
                <p>┌──────────────┬─────────┐</p>
                <p>│ recipe       │ rating  │</p>
                <p>├──────────────┼─────────┤</p>
                <p>│ Garlic Salmon│ ★★★★★   │</p>
                <p>│ Thai Chicken │ ★★★★☆   │</p>
                <p>│ Mango Rice   │ ★★★★★   │</p>
                <p>└──────────────┴─────────┘</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Zane */}
        <Zane
          className="w-44 h-44 md:w-52 md:h-52"
          expression={response === 'accepted' ? 'happy' : 'angry'}
          animated
        />

        {/* DO NOT DISTURB sign */}
        <motion.div
          className="absolute -right-20 top-10 bg-red-900/80 border border-red-500 px-3 py-1 rotate-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span className="font-retro text-[6px] text-red-300">DO NOT DISTURB</span>
        </motion.div>
      </div>

      {/* Terminal input */}
      <motion.div
        className="mt-6 w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="bg-black/80 border-2 border-zane/40 rounded-lg p-3">
          <div className="font-mono text-xs text-zane/50 mb-2">zane@database:~$</div>
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') { e.stopPropagation(); handleSubmit(); } }}
              placeholder='Try "SELECT * FROM recipes"'
              className="flex-1 bg-transparent border-b border-zane/30 text-zane font-mono text-sm outline-none placeholder:text-zane/20"
            />
            <button
              onClick={(e) => { e.stopPropagation(); handleSubmit(); }}
              className="font-mono text-xs text-zane/60 hover:text-zane border border-zane/30 px-3 py-1 rounded"
            >
              RUN
            </button>
          </div>
        </div>
        <p className="font-body text-sm text-white/30 mt-2 text-center">
          try talking to Zane — hint: he only speaks SQL
        </p>
      </motion.div>
    </motion.div>
  );
}
