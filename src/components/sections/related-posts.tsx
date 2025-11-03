
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { blogPosts } from '@/lib/blog-data';
import { AppImage } from '../ui/app-image';

type Post = typeof blogPosts[0];

export function RelatedPosts({ posts }: { posts: Post[] }) {
  return (
    <section id="related-posts" className="bg-secondary text-foreground py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="mt-4 font-lato text-3xl md:text-4xl font-bold leading-tight text-primary">
              Related Articles
            </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden group bg-card shadow-sm rounded-none flex flex-col">
              <CardContent className="p-6 flex flex-col flex-grow">
                <Link href={`/blog/${post.slug}`}>
                    <h4 className="font-opensans text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors">{post.title}</h4>
                </Link>
                <p className="text-foreground/80 mb-4 flex-grow">{post.excerpt}</p>
                <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 mt-auto font-lato font-bold">
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

    