'use client';

import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Slide } from '@/lib/types';
import { useKeyboardNav } from '@/hooks/useKeyboardNav';
import { useSlideRouter } from '@/hooks/useSlideRouter';
import { usePresenterMode } from '@/hooks/usePresenterMode';
import SlideViewport from './SlideViewport';
import ProgressBar from './ProgressBar';
import SlideCounter from './SlideCounter';
import PresenterPanel from './PresenterPanel';

export default function DeckShell({ slides }: { slides: Slide[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const { isPresenting, toggle: togglePresenter, close: closePresenter, elapsed } = usePresenterMode();

  const goNext = useCallback(() => {
    setCurrentIndex((i) => {
      if (i >= slides.length - 1) return i;
      setDirection(1);
      return i + 1;
    });
  }, [slides.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => {
      if (i <= 0) return i;
      setDirection(-1);
      return i - 1;
    });
  }, []);

  const goFirst = useCallback(() => {
    setDirection(-1);
    setCurrentIndex(0);
  }, []);

  const goLast = useCallback(() => {
    setDirection(1);
    setCurrentIndex(slides.length - 1);
  }, [slides.length]);

  useKeyboardNav(goNext, goPrev, togglePresenter, goFirst, goLast, closePresenter);
  useSlideRouter(slides, currentIndex, setCurrentIndex);

  const currentSlide = slides[currentIndex];
  const nextSlide = currentIndex < slides.length - 1 ? slides[currentIndex + 1] : null;

  return (
    <div className="h-screen w-screen bg-vapor-dark relative overflow-hidden">
      <div
        className="bg-[radial-gradient(rgba(255,110,199,0.03)_1px,transparent_1px)] bg-[length:40px_40px] absolute inset-0 pointer-events-none"
      />

      <SlideCounter current={currentIndex} total={slides.length} />

      <button
        onClick={togglePresenter}
        className="fixed top-4 right-4 z-50 font-retro text-[8px] text-white/30 hover:text-neon-cyan transition-colors"
      >
        [P]
      </button>

      <div className={isPresenting ? 'w-[70%] h-full' : 'w-full h-full'}>
        <SlideViewport
          slide={currentSlide}
          direction={direction}
          isPresenting={isPresenting}
        />
      </div>

      <AnimatePresence>
        {isPresenting && (
          <PresenterPanel
            narration={currentSlide.narration}
            nextTitle={nextSlide?.title ?? null}
            elapsed={elapsed}
            slideNumber={currentIndex + 1}
            totalSlides={slides.length}
          />
        )}
      </AnimatePresence>

      <ProgressBar current={currentIndex} total={slides.length} />
    </div>
  );
}
