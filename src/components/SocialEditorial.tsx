import { motion } from "framer-motion";
import { Star } from 'lucide-react';

const PRESS_LOGOS = ["VOGUE", "GQ", "Michelin Guide", "Monocle"];

export default function SocialEditorial() {
  return (
    <section className="bg-muted/30 py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-serif text-4xl italic md:text-5xl">The Scene</h2>
          <div className="flex justify-center gap-8 opacity-50 grayscale">
            {PRESS_LOGOS.map((logo) => (
              <span key={logo} className="font-serif text-xl font-bold">{logo}</span>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2 h-[120vh] md:h-[800px]">
          
          {/* Main Feature */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative col-span-1 row-span-1 md:col-span-2 md:row-span-2 overflow-hidden bg-black"
          >
            <img 
              src="/images/interior-social.jpg" 
              alt="The main dining hall" 
              className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/60">Editorial</span>
              <h3 className="font-serif text-3xl text-white">Evenings at Kuroshio</h3>
              <p className="mt-2 text-white/80">Where Tokyo's elite gather under the blue light.</p>
            </div>
          </motion.div>

          {/* Secondary 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative col-span-1 bg-white p-8 flex flex-col justify-between border border-border"
          >
            <div>
                <div className="flex gap-1 text-amber-500 mb-4">
                    {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="font-serif text-xl italic leading-relaxed text-primary">
                    "A dining experience that completely distorts your sense of reality. The food is grounded, the view is ethereal."
                </p>
            </div>
            <div className="mt-8 flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-slate-200 overflow-hidden">
                    <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Reviewer" />
                </div>
                <div>
                    <p className="text-sm font-bold">Elena K.</p>
                    <p className="text-xs text-muted-foreground">Food Critic, The Times</p>
                </div>
            </div>
          </motion.div>

          {/* Secondary 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative col-span-1 overflow-hidden bg-black"
          >
            <img 
              src="/images/cocktail-macro.jpg" 
              alt="Signature Cocktail" 
              className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                <button className="flex items-center gap-2 rounded-full border border-white px-6 py-2 text-sm text-white hover:bg-white hover:text-black">
                    View Gallery <Star size={16} />
                </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
