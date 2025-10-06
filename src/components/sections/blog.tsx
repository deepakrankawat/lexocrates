import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'The Evolving Landscape of Corporate Law',
    excerpt: 'Explore how technology is reshaping corporate governance and mergers.',
    image: PlaceHolderImages.find(img => img.id === 'blog-image-1'),
  },
  {
    id: 2,
    title: 'Navigating Complex Family Law Matters',
    excerpt: 'A compassionate approach to handling sensitive family law cases.',
    image: PlaceHolderImages.find(img => img.id === 'blog-image-2'),
  },
  {
    id: 3,
    title: 'Intellectual Property in the AI Era',
    excerpt: 'Protecting your innovations in a rapidly changing technological landscape.',
    image: PlaceHolderImages.find(img => img.id === 'blog-image-3'),
  },
  {
    id: 4,
    title: 'Real Estate Law: Trends and Predictions',
    excerpt: 'Key insights into the future of the real estate market and legalities.',
    image: PlaceHolderImages.find(img => img.id === 'blog-image-4'),
  },
];

export function Blog() {
  return (
    <section id="blog" className="bg-background text-foreground py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h3 className="text-accent font-medium mb-2">News</h3>
            <h2 className="font-headline text-5xl font-bold leading-tight text-primary">
              The Latest News
              <br />
              And Blog From Lexocrates
            </h2>
          </div>
          <Button variant="link" asChild className="text-foreground/80 hover:text-accent">
            <Link href="#">
              See more <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-12 md:grid-cols-2">
          {blogPosts.map((post) => (
            <div key={post.id} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {post.image && (
                <div className="relative h-64 w-full">
                    <Image
                      src={post.image.imageUrl}
                      alt={post.image.description}
                      width={post.image.width}
                      height={post.image.height}
                      className="object-cover w-full h-full"
                      data-ai-hint={post.image.imageHint}
                    />
                </div>
              )}
              <div className="flex flex-col gap-4">
                <h3 className="font-headline text-3xl font-bold text-primary">{post.title}</h3>
                <div className="w-16 h-px bg-accent"></div>
                <p className="text-foreground/80">{post.excerpt}</p>
                <Button variant="secondary" className="self-start">
                  Read now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
