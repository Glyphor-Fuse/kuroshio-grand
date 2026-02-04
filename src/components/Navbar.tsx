import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
          scrolled || open
            ? "bg-slate-950/80 backdrop-blur-md py-4 border-b border-white/5"
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          <div className="font-serif text-xl font-bold tracking-widest text-white">
            KG.
          </div>

          <div className="hidden md:flex gap-8 text-xs font-medium uppercase tracking-widest text-white/80">
            <a href="#" className="hover:text-white transition-colors">The Experience</a>
            <a href="#" className="hover:text-white transition-colors">Menu</a>
            <a href="#" className="hover:text-white transition-colors">Private Events</a>
            <a href="#" className="hover:text-white transition-colors">Gallery</a>
          </div>

          <div className="flex items-center gap-4">
             <a href="#" className="hidden md:block text-xs font-bold uppercase tracking-widest text-white border-b border-white pb-1">
                Book Now
             </a>
             <button 
                onClick={() => setOpen(!open)}
                className="text-white md:hidden"
            >
                {open ? <X /> : <Menu />}
             </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-slate-950 text-white animate-in fade-in slide-in-from-top-10">
            <div className="flex flex-col gap-8 text-center text-2xl font-serif">
                <a href="#" onClick={() => setOpen(false)}>The Experience</a>
                <a href="#" onClick={() => setOpen(false)}>Menu</a>
                <a href="#" onClick={() => setOpen(false)}>Gallery</a>
                <a href="#" onClick={() => setOpen(false)}>Contact</a>
            </div>
        </div>
      )}
    </>
  );
}
