'use client';

import { useCallback, useEffect } from 'react';

export function useKeyboardNav(
  goNext: () => void,
  goPrev: () => void,
  togglePresenter: () => void,
  goFirst: () => void,
  goLast: () => void,
  closePresenter?: () => void,
) {
  const handler = useCallback(
    (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      )
        return;

      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
        case 'Enter':
          e.preventDefault();
          goNext();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault();
          goPrev();
          break;
        case 'p':
        case 'P':
          togglePresenter();
          break;
        case 'Escape':
          if (closePresenter) closePresenter();
          break;
        case 'Home':
          e.preventDefault();
          goFirst();
          break;
        case 'End':
          e.preventDefault();
          goLast();
          break;
      }
    },
    [goNext, goPrev, togglePresenter, goFirst, goLast, closePresenter],
  );

  useEffect(() => {
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [handler]);
}
