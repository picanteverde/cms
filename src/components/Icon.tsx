import { ComponentProps } from '../types';

interface IconProps extends ComponentProps {
  icon?: string | React.ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
}

const sizeMap = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-2xl',
  xl: 'text-4xl',
  '2xl': 'text-6xl',
};

export function Icon({ icon, size = 'md', className = '', children }: IconProps) {
  const classes = `${sizeMap[size]} ${className}`.trim();

  return (
    <span className={classes}>
      {icon || children}
    </span>
  );
}
