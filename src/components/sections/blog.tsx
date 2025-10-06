import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Navigating Corporate Mergers: A 2024 Guide',
    excerpt: 'The landscape of corporate mergers is constantly evolving. Our latest guide provides crucial insights for a seamless transition.',
    image: PlaceHolderImages.find(img => img.id === 'blog-image-1'),
  },
  {
    id: 2,
    title: 'The Rise of Digital Assets in Estate Planning',
    excerpt: 'Discover how to incorporate cryptocurrencies and other digital assets into your estate plan for future-proof security.',
    image: PlaceHolderImages.find(img => img.id === 'blog-image-2'),
  },
  {
    id: 3,
    title: 'Intellectual Property in the AI Era',
    excerpt: 'Artificial intelligence presents new challenges and opportunities for IP law. Learn how to protect your innovations.',
    image: PlaceHolderImages.find(img => img.id === 'blog-image-3'),
  },
];

export function Blog() {
  return (
    <section id="blog" className="bg-secondary py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-4xl font-bold text-primary md:text-5xl">
            The Latest News And Blog From Northman
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Stay informed with our expert analysis on the latest legal trends and developments.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.id} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              {post.image && (
                <div className="aspect-h-2 aspect-w-3 relative">
                    <Image
                      src={post.image.imageUrl}
                      alt={post.image.description}
                      fill
                      className="object-cover"
                      data-ai-hint={post.image.imageHint}
                    />
                </div>
              )}
              <CardHeader>
                <CardTitle className="font-headline text-xl">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-foreground/80">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="text-accent p-0 hover:text-accent/80">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
