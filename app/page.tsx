import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { TopBar } from "@/components/layout/TopBar";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { AdmissionsCTA } from "@/components/sections/AdmissionsCTA";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { RecognitionSection } from "@/components/sections/RecognitionSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TrustHighlights } from "@/components/sections/TrustHighlights";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

export default function Home() {
  return (
    <div className="overflow-x-clip bg-white text-slate-900">
      <TopBar />
      <Navbar />
      <main>
        <HeroSection />
        <TrustHighlights />
        <AboutPreview />
        <ProgramsSection />
        <WhyChooseUs />
        <AdmissionsCTA />
        <RecognitionSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
