import { useEffect } from 'react';

type Options = {
  event?: 'click' | 'mousedown' | 'mouseup' | 'pointerdown';
};

export function useOutsideClick<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  onOutside: () => void,
  opts: Options = {}
) {
  const { event = 'click' } = opts;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      if (!el.contains(e.target as Node)) onOutside();
    };

    document.addEventListener(event, handler);
    return () => document.removeEventListener(event, handler);
  }, [ref, onOutside, event]);
}
