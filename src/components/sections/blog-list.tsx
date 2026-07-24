'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  BookText,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  RotateCcw,
  Search,
  SlidersHorizontal,
  Star,
  User,
} from 'lucide-react';
import { motion } from 'framer-motion';
import type { BlogPost } from '@/lib/blog-types';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { StaggerFadeIn } from '@/components/animations/stagger-fade-in';

const POSTS_PER_PAGE = 9;

type SortOption =
  | 'recommended'
  | 'newest'
  | 'oldest'
  | 'shortest'
  | 'longest';

export function BlogList({ posts }: { posts: BlogPost[] }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [author, setAuthor] = useState('all');
  const [sort, setSort] = useState<SortOption>('recommended');
  const [page, setPage] = useState(1);

  const categories = useMemo(
    () => Array.from(new Set(posts.map((post) => post.category))).sort(),
    [posts]
  );
  const authors = useMemo(
    () => Array.from(new Set(posts.map((post) => post.author))).sort(),
    [posts]
  );

  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const result = posts.filter((post) => {
      const matchesQuery =
        !normalizedQuery ||
        [post.title, post.excerpt, post.category, post.author].some((value) =>
          value.toLowerCase().includes(normalizedQuery)
        );
      const matchesCategory =
        category === 'all' || post.category === category;
      const matchesAuthor = author === 'all' || post.author === author;

      return matchesQuery && matchesCategory && matchesAuthor;
    });

    return [...result].sort((left, right) => {
      if (sort === 'oldest') {
        return left.publishedOn.localeCompare(right.publishedOn);
      }
      if (sort === 'shortest') {
        return left.readingMinutes - right.readingMinutes;
      }
      if (sort === 'longest') {
        return right.readingMinutes - left.readingMinutes;
      }
      if (sort === 'recommended') {
        return (
          Number(right.featured) - Number(left.featured) ||
          right.publishedOn.localeCompare(left.publishedOn)
        );
      }
      return right.publishedOn.localeCompare(left.publishedOn);
    });
  }, [author, category, posts, query, sort]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  );
  const safePage = Math.min(page, totalPages);
  const firstResult = (safePage - 1) * POSTS_PER_PAGE;
  const visiblePosts = filteredPosts.slice(
    firstResult,
    firstResult + POSTS_PER_PAGE
  );
  const hasActiveFilters =
    Boolean(query) || category !== 'all' || author !== 'all';

  function resetFilters() {
    setQuery('');
    setCategory('all');
    setAuthor('all');
    setSort('recommended');
    setPage(1);
  }

  return (
    <section
      id="blog-list"
      className="bg-background py-20 text-foreground sm:py-32"
    >
      <div className="container-balanced">
        <div className="mb-14 rounded-[2rem] border border-black/5 bg-secondary/20 p-5 shadow-sm sm:p-8">
          <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <div className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-[0.25em] text-accent">
                <SlidersHorizontal className="h-4 w-4" />
                Explore insights
              </div>
              <h2 className="font-montserrat text-2xl font-black text-primary sm:text-3xl">
                Find the right legal resource
              </h2>
            </div>
            <p className="text-sm font-semibold text-foreground/50">
              {filteredPosts.length} of {posts.length} articles
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-[minmax(0,1.5fr)_1fr_1fr_1fr]">
            <label className="relative block">
              <span className="sr-only">Search blog articles</span>
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/40" />
              <Input
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setPage(1);
                }}
                placeholder="Search title, topic, or author..."
                className="h-12 rounded-xl border-black/10 bg-background pl-11"
              />
            </label>

            <Select
              value={category}
              onValueChange={(value) => {
                setCategory(value);
                setPage(1);
              }}
            >
              <SelectTrigger
                aria-label="Filter by category"
                className="h-12 rounded-xl border-black/10 bg-background"
              >
                <SelectValue placeholder="All categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All categories</SelectItem>
                {categories.map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={author}
              onValueChange={(value) => {
                setAuthor(value);
                setPage(1);
              }}
            >
              <SelectTrigger
                aria-label="Filter by author"
                className="h-12 rounded-xl border-black/10 bg-background"
              >
                <SelectValue placeholder="All authors" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All authors</SelectItem>
                {authors.map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={sort}
              onValueChange={(value) => {
                setSort(value as SortOption);
                setPage(1);
              }}
            >
              <SelectTrigger
                aria-label="Sort articles"
                className="h-12 rounded-xl border-black/10 bg-background"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recommended">Featured & newest</SelectItem>
                <SelectItem value="newest">Newest first</SelectItem>
                <SelectItem value="oldest">Oldest first</SelectItem>
                <SelectItem value="shortest">Shortest read</SelectItem>
                <SelectItem value="longest">Longest read</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {hasActiveFilters && (
            <Button
              type="button"
              variant="ghost"
              onClick={resetFilters}
              className="mt-5 h-auto p-0 text-xs font-black uppercase tracking-widest text-accent hover:bg-transparent"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Clear filters
            </Button>
          )}
        </div>

        {visiblePosts.length > 0 ? (
          <StaggerFadeIn
            key={`${query}-${category}-${author}-${sort}-${safePage}`}
            className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
            childClassName="h-full"
          >
            {visiblePosts.map((post) => (
              <motion.article
                key={post.id}
                className="group h-full"
                whileHover={{ y: -12 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <Card className="flex h-full flex-col overflow-hidden rounded-[2.5rem] border-black/5 bg-secondary/20 shadow-sm transition-all duration-500 hover:shadow-2xl">
                  {post.metaImage && (
                    <Link
                      href={`/blog/${post.slug}`}
                      className="relative block h-56 overflow-hidden"
                    >
                      <Image
                        src={post.metaImage}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                    </Link>
                  )}

                  <CardContent className="flex flex-grow flex-col p-8 sm:p-10">
                    <div className="mb-8 flex items-start justify-between gap-4">
                      <button
                        type="button"
                        onClick={() => {
                          setCategory(post.category);
                          setPage(1);
                        }}
                        aria-label={`Filter by ${post.category}`}
                      >
                        <Badge
                          variant="secondary"
                          className="w-fit bg-accent/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-accent hover:bg-accent hover:text-white"
                        >
                          {post.category}
                        </Badge>
                      </button>
                      <div className="flex shrink-0 items-center gap-2 text-[10px] font-black uppercase tracking-widest text-foreground/30">
                        <Clock className="h-3 w-3" />
                        <span>{post.readingTime}</span>
                      </div>
                    </div>

                    {post.featured && (
                      <div className="mb-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-accent">
                        <Star className="h-3.5 w-3.5 fill-current" />
                        Featured insight
                      </div>
                    )}

                    <Link href={`/blog/${post.slug}`} className="group/title">
                      <h3 className="mb-6 font-opensans text-3xl font-bold leading-tight text-primary transition-colors duration-300 group-hover/title:text-accent">
                        {post.title}
                      </h3>
                    </Link>

                    <div className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-3 font-lato text-[10px] font-bold uppercase tracking-[0.16em] text-foreground/40">
                      <div className="flex items-center gap-2">
                        <User className="h-3.5 w-3.5 text-accent" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3.5 w-3.5 text-accent" />
                        <time dateTime={post.publishedOn}>{post.date}</time>
                      </div>
                    </div>

                    <p className="mb-10 line-clamp-4 flex-grow border-l-2 border-accent/10 pl-6 text-sm italic leading-relaxed text-foreground/60 sm:text-base">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto flex items-center justify-between border-t border-black/5 pt-8">
                      <Button
                        asChild
                        variant="link"
                        className="h-auto p-0 text-base font-black text-accent transition-transform group-hover:translate-x-2"
                      >
                        <Link
                          href={`/blog/${post.slug}`}
                          className="flex items-center gap-2"
                        >
                          Read insight <ArrowRight className="h-5 w-5" />
                        </Link>
                      </Button>
                      <div className="rounded-lg bg-accent/5 p-2 transition-colors group-hover:bg-accent group-hover:text-white">
                        <BookText className="h-4 w-4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </StaggerFadeIn>
        ) : (
          <div className="rounded-[2.5rem] border border-dashed border-black/10 bg-secondary/20 px-6 py-20 text-center">
            <BookOpen className="mx-auto mb-6 h-10 w-10 text-accent" />
            <h3 className="font-montserrat text-2xl font-black text-primary">
              No matching insights
            </h3>
            <p className="mx-auto mt-3 max-w-md text-foreground/60">
              Try another search term or clear the active filters.
            </p>
            <Button
              type="button"
              onClick={resetFilters}
              className="mt-8 rounded-full px-8"
            >
              Clear filters
            </Button>
          </div>
        )}

        {filteredPosts.length > POSTS_PER_PAGE && (
          <nav
            aria-label="Blog pagination"
            className="mt-16 flex flex-col items-center justify-between gap-5 rounded-2xl border border-black/5 bg-secondary/20 p-4 sm:flex-row sm:px-6"
          >
            <p className="text-sm font-semibold text-foreground/50">
              Showing {firstResult + 1}–
              {Math.min(firstResult + POSTS_PER_PAGE, filteredPosts.length)} of{' '}
              {filteredPosts.length}
            </p>
            <div className="flex items-center gap-3">
              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label="Previous page"
                disabled={safePage === 1}
                onClick={() => setPage((current) => Math.max(1, current - 1))}
                className="rounded-full"
              >
                <ChevronLeft />
              </Button>
              <span className="min-w-24 text-center text-sm font-black text-primary">
                Page {safePage} of {totalPages}
              </span>
              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label="Next page"
                disabled={safePage === totalPages}
                onClick={() =>
                  setPage((current) => Math.min(totalPages, current + 1))
                }
                className="rounded-full"
              >
                <ChevronRight />
              </Button>
            </div>
          </nav>
        )}
      </div>
    </section>
  );
}
