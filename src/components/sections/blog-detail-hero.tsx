import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { blogPosts } from '@/lib/blog-data';
import { User, Calendar } from 'lucide-react';

type Post = typeof blogPosts[0];

export function BlogDetailHero({ post }: { post: Post }) {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-blog');

  return (
    <section className="relative bg-primary text-primary-foreground pt-36 pb-20 sm:pt-48 sm:pb-32">
        {heroImage && (
            <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover opacity-10"
                priority
                data-ai-hint={heroImage.imageHint}
            />
        )}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <p className="font-body font-bold text-accent uppercase tracking-wider">{post.category}</p>
        <h1 className="mt-4 font-headline text-5xl md:text-6xl font-bold">{post.title}</h1>
        <div className="mt-6 flex justify-center items-center gap-6 text-lg text-primary-foreground/80">
            <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{post.date}</span>
            </div>
        </div>
      </div>
    </section>
  );
}
    