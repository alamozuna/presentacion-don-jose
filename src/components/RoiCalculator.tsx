"use client";

import React, { useState } from "react";
import { ProposalConfig } from "@/config/proposal";
import { Calculator, TrendingUp, Clock, DollarSign, CheckCircle2, ArrowRight } from "lucide-react";

interface RoiCalculatorProps {
  config: ProposalConfig;
  companyName: string;
  onOpenAcceptModal: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({
  config,
  companyName,
  onOpenAcceptModal,
}) => {
  const [lostHoursPerWeek, setLostHoursPerWeek] = useState<number>(10);
  const [hourlyValueDop, setHourlyValueDop] = useState<number>(600);

  // Calculations
  const hoursSavedPerMonth = Math.round(lostHoursPerWeek * 4 * 0.7); // 70% reduction in friction
  const hoursSavedPerYear = hoursSavedPerMonth * 12;
  const yearlySavingsDop = hoursSavedPerYear * hourlyValueDop;

  return (
    <section className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Simulador de Retorno de Inversión</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100">
            Calculadora de Impacto para <span className="text-emerald-400">{companyName}</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Ajusta los controles a la realidad de Don José para proyectar cuántas horas y dinero se ahorrarán al implementar el trabajo sabático de optimización.
          </p>
        </div>

        {/* Interactive Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl bg-slate-950 border border-slate-800 p-6 sm:p-10 shadow-2xl">
          {/* Sliders Input Column */}
          <div className="lg:col-span-6 space-y-8">
            <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-amber-400" />
              <span>Parámetros Operativos Actuales</span>
            </h3>

            {/* Slider 1: Lost hours per week */}
            <div className="space-y-3 bg-slate-900/80 p-5 rounded-2xl border border-slate-800">
              <div className="flex justify-between items-center text-sm font-semibold">
                <label className="text-slate-300">Horas semanales pérdidas en fricción administrativa:</label>
                <span className="px-3 py-1 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30 font-mono font-bold text-base">
                  {lostHoursPerWeek} hrs/sem
                </span>
              </div>
              <input
                type="range"
                min={3}
                max={30}
                step={1}
                value={lostHoursPerWeek}
                onChange={(e) => setLostHoursPerWeek(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[11px] text-slate-500">
                <span>3 hrs (Baja fricción)</span>
                <span>15 hrs (Promedio)</span>
                <span>30 hrs (Alta acumulación)</span>
              </div>
            </div>

            {/* Slider 2: Estimated hourly value */}
            <div className="space-y-3 bg-slate-900/80 p-5 rounded-2xl border border-slate-800">
              <div className="flex justify-between items-center text-sm font-semibold">
                <label className="text-slate-300">Valor estimado del tiempo operativo (DOP / hora):</label>
                <span className="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-mono font-bold text-base">
                  RD$ {hourlyValueDop.toLocaleString()} /h
                </span>
              </div>
              <input
                type="range"
                min={300}
                max={2500}
                step={50}
                value={hourlyValueDop}
                onChange={(e) => setHourlyValueDop(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[11px] text-slate-500">
                <span>RD$ 300/h</span>
                <span>RD$ 1,000/h</span>
                <span>RD$ 2,500/h</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200">
              💡 <strong>Impacto del Servicio del Sábado:</strong> En solo 4 sábados al mes (32 horas de ejecución senior pura), se resuelven los cuellos de botella que consumen tiempo durante toda la semana.
            </div>
          </div>

          {/* Projected Outcomes Output Column */}
          <div className="lg:col-span-6 space-y-6 bg-slate-900 p-8 rounded-2xl border border-emerald-500/30 shadow-xl">
            <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-emerald-400" />
              <span>Resultados Proyectados para Don José</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Stat 1: Monthly hours saved */}
              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold mb-1">
                  <Clock className="w-4 h-4" />
                  <span>Ahorro Mensual</span>
                </div>
                <div className="text-3xl font-black text-white">
                  {hoursSavedPerMonth} <span className="text-sm font-normal text-slate-400">horas/mes</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Tiempo recuperado para vender y atender clientes.
                </p>
              </div>

              {/* Stat 2: Yearly hours saved */}
              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold mb-1">
                  <Clock className="w-4 h-4" />
                  <span>Ahorro Anual</span>
                </div>
                <div className="text-3xl font-black text-white">
                  {hoursSavedPerYear} <span className="text-sm font-normal text-slate-400">horas/año</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Equivalente a más de {Math.round(hoursSavedPerYear / 8)} días laborales completos.
                </p>
              </div>
            </div>

            {/* Stat 3: Financial ROI */}
            <div className="p-6 rounded-xl bg-gradient-to-r from-emerald-950 via-slate-950 to-slate-950 border border-emerald-500/50 shadow-inner">
              <span className="text-xs font-extrabold uppercase text-emerald-400 tracking-wider">
                Ahorro de Valor Operativo Estimado por Año
              </span>
              <div className="text-3xl sm:text-4xl font-black text-emerald-300 mt-1">
                RD$ {yearlySavingsDop.toLocaleString()} <span className="text-xs font-normal text-slate-400">/ año</span>
              </div>
              <p className="text-xs text-slate-300 mt-2">
                Valor tangible generado al eliminar la ineficiencia y dejar la operación ordenada y automatizada.
              </p>
            </div>

            <button
              onClick={onOpenAcceptModal}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-extrabold text-sm bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02]"
            >
              <span>Asegurar Sábados para {companyName}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
