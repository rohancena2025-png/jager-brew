import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LifestyleSection } from "@/components/sections/LifestyleSection";
import { ShopSection } from "@/components/sections/ShopSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { VariantsSection } from "@/components/sections/VariantsSection";
import { WhySection } from "@/components/sections/WhySection";

export function HomePage() {
  return (
    <div className="pt-16 md:pt-20">
      <HeroSection />
      <AboutSection />
      <VariantsSection />
      <WhySection />
      <ShopSection />
      <LifestyleSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
