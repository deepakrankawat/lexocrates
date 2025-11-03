'use client';

import { LottiePlayer } from '@/components/animations/lottie-player';
import LawBalanceAnimation from '../../../public/lottie/law-balance.json';

export function LawBalanceLottie() {
  return <LottiePlayer animationData={LawBalanceAnimation} />;
}
