"use client";

import React from "react";
import { ProposalConfig } from "@/config/proposal";
import { Briefcase, Globe, Mail, PhoneCall } from "lucide-react";

interface FooterProps {
  config: ProposalConfig;
  companyName: string;
}

const LinkedInIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export const Footer: React.FC<FooterProps> = ({ config, companyName }) => {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-amber-400" />
              </div>
              <span className="font-extrabold text-lg text-white">
                {config.author.fullName}
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Propuesta ejecutiva de servicios sabáticos de optimización operativa, estructuras logísticas y desarrollo web creada para <strong className="text-amber-300">{config.clientName}</strong> ({companyName}).
            </p>

            <div className="text-xs text-slate-500">
              <p>📍 Santo Domingo, República Dominicana</p>
              <p>🎓 MBA en Ciencia de Datos & IA (CESTE, España) • Magna Cum Laude UNAPEC</p>
            </div>
          </div>

          {/* Contact & Links */}
          <div className="md:col-span-6 flex flex-col md:items-end justify-between space-y-4">
            <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-300">
              <a
                href={config.author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-amber-400 transition-colors"
              >
                <LinkedInIcon className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href={config.author.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-amber-400 transition-colors"
              >
                <Globe className="w-4 h-4 text-amber-400" />
                <span>Portafolio Web</span>
              </a>
              <a
                href={`mailto:${config.author.email}`}
                className="inline-flex items-center gap-1.5 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-400" />
                <span>{config.author.email}</span>
              </a>
              <a
                href={`tel:${config.author.phone}`}
                className="inline-flex items-center gap-1.5 hover:text-amber-400 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>{config.author.phone}</span>
              </a>
            </div>

            <p className="text-xs text-slate-500">
              Diseñado con Next.js, TypeScript & Tailwind CSS para Don José.
            </p>
          </div>
        </div>

        <div className="pt-8 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Alam Antonio Ozuna Silva. Todos los derechos reservados.</p>
          <p className="flex items-center justify-center gap-1">
            <span>Transformación Operativa & Excelencia cada Sábado</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
