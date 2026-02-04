import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";

export default function Reservation() {
  return (
    <section className="relative min-h-[80vh] w-full bg-slate-950 py-24 text-white">
      {/* Background ambience */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[50%] -left-[20%] h-[1000px] w-[1000px] rounded-full bg-blue-900/10 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-[800px] w-[800px] rounded-full bg-indigo-900/10 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-4xl px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-serif text-5xl md:text-7xl">Secure Your View</h2>
          <p className="text-white/60">Reservations open 30 days in advance.</p>
        </div>

        <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 rounded-xl bg-white/5 p-8 md:p-12 backdrop-blur-sm border border-white/10"
        >
            <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/50">Date</label>
                    <Input type="date" className="border-white/20 bg-transparent text-white focus:border-white/50" />
                </div>
                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/50">Guests</label>
                    <Select>
                        <SelectTrigger className="border-white/20 bg-transparent text-white focus:border-white/50">
                            <SelectValue placeholder="2 Guests" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-900 text-white border-slate-800">
                            <SelectItem value="2">2 Guests</SelectItem>
                            <SelectItem value="4">4 Guests</SelectItem>
                            <SelectItem value="6">6 Guests</SelectItem>
                            <SelectItem value="8">8+ (Private)</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/50">Name</label>
                    <Input placeholder="Full Name" className="border-white/20 bg-transparent text-white placeholder:text-white/30 focus:border-white/50" />
                </div>
                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/50">Email</label>
                    <Input type="email" placeholder="email@domain.com" className="border-white/20 bg-transparent text-white placeholder:text-white/30 focus:border-white/50" />
                </div>
            </div>

            <div className="pt-8">
                <Button className="w-full h-14 bg-white text-black hover:bg-white/90 text-lg uppercase tracking-widest font-bold rounded-none">
                    Request Reservation
                </Button>
                <p className="mt-4 text-center text-xs text-white/30">
                    A credit card is required to secure all bookings.
                </p>
            </div>
        </motion.form>
      </div>

      <footer className="absolute bottom-0 w-full border-t border-white/5 py-8 text-center text-xs text-white/20">
        <p>&copy; {new Date().getFullYear()} Kuroshio Grand. Tokyo / New York / Dubai.</p>
      </footer>
    </section>
  );
}
