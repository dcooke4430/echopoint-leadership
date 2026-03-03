import logo from "@/assets/logo.jpg";

export default function Footer() {
  return (
    <footer className="bg-deep-navy text-white">
      <div className="container px-4 md:px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div>
            <a href="#">
              <img src={logo} alt="EchoPoint Leadership" className="h-10" />
            </a>
          </div>
          <div className="flex gap-8 mt-8 md:mt-0">
            <a href="#programs-page" className="text-sm font-semibold uppercase tracking-wider text-slate-300 hover:text-white">Programs</a>
            <a href="#contact-page" className="text-sm font-semibold uppercase tracking-wider text-slate-300 hover:text-white">Contact</a>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} EchoPoint Leadership. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
