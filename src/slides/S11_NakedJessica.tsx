'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Jessica from '@/characters/Jessica';
import Jake from '@/characters/Jake';
import Zane from '@/characters/Zane';

export default function S11_NakedJessica({ isPresenting }: { isPresenting: boolean }) {
  const [step, setStep] = useState(0);

  const advance = () => setStep((s) => Math.min(s + 1, 5));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-full flex flex-col items-center justify-center px-8 cursor-pointer"
      onClick={advance}
    >
      <motion.h2
        className="font-retro text-neon-pink text-lg md:text-xl mb-4 text-neon-glow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {step === 0 ? "But she looks down..." : step < 5 ? "The Chain Reaction" : "Data Flows Up!"}
      </motion.h2>

      <div className="flex flex-col items-center gap-3 relative">
        {/* Jessica */}
        <motion.div className="relative">
          {step === 0 ? (
            <svg viewBox="0 0 200 200" className="w-28 h-28">
              <defs>
                <pattern id="wireframe" patternUnits="userSpaceOnUse" width="10" height="10">
                  <rect width="10" height="10" fill="none" />
                  <path d="M0,0 L10,0 M0,5 L10,5 M0,10 L10,10" stroke="#FF6EC7" strokeWidth="0.5" opacity="0.3" />
                  <path d="M0,0 L0,10 M5,0 L5,10 M10,0 L10,10" stroke="#FF6EC7" strokeWidth="0.5" opacity="0.3" />
                </pattern>
              </defs>
              <ellipse cx="100" cy="60" rx="35" ry="40" fill="url(#wireframe)" stroke="#FF6EC7" strokeWidth="2" strokeDasharray="5,3" />
              <path d="M65,95 L55,180 Q100,195 145,180 L135,95Z" fill="url(#wireframe)" stroke="#FF6EC7" strokeWidth="2" strokeDasharray="5,3" />
              <text x="100" y="105" textAnchor="middle" fill="#FF6EC7" fontSize="10" fontFamily="monospace">loading...</text>
            </svg>
          ) : (
            <Jessica className="w-28 h-28" expression={step < 5 ? 'embarrassed' : 'happy'} animated={step >= 5} />
          )}
          {step >= 1 && step < 5 && (
            <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="absolute -right-40 top-0 bg-jessica/20 border border-jessica rounded-xl px-3 py-2">
              <span className="font-body text-sm text-jessica-light">JAKE! I&apos;M NAKED!</span>
            </motion.div>
          )}
        </motion.div>

        {/* Arrow down */}
        {step >= 1 && (
          <motion.div initial={{ opacity: 0, scaleY: 0 }} animate={{ opacity: 1, scaleY: 1 }} className="flex flex-col items-center">
            <div className="font-retro text-[8px] text-jessica px-2 py-0.5 bg-jessica/10 rounded">API</div>
            <svg viewBox="0 0 20 30" className="w-4 h-6"><line x1="10" y1="0" x2="10" y2="25" stroke="#FF6EC7" strokeWidth="2" /><polygon points="5,20 10,30 15,20" fill="#FF6EC7" /></svg>
          </motion.div>
        )}

        {/* Jake */}
        {step >= 1 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative">
            <Jake className="w-28 h-28" expression={step >= 4 ? 'happy' : 'stressed'} />
            {step >= 2 && step < 4 && (
              <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="absolute -right-48 top-0 bg-jake/20 border border-jake rounded-xl px-3 py-2">
                <span className="font-body text-sm text-jake-light">{step === 2 ? '"Zane, give me recipes!"' : '"SELECT * FROM recipes"'}</span>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Arrow down */}
        {step >= 2 && (
          <motion.div initial={{ opacity: 0, scaleY: 0 }} animate={{ opacity: 1, scaleY: 1 }} className="flex flex-col items-center">
            <div className="font-retro text-[8px] text-zane px-2 py-0.5 bg-zane/10 rounded">SQL</div>
            <svg viewBox="0 0 20 30" className="w-4 h-6"><line x1="10" y1="0" x2="10" y2="25" stroke="#39FF14" strokeWidth="2" /><polygon points="5,20 10,30 15,20" fill="#39FF14" /></svg>
          </motion.div>
        )}

        {/* Zane */}
        {step >= 2 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative">
            <Zane className="w-28 h-28" expression={step === 2 ? 'angry' : step === 3 ? 'angry' : 'happy'} />
            {step === 2 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute -right-20 top-4 bg-black/50 border border-zane/30 rounded-xl px-3 py-2">
                <span className="font-mono text-lg text-zane/40">...</span>
              </motion.div>
            )}
            {step >= 4 && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="absolute -right-36 top-0 bg-zane/10 border border-zane rounded-xl px-3 py-2">
                <span className="font-mono text-xs text-zane">📦 DATA</span>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Data flowing up */}
        {step >= 5 && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute left-1/2 -translate-x-1/2"
                animate={{ y: [300, -50], opacity: [1, 0] }}
                transition={{ duration: 1.5, delay: i * 0.3, repeat: Infinity, repeatDelay: 1 }}
              >
                <svg viewBox="0 0 30 20" className="w-8">
                  <rect x="2" y="2" width="26" height="16" rx="3" fill="#FFD700" opacity="0.6" />
                  <text x="15" y="13" textAnchor="middle" fill="white" fontSize="6" fontFamily="monospace">DATA</text>
                </svg>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {step < 5 && (
        <motion.p className="font-body text-sm text-white/40 mt-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          click to advance the story →
        </motion.p>
      )}
      {step >= 5 && (
        <motion.p className="font-body text-lg text-neon-cyan mt-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          And now you see the beautiful website!
        </motion.p>
      )}
    </motion.div>
  );
}
