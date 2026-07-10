import { timeline } from "@/data/timeline";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Timeline — Mamá, soy una sombra" };

const typeStyles: Record<string, { chip: string; dot: string; border: string }> = {
  album: { chip: "chip-gold", dot: "bg-gold", border: "border-l-gold" },
  live: { chip: "chip-crimson", dot: "bg-crimson", border: "border-l-crimson" },
  milestone: { chip: "chip-violet", dot: "bg-violet", border: "border-l-violet" },
  band: { chip: "chip-cyan", dot: "bg-cyan", border: "border-l-cyan" },
};
const typeLabels: Record<string, string> = {
  album: "DISCO", live: "EN VIVO", milestone: "HITO", band: "BANDA",
};
const typeHex: Record<string, string> = {
  album: "#FCCC04", live: "#E63946", milestone: "#9B5DE5", band: "#00F5D4",
};

export default function TimelinePage() {
  return (
    <div className="bg-black">
      <section className="py-12 bg-void-mid border-b-3 border-orange">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-5xl md:text-7xl font-black heading-brutal text-bone mb-4">CRONOLOGÍA</h1>
          <p className="text-bone-dim text-xs font-bold tracking-[0.3em] uppercase">
            1994 → 2026 · 32 AÑOS DE CARRERA MUSICAL
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-crimson via-magenta via-violet to-cyan" />

          <div className="space-y-6">
            {timeline.map((event, i) => {
              const style = typeStyles[event.type] || typeStyles.milestone;
              return (
                <div key={i} className="relative pl-16">
                  {/* Dot */}
                  <div className={`absolute left-4 top-3 w-5 h-5 rounded-full border-3 border-black ${style.dot}`}
                    style={{ boxShadow: `0 0 10px ${typeHex[event.type] || "#9B5DE5"}` }} />

                  <div className="card-brutal p-5"
                    style={{ borderLeftWidth: "6px", borderLeftColor: typeHex[event.type] || "#9B5DE5" }}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl md:text-4xl font-black heading-brutal text-gold">{event.year}</span>
                      <span className={`chip ${style.chip}`}>{typeLabels[event.type]}</span>
                    </div>
                    <h3 className="text-bone font-black text-sm tracking-wider uppercase mb-1">{event.title}</h3>
                    <p className="text-bone-dim text-sm leading-relaxed">{event.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}