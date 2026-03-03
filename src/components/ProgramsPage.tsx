import * as React from "react";
import { Button } from "./ui/button";

const ProgramDetailCard = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="border border-slate-200 bg-white p-8">
    <h3 className="text-lg font-bold uppercase border-b-2 border-deep-navy pb-4 mb-6 tracking-wider">
      {title}
    </h3>
    <p className="text-slate-600">{children}</p>
  </div>
);

const DeliveryFormat = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div>
    <h4 className="border-b border-slate-200 pb-2 font-bold tracking-wide">{title}</h4>
    <p className="text-slate-600 mt-4">{children}</p>
  </div>
);

export default function ProgramsPage() {
  return (
    <section className="py-20 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-deep-navy">Training Solutions</h1>
          <p className="text-lg md:text-xl text-slate-800 mt-4">
            We do not deal in theory. EchoPoint Leadership delivers evidence-informed, experience-backed frameworks for organizations where performance is non-negotiable and the cost of burnout is real.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <ProgramDetailCard title="Leadership">
            Equipping decision-makers with the operational clarity required to lead through sustained adversity.
          </ProgramDetailCard>
          <ProgramDetailCard title="Performance">
            Building systemic frameworks that allow teams to execute at the highest level when margins for error are zero.
          </ProgramDetailCard>
          <ProgramDetailCard title="Recovery">
            Implementing disciplined, evidence-based recovery protocols that protect the human asset and ensure long-term operational readiness.
          </ProgramDetailCard>
        </div>

        <h2 className="text-3xl font-bold tracking-tighter text-deep-navy mb-8">Delivery Formats</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <DeliveryFormat title="Keynotes">High-impact briefings designed to shift organizational perspective.</DeliveryFormat>
          <DeliveryFormat title="Workshops">Interactive, framework-driven sessions for leadership teams.</DeliveryFormat>
          <DeliveryFormat title="Multi-Day Programs">Deep-dive operational training for specialized units and executive cohorts.</DeliveryFormat>
          <DeliveryFormat title="Advisory Sessions">1-on-1 or small-group strategic consulting for senior leaders.</DeliveryFormat>
        </div>

        <div className="pt-16 border-t border-slate-200">
          <h2 className="text-3xl font-bold tracking-tighter text-deep-navy">Secure Your Team's Readiness</h2>
          <Button asChild size="lg" className="mt-6 font-bold uppercase tracking-wider">
            <a href="https://calendar.app.google/Yw14zgCJSPL2Ryjj6" target="_blank" rel="noopener noreferrer">Schedule a Consultation</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
