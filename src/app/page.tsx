"use client";

import React, { useState } from "react";
import { defaultProposalConfig } from "@/config/proposal";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { SaturdayPillars } from "@/components/SaturdayPillars";
import { PhasedPricingSection } from "@/components/PhasedPricingSection";
import { CredentialsShowcase } from "@/components/CredentialsShowcase";
import { RoadmapSection } from "@/components/RoadmapSection";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { AcceptanceModal } from "@/components/AcceptanceModal";

export default function Home() {
  const [companyName, setCompanyName] = useState<string>(
    defaultProposalConfig.defaultCompanyName
  );
  const [isAcceptModalOpen, setIsAcceptModalOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Top Bar Navigation */}
      <Navbar
        config={defaultProposalConfig}
        companyName={companyName}
        onUpdateCompanyName={setCompanyName}
        onOpenAcceptModal={() => setIsAcceptModalOpen(true)}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection
          config={defaultProposalConfig}
          companyName={companyName}
          onOpenAcceptModal={() => setIsAcceptModalOpen(true)}
        />

        {/* 5 Saturday Pillars Section */}
        <SaturdayPillars
          config={defaultProposalConfig}
          companyName={companyName}
        />

        {/* Phased Execution & Pricing Model */}
        <PhasedPricingSection
          config={defaultProposalConfig}
          companyName={companyName}
          onOpenAcceptModal={() => setIsAcceptModalOpen(true)}
        />

        {/* Credentials & Authority Showcase */}
        <CredentialsShowcase config={defaultProposalConfig} />

        {/* 90-Day Saturday Implementation Roadmap */}
        <RoadmapSection
          config={defaultProposalConfig}
          companyName={companyName}
        />

        {/* FAQ Section */}
        <FaqSection config={defaultProposalConfig} />
      </main>

      {/* Footer */}
      <Footer config={defaultProposalConfig} companyName={companyName} />

      {/* Acceptance Modal */}
      <AcceptanceModal
        isOpen={isAcceptModalOpen}
        onClose={() => setIsAcceptModalOpen(false)}
        config={defaultProposalConfig}
        companyName={companyName}
      />
    </div>
  );
}
