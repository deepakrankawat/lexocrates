'use client';

import Lottie from 'lottie-react';

type LottiePlayerProps = {
  animationData: any;
  className?: string;
};

export function LottiePlayer({ animationData, className }: LottiePlayerProps) {
  return <Lottie animationData={animationData} className={className} />;
}
