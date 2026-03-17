import { Button } from "./ui/button";

export default function CultureDiagnostic() {
  return (
    <section className="py-24 md:py-32 bg-deep-navy text-white border-y border-white/10">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
            A Leadership Culture Diagnostic — At No Cost
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Five indicators that separate high-performing cultures from ones operating on borrowed time. One page. No fluff.
          </p>
          <div className="flex justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-deep-navy hover:bg-slate-100 font-bold uppercase tracking-widest rounded-none h-16 px-12 text-lg transition-all hover:scale-105 active:scale-95 shadow-2xl"
            >
              <a href="/diagnostic.pdf" target="_blank" rel="noopener noreferrer">
                Download the Diagnostic
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
