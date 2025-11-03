
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';
import { AppImage } from '../ui/app-image';

type Post = typeof blogPosts[0];

const recommendedPosts = blogPosts.slice(0, 3);

export function BlogDetailContent({ post }: { post: Post }) {
  const image1 = PlaceHolderImages.find(img => img.id === 'service-detail-1');
  const image2 = PlaceHolderImages.find(img => img.id === 'service-detail-2');

  return (
    <section className="bg-background text-foreground py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
                <div className="prose prose-lg max-w-none text-foreground/80" dangerouslySetInnerHTML={{ __html: post.fullContent }} />
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
                <div className="sticky top-28 bg-secondary p-8 rounded-lg">
                    <h3 className="font-roboto text-2xl font-medium text-primary mb-6">Recommended Reading</h3>
                    <ul className="space-y-6">
                        {recommendedPosts.map((recPost) => (
                        <li key={recPost.id}>
                            <Link href={`/blog/${recPost.slug}`} className="group flex items-start gap-4">
                                <div>
                                    <h4 className="font-opensans font-semibold text-primary group-hover:text-accent leading-tight">{recPost.title}</h4>
                                    <p className="text-sm text-foreground/60 mt-1 font-lato">{recPost.date}</p>
                                </div>
                            </Link>
                        </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </div>
      </div>
    </section>
  );
}
