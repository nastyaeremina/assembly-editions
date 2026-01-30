import { Header, StickyNav, Footer } from "@/components/layout";
import {
  HeroSection,
  ClientExperienceSection,
  ProjectManagementSection,
  ClientManagementSection,
  PaymentsSection,
  DevelopersSection,
  WhatsMoreSection,
  WhatsNextSection,
} from "@/components/sections";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#101010]">
      <Header />

      <main>
        <HeroSection />
        <StickyNav />
        <ClientExperienceSection />
        <ProjectManagementSection />
        <ClientManagementSection />
        <PaymentsSection />
        <DevelopersSection />
        <WhatsMoreSection />
        <WhatsNextSection />
      </main>

      <Footer />
    </div>
  );
}
