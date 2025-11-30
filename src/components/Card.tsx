import { ComponentProps } from '../types';

interface CardProps extends ComponentProps {
  className?: string;
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
}

export function Card({ className = '', icon, title, description, children }: CardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`.trim()}>
      {icon && <div className="mb-4">{icon}</div>}
      {title && <div className="mb-2">{title}</div>}
      {description && <div>{description}</div>}
      {children}
    </div>
  );
}
