
'use client';

import Link from 'next/link';
import { blogPosts } from '@/lib/blog-data';
import { ArrowRight, BookOpen, CheckCircle2, ChevronRight } from 'lucide-react';
import { SlideIn } from '../animations/slide-in';

type Post = typeof blogPosts[0];

export function BlogDetailContent({ post }: { post: Post }) {
  return (
    <section className="bg-background text-foreground py-20 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Main content */}
            <div className="lg:col-span-8">
                <SlideIn direction="up">
                  {/* Technical Overview Intro */}
                  <div className="bg-secondary/30 p-8 sm:p-12 rounded-[2.5rem] border border-black/5 mb-16 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -mr-32 -mt-32 transition-transform group-hover:scale-110" />
                    <div className="relative z-10">
                      <h3 className="text-[10px] font-black text-accent uppercase tracking-[0.4em] mb-6 flex items-center gap-3">
                        <span className="w-8 h-px bg-accent/30" /> Technical Resource Overview
                      </h3>
                      <p className="text-xl sm:text-2xl text-primary font-bold leading-relaxed mb-8">
                        This strategic analysis explores the technical architecture and jurisdictional implications of {post.title.toLowerCase()}.
                      </p>
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                            <CheckCircle2 className="w-5 h-5 text-accent" />
                          </div>
                          <span className="text-sm font-bold text-primary/70">Certified LPO Standards</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                            <CheckCircle2 className="w-5 h-5 text-accent" />
                          </div>
                          <span className="text-sm font-bold text-primary/70">Expert Legal Oversight</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Deep Explanation Content */}
                  <div className="prose prose-xl max-w-none 
                    prose-headings:font-black prose-headings:text-primary prose-headings:tracking-tight
                    prose-p:text-foreground/70 prose-p:leading-relaxed 
                    prose-li:text-foreground/70
                    prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6
                    prose-strong:text-primary" 
                    dangerouslySetInnerHTML={{ __html: post.fullContent }} />
                </SlideIn>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
                <div className="sticky top-32 space-y-10">
                    {/* Key Takeaways Card */}
                    {post.keyTakeaways && (
                      <div className="bg-primary text-white p-10 rounded-[3.5rem] shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl -mr-16 -mt-16" />
                        <h3 className="font-montserrat text-2xl font-black mb-8 flex items-center gap-4">
                          <BookOpen className="w-6 h-6 text-accent" /> Key Takeaways
                        </h3>
                        <ul className="space-y-6">
                          {post.keyTakeaways.map((takeaway, i) => (
                            <li key={i} className="flex items-start gap-4 group">
                              <div className="mt-1.5 p-1 bg-accent/20 rounded-md group-hover:bg-accent transition-colors">
                                <ChevronRight className="w-3 h-3 text-accent group-hover:text-white" />
                              </div>
                              <p className="text-sm sm:text-base text-white/70 font-medium leading-relaxed group-hover:text-white transition-colors">
                                {takeaway}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="bg-secondary/30 p-10 rounded-[2.5rem] border border-black/5">
                        <div className="flex items-center gap-4 mb-8">
                          <h3 className="font-lato text-xl font-black text-primary tracking-tight uppercase tracking-widest text-xs">Recommended Deep Dives</h3>
                        </div>
                        <ul className="space-y-8">
                            {blogPosts.filter(p => p.id !== post.id).slice(0, 3).map((recPost) => (
                            <li key={recPost.id}>
                                <Link href={`/blog/${recPost.slug}`} className="group block">
                                    <p className="text-[9px] font-black text-accent uppercase tracking-widest mb-2">{recPost.category}</p>
                                    <h4 className="font-opensans font-bold text-primary group-hover:text-accent transition-colors leading-tight mb-4 text-base">
                                      {recPost.title}
                                    </h4>
                                    <div className="flex items-center gap-2 text-accent font-black text-[9px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1">
                                      Read Analysis <ArrowRight className="w-3 h-3" />
                                    </div>
                                </Link>
                            </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-accent p-10 rounded-[3rem] text-primary-foreground overflow-hidden relative group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16" />
                        <h4 className="font-montserrat font-black text-2xl mb-6 relative z-10">Strategic Inquiry</h4>
                        <p className="text-primary-foreground/70 font-medium mb-8 text-sm relative z-10">Connect with our leadership team to discuss the specific operational implications for your firm.</p>
                        <Link 
                          href="/contact" 
                          className="inline-flex items-center justify-center w-full gap-3 px-8 py-5 bg-primary text-white rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-primary transition-all relative z-10 shadow-xl"
                        >
                          Request Strategy Call
                        </Link>
                    </div>
                </div>
            </aside>
        </div>
    </section>
  );
}
