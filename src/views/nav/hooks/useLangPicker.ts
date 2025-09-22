import { useRef, useState } from 'react';
import type { Lang } from '../constants';
import { useOutsideClick } from './useOutsideClick';

export function useLangPicker(initial: Lang = 'EN') {

  const ref = useRef<HTMLDivElement>(null);
  const [lang, setLang] = useState<Lang>(initial);
  const [open, setOpen] = useState(false);

  useOutsideClick<HTMLDivElement>(ref, () => setOpen(false));

  return {
    lang,
    setLang,
    open,
    setOpen,
    ref,
    toggle: () => setOpen((v) => !v),
  };
}
