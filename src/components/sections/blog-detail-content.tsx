'use client';

import Link from 'next/link';
import { blogPosts } from '@/lib/blog-data';
import { ArrowRight, BookOpen } from 'lucide-react';
import { SlideIn } from '../animations/slide-in';

type Post = typeof blogPosts[0];

const recommendedPosts = blogPosts.slice(0, 3);

export function BlogDetailContent({ post }: { post: Post }) {
  return (
    <section className="bg-background text-foreground py-20 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Main content */}
            <div className="lg:col-span-8">
                <SlideIn direction="up">
                  <div className="prose prose-xl max-w-none prose-headings:font-black prose-headings:text-primary prose-p:text-foreground/70 prose-p:leading-relaxed prose-li:text-foreground/70" 
                       dangerouslySetInnerHTML={{ __html: post.fullContent }} />
                </SlideIn>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
                <div className="sticky top-32 space-y-10">
                    <div className="bg-secondary/30 p-10 rounded-[2.5rem] border border-black/5">
                        <div className="flex items-center gap-4 mb-8">
                          <BookOpen className="w-6 h-6 text-accent" />
                          <h3 className="font-lato text-xl font-black text-primary tracking-tight">Recommended Reading</h3>
                        </div>
                        <ul className="space-y-8">
                            {recommendedPosts.map((recPost) => (
                            <li key={recPost.id}>
                                <Link href={`/blog/${recPost.slug}`} className="group block">
                                    <p className="text-[10px] font-black text-accent uppercase tracking-widest mb-2">{recPost.category}</p>
                                    <h4 className="font-opensans font-bold text-primary group-hover:text-accent transition-colors leading-tight mb-4">
                                      {recPost.title}
                                    </h4>
                                    <div className="flex items-center gap-2 text-accent font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1">
                                      Read Post <ArrowRight className="w-3 h-3" />
                                    </div>
                                </Link>
                            </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-primary p-10 rounded-[2.5rem] text-white overflow-hidden relative group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl -mr-16 -mt-16" />
                        <h4 className="font-montserrat font-black text-2xl mb-6 relative z-10">Need Expert Counsel?</h4>
                        <p className="text-white/60 font-medium mb-8 text-sm relative z-10">Reach out to discuss how Lexocrates can transform your legal workflow with elite precision.</p>
                        <Link 
                          href="/contact" 
                          className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground rounded-full font-black text-xs uppercase tracking-widest hover:bg-white hover:text-primary transition-all relative z-10"
                        >
                          Contact Us <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </aside>
        </div>
    </section>
  );
}