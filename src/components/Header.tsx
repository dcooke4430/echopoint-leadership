import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <a href="#" className="flex items-center">
          <img src={logo} alt="EchoPoint Leadership" className="h-10" />
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#programs-page" className="transition-colors hover:text-foreground/80 text-foreground/60 uppercase font-semibold">Programs</a>
          <a href="#contact-page" className="transition-colors hover:text-foreground/80 text-foreground/60 uppercase font-semibold">Contact</a>
          <Button asChild size="sm" className="text-xs font-bold uppercase">
            <a href="https://calendar.app.google/Yw14zgCJSPL2Ryjj6" target="_blank" rel="noopener noreferrer">Schedule Consultation</a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
