import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { blogPosts } from '@/lib/blog-data';

export function BlogList() {
  return (
    <section id="blog" className="bg-background text-foreground py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden group rounded-none">
                {post.image && (
                    <Link href={`/blog/${post.slug}`}>
                        <div className="relative h-64 w-full">
                            <Image
                            src={post.image.imageUrl}
                            alt={post.image.description}
                            fill
                            className="object-cover"
                            data-ai-hint={post.image.imageHint}
                            />
                            <div className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-bold uppercase px-3 py-1 rounded-full">{post.category}</div>
                        </div>
                    </Link>
                )}
              <CardContent className="p-6">
                <p className="text-sm text-foreground/60 mb-2">{post.date}</p>
                <Link href={`/blog/${post.slug}`}>
                    <h3 className="font-headline text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">{post.title}</h3>
                </Link>
                <p className="text-foreground/80 mb-4">{post.excerpt}</p>
                <Button variant="link" asChild className="p-0 text-accent font-bold">
                    <Link href={`/blog/${post.slug}`}>
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-16">
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                    <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                    <PaginationLink href="#" isActive>
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
