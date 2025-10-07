export function VisionMission() {
  return (
    <section className="bg-secondary text-foreground py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-headline text-4xl font-bold text-primary mb-6">Our Vision</h2>
            <div className="space-y-4 text-foreground/80">
              <p>
                To be the world's leading legal outsourcing partner, recognized for our unwavering commitment to quality, innovation, and client success.
              </p>
            </div>
          </div>
          <div>
            <h2 className="font-headline text-4xl font-bold text-primary mb-6">Our Mission</h2>
            <div className="space-y-4 text-foreground/80">
              <p>
               To empower our clients by providing superior legal support services that enhance efficiency, reduce costs, and allow them to focus on their core strategic objectives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
