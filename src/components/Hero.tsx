import { ComponentProps } from '../types';

interface HeroProps extends ComponentProps {
  title?: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  background?: string;
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  call_to_action?: string | React.ReactNode;
}

const paddingMap = {
  sm: 'py-8 px-4',
  md: 'py-12 px-6',
  lg: 'py-16 px-8',
  xl: 'py-24 px-10',
};

export function Hero({
  title,
  subtitle,
  background = 'bg-white',
  padding = 'lg',
  call_to_action,
  children
}: HeroProps) {
  return (
    <div className={`${background} ${paddingMap[padding]}`}>
      <div className="max-w-4xl mx-auto text-center">
        {title && (
          <h1 className="text-5xl font-bold mb-6">
            {title}
          </h1>
        )}
        {subtitle && (
          <p className="text-xl text-gray-600 mb-8">
            {subtitle}
          </p>
        )}
        {call_to_action && (
          <div className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 cursor-pointer">
            {call_to_action}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
