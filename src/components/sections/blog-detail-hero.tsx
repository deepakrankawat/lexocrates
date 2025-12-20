
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { blogPosts } from '@/lib/blog-data';
import { User, Calendar } from 'lucide-react';

type Post = typeof blogPosts[0];

export function BlogDetailHero({ post }: { post: Post }) {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-blog');

  return (
    <section className="relative text-white pt-32 pb-12 sm:pt-36 sm:pb-16">
        {heroImage && (
            <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                width={heroImage.width}
                height={heroImage.height}
                sizes="100vw"
                className="object-cover absolute inset-0 w-full h-full"
                priority
                data-ai-hint={heroImage.imageHint}
            />
        )}
        <div className="absolute inset-0 bg-black/50" />
      <div className="mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <p className="font-lato font-bold text-accent uppercase tracking-wider">{post.category}</p>
        <h1 className="mt-4 font-montserrat text-5xl md:text-6xl font-bold">{post.title}</h1>
        <div className="mt-6 flex justify-center items-center gap-6 text-lg text-white/80">
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
