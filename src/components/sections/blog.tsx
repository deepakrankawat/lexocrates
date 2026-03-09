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
    <section id="blog" className="bg-secondary/20 text-foreground py-16 sm:py-24">
      <div className="mx-auto w-full px-6 sm:px-12 lg:px-24 max-w-[1800px]">
        <SlideIn className="text-center mb-16">
            <p className="font-lato font-black text-accent uppercase tracking-[0.3em] mb-4 text-sm">Our Insights</p>
            <h2 className="font-lato text-4xl sm:text-6xl font-black leading-tight text-primary mb-6 tracking-tight">
              Legal Perspectives
            </h2>
            <p className="text-xl text-foreground/60 font-medium">Staying ahead of the evolving legal landscape.</p>
        </SlideIn>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <motion.div 
              key={post.id}
              className="group h-full"
              whileHover={{ y: -12 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Card className="bg-background border-black/5 rounded-3xl overflow-hidden h-full flex flex-col shadow-sm hover:shadow-2xl transition-shadow duration-500">
                <CardContent className="p-10 flex flex-col flex-grow">
                  <Badge variant="secondary" className="bg-accent/10 text-accent font-black uppercase tracking-widest text-[10px] px-4 py-1.5 rounded-full w-fit mb-6">
                    {post.category}
                  </Badge>
                  <Link href={`/blog/${post.slug}`} className="group/title">
                    <h4 className="font-opensans text-2xl font-bold text-primary mb-6 group-hover/title:text-accent transition-colors duration-300 leading-tight">
                      {post.title}
                    </h4>
                  </Link>
                  <div className="flex items-center gap-6 text-sm font-semibold text-foreground/40 mb-8 font-lato">
                      <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                      </div>
                  </div>
                  <p className="text-foreground/60 text-lg leading-relaxed mb-10 flex-grow">
                    {post.excerpt}
                  </p>
                   <div className="mt-auto">
                    <Button asChild variant="link" className="p-0 h-auto text-accent font-black text-lg group-hover:translate-x-2 transition-transform">
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
      </div>
    </section>
  );
}
