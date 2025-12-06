
'use client';
import dynamic from 'next/dynamic';

const LottiePlayer = dynamic(() => import('@/components/animations/lottie-player').then(mod => mod.LottiePlayer), { ssr: false });

import LawBalanceAnimation from '../../../public/lottie/law-balance.json';

export function LawBalanceLottie() {
  return <LottiePlayer animationData={LawBalanceAnimation} />;
}
