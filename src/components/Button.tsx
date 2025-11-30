import { ComponentProps } from '../types';

interface ButtonProps extends ComponentProps {
  text?: string | React.ReactNode;
  href?: string;
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const variantMap = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-gray-600 text-white hover:bg-gray-700',
  outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
};

const sizeMap = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export function Button({
  text,
  href,
  icon,
  variant = 'primary',
  size = 'md',
  className = '',
  children
}: ButtonProps) {
  const classes = `inline-flex items-center gap-2 rounded-lg font-semibold transition-colors ${variantMap[variant]} ${sizeMap[size]} ${className}`.trim();

  const content = (
    <>
      {icon}
      {text || children}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes}>
      {content}
    </button>
  );
}
