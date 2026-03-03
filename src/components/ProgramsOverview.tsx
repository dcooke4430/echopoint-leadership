import * as React from "react";
import { Button } from "./ui/button";

const ProgramCard = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="border border-slate-200 bg-white p-8">
    <h3 className="text-lg font-bold uppercase border-b-2 border-deep-navy pb-4 mb-6 tracking-wider">
      {title}
    </h3>
    <p className="text-slate-600">{children}</p>
  </div>
);

export default function ProgramsOverview() {
  return (
    <section className="py-20 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-deep-navy">Our Programs</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <ProgramCard title="Operational Leadership">
            Decision-making, clarity, and performance under sustained pressure, for leaders operating where failure has real consequences.
          </ProgramCard>
          <ProgramCard title="Resilience & Recovery">
            Evidence-informed approaches to stress, fatigue, and recovery that protect performance without sacrificing the human behind the role.
          </ProgramCard>
          <ProgramCard title="Speaking & Advisory">
            Keynotes and advisory engagements grounded in real operational experience – bridging leadership, trauma, and organizational responsibility.
          </ProgramCard>
        </div>
        <div className="text-left">
          <Button asChild size="lg" className="font-bold uppercase tracking-wider">
            <a href="#contact-page">Request Training</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
