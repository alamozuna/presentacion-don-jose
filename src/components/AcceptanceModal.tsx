"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { ProposalConfig } from "@/config/proposal";
import { X, CheckCircle2, MessageSquare, Mail, Sparkles, Send } from "lucide-react";

interface AcceptanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: ProposalConfig;
  companyName: string;
}

export const AcceptanceModal: React.FC<AcceptanceModalProps> = ({
  isOpen,
  onClose,
  config,
  companyName,
}) => {
  const [selectedPhase, setSelectedPhase] = useState<string>("Fase 1 (Diagnóstico & Claro)");
  const [notes, setNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const triggerConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#f59e0b", "#10b981", "#3b82f6", "#ec4899"],
    });
  };

  const handleAccept = () => {
    triggerConfetti();
    setIsSubmitted(true);

    const textMessage = `¡Hola Alam! Confirmo el inicio del proyecto de trabajo sabático para "${companyName}". Opción elegida: ${selectedPhase}. ${
      notes ? `Nota adicional de Don José: ${notes}` : ""
    }`;

    // Open WhatsApp after short delay
    setTimeout(() => {
      window.open(
        `https://wa.me/${config.author.whatsappFormatted}?text=${encodeURIComponent(textMessage)}`,
        "_blank"
      );
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-3xl bg-slate-900 border border-amber-500/40 p-6 sm:p-8 shadow-2xl text-white space-y-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {!isSubmitted ? (
          <>
            <div className="text-center space-y-2">
              <div className="inline-flex p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 mb-2">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-100">
                Aceptar Propuesta para {companyName}
              </h3>
              <p className="text-xs text-slate-400">
                Al hacer clic se enviará la confirmación directa a Alam Ozuna por WhatsApp para iniciar el primer sábado.
              </p>
            </div>

            <div className="space-y-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 text-xs">
              <div className="flex justify-between items-center text-slate-300">
                <span>Cliente:</span>
                <strong className="text-white">{config.clientName}</strong>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>Empresa:</span>
                <strong className="text-amber-300">{companyName}</strong>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>Modalidad:</span>
                <strong className="text-emerald-400">Sábados de 9:00 AM a 2:00 PM (5h/día)</strong>
              </div>
              <div className="flex justify-between items-center text-slate-300 pt-2 border-t border-slate-800">
                <span>Cobro por Hito:</span>
                <strong className="text-amber-400">Por Fases Progresivas Independientes</strong>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300 block">
                Selecciona la modalidad de inicio:
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer hover:border-amber-500/50">
                  <input
                    type="radio"
                    name="phaseOption"
                    checked={selectedPhase === "Fase 1 (Diagnóstico & Claro)"}
                    onChange={() => setSelectedPhase("Fase 1 (Diagnóstico & Claro)")}
                    className="accent-amber-500"
                  />
                  <span className="text-xs text-slate-200">
                    <strong>Fase 1:</strong> Servicios Claro, Puesta al Día & Diagnóstico Base
                  </span>
                </label>
                <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer hover:border-amber-500/50">
                  <input
                    type="radio"
                    name="phaseOption"
                    checked={selectedPhase === "Plan Completo por Fases"}
                    onChange={() => setSelectedPhase("Plan Completo por Fases")}
                    className="accent-amber-500"
                  />
                  <span className="text-xs text-slate-200">
                    <strong>Plan Integral:</strong> Ejecución Continua por Fases de 90 Días
                  </span>
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300 block">
                Comentarios o asuntos prioritarios para el Sábado 1 (Opcional):
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Ejemplo: Priorizar la separación de facturas de Claro e inventario de personal..."
                className="w-full h-20 p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div className="space-y-3 pt-2">
              <button
                onClick={handleAccept}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-extrabold text-sm bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400 hover:from-amber-400 hover:to-orange-400 text-slate-950 shadow-xl shadow-amber-500/25 transition-all hover:scale-[1.02]"
              >
                <Send className="w-4 h-4" />
                <span>Confirmar y Enviar a WhatsApp</span>
              </button>

              <p className="text-[11px] text-center text-slate-500">
                Contacto directo: {config.author.phone} • {config.author.email}
              </p>
            </div>
          </>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-100">
              ¡Propuesta Aceptada con Éxito!
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Abriendo WhatsApp para comunicarte directamente con Alam Ozuna y agendar el primer sábado en <strong>{companyName}</strong>.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200"
            >
              Cerrar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
