
'use client';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, User } from 'lucide-react';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-data';
import { motion } from 'framer-motion';
import { SlideIn } from '../animations/slide-in';
import { AppImage } from '../ui/app-image';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';

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
              className="group h-full"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                {post.image && (
                  <Link href={`/blog/${post.slug}`}>
                    <div className="relative h-64 w-full overflow-hidden">
                      <AppImage
                        src={post.image.imageUrl}
                        alt={post.image.description}
                        fill
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={post.image.imageHint}
                      />
                    </div>
                  </Link>
                )}
                <CardContent className="p-6 flex flex-col flex-grow">
                  <Badge variant="secondary" className="bg-accent/10 text-accent font-bold uppercase w-fit mb-3">{post.category}</Badge>
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="font-headline text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">{post.title}</h3>
                  </Link>
                  <div className="flex items-center gap-4 text-sm text-foreground/60 mb-4">
                      <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                      </div>
                  </div>
                  <p className="text-foreground/80 mb-4 flex-grow text-sm">{post.excerpt}</p>
                   <div className="mt-auto">
                    <Button asChild variant="link" className="p-0 h-auto text-accent">
                        <Link href={`/blog/${post.slug}`}>
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
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
