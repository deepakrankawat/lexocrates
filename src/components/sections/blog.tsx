import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: '7 Cases Have Been Success',
    excerpt: 'Lorem ipsum dolor sit amet consecter Commodo pulvinar molestie pellentesque urna libero',
    image: PlaceHolderImages.find(img => img.id === 'blog-image-1'),
  },
  {
    id: 2,
    title: '7 Cases Have Been Success',
    excerpt: 'Lorem ipsum dolor sit amet consecter Commodo pulvinar molestie pellentesque urna libero',
    image: PlaceHolderImages.find(img => img.id === 'blog-image-2'),
  },
  {
    id: 3,
    title: '7 Cases Have Been Success',
    excerpt: 'Lorem ipsum dolor sit amet consecter Commodo pulvinar molestie pellentesque urna libero',
    image: PlaceHolderImages.find(img => img.id === 'blog-image-3'),
  },
  {
    id: 4,
    title: '7 Cases Have Been Success',
    excerpt: 'Lorem ipsum dolor sit amet consecter Commodo pulvinar molestie pellentesque urna libero',
    image: PlaceHolderImages.find(img => img.id === 'about-us-lady-justice'),
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
              And Blog From Northman
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
                      fill
                      className="object-cover"
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
