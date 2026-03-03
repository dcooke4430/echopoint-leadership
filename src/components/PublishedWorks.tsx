import { Button } from "./ui/button";
import { Input } from "./ui/input";
import blurredLinesCover from "@/assets/blurred-lines-cover.jpg";
import echoEffectCover from "@/assets/echo-effect-cover.png";

export default function PublishedWorks() {
  return (
    <section className="py-20 md:py-24 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-deep-navy">Published Insights</h2>
        </div>

        {/* Blurred Lines Book */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <img src={blurredLinesCover} alt="Blurred Lines Book Cover" className="aspect-[3/4] w-full object-cover" />
          <div>
            <span className="font-bold text-deep-navy block mb-4">Grounded in lived experience and operational reality.</span>
            <h2 className="text-4xl font-bold tracking-tighter text-deep-navy mb-4">Blurred Lines</h2>
            <p className="text-slate-600 mb-6">
              "Blurred Lines" examines the intersection of high-stakes leadership and the personal toll of sustained pressure. Designed for executives and operators, this work bypasses theory to deliver actionable frameworks for maintaining clarity when the consequences of failure are absolute.
            </p>
            <Button asChild size="lg" className="font-bold uppercase tracking-wider">
              <a href="https://a.co/d/0a36RyY4" target="_blank" rel="noopener noreferrer">Get the Book</a>
            </Button>
          </div>
        </div>

        {/* Sample Chapter Lead Gen */}
        <div className="border border-deep-navy p-8 md:p-12 bg-white mb-20">
          <h3 className="text-2xl font-bold tracking-tighter text-deep-navy">Download a Sample Chapter</h3>
          <p className="text-slate-600 mt-2 mb-6">Evaluate the frameworks before committing. Download the first chapter to explore the core principles of operational resilience.</p>
          <form action="https://formspree.io/f/mnjbwgvv" method="POST" className="flex flex-col gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Input type="text" name="first_name" placeholder="First Name" required />
              <Input type="email" name="email" placeholder="Business Email" required />
            </div>
            <input type="hidden" name="_redirect" value="https://www.echopointleadership.com/downloads/blurred-lines-sample.pdf" />
            <Button type="submit" size="lg" className="font-bold uppercase tracking-wider w-full sm:w-auto">Download Sample Chapter</Button>
          </form>
          <p className="text-xs text-slate-500 mt-4">*Trusted by leaders in high-consequence environments. Your information is secure and never shared.</p>
        </div>

        {/* Upcoming Book */}
        <div className="grid md:grid-cols-2 gap-12 items-center py-16 border-t border-slate-200">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter text-deep-navy">The Echo Effect – Coming Soon</h2>
            <span className="font-bold text-deep-navy block my-4">The forthcoming expansion of the EchoPoint leadership philosophy.</span>
            <p className="text-slate-600 mb-6">
              Building on the foundational principles of operational leadership, "The Echo Effect" explores the long-term impact of executive decision-making on organizational culture and recovery.
            </p>
            <Button asChild variant="outline" size="lg" className="font-bold uppercase tracking-wider border-2 border-deep-navy text-deep-navy hover:bg-deep-navy hover:text-white">
              <a href="#contact-page">Stay Updated</a>
            </Button>
          </div>
          <img src={echoEffectCover} alt="The Echo Effect Book Cover" className="aspect-[3/4] w-full object-cover" />
        </div>
      </div>
    </section>
  );
}
