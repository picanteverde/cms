import { ComponentProps } from '../types';

interface FooterProps extends ComponentProps {
  background?: string;
  mail?: string;
  text?: string;
}

export function Footer({ background = 'bg-gray-100', mail, text, children }: FooterProps) {
  return (
    <footer className={`${background} py-8 px-4`}>
      <div className="max-w-6xl mx-auto text-center">
        {mail && (
          <div className="mb-2">
            <a href={`mailto:${mail}`} className="text-blue-600 hover:underline">
              {mail}
            </a>
          </div>
        )}
        {text && (
          <div className="text-sm text-gray-600">
            {text}
          </div>
        )}
        {children}
      </div>
    </footer>
  );
}
