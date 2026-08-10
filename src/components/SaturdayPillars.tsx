"use client";

import React, { useState } from "react";
import { ProposalConfig } from "@/config/proposal";
import { Zap, FolderSync, Building2, Globe, ShieldAlert, Wifi, Users, Server, CheckCircle2, ChevronRight, Layers, Sparkles } from "lucide-react";

interface SaturdayPillarsProps {
  config: ProposalConfig;
  companyName: string;
}

const iconMap: Record<string, React.ReactNode> = {
  Wifi: <Wifi className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  Server: <Server className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  FolderSync: <FolderSync className="w-6 h-6" />,
  Building2: <Building2 className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
  ShieldAlert: <ShieldAlert className="w-6 h-6" />,
};

export const SaturdayPillars: React.FC<SaturdayPillarsProps> = ({
  config,
  companyName,
}) => {
  const [activePillarId, setActivePillarId] = useState<string>(config.pillars[0].id);

  const activePillar = config.pillars.find((p) => p.id === activePillarId) || config.pillars[0];

  return (
    <section id="pilares" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Alcance del Servicio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100">
            Los 5 Pilares de Trabajo para <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">{companyName}</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Cada sábado estará enfocado en entregar resultados concretos en estas cinco áreas estratégicas para elevar la eficiencia operativa de Don José.
          </p>
        </div>

        {/* Pillars Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
          {config.pillars.map((pillar) => {
            const isActive = pillar.id === activePillarId;
            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillarId(pillar.id)}
                className={`relative text-left p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between group ${
                  isActive
                    ? "bg-slate-800 border-amber-500/80 shadow-xl shadow-amber-500/10 scale-[1.02]"
                    : "bg-slate-950/60 border-slate-800 hover:bg-slate-800/60 hover:border-slate-700"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-black px-2.5 py-1 rounded-lg ${isActive ? "bg-amber-500 text-slate-950" : "bg-slate-800 text-amber-400"}`}>
                      {pillar.number}
                    </span>
                    <div className={`p-2 rounded-xl bg-gradient-to-tr ${pillar.color} text-white shadow-md`}>
                      {iconMap[pillar.icon] || <Zap className="w-5 h-5" />}
                    </div>
                  </div>

                  <h3 className="font-bold text-sm text-slate-100 group-hover:text-amber-300 transition-colors mb-2 line-clamp-2">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-3">
                    {pillar.shortDesc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-amber-400">
                  <span>Explorar Pilar</span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? "translate-x-1" : ""}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Active Pillar Showcase Box */}
        <div className="rounded-3xl bg-slate-950 border border-amber-500/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-amber-500">
            {iconMap[activePillar.icon]}
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
            {/* Left Info Column */}
            <div className="lg:w-1/2 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Pilar Seleccionado {activePillar.number}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
                {activePillar.title}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {activePillar.shortDesc}
              </p>

              <div className="inline-block px-4 py-2 rounded-xl bg-slate-900 border border-amber-500/30 text-amber-300 text-xs font-bold shadow-inner">
                🎯 {activePillar.impactBadge}
              </div>
            </div>

            {/* Right Lists Column */}
            <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-6 bg-slate-900/80 p-6 rounded-2xl border border-slate-800">
              {/* Actions list */}
              <div className="space-y-3">
                <h4 className="text-xs font-extrabold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <span>Acciones concretas</span>
                </h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  {activePillar.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcomes list */}
              <div className="space-y-3">
                <h4 className="text-xs font-extrabold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <span>Resultados esperados</span>
                </h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  {activePillar.outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
