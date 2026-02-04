import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NarrativeStream from "@/components/NarrativeStream";
import SocialEditorial from "@/components/SocialEditorial";
import Reservation from "@/components/Reservation";

export default function Index() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      <Hero />
      <NarrativeStream />
      <SocialEditorial />
      <Reservation />
    </main>
  );
}
