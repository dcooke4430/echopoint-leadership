import police1Logo from "@/assets/police1-logo.png";
import blurredLinesTrust from "@/assets/blurred-lines-trust.png";

export default function TrustBar() {
  return (
    <a 
      href="https://www.police1.com/off-duty/insight-from-inside-essential-law-enforcement-books-by-officers-to-read-in-2025" 
      target="_blank" 
      rel="noopener noreferrer"
      className="block w-full bg-slate-100 py-4 border-y border-slate-200 hover:bg-slate-200 transition-colors"
    >
      <div className="container px-4 md:px-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
        <img 
          src={blurredLinesTrust} 
          alt="Blurred Lines Book" 
          className="h-8 md:h-10 object-contain" 
        />
        <span className="text-sm md:text-base font-bold tracking-tight text-deep-navy uppercase text-center">
          As Featured In Police1’s 2025 Essential Reading List
        </span>
        <img 
          src={police1Logo} 
          alt="Police1 Logo" 
          className="h-8 md:h-10 object-contain grayscale opacity-80" 
        />
      </div>
    </a>
  );
}
