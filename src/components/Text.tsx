import { ComponentProps } from '../types';

interface TextProps extends ComponentProps {
  text?: string | React.ReactNode;
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  weight?: 'thin' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
  color?: string;
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

const weightMap = {
  thin: 'font-thin',
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  extrabold: 'font-extrabold',
  black: 'font-black',
};

export function Text({
  text,
  level = 'p',
  size = 'base',
  weight = 'normal',
  color = 'text-gray-900',
  className = '',
  children
}: TextProps) {
  const Tag = level as keyof JSX.IntrinsicElements;
  const classes = `${sizeMap[size]} ${weightMap[weight]} ${color} ${className}`.trim();

  return <Tag className={classes}>{text || children}</Tag>;
}
