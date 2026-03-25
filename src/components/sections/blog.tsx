'use client';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, User } from 'lucide-react';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-data';
import { motion } from 'framer-motion';
import { SlideIn } from '../animations/slide-in';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';

const featuredPosts = blogPosts.slice(0, 3);

export function Blog() {
  return (
    <section id="blog" className="bg-secondary/30 text-foreground py-14 sm:py-24 lg:py-32 rounded-[4rem] my-16 sm:my-20">
      <div className="mx-auto w-full px-6 sm:px-12 lg:px-24 max-w-[1800px]">
        <SlideIn className="text-center mb-20">
            <div className="inline-flex items-center gap-4 px-4 py-2 rounded-full bg-white/50 border border-black/5 backdrop-blur-xl mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <p className="font-lato font-black text-accent uppercase tracking-[0.3em] text-[10px]">Intellectual Capital</p>
            </div>
            <h2 className="font-lato text-6xl sm:text-7xl md:text-8xl font-black leading-tight text-primary mb-6 tracking-tight">
              Legal <span className="text-accent">Insights</span>
            </h2>
            <p className="text-sm sm:text-base text-foreground/60 font-medium max-w-2xl mx-auto">Staying ahead of the evolving global legal landscape through deep inquiry and technical precision.</p>
        </SlideIn>

        <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <motion.div 
              key={post.id}
              className="group h-full"
              whileHover={{ y: -12 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Card className="bg-background border-black/5 rounded-[2.5rem] overflow-hidden h-full flex flex-col shadow-sm hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-10 flex flex-col flex-grow">
                  <Badge variant="secondary" className="bg-accent/10 text-accent font-black uppercase tracking-widest text-[10px] px-4 py-1.5 rounded-full w-fit mb-8">
                    {post.category}
                  </Badge>
                  <Link href={`/blog/${post.slug}`} className="group/title">
                    <h4 className="font-opensans text-2xl font-bold text-primary mb-6 group-hover/title:text-accent transition-colors duration-300 leading-tight">
                      {post.title}
                    </h4>
                  </Link>
                  <div className="flex items-center gap-6 text-[11px] font-bold text-foreground/30 mb-8 font-lato uppercase tracking-widest">
                      <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-accent" />
                          <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-accent" />
                          <span>{post.date}</span>
                      </div>
                  </div>
                  <p className="text-foreground/60 text-sm sm:text-base leading-relaxed mb-10 flex-grow">
                    {post.excerpt}
                  </p>
                   <div className="mt-auto pt-8 border-t border-black/5">
                    <Button asChild variant="link" className="p-0 h-auto text-accent font-black text-base group-hover:translate-x-2 transition-transform">
                        <Link href={`/blog/${post.slug}`} className="flex items-center gap-2">
                          Read Full Insight <ArrowRight className="h-5 w-5" />
                        </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Button asChild size="lg" className="bg-primary text-white hover:bg-accent font-montserrat font-black text-sm uppercase tracking-[0.2em] px-12 py-8 rounded-full shadow-2xl transition-all duration-300">
             <Link href="/blog">Explore All Insights</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
