'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Slide } from '@/lib/types';

export default function SlideViewport({
  slide,
  direction,
  isPresenting,
}: {
  slide: Slide;
  direction: number;
  isPresenting: boolean;
}) {
  const Component = slide.component;

  return (
    <div className="w-full h-full overflow-hidden">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={slide.id}
          custom={direction}
          initial={{ opacity: 0, x: direction > 0 ? 300 : -300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction > 0 ? -300 : 300 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="w-full h-full flex items-center justify-center"
        >
          <Component isPresenting={isPresenting} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
