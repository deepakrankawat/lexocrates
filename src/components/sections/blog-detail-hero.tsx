'use client';

import { blogPosts } from '@/lib/blog-data';
import { User, Calendar, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { FadeIn } from '../animations/fade-in';
import { SlideIn } from '../animations/slide-in';

type Post = typeof blogPosts[0];

export function BlogDetailHero({ post }: { post: Post }) {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-primary pt-10 pb-16 lg:pt-14">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(184,134,11,0.15)_0%,transparent_50%)]" />
      </div>

      <div className="relative z-10 container-balanced fhd:px-32">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn delay={0.2}>
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-accent font-black uppercase tracking-widest text-xs mb-12 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Insights
            </Link>
          </FadeIn>
          
          <SlideIn direction="up" delay={0.4}>
            <div className="inline-flex items-center gap-4 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-8">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <p className="font-lato font-black text-accent uppercase tracking-[0.4em] text-[10px]">{post.category}</p>
            </div>
            <h1 className="font-montserrat text-4xl sm:text-6xl md:text-7xl fhd:text-8xl font-black leading-tight text-white mb-10 tracking-tighter">
              {post.title}
            </h1>
          </SlideIn>

          <FadeIn delay={0.6}>
            <div className="flex flex-wrap justify-center items-center gap-10 text-white/50 font-bold uppercase tracking-widest text-[11px]">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                        <User className="h-4 w-4 text-accent" />
                    </div>
                    <span>By {post.author}</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                        <Calendar className="h-4 w-4 text-accent" />
                    </div>
                    <span>{post.date}</span>
                </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
