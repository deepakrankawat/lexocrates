import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Award() {
  const awardImage = PlaceHolderImages.find(img => img.id === 'gavel-book');
  const lawyerImage = PlaceHolderImages.find(img => img.id === 'lawyer-3');

  return (
    <section className="bg-background text-foreground py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <p className="font-body font-bold text-accent uppercase tracking-wider">Recognition</p>
            <h2 className="mt-4 font-headline text-4xl md:text-5xl font-bold leading-tight text-primary">
                Award-Winning Legal Excellence
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden">
                {awardImage && (
                    <Image
                        src={awardImage.imageUrl}
                        alt={awardImage.description}
                        fill
                        className="object-cover"
                        data-ai-hint={awardImage.imageHint}
                    />
                )}
            </div>
            <div className="flex flex-col gap-6">
                <p className="text-lg text-foreground/80">
                    Our firm and its attorneys are consistently recognized by prestigious legal organizations for our dedication to the profession and our outstanding results. These accolades reflect our commitment to providing top-tier legal representation.
                </p>
                <div className="flex gap-6 items-center mt-4">
                    <div className="relative h-24 w-24 shrink-0 rounded-full overflow-hidden">
                        {lawyerImage && (
                            <Image
                                src={lawyerImage.imageUrl}
                                alt={lawyerImage.description}
                                fill
                                className="object-cover"
                                data-ai-hint={lawyerImage.imageHint}
                            />
                        )}
                    </div>
                    <div>
                        <p className="font-bold text-lg text-primary">"The Best Legal Firm in the Nation"</p>
                        <p className="text-sm text-foreground/70">- National Law Review, 2023</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
