import { storyboard } from "@/data/storyboard";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Galería — En Nombre de Baal" };

export default function GaleriaPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gold mb-4">Galería</h1>
      <p className="text-bone-dim mb-8">26 cuadros del storyboard · Krea2-Turbo-HD-V1</p>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {storyboard.map((frame) => (
          <div key={frame.id} className="break-inside-avoid mb-4 group relative overflow-hidden rounded-lg border border-border hover:border-gold/50 transition-colors">
            <img
              src={frame.image}
              alt={frame.title}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="text-xs font-mono text-gold mb-1">{frame.num} · {frame.duration}</div>
              <div className="text-sm text-bone font-semibold">{frame.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}