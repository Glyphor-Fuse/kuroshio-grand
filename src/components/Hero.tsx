import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Fish, UtensilsCrossed } from "lucide-react";

export default function Hero() {
  const [perspective, setPerspective] = useState<"deep" | "plate">("deep");

  const perspectives = {
    deep: {
      image: "/images/hero-deep.jpg",
      title: "THE DEEP",
      subtitle: "Dining at the edge of the abyss.",
      description: "Experience the silence of the world's largest private oceanarium.",
      color: "text-blue-100",
      accent: "bg-blue-900/20"
    },
    plate: {
      image: "/images/hero-plate.jpg",
      title: "THE PLATE",
      subtitle: "Precision in every grain.",
      description: "Omakase curated from the rarest catches of the Pacific.",
      color: "text-amber-50",
      accent: "bg-amber-900/20"
    }
  };

  const current = perspectives[perspective];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Background Image Transition */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={perspective}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
          <img
            src={current.image}
            alt={current.title}
            className="h-full w-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Toggle Control - Signature Feature */}
      <div className="absolute top-8 left-0 right-0 z-50 flex justify-center">
        <div className="flex items-center gap-1 rounded-full border border-white/10 bg-black/30 p-1 backdrop-blur-md">
          <button
            onClick={() => setPerspective("deep")}
            className={`flex items-center gap-2 rounded-full px-6 py-2 text-xs font-medium tracking-widest transition-all ${
              perspective === "deep"
                ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                : "text-white/70 hover:text-white"
            }`}
          >
            <Fish className="h-3 w-3" />
            THE DEEP
          </button>
          <button
            onClick={() => setPerspective("plate")}
            className={`flex items-center gap-2 rounded-full px-6 py-2 text-xs font-medium tracking-widest transition-all ${
              perspective === "plate"
                ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                : "text-white/70 hover:text-white"
            }`}
          >
            <UtensilsCrossed className="h-3 w-3" />
            THE PLATE
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.div
          key={current.title + "-text"}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="font-sans text-sm font-bold tracking-[0.3em] text-white/60">
            KUROSHIO GRAND
          </h2>
          <h1 className={`font-serif text-7xl font-bold tracking-tighter md:text-9xl ${current.color}`}>
            {current.title}
          </h1>
          <p className="max-w-xl text-lg font-light leading-relaxed text-white/80 md:text-xl">
            {current.description}
          </p>
          
          <div className="pt-8">
             <Button variant="outline" className="border-white/20 bg-transparent text-white hover:bg-white hover:text-black backdrop-blur-sm rounded-none px-8 py-6 uppercase tracking-widest">
                Reserve {perspective === 'deep' ? 'Table' : 'Counter'}
             </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </motion.div>
    </section>
  );
}
