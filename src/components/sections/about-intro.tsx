import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function AboutIntro() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-us-lady-justice');

  return (
    <section id="about-intro" className="bg-background text-foreground py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] w-full">
            {aboutImage && (
                <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={aboutImage.imageHint}
                />
            )}
          </div>
          <div className="flex flex-col">
            <h3 className="text-primary font-medium mb-2">About Us</h3>
            <h2 className="font-headline text-5xl font-bold text-primary leading-tight">
              Helping To Overcome And Ease The Legal Burden
            </h2>
            <div className="mt-8 text-foreground/80 space-y-6">
                <p>
                    Lorem ipsum dolor sit amet consectetur. Commodo pulvinar molestie pellentesque urna libero velit porta. Velit pellentesque hac gravida pellentesque est semper. Duis lectus gravida ultricies eleifend in pharetra faucibus orci sem. Proin ac a cursus praesent. Malesuada risus amet nunc posuere rhoncus accumsan congue id dolor. Convallis maecenas sed in pellentesque.
                </p>
                <p>
                    Cum mattis mollis odio gravida adipiscing. Facilisis scelerisque non lacinia tincidunt faucibus tortor vel. Erat risus etiam quam pretium ornare. Semper orci arcu pulvinar adipiscing pretium. Erat facilisis dis arcu senectus sit mi fermentum eu aliquam. Felis neque posuere pharetra porttitor lacinia proin pretium. Et et pharetra tincidunt vel egestas risus sed mollis adipiscing. Lobortis risus mauris vitae pellentesque.
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
