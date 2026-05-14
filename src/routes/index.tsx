import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/novadent/Navbar";
import { Hero } from "@/components/novadent/Hero";
import { SocialProof } from "@/components/novadent/SocialProof";
import { Problem } from "@/components/novadent/Problem";
import { Solution } from "@/components/novadent/Solution";
import { Features } from "@/components/novadent/Features";
import { Agents } from "@/components/novadent/Agents";
import { FAQ } from "@/components/novadent/FAQ";
import { Pricing } from "@/components/novadent/Pricing";
import { FinalCTA } from "@/components/novadent/FinalCTA";
import { Footer } from "@/components/novadent/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Problem />
        <Solution />
        <Features />
        <Agents />
        <FAQ />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
