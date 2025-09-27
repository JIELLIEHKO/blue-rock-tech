'use client';

import Link from 'next/link';
import { forwardRef } from 'react';
import { Loader2 } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

type Variant = 'default' | 'secondary' | 'outline' | 'ghost' | 'link' | 'destructive';
type Size = 'sm' | 'md' | 'lg';

type CommonProps = {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
  className?: string;
  children?: React.ReactNode;
};

type ButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: never;
};

type AnchorProps = CommonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  external?: boolean;
};

type Props = ButtonProps | AnchorProps;

function cn(...inputs: Array<string | false | null | undefined>) {
  return twMerge(inputs.filter(Boolean).join(' '));
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition ' +
  'disabled:opacity-60 disabled:cursor-not-allowed ' +
  'focus-visible:outline-none focus-visible:ring-2 ' +
  'focus-visible:ring-[color:var(--color-primary)] focus-visible:ring-offset-2 ' +
  'focus-visible:ring-offset-[color:var(--color-background)]';

const sizes: Record<Size, string> = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-11 px-5 text-base',
};

const variants: Record<Variant, string> = {
  // Градиент + правильный цвет текста из токена .bg-gradient-accent (см. globals.css)
  default:
    'bg-gradient-accent border border-[color:var(--color-border-strong)] shadow-sm ' +
    'hover:scale-[1.01] active:scale-[.99]',
  // Карточный стиль по токенам
  secondary: 'border border-border bg-card text-card-foreground hover:bg-card/80',
  // Контрастная граница
  outline: 'bg-transparent border border-[color:var(--color-border-strong)] text-foreground hover:bg-card/50',
  // Почти прозрачная
  ghost: 'bg-transparent text-foreground hover:bg-foreground/10',
  // Ссылка-кнопка
  link: 'bg-transparent px-0 text-[color:var(--color-primary)] hover:underline',
  // Опасное действие
  destructive: 'bg-[color:var(--color-danger)] text-white hover:opacity-90',
};

function isAnchorProps(p: Props): p is AnchorProps {
  return (p as AnchorProps).href !== undefined;
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(function Button(
  {
    variant = 'default',
    size = 'md',
    fullWidth,
    leftIcon,
    rightIcon,
    loading,
    className,
    children,
    ...rest
  },
  ref
) {
  const cls = cn(
    base,
    sizes[size],
    variants[variant],
    fullWidth && 'w-full',
    !children && 'aspect-square px-0',
    className
  );

  const content = (
    <>
      {loading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
      {!loading && leftIcon}
      {children && <span className="whitespace-nowrap">{children}</span>}
      {!loading && rightIcon}
    </>
  );

  if (isAnchorProps(rest)) {
    const { href, external, ...aProps } = rest;
    const openExternal = external ?? /^https?:\/\//.test(href);
    if (openExternal) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cls}
          {...aProps}
        >
          {content}
        </a>
      );
    }
    return (
      <Link ref={ref as React.Ref<HTMLAnchorElement>} href={href} className={cls} {...(aProps as any)}>
        {content}
      </Link>
    );
  }

  return (
    <button ref={ref as React.Ref<HTMLButtonElement>} className={cls} aria-busy={loading} {...(rest as any)}>
      {content}
    </button>
  );
});
