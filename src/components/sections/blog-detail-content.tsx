import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

type Post = typeof blogPosts[0];

const recommendedPosts = blogPosts.slice(0, 3);

export function BlogDetailContent({ post }: { post: Post }) {
  const image1 = PlaceHolderImages.find(img => img.id === 'service-detail-1');
  const image2 = PlaceHolderImages.find(img => img.id === 'service-detail-2');

  return (
    <section className="bg-background text-foreground py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
                 {post.image && (
                    <div className="relative h-[25rem] w-full mb-12">
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
                <div className="prose prose-lg max-w-none text-foreground/80" dangerouslySetInnerHTML={{ __html: post.fullContent }} />
                
                <div className="mt-16">
                    <h3 className="font-headline text-3xl font-bold text-primary mb-8">Related Case Studies</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="group">
                             {image1 && (
                                <div className="relative h-72 w-full mb-6">
                                    <Image
                                        src={image1.imageUrl}
                                        alt={image1.description}
                                        width={image1.width}
                                        height={image1.height}
                                        className="object-cover w-full h-full"
                                        data-ai-hint={image1.imageHint}
                                    />
                                </div>
                            )}
                            <h4 className="font-headline text-xl font-bold text-primary mb-2 group-hover:text-accent">Streamlining Contract Management for a Tech Giant</h4>
                            <p className="text-foreground/80">Discover how we reduced contract cycle times by 40% for a Fortune 500 company.</p>
                        </div>
                        <div className="group">
                             {image2 && (
                                <div className="relative h-72 w-full mb-6">
                                    <Image
                                        src={image2.imageUrl}
                                        alt={image2.description}
                                        width={image2.width}
                                        height={image2.height}
                                        className="object-cover w-full h-full"
                                        data-ai-hint={image2.imageHint}
                                    />
                                </div>
                            )}
                            <h4 className="font-headline text-xl font-bold text-primary mb-2 group-hover:text-accent">Global Compliance for a Financial Services Firm</h4>
                            <p className="text-foreground/80">Learn how we built a scalable compliance framework across 20+ jurisdictions.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
                <div className="sticky top-28 bg-secondary p-8 rounded-lg">
                    <h3 className="font-headline text-2xl font-bold text-primary mb-6">Recommended Reading</h3>
                    <ul className="space-y-6">
                        {recommendedPosts.map((recPost) => (
                        <li key={recPost.id}>
                            <Link href={`/blog/${recPost.slug}`} className="group flex items-start gap-4">
                                {recPost.image && (
                                    <div className="relative h-20 w-20 flex-shrink-0">
                                        <Image
                                            src={recPost.image.imageUrl}
                                            alt={recPost.image.description}
                                            width={recPost.image.width}
                                            height={recPost.image.height}
                                            className="object-cover w-full h-full"
                                            data-ai-hint={recPost.image.imageHint}
                                        />
                                    </div>
                                )}
                                <div>
                                    <h4 className="font-bold text-primary group-hover:text-accent leading-tight">{recPost.title}</h4>
                                    <p className="text-sm text-foreground/60 mt-1">{recPost.date}</p>
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
    