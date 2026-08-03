"use client";

import React, { useState } from "react";
import { ProposalConfig } from "@/config/proposal";
import { Briefcase, Building2, Edit2, Check, MessageSquare, PhoneCall, Award } from "lucide-react";

interface NavbarProps {
  config: ProposalConfig;
  companyName: string;
  onUpdateCompanyName: (name: string) => void;
  onOpenAcceptModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  config,
  companyName,
  onUpdateCompanyName,
  onOpenAcceptModal,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(companyName);

  const handleSave = () => {
    if (tempName.trim()) {
      onUpdateCompanyName(tempName.trim());
    }
    setIsEditing(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/90 border-b border-slate-800 text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-amber-500 via-orange-500 to-amber-300 p-0.5 shadow-lg shadow-amber-500/20">
            <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-amber-400" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg tracking-tight text-white">
                {config.author.name}
              </span>
              <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/30">
                Propuesta Sábados
              </span>
            </div>
            <p className="text-xs text-slate-400 hidden md:block">
              Para <strong className="text-slate-200">{config.clientName}</strong>
            </p>
          </div>
        </div>

        {/* Dynamic Company Name Customizer */}
        <div className="flex items-center bg-slate-800/80 border border-slate-700/70 rounded-full px-3.5 py-1.5 text-xs text-slate-300">
          <Building2 className="w-3.5 h-3.5 text-amber-400 mr-2 flex-shrink-0" />
          <span className="text-slate-400 mr-1 hidden sm:inline">Empresa:</span>
          {isEditing ? (
            <div className="flex items-center gap-1">
              <input
                type="text"
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSave()}
                className="bg-slate-950 text-white text-xs px-2 py-0.5 rounded border border-amber-500 focus:outline-none w-36 sm:w-48"
                autoFocus
              />
              <button
                onClick={handleSave}
                className="p-1 text-emerald-400 hover:text-emerald-300"
                title="Guardar"
              >
                <Check className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-amber-300 max-w-[140px] sm:max-w-[200px] truncate">
                {companyName}
              </span>
              <button
                onClick={() => setIsEditing(true)}
                className="text-slate-400 hover:text-white p-0.5 transition-colors"
                title="Editar nombre de empresa"
              >
                <Edit2 className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={`https://wa.me/${config.author.whatsappFormatted}?text=${encodeURIComponent(
              `Hola Alam, leí tu propuesta ejecutiva para ${companyName} y me gustaría coordinar una conversación.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all hover:scale-105"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={onOpenAcceptModal}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-lg shadow-amber-500/25 transition-all hover:scale-105 active:scale-95"
          >
            <Check className="w-4 h-4 stroke-[3]" />
            <span>Aceptar Propuesta</span>
          </button>
        </div>
      </div>
    </header>
  );
};
