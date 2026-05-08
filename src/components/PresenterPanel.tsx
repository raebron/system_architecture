'use client';

import { motion } from 'framer-motion';

export default function PresenterPanel({
  narration,
  nextTitle,
  elapsed,
  slideNumber,
  totalSlides,
}: {
  narration: string;
  nextTitle: string | null;
  elapsed: string;
  slideNumber: number;
  totalSlides: number;
}) {
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed top-0 right-0 bottom-0 w-[30%] bg-black/90 border-l-2 border-neon-cyan/30 p-6 z-40 overflow-y-auto"
    >
      <div className="font-retro text-[10px] text-neon-cyan mb-4 flex justify-between">
        <span>PRESENTER MODE</span>
        <span>{elapsed}</span>
      </div>

      <div className="font-retro text-[10px] text-neon-pink/60 mb-2">
        SLIDE {slideNumber} / {totalSlides}
      </div>

      <div className="font-body text-xl text-white/90 leading-relaxed mb-8">
        {narration}
      </div>

      {nextTitle && (
        <div className="border-t border-neon-purple/30 pt-4">
          <div className="font-retro text-[8px] text-neon-purple/60 mb-2">
            NEXT UP
          </div>
          <div className="font-body text-lg text-white/60">{nextTitle}</div>
        </div>
      )}

      <div className="absolute bottom-4 left-6 right-6 font-retro text-[8px] text-white/30">
        Press P to close
      </div>
    </motion.div>
  );
}
