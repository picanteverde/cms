import { ComponentProps } from '../types';

interface TitleProps extends ComponentProps {
  text?: string | React.ReactNode;
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  className?: string;
}

const sizeMap = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
  '6xl': 'text-6xl',
};

export function Title({
  text,
  level = 'h2',
  size = '2xl',
  className = '',
  children
}: TitleProps) {
  const Tag = level;
  const classes = `${sizeMap[size]} font-bold ${className}`.trim();

  return <Tag className={classes}>{text || children}</Tag>;
}
