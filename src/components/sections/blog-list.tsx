import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

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
    {
    id: 4,
    title: 'Understanding Real Estate Zoning Laws',
    excerpt: 'Key considerations for developers and property owners.',
    image: PlaceHolderImages.find(img => img.id === 'blog-image-4'),
    date: 'Sep 12, 2024',
    category: 'Real Estate Law'
  },
  {
    id: 5,
    title: 'Your Rights During a Criminal Investigation',
    excerpt: 'What you need to know to protect yourself.',
    image: PlaceHolderImages.find(img => img.id === 'gavel-book'),
    date: 'Sep 05, 2024',
    category: 'Criminal Defense'
  },
  {
    id: 6,
    title: 'The Future of Immigration Policy',
    excerpt: 'Analyzing the potential changes and their impact.',
    image: PlaceHolderImages.find(img => img.id === 'service-detail-2'),
    date: 'Aug 28, 2024',
    category: 'Immigration Law'
  },
];

export function BlogList() {
  return (
    <section id="blog" className="bg-background text-foreground py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
