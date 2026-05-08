'use client';

import { motion } from 'framer-motion';

export default function ProgressBar({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  const pct = ((current + 1) / total) * 100;

  return (
    <div className="fixed bottom-0 left-0 right-0 h-2 bg-vapor-mid/50 z-50">
      <motion.div
        className="h-full bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-purple"
        animate={{ width: `${pct}%` }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
    </div>
  );
}
