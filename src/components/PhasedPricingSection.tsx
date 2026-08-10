"use client";

import React, { useState } from "react";
import { ProposalConfig, PhasedPricingStage } from "@/config/proposal";
import { Layers, CheckCircle2, ShieldCheck, ArrowRight, Sparkles, DollarSign, Lock } from "lucide-react";

interface PhasedPricingSectionProps {
  config: ProposalConfig;
  companyName: string;
  onOpenAcceptModal: () => void;
}

export const PhasedPricingSection: React.FC<PhasedPricingSectionProps> = ({
  config,
  companyName,
  onOpenAcceptModal,
}) => {
  const [selectedPhaseId, setSelectedPhaseId] = useState<string>(
    config.phasedPricing[0]?.id || "fase1"
  );

  return (
    <section id="fases" className="py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <DollarSign className="w-4 h-4" />
            <span>Modelo de Ejecución por Etapas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100">
            Estructura de Trabajo y <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">Cobro por Hitos</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Para total tranquilidad de Don José en <strong className="text-amber-300">{companyName}</strong>, el proyecto no requiere un compromiso económico global intimidante de un solo golpe. Trabajamos por fases independientes: <span className="text-slate-200 font-semibold">ves los resultados tangibles de la primera fase y avanzas con total entusiasmo a la siguiente.</span>
          </p>
        </div>

        {/* Phase Selector Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {config.phasedPricing.map((stage: PhasedPricingStage) => {
            const isSelected = stage.id === selectedPhaseId;

            return (
              <div
                key={stage.id}
                onClick={() => setSelectedPhaseId(stage.id)}
                className={`relative rounded-3xl p-6 sm:p-8 border transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                  isSelected
                    ? `${stage.color} shadow-2xl scale-[1.02] ring-2 ring-amber-500/50`
                    : "bg-slate-900/60 border-slate-800 hover:bg-slate-900/90 hover:border-slate-700"
                }`}
              >
                {/* Top Badge & Number */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black px-3 py-1 rounded-xl bg-slate-950/80 border border-slate-700/60 text-amber-400">
                      {stage.phaseNumber}
                    </span>
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full ${
                      isSelected
                        ? "bg-amber-400 text-slate-950"
                        : "bg-slate-800 text-slate-300"
                    }`}>
                      {stage.badge}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-amber-300 transition-colors mb-2">
                      {stage.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {stage.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Bottom Impact & Mode */}
                <div className="mt-8 pt-4 border-t border-slate-800/80 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                    <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                    <span>{stage.investmentLabel}</span>
                  </div>

                  <p className="text-[11px] text-slate-400 italic">
                    {stage.paymentMode}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Deliverables Card for Selected Phase */}
        {(() => {
          const activeStage =
            config.phasedPricing.find((s) => s.id === selectedPhaseId) ||
            config.phasedPricing[0];

          return (
            <div className="rounded-3xl bg-slate-900 border border-amber-500/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
              <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                {/* Left Info Column */}
                <div className="lg:w-1/2 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Detalle de la {activeStage.phaseNumber}: {activeStage.title}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
                    Beneficio Directo para Don José
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed bg-slate-950 p-4 rounded-2xl border border-slate-800">
                    💡 <strong>{activeStage.businessImpact}</strong>
                  </p>

                  <div className="space-y-2 text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <Lock className="w-4 h-4 text-emerald-400" />
                      <span><strong>Sin riesgos:</strong> Apruebas cada etapa únicamente al comprobar el resultado de la anterior.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-400" />
                      <span><strong>Entregables 100% tuyos:</strong> Documentos, bases de datos y accesos quedan bajo propiedad de la empresa.</span>
                    </div>
                  </div>
                </div>

                {/* Right Deliverables Column */}
                <div className="lg:w-1/2 w-full bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
                  <h4 className="text-xs font-extrabold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                    <Layers className="w-4 h-4" />
                    <span>Entregables Clave de esta Etapa</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeStage.keyDeliverables.map((item, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-2.5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-200 font-medium leading-normal">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3">
                    <button
                      onClick={onOpenAcceptModal}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-extrabold text-sm bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400 text-slate-950 shadow-lg shadow-amber-500/20 hover:scale-[1.02] transition-all"
                    >
                      <span>Iniciar con la {activeStage.phaseNumber}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
};
