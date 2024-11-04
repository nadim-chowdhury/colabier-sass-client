import ComparisonSection from "@/components/Home/ComparisonSection";
import DemoSection from "@/components/Home/DemoSection";
import FAQSection from "@/components/Home/FAQSection";
import FeaturesSection from "@/components/Home/FeaturesSection";
import HeroSection from "@/components/Home/HeroSection";
import NewsletterSignup from "@/components/Home/NewsletterSignup";
import PricingSection from "@/components/Home/PricingSection";
import TestimonialsSection from "@/components/Home/TestimonialsSection";
import UseCasesSection from "@/components/Home/UseCasesSection";
import Footer from "@/components/Shared/Footer";
import Header from "@/components/Shared/Header";

export default function Home() {
  return (
    <section className="flex flex-col gap-10">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <DemoSection />
      <TestimonialsSection />
      <ComparisonSection />
      <PricingSection />
      <UseCasesSection />
      <FAQSection />
      <NewsletterSignup />
      <Footer />
    </section>
  );
}
