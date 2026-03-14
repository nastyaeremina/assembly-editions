"use client";

import { useEffect } from "react";
import "./edition.css";
import { Header, SplitScreenLayout, Footer } from "./components/layout";
import { LoadingScreen } from "./components/ui";
import {
  CollageHero,
  EditionIntroMobile,
  ClientExperienceSection,
  ProjectManagementSection,
  ClientManagementSection,
  PaymentsSection,
  DevelopersSection,
  WhatsNextSection,
} from "./components/sections";

export default function EditionPage() {
  /* Mark interactive demos as "interacted" on first click */
  useEffect(() => {
    const handler = (e) => {
      const hint = e.target.closest(".interactive-hint, .interactive-hint--light");
      if (hint && !hint.classList.contains("interacted")) {
        hint.classList.add("interacted");
      }
    };
    document.addEventListener("pointerdown", handler);
    return () => document.removeEventListener("pointerdown", handler);
  }, []);


  return (
    <div className="edition-page min-h-screen bg-background">
      {/* Loading intro — mouse-interactive "2.0" */}
      <LoadingScreen />

      {/* Top nav */}
      <Header />

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
      </main>

      <WhatsNextSection />

      <Footer />
    </div>
  );
}
