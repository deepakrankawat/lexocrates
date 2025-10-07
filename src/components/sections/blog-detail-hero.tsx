import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { blogPosts } from '@/lib/blog-data';

type Post = typeof blogPosts[0];

export function BlogDetailHero({ post }: { post: Post }) {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background-lady-justice');

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
        <p className="mt-4 text-lg text-primary-foreground/80">
            {post.date}
        </p>
      </div>
    </section>
  );
}
