import { storyboard } from "@/data/storyboard";
import { videos } from "@/data/videos";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Matriz — Mamá, soy una sombra" };

const matrix: Record<string, string[]> = {
  "01": ["Garage Bar 2024", "Revelent Hall 2024", "Tattoo Fest 2024", "Death to All 2024", "Storm Bar", "Soundtech"],
  "07": ["Pitbull HC Madrid 2017", "AeC SIPVDC", "DACELOS Strife"],
  "08": ["Pitbull HC Madrid 2017"],
  "09": ["AeC SIPVDC"],
  "11": ["Live Set 2023", "Garage Bar 2024", "Storm Bar", "Soundtech"],
  "13": ["Spotify screenshot"],
  "15": ["Demonas Video Oficial", "Dopaca", "Rezo", "Muerte al Rey", "Frío", "El Tiempo"],
  "16": ["Emron820815", "Ícaro", "Inmaculada", "Si No Vuelvo", "Demonas", "Chie Umbra"],
  "17": ["Soundtech", "Audio Room", "Storm Bar", "BBR", "Garage Bar", "Tattoo Fest", "Death to All", "Revelent"],
  "18": ["Tattoo Fest 2024", "Demonas Video Oficial"],
  "19": ["6 álbumes", "Spotify screenshot"],
  "20": ["Live Set 2023", "Garage Bar 2024"],
  "23": ["Chie Umbra 2026"],
  "24": ["Live Set 2023"],
};

export default function MatrizPage() {
  const keyVideos = videos.filter((v) => v.importance === 3);

  return (
    <div className="bg-black">
      <section className="py-12 bg-void-mid border-b-3 border-lime">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-5xl md:text-7xl font-black heading-brutal text-bone mb-4">MATRIZ</h1>
          <p className="text-bone-dim text-xs font-bold tracking-[0.3em] uppercase">
            VIDEO × ESCENA · CRUCE DE REFERENCIAS
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-3 border-crimson">
                <th className="text-left p-3 text-[10px] font-black tracking-[0.3em] text-crimson">ESCENA</th>
                <th className="text-left p-3 text-[10px] font-black tracking-[0.3em] text-magenta">TÍTULO</th>
                <th className="text-left p-3 text-[10px] font-black tracking-[0.3em] text-violet">VIDEOS DE REFERENCIA</th>
              </tr>
            </thead>
            <tbody>
              {storyboard.map((frame) => {
                const refs = matrix[frame.num] || frame.videoRefs || [];
                if (refs.length === 0) return null;
                return (
                  <tr key={frame.id} className="border-b border-void-mid hover:bg-void-mid/50 transition-colors">
                    <td className="p-3">
                      <span className="font-mono font-black text-gold text-sm">{frame.num}</span>
                    </td>
                    <td className="p-3">
                      <span className="text-bone font-bold text-xs tracking-wider uppercase">{frame.title}</span>
                    </td>
                    <td className="p-3">
                      <div className="flex flex-wrap gap-1">
                        {refs.map((ref, i) => (
                          <span key={i} className="chip chip-crimson text-[9px]">{ref}</span>
                        ))}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Key Videos */}
        <div className="mt-16">
          <h2 className="heading-acid text-gold text-sm mb-6">VIDEOS CLAVE ★★★</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {keyVideos.map((v) => (
              <a
                key={v.id}
                href={`https://www.youtube.com/watch?v=${v.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="card-brutal p-3 flex items-center gap-3 group"
              >
                <img
                  src={`https://img.youtube.com/vi/${v.youtubeId}/default.jpg`}
                  alt={v.title}
                  className="w-20 h-14 object-cover border-2 border-void-mid group-hover:border-crimson transition-colors"
                  style={{ filter: "saturate(1.3) contrast(1.1)" }}
                />
                <div className="flex-1 min-w-0">
                  <div className="text-bone text-xs font-bold tracking-wider uppercase truncate">{v.title}</div>
                  <div className="text-[10px] text-bone-dim font-bold tracking-wider">{v.duration} · {v.banda}</div>
                </div>
                <span className="text-gold font-black text-sm">★★★</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}