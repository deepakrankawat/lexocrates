
'use client';

import dynamic from 'next/dynamic';

const LottiePlayer = dynamic(() => import('@/components/animations/lottie-player').then(mod => mod.LottiePlayer), { ssr: false });
import WritingBlogPostAnimation from '../../../public/lottie/Writing_Blog_Post.json';

export function WritingBlogPostLottie() {
  return <LottiePlayer animationData={WritingBlogPostAnimation} />;
}
