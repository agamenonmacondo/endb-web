import { locaciones } from "@/data/locaciones";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Locaciones — En Nombre de Baal" };

export default function LocacionesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gold mb-4">Locaciones</h1>
      <p className="text-bone-dim mb-8">17 locaciones del documental</p>

      <div className="space-y-4">
        {locaciones.map((loc) => (
          <div key={loc.id} className="bg-card border border-border rounded-lg p-5 hover:border-crimson/50 transition-colors">
            <div className="flex items-start gap-4">
              <div className="text-2xl font-bold text-crimson min-w-[2.5rem]">
                {String(loc.id).padStart(2, "0")}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-bone font-semibold">{loc.nombre}</h3>
                  <span className="text-xs text-gold bg-gold/10 px-2 py-0.5 rounded">{loc.tipo}</span>
                </div>
                <p className="text-bone-dim text-sm leading-relaxed mb-2">{loc.descripcion}</p>
                <div className="text-xs text-bone-dim">
                  <span className="text-crimson">Escenas:</span> {loc.escenas}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}