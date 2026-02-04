import { motion } from "framer-motion";

export default function NarrativeStream() {
  const steps = [
    {
      id: "macro",
      title: "THE MACRO",
      subtitle: "Precision Omakase",
      text: "Every slice tells a story of the Pacific currents. Our chefs engage in a silent dialogue with ingredients flown in daily from Tsukiji and Hokkaido.",
      image: "/images/omakase-detail.jpg",
      align: "right"
    },
    {
      id: "scale",
      title: "THE SCALE",
      subtitle: "10 Million Gallons",
      text: "Dining suspended in the blue. The Kuroshio tank is a living gallery, housing the ocean's most majestic wanderers. A backdrop that breathes.",
      image: "/images/hero-deep.jpg",
      align: "left"
    },
    {
      id: "craft",
      title: "THE CRAFT",
      subtitle: "Liquid Artistry",
      text: "Cocktails that glow with bioluminescent properties, crafted to mirror the depth of the waters before you.",
      image: "/images/cocktail-macro.jpg",
      align: "right"
    }
  ];

  return (
    <section className="bg-background py-24 md:py-32">
      <div className="container mx-auto px-4">
        {steps.map((step, index) => (
          <div key={step.id} className={`mb-32 flex flex-col gap-12 md:flex-row ${step.align === 'left' ? 'md:flex-row-reverse' : ''} items-center`}>
            
            {/* Text Side */}
            <motion.div 
              initial={{ opacity: 0, x: step.align === 'right' ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex-1 space-y-6 md:p-12"
            >
              <div className="flex items-center gap-4">
                <span className="h-[1px] w-12 bg-primary/30"></span>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary/60">{step.subtitle}</span>
              </div>
              <h2 className="font-serif text-5xl text-primary md:text-6xl">{step.title}</h2>
              <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
                {step.text}
              </p>
            </motion.div>

            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex-1"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="h-full w-full object-cover transition-transform duration-[2s] hover:scale-110"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
              </div>
              {/* Decorative offset border */}
              <div className={`absolute -bottom-4 -right-4 -z-10 h-full w-full border border-primary/20 ${step.align === 'left' ? '-left-4 right-auto' : ''}`} />
            </motion.div>
            
          </div>
        ))}
      </div>
    </section>
  );
}
