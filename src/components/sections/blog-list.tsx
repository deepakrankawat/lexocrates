
'use client';
import { ArrowRight, User, Calendar } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { blogPosts } from '@/lib/blog-data';
import { AppImage } from '../ui/app-image';
import { motion } from 'framer-motion';

export function BlogList() {
  return (
    <section id="blog" className="bg-background text-foreground py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <motion.div 
              key={post.id}
              className="group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={`/blog/${post.slug}`} className="block relative h-96 w-full overflow-hidden">
                {post.image && (
                  <AppImage
                    src={post.image.imageUrl}
                    alt={post.image.description}
                    fill
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={post.image.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-bold uppercase px-3 py-1 rounded-full">{post.category}</div>
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
                    <div className="text-accent font-bold flex items-center">
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="mt-16">
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                    <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                    <PaginationLink href="#" isActive>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                    <PaginationLink href="#">
                        2
                    </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                    <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                    <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
      </div>
    </section>
  );
}
