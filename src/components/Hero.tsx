import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="py-20 md:py-32 bg-slate-50 border-b">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-bold tracking-widest text-slate-500 uppercase">
            Leadership Solutions
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-deep-navy mt-4 mb-6">
            Leadership Under Pressure. Performance When it Matters. Recovery when the cost is real.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Equipping organizations and executives to navigate high-consequence environments with clarity and discipline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="font-bold uppercase tracking-wider">
              <a href="#programs-page">Explore Programs</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-bold uppercase tracking-wider border-2 border-deep-navy text-deep-navy hover:bg-deep-navy hover:text-white">
              <a href="#contact-page">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
