import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Award() {
  const awardImage = PlaceHolderImages.find(img => img.id === 'blog-image-1'); // Placeholder, replace with gavel image
  const lawyerImage = PlaceHolderImages.find(img => img.id === 'lawyer-3');

  return (
    <section className="bg-primary text-primary-foreground py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h3 className="text-accent font-medium mb-2">Recognition</h3>
            <h2 className="font-headline text-5xl font-bold leading-tight">
                The Best Award Has Been Given To
                <br />
                Northman Legal Lawyer International
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96">
                {awardImage && (
                    <Image
                        src="https://images.unsplash.com/photo-1590005354257-659c3969b743?q=80&w=2070&auto=format&fit=crop"
                        alt="Gavel and law book"
                        fill
                        className="object-cover"
                        data-ai-hint="gavel law book"
                    />
                )}
            </div>
            <div className="flex flex-col gap-6">
                <p className="text-primary-foreground/80">
                    Lorem ipsum dolor sit amet consectetur. Commodo pulvinar molestie pellentesque urna libero velit porta. Velit pellentesque hac gravida pellentesque est semper. Duis lectus gravida ultricies eleifend in pharetra faucibus orci sem. Proin ac a cursus praesent.
                </p>
                <div className="flex gap-6 items-center">
                    <div className="relative h-48 w-48 shrink-0">
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
                    <p className="text-primary-foreground/80">
                        Cum mattis mollis odio gravida adipiscing. Facilisis scelerisque non lacinia tincidunt faucibus tortor vel. Erat risus etiam quam pretium ornare. Semper orci arcu pulvinar adipiscing pretium.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
