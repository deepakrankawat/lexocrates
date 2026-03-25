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
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  ...props
}: AppImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const isFill = (props as { fill?: boolean }).fill === true;

  return (
    <div
      className={cn(
        'relative overflow-hidden bg-muted',
        isLoading ? 'animate-pulse' : '',
        isFill ? 'absolute inset-0 h-full w-full' : '',
        wrapperClassName
      )}
    >
      <Image
        className={cn(
          'transition-[scale,filter,opacity] duration-700 ease-in-out',
          isLoading ? 'scale-[1.02] blur-xl opacity-0' : 'scale-100 blur-0 opacity-100',
          className
        )}
        src={src}
        alt={alt}
        sizes={sizes}
        placeholder="blur"
        blurDataURL={shimmerPlaceholder(
          (props.width as number) || 700,
          (props.height as number) || 475
        )}
        onLoad={() => setIsLoading(false)}
        {...props}
      />
    </div>
  );
}
