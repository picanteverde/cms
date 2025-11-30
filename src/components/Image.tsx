import { ComponentProps } from '../types';

interface ImageProps extends ComponentProps {
  image?: string;
  src?: string;
  alt?: string;
  className?: string;
  width?: string | number;
  height?: string | number;
}

export function Image({
  image,
  src,
  alt = '',
  className = '',
  width,
  height,
}: ImageProps) {
  const imageSrc = image || src;

  if (!imageSrc) {
    return null;
  }

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      width={width}
      height={height}
    />
  );
}
