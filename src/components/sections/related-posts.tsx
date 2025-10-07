import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { blogPosts } from '@/lib/blog-data';

type Post = typeof blogPosts[0];

export function RelatedPosts({ posts }: { posts: Post[] }) {
  return (
    <section id="related-posts" className="bg-secondary text-foreground py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="mt-4 font-headline text-4xl md:text-5xl font-bold leading-tight text-primary">
              Related News
            </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden group">
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
                        </div>
                    </Link>
                )}
              <CardContent className="p-6 text-center">
                <Link href={`/blog/${post.slug}`}>
                    <h3 className="font-headline text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">{post.title}</h3>
                </Link>
                <p className="text-foreground/80 mb-4">{post.excerpt}</p>
                <Button variant="link" asChild className="p-0 text-accent font-bold">
                    <Link href={`/blog/${post.slug}`}>
                    Read Now
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
