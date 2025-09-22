import HeroSection from "./section/HeroSection";
import ServicesGrid from "@/app/[locale]/(homepage)/section/ServicesGrid";
import TechStackSection from "@/app/[locale]/(homepage)/section/TechStackSection";
import HowItWorksSection from "@/app/[locale]/(homepage)/section/HowItWorksSection";
import UseCasesSection from "@/app/[locale]/(homepage)/section/UseCasesSection";
import PricingSection from "@/app/[locale]/(homepage)/section/PricingSection";
import TestimonialsSection from "@/app/[locale]/(homepage)/section/TestimonialsSection";
import FAQSection from "@/app/[locale]/(homepage)/section/FAQSection";

export default function Page() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <TechStackSection />
      <HowItWorksSection />
      <UseCasesSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
    </>
  )
}