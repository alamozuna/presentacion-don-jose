import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Propuesta Ejecutiva de Servicios Sabáticos | Alam Ozuna para Don José",
  description: "Plan integral de trabajo cada sábado: optimización de procesos, desahogo de trabajo atrasado, creación de estructuras logísticas, desarrollo web y solución de imprevistos por Alam Ozuna (Magna Cum Laude & MBA en IA).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${outfit.variable} ${inter.variable} dark scroll-smooth`}>
      <body className="bg-slate-950 text-slate-100 font-sans antialiased min-h-screen selection:bg-amber-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
