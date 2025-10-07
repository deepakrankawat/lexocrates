import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { blogPosts } from '@/lib/blog-data';

const featuredPosts = blogPosts.slice(0, 3);

export function Blog() {
  return (
    <section id="blog" className="bg-background text-foreground py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <p className="font-body font-bold text-accent uppercase tracking-wider">Blog & Articles</p>
            <h2 className="mt-4 font-headline text-4xl md:text-5xl font-bold leading-tight text-primary">
              From Our Blog
            </h2>
             <p className="mt-4 max-w-2xl mx-auto text-foreground/80">
                Stay informed with our latest legal insights, case studies, and firm updates.
            </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden group rounded-none">
                 <Link href={`/blog/${post.slug}`}>
                    {post.image && (
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
                    )}
                </Link>
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
      </div>
    </section>
  );
}
