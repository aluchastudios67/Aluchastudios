"use client";

import { Navbar } from "@/components/alucha/Navbar";
import { Hero } from "@/components/alucha/Hero";
import { Features } from "@/components/alucha/Features";
import { Builder } from "@/components/alucha/Builder";
import { Portfolio } from "@/components/alucha/Portfolio";
import { Pricing } from "@/components/alucha/Pricing";
import { Contact } from "@/components/alucha/Contact";
import { Footer } from "@/components/alucha/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Features />
      <Builder />
      <Portfolio />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
