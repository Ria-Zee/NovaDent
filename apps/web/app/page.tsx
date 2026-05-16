"use client";

import { Navbar } from "@/app/components/novadent/Navbar";
import { Hero } from "@/app/components/novadent/Hero";
import { SocialProof } from "@/app/components/novadent/SocialProof";
import { Problem } from "@/app/components/novadent/Problem";
import { Solution } from "@/app/components/novadent/Solution";
import { Imagery } from "@/app/components/novadent/Imagery";
import { Features } from "@/app/components/novadent/Features";
import { Agents } from "@/app/components/novadent/Agents";
import { FAQ } from "@/app/components/novadent/FAQ";
import { Pricing } from "@/app/components/novadent/Pricing";
import { FinalCTA } from "@/app/components/novadent/FinalCTA";
import { Footer } from "@/app/components/novadent/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Problem />
        <Solution />
        <Imagery />
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
