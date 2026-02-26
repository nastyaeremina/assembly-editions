import { Header, ChapterBar, SplitScreenLayout, Footer } from "@/components/layout";
import { LoadingScreen } from "@/components/ui";
import {
  CollageHero,
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

      {/* Top nav — Header for hero, ChapterBar for sections */}
      <Header />
      <ChapterBar />

      <main>
        {/* Hero — centered title + subtitle + video placeholder */}
        <CollageHero />

        {/* Mobile intro + sticky nav */}
        <EditionIntroMobile />

        {/* Scrollable content sections — editorial split layout */}
        <SplitScreenLayout>
          <ClientExperienceSection />
          <ProjectManagementSection />
          <ClientManagementSection />
          <PaymentsSection />
          <DevelopersSection />
        </SplitScreenLayout>

        <WhatsNextSection />
      </main>

      <Footer />
    </div>
  );
}
