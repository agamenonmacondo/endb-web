import { actos } from "@/data/guion";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Guion — En Nombre de Baal" };

const actColors = [
  { border: "border-crimson", text: "text-crimson", bg: "bg-crimson/10", chip: "chip-crimson" },
  { border: "border-magenta", text: "text-magenta", bg: "bg-magenta/10", chip: "chip-magenta" },
  { border: "border-violet", text: "text-violet", bg: "bg-violet/10", chip: "chip-violet" },
  { border: "border-cyan", text: "text-cyan", bg: "bg-cyan/10", chip: "chip-cyan" },
];

export default function GuionPage() {
  return (
    <div className="bg-black">
      {/* Header */}
      <section className="gradient-magma py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-black heading-brutal text-bone mb-4">GUION</h1>
          <p className="text-bone/70 text-sm font-bold tracking-[0.3em] uppercase">
            4 Actos · 24 Escenas + 2 Intercuts · ~21 Minutos
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-6">
            <a href="/guion/guion-v3.pdf" target="_blank" rel="noopener noreferrer" className="btn-brutal btn-crimson text-[10px]">
              DESCARGAR PDF v3
            </a>
            <a href="/guion/guion-v4.pdf" target="_blank" rel="noopener noreferrer" className="btn-brutal btn-outline text-[10px]">
              DESCARGAR PDF v4
            </a>
          </div>
        </div>
      </section>

      {/* Actos */}
      {actos.map((acto, actIdx) => {
        const c = actColors[actIdx];
        return (
          <div key={acto.num} className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
            <div className="flex items-baseline gap-4 mb-8 border-b-3 border-void-mid pb-4">
              <span className={`text-6xl md:text-8xl font-black heading-brutal ${c.text}`}>{acto.num}</span>
              <div>
                <h2 className="text-2xl md:text-3xl font-black tracking-tight text-bone">{acto.title}</h2>
                <span className={`chip ${c.chip} mt-2`}>{acto.duration}</span>
              </div>
            </div>

            <div className="space-y-4">
              {acto.escenas.map((escena) => (
                <div key={escena.num} className={`card-brutal p-5 ${c.border}`}>
                  <div className="flex items-start gap-4">
                    <div className={`text-xs font-mono font-black ${c.text} bg-void px-2 py-1 rounded min-w-[3rem] text-center`}>
                      {escena.num}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-bone font-black text-sm tracking-wider uppercase">{escena.title}</h3>
                        <span className="text-bone-dim text-xs font-mono">{escena.duration}</span>
                      </div>
                      <p className="text-bone-dim text-sm leading-relaxed mb-3">{escena.description}</p>

                      {escena.music && (
                        <div className="flex items-center gap-2 text-xs">
                          <span className="text-crimson font-black">♪</span>
                          <span className="text-bone-dim italic">{escena.music}</span>
                        </div>
                      )}

                      {escena.videoRefs && escena.videoRefs.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1">
                          {escena.videoRefs.map((ref, i) => (
                            <span key={i} className={`chip ${c.chip} text-[9px]`}>{ref}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {/* Mapa Musical */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="card-brutal border-gold p-6">
          <h3 className="heading-acid text-gold text-sm mb-6">MAPA MUSICAL</h3>
          <div className="space-y-3 text-sm">
            {[
              { esc: "01", music: "Montaje en vivo (Demonas + Inmaculada + Ícaro + Chie Umbra)" },
              { esc: "04", music: "\"Enter Sandman\" (Metallica) — 3 seg referencia" },
              { esc: "07", music: "\"Pitbull\" — Pitbull HC (1994) audio archivo" },
              { esc: "11", music: "\"Ícaro\" (2016) — fragmento instrumental" },
              { esc: "16", music: "Mix de 6 discos (10-12s cada uno)" },
              { esc: "17", music: "\"Inmaculada\" (2019) — fragmento en vivo" },
              { esc: "19", music: "\"Chie Umbra\" (2026) — fragmento principal" },
              { esc: "23", music: "\"Chie Umbra\" (2026) — track completo volumen bajo" },
            ].map((m) => (
              <div key={m.esc} className="flex gap-4">
                <span className="text-crimson font-mono font-black min-w-[2.5rem]">{m.esc}</span>
                <span className="text-bone-dim">{m.music}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}