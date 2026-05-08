'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Preston from '@/characters/Preston';

const dnsEntries = [
  { domain: 'damndelicious.net', ip: '74.125.224.72', note: "Jessica's place" },
  { domain: 'stackoverflow.com', ip: '151.101.1.69', note: 'where devs actually live' },
  { domain: 'linkedin.com', ip: '13.107.42.14', note: 'where people pretend to live' },
  { domain: 'myspace.com', ip: '216.178.47.1', note: 'RIP' },
  { domain: 'askjeeves.com', ip: '66.235.121.1', note: 'in the nursing home' },
  { domain: 'geocities.com', ip: '0.0.0.0', note: 'gone but not forgotten' },
];

export default function S09_PrestonDNS({ isPresenting }: { isPresenting: boolean }) {
  const [bookOpen, setBookOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-full flex flex-col items-center justify-center px-8"
      style={{ background: 'linear-gradient(180deg, #1a0520 0%, #1a0a2e 100%)' }}
    >
      <motion.h2
        className="font-retro text-preston text-xl md:text-2xl mb-1"
        style={{ textShadow: '0 0 10px #BF00FF, 0 0 20px #BF00FF' }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Preston the DNS
      </motion.h2>
      <motion.p
        className="font-retro text-xs text-preston/60 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        The Campus Drug Dealer
      </motion.p>
      <motion.p
        className="font-body text-xl text-white/80 mb-6 text-center max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Preston is the biggest address book in the world. He knows where everyone lives and what they&apos;re smoking. His fancy address book is called DNS — Domain Name Service.
      </motion.p>

      <div className="flex items-center gap-8">
        {/* Lamp post */}
        <motion.svg viewBox="0 0 60 200" className="w-12 h-48" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <rect x="27" y="30" width="6" height="170" fill="#555" />
          <rect x="15" y="20" width="30" height="20" rx="3" fill="#666" />
          <motion.circle cx="30" cy="25" r="8" fill="#FFD700" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />
          <motion.circle cx="30" cy="25" r="20" fill="#FFD700" opacity="0.1" animate={{ r: [20, 30, 20] }} transition={{ duration: 2, repeat: Infinity }} />
        </motion.svg>

        {/* Preston */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Preston className="w-44 h-44" expression="cool" animated />
        </motion.div>

        {/* Speech bubble */}
        <motion.div
          className="bg-preston/10 border-2 border-preston/40 rounded-2xl px-5 py-3 max-w-xs relative"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
        >
          <span className="font-body text-lg text-preston-light">
            &quot;Oh, I know that URL. That&apos;s Jessica. She lives at <span className="font-mono text-neon-cyan">74.125.224.72</span>.&quot;
          </span>
          <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-preston/10 border-l-2 border-b-2 border-preston/40 rotate-45" />
        </motion.div>
      </div>

      {/* DNS Book - clickable */}
      <motion.div
        className="mt-6 cursor-pointer"
        onClick={() => setBookOpen(!bookOpen)}
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="bg-preston/20 border-2 border-preston rounded-lg px-6 py-2 text-center">
          <span className="font-retro text-xs text-preston">📖 {bookOpen ? 'CLOSE' : 'OPEN'} THE DNS BOOK</span>
        </div>
      </motion.div>

      <AnimatePresence>
        {bookOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 bg-black/60 border border-preston/30 rounded-lg p-4 max-w-md overflow-hidden"
          >
            <div className="font-mono text-xs text-preston/50 mb-2">PRESTON&apos;S ADDRESS BOOK v1.0</div>
            {dnsEntries.map((entry, i) => (
              <motion.div
                key={entry.domain}
                className="flex justify-between gap-4 font-mono text-sm py-1 border-b border-preston/10"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
              >
                <span className="text-neon-cyan">{entry.domain}</span>
                <span className="text-white/50">→</span>
                <span className="text-zane">{entry.ip}</span>
                <span className="text-white/30 text-xs">({entry.note})</span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
