"use client";

import React, { useState } from "react";
import { ProposalConfig } from "@/config/proposal";
import { Calendar, CheckCircle2, Flag, ArrowRight } from "lucide-react";

interface RoadmapSectionProps {
  config: ProposalConfig;
  companyName: string;
}

export const RoadmapSection: React.FC<RoadmapSectionProps> = ({
  config,
  companyName,
}) => {
  const [activeMonth, setActiveMonth] = useState<number>(0);

  return (
    <section className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5" />
            <span>Cronograma Ejecutivo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100">
            Plan de Trabajo a 90 Días por Sábados
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Estructura organizada de entregables progresivos para asegurar que <strong className="text-amber-300">{companyName}</strong> vea resultados medibles desde el primer sábado.
          </p>
        </div>

        {/* Month Selector Tabs */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-12">
          {config.roadmap.map((item, idx) => {
            const isActive = idx === activeMonth;
            return (
              <button
                key={idx}
                onClick={() => setActiveMonth(idx)}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                  isActive
                    ? "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 scale-105"
                    : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                }`}
              >
                {item.month}: {item.phase}
              </button>
            );
          })}
        </div>

        {/* Active Month Content Card */}
        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 shadow-2xl max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-black px-3 py-1 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30">
                {config.roadmap[activeMonth].month}
              </span>
              <h3 className="text-2xl font-extrabold text-slate-100 mt-2">
                {config.roadmap[activeMonth].phase}
              </h3>
            </div>
            <p className="text-xs text-slate-400 max-w-md sm:text-right">
              {config.roadmap[activeMonth].focus}
            </p>
          </div>

          {/* Saturday Deliverables List */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Entregables y Metas por Sábado:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {config.roadmap[activeMonth].deliverables.map((del, dIdx) => (
                <div
                  key={dIdx}
                  className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-200 font-medium leading-relaxed">
                    {del}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
