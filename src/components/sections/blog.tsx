
'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, User } from 'lucide-react';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-data';
import { StaggerFadeIn } from '@/components/animations/stagger-fade-in';
import { motion } from 'framer-motion';
import { SlideIn } from '../animations/slide-in';
import { AppImage } from '../ui/app-image';

const featuredPosts = blogPosts.slice(0, 3);

export function Blog() {
  return (
    <section id="blog" className="bg-background text-foreground py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SlideIn className="text-center mb-16">
            <p className="font-body font-bold text-accent uppercase tracking-wider">Our Insights</p>
            <h2 className="mt-4 font-headline text-4xl md:text-5xl font-bold leading-tight text-primary">
              Latest News and Analysis from Lexocrates
            </h2>
        </SlideIn>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <motion.div 
              key={post.id}
              className="group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
                 <Link href={`/blog/${post.slug}`} className="block relative h-96 w-full overflow-hidden border-0">
                    {post.image && (
                        <AppImage
                        src={post.image.imageUrl}
                        alt={post.image.description}
                        width={post.image.width}
                        height={post.image.height}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={post.image.imageHint}
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                        <div className="flex items-center gap-4 text-sm text-white/80 mb-2">
                        <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{post.date}</span>
                        </div>
                        </div>
                        <h3 className="font-headline text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">{post.title}</h3>
                    </div>
                </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
