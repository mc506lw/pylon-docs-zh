import type { JSX } from "react";

import { BannerSection } from "@/components/home/banner-section";
import { FeaturesSection } from "@/components/home/features-section";
import { HeroSection } from "@/components/home/hero-section";

export default function HomePage(): JSX.Element {
  return (
    <main className="relative container mx-auto max-w-5xl px-6 py-4 lg:px-8 lg:py-12">
      <HeroSection />
      <FeaturesSection />
      <BannerSection />
    </main>
  );
}