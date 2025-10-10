
'use client';

import Image, { type ImageProps } from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { shimmerPlaceholder } from '@/lib/shimmer';

type AppImageProps = ImageProps & {
  wrapperClassName?: string;
};

export function AppImage({
  alt,
  src,
  className,
  wrapperClassName,
  ...props
}: AppImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={cn(
        'relative overflow-hidden',
        isLoading ? 'animate-pulse' : '',
        wrapperClassName
      )}
    >
      <Image
        className={cn(
          'transition-[scale,filter] duration-700',
          isLoading ? 'scale-[1.02] blur-xl grayscale' : 'scale-100 blur-0 grayscale-0',
          className
        )}
        src={src}
        alt={alt}
        placeholder={shimmerPlaceholder(props.width as number, props.height as number)}
        onLoad={() => setIsLoading(false)}
        {...props}
      />
    </div>
  );
}
