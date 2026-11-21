'use client';

import * as React from 'react';
import { ArrowUp } from 'lucide-react';

// Aparece cuando se scrolleó más del 20% de la página.
const THRESHOLD = 0.2;

export function ScrollToTop() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setVisible(scrollable > 0 && window.scrollY / scrollable > THRESHOLD);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0 })}
      aria-label="Volver arriba"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={`fixed bottom-[5.5rem] right-[1.625rem] z-40 grid h-11 w-11 place-items-center rounded-full border border-border bg-background text-foreground shadow-[0_10px_28px_-10px_rgba(0,0,0,0.45)] transition-all duration-300 hover:scale-105 md:bottom-[6.25rem] md:right-[2.375rem] ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
