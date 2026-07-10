import { locaciones } from "@/data/locaciones";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Locaciones — En Nombre de Baal" };

const locColors = [
  "border-l-crimson", "border-l-magenta", "border-l-violet", "border-l-cyan",
  "border-l-gold", "border-l-orange", "border-l-lime", "border-l-blue-e",
  "border-l-crimson", "border-l-magenta", "border-l-violet", "border-l-cyan",
  "border-l-gold", "border-l-orange", "border-l-lime", "border-l-blue-e", "border-l-crimson",
];
const locHex = ["#E63946","#FF006E","#9B5DE5","#00F5D4","#FCCC04","#FF6B35","#BAFF29","#00BBF9",
  "#E63946","#FF006E","#9B5DE5","#00F5D4","#FCCC04","#FF6B35","#BAFF29","#00BBF9","#E63946"];
const typeChips: Record<string, string> = {
  "Interior": "chip-crimson", "Exterior": "chip-cyan", "Recinto": "chip-violet",
  "Estudio": "chip-gold", "Bar": "chip-orange", "Sala": "chip-magenta",
};

export default function LocacionesPage() {
  return (
    <div className="bg-black">
      <section className="py-12 bg-void-mid border-b-3 border-violet">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-5xl md:text-7xl font-black heading-brutal text-bone mb-4">LOCACIONES</h1>
          <p className="text-bone-dim text-xs font-bold tracking-[0.3em] uppercase">17 Locaciones del Documental</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-4">
        {locaciones.map((loc, i) => (
          <div key={loc.id} className="card-brutal p-5"
            style={{ borderLeftWidth: "6px", borderLeftColor: locHex[i % locHex.length] }}>
            <div className="flex items-start gap-4">
              <div className="text-3xl font-black heading-brutal text-gold min-w-[3rem]">
                {String(loc.id).padStart(2, "0")}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-bone font-black tracking-wider uppercase text-sm">{loc.nombre}</h3>
                  <span className={`chip ${typeChips[loc.tipo] || "chip-cyan"}`}>{loc.tipo}</span>
                </div>
                <p className="text-bone-dim text-sm leading-relaxed mb-2">{loc.descripcion}</p>
                <div className="text-xs text-bone-dim">
                  <span className="text-crimson font-bold">Escenas:</span> {loc.escenas}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}