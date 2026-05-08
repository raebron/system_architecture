'use client';

import { useState, useEffect, useRef } from 'react';

export function usePresenterMode() {
  const [isPresenting, setIsPresenting] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const startRef = useRef<number | null>(null);

  const toggle = () => {
    setIsPresenting((v) => {
      if (!v) startRef.current = Date.now();
      return !v;
    });
  };

  useEffect(() => {
    if (!isPresenting) return;
    const interval = setInterval(() => {
      if (startRef.current) {
        setElapsed(Math.floor((Date.now() - startRef.current) / 1000));
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isPresenting]);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  const close = () => setIsPresenting(false);

  return { isPresenting, toggle, close, elapsed: formatTime(elapsed) };
}
