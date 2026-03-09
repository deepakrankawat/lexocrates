
'use client';

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { blogPosts } from '@/lib/blog-data';
import { SlideIn } from '../animations/slide-in';
import { StaggerFadeIn } from '../animations/stagger-fade-in';
import { Badge } from '../ui/badge';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Button } from '../ui/button';

type Post = typeof blogPosts[0];

export function RelatedPosts({ posts }: { posts: Post[] }) {
  if (!posts || posts.length === 0) return null;

  return (
    <section id="related-posts" className="bg-secondary/30 text-foreground py-24 sm:py-32 rounded-[3rem] mt-24">
      <div className="mx-auto w-full px-6">
        <SlideIn className="text-center mb-16">
            <p className="font-lato font-black text-accent uppercase tracking-[0.3em] mb-4 text-sm">Keep Reading</p>
            <h2 className="font-lato text-4xl sm:text-5xl font-black leading-tight text-primary tracking-tight">
              Related Articles
            </h2>
        </SlideIn>

        <StaggerFadeIn className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div 
              key={post.id}
              className="group h-full"
            >
              <Card className="bg-background border-black/5 rounded-[2rem] overflow-hidden h-full flex flex-col shadow-sm hover:shadow-xl transition-all duration-500">
                <CardContent className="p-10 flex flex-col flex-grow">
                  <Badge variant="secondary" className="bg-accent/10 text-accent font-black uppercase tracking-widest text-[10px] px-4 py-1.5 rounded-full w-fit mb-6">
                    {post.category}
                  </Badge>
                  <Link href={`/blog/${post.slug}`} className="group/title">
                    <h4 className="font-opensans text-xl font-bold text-primary mb-6 group-hover/title:text-accent transition-colors duration-300 leading-tight">
                      {post.title}
                    </h4>
                  </Link>
                  <div className="flex items-center gap-4 text-xs font-semibold text-foreground/40 mb-8 font-lato">
                      <div className="flex items-center gap-2">
                          <User className="h-3.5 w-3.5" />
                          <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{post.date}</span>
                      </div>
                  </div>
                  <p className="text-foreground/60 text-base leading-relaxed mb-10 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                   <div className="mt-auto">
                    <Button asChild variant="link" className="p-0 h-auto text-accent font-black text-base group-hover:translate-x-2 transition-transform">
                        <Link href={`/blog/${post.slug}`} className="flex items-center gap-2">
                          Read Full Insight <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </StaggerFadeIn>
      </div>
    </section>
  );
}
