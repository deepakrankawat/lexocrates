import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';

export function ServiceDetailContent() {
  const image1 = PlaceHolderImages.find(img => img.id === 'service-detail-1');
  const image2 = PlaceHolderImages.find(img => img.id === 'service-detail-2');

  return (
    <section className="bg-background text-foreground py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="grid grid-cols-2 gap-6">
            <div className="relative h-96">
                {image1 && (
                    <Image
                        src={image1.imageUrl}
                        alt={image1.description}
                        fill
                        className="object-cover"
                        data-ai-hint={image1.imageHint}
                    />
                )}
            </div>
            <div className="relative h-96 self-end">
                {image2 && (
                    <Image
                        src={image2.imageUrl}
                        alt={image2.description}
                        fill
                        className="object-cover"
                        data-ai-hint={image2.imageHint}
                    />
                )}
            </div>
          </div>
          <div>
            <h2 className="font-headline text-5xl font-bold text-primary leading-tight">
              Education Lawyer & Consultation
            </h2>
            <div className="mt-8 space-y-6 text-foreground/80">
              <p>
                Lorem ipsum dolor sit amet consectetur. Commodo pulvinar molestie pellentesque urna libero velit porta. Velit pellentesque hac gravida pellentesque est semper. Duis lectus gravida ultricies eleifend in pharetra faucibus orci sem. Proin ac a cursus praesent. Malesuada risus amet nunc posuere rhoncus accumsan congue id dolor. Convallis maecenas sed in pellentesque.
              </p>
              <p>
                Cum mattis mollis odio gravida adipiscing. Facilisis scelerisque non lacinia tincidunt faucibus tortor vel. Erat risus etiam quam pretium ornare. Semper orci arcu pulvinar adipiscing pretium. Erat facilisis dis arcu senectus sit mi fermentum eu aliquam.
              </p>
            </div>
            <div className="mt-8 flex items-baseline gap-4">
                <p className="font-headline text-4xl font-bold text-primary">$440,99<span className="text-lg font-normal text-muted-foreground">/hour</span></p>
            </div>
            <Button size="lg" className="mt-6">Book Appointment</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
