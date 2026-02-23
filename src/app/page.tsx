import { Header, SplitScreenLayout, Footer } from "@/components/layout";
import { LoadingScreen } from "@/components/ui";
import {
  BrandStatement,
  CollageHero,
  EditionIntro,
  EditionIntroMobile,
  ClientExperienceSection,
  ProjectManagementSection,
  ClientManagementSection,
  PaymentsSection,
  DevelopersSection,
  WhatsNextSection,
} from "@/components/sections";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Loading intro — mouse-interactive "2.0" */}
      <LoadingScreen />

      {/* Top nav */}
      <Header />

      <main>
        {/* Marquee hero */}
        <CollageHero />

        {/* Brand intro — white section */}
        <BrandStatement />

        {/* Fixed right sidebar — desktop only */}
        <EditionIntro />

        {/* Mobile intro + sticky nav */}
        <EditionIntroMobile />

        {/* Scrollable content sections — 75% left on desktop */}
        <SplitScreenLayout>
          <ClientExperienceSection inSplit />
          <ProjectManagementSection inSplit />
          <ClientManagementSection inSplit />
          <PaymentsSection inSplit />
          <DevelopersSection inSplit />
        </SplitScreenLayout>

        <WhatsNextSection />
      </main>

      <Footer />
    </div>
  );
}
