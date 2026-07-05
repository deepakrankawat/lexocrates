'use client';

import type { BlogPost } from '@/lib/blog-types';
import Image from 'next/image';
import { User, Calendar, ArrowLeft, Clock, Star } from 'lucide-react';
import Link from 'next/link';
import { FadeIn } from '../animations/fade-in';
import { SlideIn } from '../animations/slide-in';

export function BlogDetailHero({ post }: { post: BlogPost }) {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-primary pt-10 pb-16 lg:pt-14">
      <div className="absolute inset-0 z-0 overflow-hidden">
        {post.metaImage && (
          <Image
            src={post.metaImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/90 to-primary" />
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
              {post.featured && (
                <Star className="h-3.5 w-3.5 fill-accent text-accent" aria-label="Featured post" />
              )}
            </div>
            <h1 className="font-montserrat text-4xl sm:text-6xl md:text-7xl fhd:text-8xl font-black leading-tight text-white mb-10 tracking-tighter">
              {post.title}
            </h1>
          </SlideIn>

          <FadeIn delay={0.6}>
            <div className="flex flex-wrap justify-center items-center gap-10 text-white/50 font-bold uppercase tracking-widest text-[11px]">
                <div className="flex items-center gap-3">
                    <div className="relative w-8 h-8 overflow-hidden rounded-full bg-accent/20 flex items-center justify-center">
                        {post.authorAvatar ? (
                          <Image
                            src={post.authorAvatar}
                            alt={post.author}
                            fill
                            sizes="32px"
                            className="object-cover"
                          />
                        ) : (
                          <User className="h-4 w-4 text-accent" />
                        )}
                    </div>
                    <span>By {post.author}</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                        <Calendar className="h-4 w-4 text-accent" />
                    </div>
                    <time dateTime={post.publishedOn}>{post.date}</time>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                        <Clock className="h-4 w-4 text-accent" />
                    </div>
                    <span>{post.readingTime}</span>
                </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
