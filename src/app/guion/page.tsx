import { actos } from "@/data/guion";
import Link from "next/link";

export const metadata = { title: "Guion — En Nombre de Baal" };

export default function GuionPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gold mb-4">Guion Cinematográfico</h1>
      <p className="text-bone-dim mb-8">4 actos · 24 escenas + 2 intercuts · ~21 minutos</p>

      <div className="flex gap-4 mb-12">
        <a href="/guion/guion-v3.pdf" target="_blank" rel="noopener noreferrer"
           className="px-4 py-2 bg-crimson text-bone rounded-lg text-sm font-semibold hover:bg-crimson-bright transition-colors">
          Descargar PDF v3
        </a>
        <a href="/guion/guion-v4.pdf" target="_blank" rel="noopener noreferrer"
           className="px-4 py-2 border border-border text-bone rounded-lg text-sm font-semibold hover:border-gold transition-colors">
          Descargar PDF v4
        </a>
      </div>

      {actos.map((acto) => (
        <div key={acto.num} className="mb-12">
          <div className="flex items-baseline gap-4 mb-6 border-b border-border pb-4">
            <span className="text-5xl font-bold text-crimson">{acto.num}</span>
            <div>
              <h2 className="text-2xl font-bold text-bone">{acto.title}</h2>
              <span className="text-sm text-gold tracking-widest">{acto.duration}</span>
            </div>
          </div>

          <div className="space-y-4">
            {acto.escenas.map((escena) => (
              <div key={escena.num} className="bg-card border border-border rounded-lg p-5 hover:border-crimson/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="text-xs font-mono text-gold bg-void px-2 py-1 rounded min-w-[3rem] text-center">
                    {escena.num}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-bone font-semibold">{escena.title}</h3>
                      <span className="text-xs text-bone-dim">{escena.duration}</span>
                    </div>
                    <p className="text-bone-dim text-sm leading-relaxed mb-3">{escena.description}</p>

                    {escena.music && (
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-gold">♪</span>
                        <span className="text-bone-dim italic">{escena.music}</span>
                      </div>
                    )}

                    {escena.videoRefs && escena.videoRefs.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {escena.videoRefs.map((ref, i) => (
                          <span key={i} className="text-xs text-crimson bg-crimson/10 px-2 py-0.5 rounded">
                            {ref}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="mt-12 p-6 bg-card border border-border rounded-lg">
        <h3 className="text-gold font-bold mb-4">Mapa Musical</h3>
        <div className="space-y-2 text-sm">
          <div className="grid grid-cols-3 gap-2 text-bone-dim">
            <span className="text-crimson">Esc 1</span><span className="col-span-2">Montaje en vivo (Demonas + Inmaculada + Ícaro + Chie Umbra)</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-bone-dim">
            <span className="text-crimson">Esc 4</span><span className="col-span-2">"Enter Sandman" (Metallica) — 3 seg referencia</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-bone-dim">
            <span className="text-crimson">Esc 7</span><span className="col-span-2">"Pitbull" — Pitbull HC (1994) audio archivo</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-bone-dim">
            <span className="text-crimson">Esc 11</span><span className="col-span-2">"Ícaro" (2016) — fragmento instrumental</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-bone-dim">
            <span className="text-crimson">Esc 16</span><span className="col-span-2">Mix de 6 discos (10-12s cada uno)</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-bone-dim">
            <span className="text-crimson">Esc 17</span><span className="col-span-2">"Inmaculada" (2019) — fragmento en vivo</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-bone-dim">
            <span className="text-crimson">Esc 19</span><span className="col-span-2">"Chie Umbra" (2026) — fragmento principal</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-bone-dim">
            <span className="text-crimson">Esc 23</span><span className="col-span-2">"Chie Umbra" (2026) — track completo volumen bajo</span>
          </div>
        </div>
      </div>
    </div>
  );
}