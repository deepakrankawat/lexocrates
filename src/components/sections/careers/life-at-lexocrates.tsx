
'use client';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SlideIn } from '@/components/animations/slide-in';
import { AppImage } from '@/components/ui/app-image';
import { motion } from 'framer-motion';

const galleryImages = [
    PlaceHolderImages.find(img => img.id === 'hero-team'),
    PlaceHolderImages.find(img => img.id === 'blog-image-1'),
    PlaceHolderImages.find(img => img.id === 'service-detail-1'),
    PlaceHolderImages.find(img => img.id === 'service-detail-2'),
];

export function LifeAtLexocrates() {
    return (
        <section className="bg-background text-foreground py-20 sm:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SlideIn className="text-center mb-16">
                    <p className="font-body font-bold text-accent uppercase tracking-wider">Our Workspace</p>
                    <h2 className="mt-4 font-headline text-4xl md:text-5xl font-bold text-primary">
                        Life at Lexocrates
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-foreground/80">
                        A glimpse into our collaborative, innovative, and friendly work environment.
                    </p>
                </SlideIn>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {galleryImages.map((image, index) => (
                       image && <motion.div 
                        key={image.id}
                        className="overflow-hidden group"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                       >
                            <AppImage
                                src={image.imageUrl}
                                alt={image.description}
                                width={image.width}
                                height={image.height}
                                className="w-full h-full object-cover aspect-[3/4]"
                                data-ai-hint={image.imageHint}
                            />
                       </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
