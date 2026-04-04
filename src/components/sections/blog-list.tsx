
'use client';

import { ArrowRight, User, Calendar, Clock, BookText } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { blogPosts } from '@/lib/blog-data';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { StaggerFadeIn } from '../animations/stagger-fade-in';

export function BlogList() {
  return (
    <section id="blog-list" className="bg-background text-foreground py-20 sm:py-32">
      <div className="container-balanced">
        <StaggerFadeIn className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <motion.div 
              key={post.id}
              className="group h-full"
              whileHover={{ y: -12 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Card className="bg-secondary/20 border-black/5 rounded-[2.5rem] overflow-hidden h-full flex flex-col shadow-sm hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-10 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-8">
                    <Badge variant="secondary" className="bg-accent/10 text-accent font-black uppercase tracking-widest text-[10px] px-4 py-1.5 rounded-full w-fit">
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-2 text-[10px] font-black text-foreground/30 uppercase tracking-widest">
                      <Clock className="h-3 w-3" />
                      <span>{post.readingTime}</span>
                    </div>
                  </div>

                  <Link href={`/blog/${post.slug}`} className="group/title">
                    <h4 className="font-opensans text-3xl font-bold text-primary mb-6 group-hover/title:text-accent transition-colors duration-300 leading-tight">
                      {post.title}
                    </h4>
                  </Link>

                  <div className="flex items-center gap-6 text-[10px] font-bold text-foreground/40 mb-8 font-lato uppercase tracking-[0.2em]">
                      <div className="flex items-center gap-2">
                          <User className="h-3.5 w-3.5 text-accent" />
                          <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                          <Calendar className="h-3.5 w-3.5 text-accent" />
                          <span>{post.date}</span>
                      </div>
                  </div>

                  <p className="text-foreground/60 text-sm sm:text-base leading-relaxed mb-10 flex-grow border-l-2 border-accent/10 pl-6 italic">
                    {post.excerpt}
                  </p>

                   <div className="mt-auto pt-8 border-t border-black/5 flex items-center justify-between">
                    <Button asChild variant="link" className="p-0 h-auto text-accent font-black text-base group-hover:translate-x-2 transition-transform">
                        <Link href={`/blog/${post.slug}`} className="flex items-center gap-2">
                          Explore Deep Insight <ArrowRight className="h-5 w-5" />
                        </Link>
                    </Button>
                    <div className="p-2 bg-accent/5 rounded-lg group-hover:bg-accent group-hover:text-white transition-colors">
                      <BookText className="h-4 w-4" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </StaggerFadeIn>
      </div>
    </section>
  );
}
