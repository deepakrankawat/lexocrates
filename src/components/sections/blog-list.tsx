'use client';

import { ArrowRight, User, Calendar } from 'lucide-react';
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
      <div className="mx-auto w-full px-6 max-w-[1400px]">
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
                  <Badge variant="secondary" className="bg-accent/10 text-accent font-black uppercase tracking-widest text-[10px] px-4 py-1.5 rounded-full w-fit mb-8">
                    {post.category}
                  </Badge>
                  <Link href={`/blog/${post.slug}`} className="group/title">
                    <h4 className="font-opensans text-2xl font-bold text-primary mb-6 group-hover/title:text-accent transition-colors duration-300 leading-tight">
                      {post.title}
                    </h4>
                  </Link>
                  <div className="flex items-center gap-6 text-xs font-semibold text-foreground/40 mb-8 font-lato">
                      <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                      </div>
                  </div>
                  <p className="text-foreground/60 text-base leading-relaxed mb-10 flex-grow">
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
        </StaggerFadeIn>
      </div>
    </section>
  );
}