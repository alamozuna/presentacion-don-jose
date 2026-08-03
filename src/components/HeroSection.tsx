"use client";

import React from "react";
import Image from "next/image";
import { ProposalConfig } from "@/config/proposal";
import { Award, GraduationCap, CheckCircle2, ArrowRight, Calendar, Sparkles, ShieldCheck, Download } from "lucide-react";

interface HeroSectionProps {
  config: ProposalConfig;
  companyName: string;
  onOpenAcceptModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  config,
  companyName,
  onOpenAcceptModal,
}) => {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white pt-12 pb-20 border-b border-slate-800">
      {/* Decorative background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Announcement Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium shadow-lg backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>Propuesta de Servicios Sabáticos Exclusiva para <strong className="text-white">{config.clientName}</strong></span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-100 leading-[1.15]">
              Transformación Operativa y Soluciones Reales cada <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">Sábado</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Plan estratégico de trabajo dedicado todos los sábados para <strong className="text-amber-300">{companyName}</strong>. Diseñado para optimizar procesos, desahogar el trabajo acumulado, construir estructuras logísticas, desarrollar su página web corporativa y solucionar cualquier problema imprevisto.
            </p>

            {/* Value Highlights Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/70 border border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-slate-200 font-medium">Optimización y automatización de procesos</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/70 border border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-slate-200 font-medium">Desahogo total de trabajo atrasado</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/70 border border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-slate-200 font-medium">Sistemas logísticos y dashboards gerenciales</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/70 border border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-slate-200 font-medium">Página web corporativa a la medida</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onOpenAcceptModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-extrabold bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 text-slate-950 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105 transition-all active:scale-95"
              >
                <span>Aceptar Propuesta para {companyName}</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#pilares"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-sm font-semibold bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 hover:border-slate-600 transition-all"
              >
                <span>Ver los 5 Pilares del Servicio</span>
              </a>
            </div>

            {/* Schedule Summary Banner */}
            <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold">
              <Calendar className="w-4 h-4" />
              <span>Modalidad: 8 Horas Intensivas cada Sábado (32h/mes de Ejecución Senior)</span>
            </div>
          </div>

          {/* Profile Photo & Credential Card Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer decorative ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-300 rounded-3xl blur opacity-75 animate-pulse" />

              <div className="relative rounded-3xl bg-slate-900 p-6 border border-slate-800 shadow-2xl space-y-6">
                {/* Photo Frame */}
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-inner group">
                  <Image
                    src={config.author.photoUrl}
                    alt={config.author.fullName}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Floating Badge on Photo */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 shadow-lg">
                    <p className="text-xs font-bold text-white uppercase tracking-wider">
                      {config.author.fullName}
                    </p>
                    <p className="text-[11px] text-amber-400 font-medium truncate">
                      MBA Ciencia de Datos & IA • Magna Cum Laude
                    </p>
                  </div>
                </div>

                {/* Authority Highlights */}
                <div className="space-y-3 text-left">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <GraduationCap className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-200">Magna Cum Laude & MBA en España</h4>
                      <p className="text-[11px] text-slate-400">UNAPEC Negocios Internacionales & CESTE Zaragoza MBA en Ciencia de Datos e IA.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <Award className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-200">Empleado Destacado Scotiabank</h4>
                      <p className="text-[11px] text-slate-400">Reconocido por consistencia, velocidad y cero errores en datos crediticios corporativos.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <ShieldCheck className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-200">Transformación Digital & Agentes del Cambio</h4>
                      <p className="text-[11px] text-slate-400">Certificado en estructuración de procesos, Método Harvard y herramientas de IA.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
