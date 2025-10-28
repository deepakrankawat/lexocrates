'use client';

import { LottiePlayer } from '@/components/animations/lottie-player';
import WritingBlogPostAnimation from '../../../public/lottie/Writing_Blog_Post.json';

export function WritingBlogPostLottie() {
  return <LottiePlayer animationData={WritingBlogPostAnimation} />;
}
