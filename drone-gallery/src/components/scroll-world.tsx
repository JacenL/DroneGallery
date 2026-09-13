'use client';

import { useEffect } from 'react';

/** Keeps a couple of CSS variables in sync with page scroll so layers can drift. */
export default function ScrollWorld({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;
    const update = () => {
      const y = window.scrollY;
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      root.style.setProperty('--scroll', y.toFixed(1));
      root.style.setProperty('--scroll-p', (y / max).toFixed(4));
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return <>{children}</>;
}
