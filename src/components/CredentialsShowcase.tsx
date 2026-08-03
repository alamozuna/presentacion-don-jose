"use client";

import React from "react";
import { ProposalConfig } from "@/config/proposal";
import { Award, GraduationCap, CheckCircle, ExternalLink, Globe, Sparkles, Star } from "lucide-react";

interface CredentialsShowcaseProps {
  config: ProposalConfig;
}

const LinkedInIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export const CredentialsShowcase: React.FC<CredentialsShowcaseProps> = ({ config }) => {
  return (
    <section className="py-20 bg-slate-950 text-white border-t border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Respaldo de Autoridad y Confianza</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100">
            Formación Académica & Certificaciones
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Preparación técnica de primer nivel con mentalidad orientada a resultados tangibles para garantizar la excelencia en cada sábado.
          </p>
        </div>

        {/* Featured Main Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {config.credentials.map((cred, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    {cred.badge}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">{cred.period}</span>
                </div>

                <h3 className="font-extrabold text-base text-slate-100 group-hover:text-amber-300 transition-colors">
                  {cred.title}
                </h3>

                <p className="text-xs font-semibold text-amber-400/90">
                  {cred.institution}
                </p>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {cred.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <Star className="w-3.5 h-3.5 text-amber-400" />
                <span>Garantía de ejecución senior</span>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Skills List Strip */}
        <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-8 shadow-xl mb-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 pb-6 border-b border-slate-800">
            <div>
              <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span>Certificaciones Especializadas Adicionales</span>
              </h3>
              <p className="text-xs text-slate-400">
                Acreditadas por IBM, Google, Microsoft, INFOTEP y Toastmasters International.
              </p>
            </div>

            {/* Verification Links */}
            <div className="flex items-center gap-3">
              <a
                href={config.author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 border border-blue-500/30 transition-colors"
              >
                <LinkedInIcon className="w-4 h-4 text-blue-400" />
                <span>Ver Perfil LinkedIn</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <a
                href={config.author.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700 transition-colors"
              >
                <Globe className="w-4 h-4 text-amber-400" />
                <span>Portafolio Personal</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {config.certificationsList.map((cert, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition-colors"
              >
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-slate-200">{cert.name}</h4>
                  <p className="text-[11px] text-slate-400">
                    {cert.issuer} • <span className="text-amber-400/80">{cert.category}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Executive Highlight Banner */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center flex-shrink-0">
              <Award className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-amber-300">
                Empleado Destacado en Scotiabank (Diciembre 2024)
              </h4>
              <p className="text-xs text-slate-300">
                Reconocimiento oficial por consistencia operativa, alta velocidad de procesamiento y 0% de margen de error en datos bancarios corporativos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
