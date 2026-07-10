import { storyboard, actTitles } from "@/data/storyboard";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Storyboard — En Nombre de Baal" };

export default function StoryboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gold mb-4">Storyboard</h1>
      <p className="text-bone-dim mb-8">26 cuadros · Krea2-Turbo-HD-V1 · 1344×576 · dark psychedelic sidereal</p>

      {[1, 2, 3, 4].map((actNum) => (
        <div key={actNum} className="mb-12">
          <div className="flex items-center gap-3 mb-6 border-b border-border pb-3">
            <span className="text-3xl font-bold text-crimson">{actNum}</span>
            <h2 className="text-xl font-bold text-bone">{actTitles[actNum]}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {storyboard.filter((f) => f.act === actNum).map((frame) => (
              <div key={frame.id} className="bg-card border border-border rounded-lg overflow-hidden hover:border-gold/50 transition-colors group">
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={frame.image}
                    alt={frame.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2 bg-void/80 px-2 py-1 rounded text-xs font-mono text-gold">
                    {frame.num}
                  </div>
                  <div className="absolute top-2 right-2 bg-void/80 px-2 py-1 rounded text-xs text-bone-dim">
                    {frame.duration}
                  </div>
                  {frame.importance === 3 && (
                    <div className="absolute bottom-2 right-2 text-gold text-lg">★★★</div>
                  )}
                  {frame.importance === 2 && (
                    <div className="absolute bottom-2 right-2 text-gold text-lg">★★</div>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="text-bone font-semibold text-sm mb-2">{frame.title}</h3>

                  {frame.music && (
                    <div className="flex items-center gap-1 text-xs mb-2">
                      <span className="text-gold">♪</span>
                      <span className="text-bone-dim italic truncate">{frame.music}</span>
                    </div>
                  )}

                  {frame.videoRefs && frame.videoRefs.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-2">
                      {frame.videoRefs.map((ref, i) => (
                        <span key={i} className="text-xs text-crimson bg-crimson/10 px-1.5 py-0.5 rounded">
                          {ref}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="text-xs text-bone-dim/70 leading-relaxed line-clamp-3">{frame.prompt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}