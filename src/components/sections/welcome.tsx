import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Welcome() {
  const welcomeImage = PlaceHolderImages.find(img => img.id === 'lawyer-1');

  return (
    <section className="bg-background text-foreground py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 w-80 justify-self-center">
            {welcomeImage && (
                <Image
                    src={welcomeImage.imageUrl}
                    alt={welcomeImage.description}
                    width={welcomeImage.width}
                    height={welcomeImage.height}
                    className="object-cover w-full h-full"
                    data-ai-hint={welcomeImage.imageHint}
                />
            )}
          </div>
          <div>
            <h3 className="text-accent font-medium mb-2">Welcome Message</h3>
            <h2 className="font-headline text-5xl font-bold text-primary leading-tight">
              Hello People,
              <br />
              Welcome To Lexocrates
            </h2>
            <div className="mt-6 space-y-4 text-foreground/80">
                <p>
                    Lorem ipsum dolor sit amet consectetur. Commodo pulvinar molestie pellentesque urna libero velit porta. Velit pellentesque hac gravida pellentesque est semper. Duis lectus gravida ultricies eleifend in pharetra faucibus orci sem. Proin ac a cursus praesent.
                </p>
                <p>
                    Cum mattis mollis odio gravida adipiscing. Facilisis scelerisque non lacinia tincidunt faucibus tortor vel. Erat risus etiam quam pretium ornare.
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
