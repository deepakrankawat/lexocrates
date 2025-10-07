import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

const blogPosts = [
  {
    id: 1,
    title: 'The Evolving Landscape of Corporate Law',
    excerpt: 'Explore how technology is reshaping corporate governance...',
    image: PlaceHolderImages.find(img => img.id === 'blog-image-1'),
    date: 'Oct 01, 2024',
    category: 'Corporate Law'
  },
  {
    id: 2,
    title: 'Navigating Complex Family Law Matters',
    excerpt: 'A compassionate approach to handling sensitive family law cases...',
    image: PlaceHolderImages.find(img => img.id === 'blog-image-2'),
    date: 'Sep 25, 2024',
    category: 'Family Law'
  },
  {
    id: 3,
    title: 'Intellectual Property in the AI Era',
    excerpt: 'Protecting your innovations in a rapidly changing landscape.',
    image: PlaceHolderImages.find(img => img.id === 'blog-image-3'),
    date: 'Sep 18, 2024',
    category: 'IP Law'
  },
];

export function Blog() {
  return (
    <section id="blog" className="bg-background text-foreground py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <p className="font-body font-bold text-accent uppercase tracking-wider">News & Articles</p>
            <h2 className="mt-4 font-headline text-4xl md:text-5xl font-bold leading-tight text-primary">
              From Our Blog
            </h2>
             <p className="mt-4 max-w-2xl mx-auto text-foreground/80">
                Stay informed with our latest legal insights, case studies, and firm news.
            </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden group">
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
              <CardContent className="p-6">
                <p className="text-sm text-foreground/60 mb-2">{post.date}</p>
                <Link href="#">
                    <h3 className="font-headline text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">{post.title}</h3>
                </Link>
                <p className="text-foreground/80 mb-4">{post.excerpt}</p>
                <Button variant="link" asChild className="p-0 text-accent font-bold">
                    <Link href="#">
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
