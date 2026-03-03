import { Button } from "./ui/button";

export default function RestrictedResources() {
  return (
    <section className="bg-slate-800 text-white py-20 md:py-24 text-center">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Law Enforcement & First Responder Resources</h2>
        <p className="max-w-2xl mx-auto mt-4 mb-8 text-slate-300">
          Some resources are developed specifically for those operating in high risk, high consequence environments. Access to these materials is intentionally limited.
        </p>
        <Button asChild size="lg" variant="outline" className="font-bold uppercase tracking-wider border-2 border-white text-white hover:bg-white hover:text-slate-800">
          <a href="#contact-page">Request Access</a>
        </Button>
      </div>
    </section>
  );
}
