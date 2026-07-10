import { storyboard } from "@/data/storyboard";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Galería — Mamá, soy una sombra" };

const borderColors = [
  "#E63946", "#FF006E", "#9B5DE5", "#00F5D4", "#FCCC04", "#FF6B35", "#BAFF29", "#00BBF9",
  "#E63946", "#FF006E", "#9B5DE5", "#00F5D4", "#FCCC04", "#FF6B35", "#BAFF29", "#00BBF9",
  "#E63946", "#FF006E", "#9B5DE5", "#00F5D4", "#FCCC04", "#FF6B35", "#BAFF29", "#00BBF9",
  "#E63946", "#FF006E",
];

export default function GaleriaPage() {
  return (
    <div className="bg-black">
      <section className="py-12 bg-void-mid border-b-3 border-blue-e">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-5xl md:text-7xl font-black heading-brutal text-bone mb-4">GALERÍA</h1>
          <p className="text-bone-dim text-xs font-bold tracking-[0.3em] uppercase">
            26 CUADROS DEL STORYBOARD · DARK PSYCHEDELIC SIDEREAL
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {storyboard.map((frame, i) => (
            <div key={frame.id} className="mb-4 break-inside-avoid group relative overflow-hidden"
              style={{ border: `3px solid ${borderColors[i % borderColors.length]}` }}>
              <img
                src={frame.image}
                alt={frame.title}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                style={{ filter: "saturate(1.2) contrast(1.1)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="font-mono font-black text-xs text-gold mb-1">{frame.num} · {frame.duration}</div>
                <div className="text-bone font-black text-sm tracking-wider uppercase">{frame.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}