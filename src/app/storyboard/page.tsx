import { storyboard, actTitles } from "@/data/storyboard";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Storyboard — En Nombre de Baal" };

const frameBorderColors = [
  "border-crimson hover:shadow-[6px_6px_0_#E63946]",
  "border-magenta hover:shadow-[6px_6px_0_#FF006E]",
  "border-violet hover:shadow-[6px_6px_0_#9B5DE5]",
  "border-cyan hover:shadow-[6px_6px_0_#00F5D4]",
  "border-gold hover:shadow-[6px_6px_0_#FCCC04]",
  "border-orange hover:shadow-[6px_6px_0_#FF6B35]",
];

const actAccent = ["text-crimson", "text-magenta", "text-violet", "text-cyan"];
const actChip = ["chip-crimson", "chip-magenta", "chip-violet", "chip-cyan"];

export default function StoryboardPage() {
  return (
    <div className="bg-black">
      {/* Header */}
      <section className="py-12 bg-void-mid border-b-3 border-crimson">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-5xl md:text-7xl font-black heading-brutal text-bone mb-4">STORYBOARD</h1>
          <p className="text-bone-dim text-xs font-bold tracking-[0.3em] uppercase">
            26 Cuadros · Krea2-Turbo-HD-V1 · 1344×576 · Dark Psychedelic Sidereal
          </p>
        </div>
      </section>

      {[1, 2, 3, 4].map((actNum) => (
        <div key={actNum} className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex items-center gap-4 mb-8">
            <span className={`text-6xl font-black heading-brutal ${actAccent[actNum - 1]}`}>{actNum}</span>
            <h2 className="text-xl md:text-2xl font-black text-bone tracking-tight">{actTitles[actNum]}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {storyboard.filter((f) => f.act === actNum).map((frame, i) => (
              <div key={frame.id} className={`card-brutal overflow-hidden border-3 ${frameBorderColors[i % frameBorderColors.length]} group`}>
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={frame.image}
                    alt={frame.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    style={{ filter: "saturate(1.3) contrast(1.1)" }}
                  />
                  <div className="absolute top-0 left-0 bg-black/80 px-2 py-1">
                    <span className={`font-mono font-black text-xs ${actAccent[actNum - 1]}`}>{frame.num}</span>
                  </div>
                  <div className="absolute top-0 right-0 bg-black/80 px-2 py-1">
                    <span className="font-mono font-black text-[10px] text-bone-dim">{frame.duration}</span>
                  </div>
                  {frame.importance === 3 && (
                    <div className="absolute bottom-0 right-0 bg-black/80 px-2 py-1">
                      <span className="text-gold font-black text-xs">★★★</span>
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="text-bone font-black text-sm tracking-wider uppercase mb-2">{frame.title}</h3>
                  {frame.music && (
                    <div className="flex items-center gap-1 text-xs mb-2">
                      <span className="text-crimson font-black">♪</span>
                      <span className="text-bone-dim italic">{frame.music}</span>
                    </div>
                  )}
                  {frame.videoRefs && frame.videoRefs.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-2">
                      {frame.videoRefs.map((ref, j) => (
                        <span key={j} className={`chip ${actChip[actNum - 1]} text-[9px]`}>{ref}</span>
                      ))}
                    </div>
                  )}
                  <p className="text-[11px] text-bone-dim/60 leading-relaxed line-clamp-2">{frame.prompt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}