'use client';

import { useEffect } from 'react';
import { Slide } from '@/lib/types';

export function useSlideRouter(
  slides: Slide[],
  currentIndex: number,
  setIndex: (i: number) => void,
) {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const slideId = params.get('slide');
    if (slideId) {
      const idx = slides.findIndex((s) => s.id === slideId);
      if (idx >= 0) setIndex(idx);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set('slide', slides[currentIndex].id);
    window.history.replaceState(null, '', url.toString());
  }, [currentIndex, slides]);
}
