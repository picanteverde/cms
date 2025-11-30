import { ComponentProps } from '../types';

interface ContainerProps extends ComponentProps {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl' | '6xl' | 'full';
  className?: string;
}

const maxWidthMap = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '4xl': 'max-w-4xl',
  '6xl': 'max-w-6xl',
  full: 'max-w-full',
};

export function Container({ maxWidth = 'xl', className = '', children }: ContainerProps) {
  return (
    <div className={`${maxWidthMap[maxWidth]} mx-auto px-4 ${className}`.trim()}>
      {children}
    </div>
  );
}
