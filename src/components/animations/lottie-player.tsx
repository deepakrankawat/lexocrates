
'use client';

import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

type LottiePlayerProps = {
  animationData: any;
  className?: string;
};

export function LottiePlayer({ animationData, className }: LottiePlayerProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <Lottie animationData={animationData} className={className} />;
}
