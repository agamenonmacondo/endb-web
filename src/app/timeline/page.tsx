import { timeline } from "@/data/timeline";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Timeline — En Nombre de Baal" };

const typeColors: Record<string, string> = {
  album: "text-gold border-gold",
  live: "text-crimson border-crimson",
  milestone: "text-nebula border-nebula",
  band: "text-bone border-bone-dim",
};

const typeLabels: Record<string, string> = {
  album: "Disco",
  live: "En vivo",
  milestone: "Hito",
  band: "Banda",
};

export default function TimelinePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gold mb-4">Cronología</h1>
      <p className="text-bone-dim mb-8">1994 → 2026 · 32 años de carrera musical</p>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-8">
          {timeline.map((event, i) => (
            <div key={i} className="relative pl-12">
              {/* Dot */}
              <div className={`absolute left-2 top-2 w-5 h-5 rounded-full border-2 ${typeColors[event.type]} bg-void`} />

              <div className="bg-card border border-border rounded-lg p-5 hover:border-crimson/50 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl font-bold text-gold">{event.year}</span>
                  <span className={`text-xs px-2 py-0.5 rounded border ${typeColors[event.type]}`}>
                    {typeLabels[event.type]}
                  </span>
                </div>
                <h3 className="text-bone font-semibold mb-1">{event.title}</h3>
                <p className="text-bone-dim text-sm leading-relaxed">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}