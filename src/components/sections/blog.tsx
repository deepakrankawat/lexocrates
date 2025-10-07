import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-data';

const featuredPosts = blogPosts.slice(0, 3);

export function Blog() {
  return (
    <section id="blog" className="bg-secondary text-foreground py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <p className="font-body font-bold text-accent uppercase tracking-wider">Our Blog</p>
            <h2 className="mt-4 font-headline text-4xl md:text-5xl font-bold leading-tight text-primary">
              The Latest News And Blog From Northman
            </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <div key={post.id} className="group">
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
                        </div>
                    )}
                </Link>
              <div className="p-6 bg-background">
                <p className="text-sm text-foreground/60 mb-2">{post.date}</p>
                <Link href={`/blog/${post.slug}`}>
                    <h3 className="font-headline text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">{post.title}</h3>
                </Link>
                <Button variant="link" asChild className="p-0 text-accent font-bold">
                    <Link href={`/blog/${post.slug}`}>
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
