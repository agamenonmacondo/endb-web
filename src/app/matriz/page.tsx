import { storyboard } from "@/data/storyboard";
import { videos } from "@/data/videos";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Matriz — En Nombre de Baal" };

export default function MatrizPage() {
  // Get key videos (importance 3) for the matrix
  const keyVideos = videos.filter((v) => v.importance === 3);
  const frames = storyboard;

  // Simplified mapping: which videos go with which scenes
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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gold mb-4">Matriz Video × Escena</h1>
      <p className="text-bone-dim mb-8">Cruce de videos clave con escenas del documental</p>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="text-left p-3 border-b border-border text-xs text-bone-dim font-mono">Escena</th>
              <th className="text-left p-3 border-b border-border text-xs text-bone-dim font-mono">Título</th>
              <th className="text-left p-3 border-b border-border text-xs text-bone-dim font-mono">Videos de referencia</th>
            </tr>
          </thead>
          <tbody>
            {frames.map((frame) => {
              const refs = matrix[frame.num] || frame.videoRefs || [];
              if (refs.length === 0) return null;
              return (
                <tr key={frame.id} className="hover:bg-card/50 transition-colors">
                  <td className="p-3 border-b border-border">
                    <span className="text-gold font-mono text-sm">{frame.num}</span>
                  </td>
                  <td className="p-3 border-b border-border">
                    <span className="text-bone text-sm">{frame.title}</span>
                  </td>
                  <td className="p-3 border-b border-border">
                    <div className="flex flex-wrap gap-1">
                      {refs.map((ref, i) => (
                        <span key={i} className="text-xs text-crimson bg-crimson/10 px-2 py-0.5 rounded">
                          {ref}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Key videos summary */}
      <div className="mt-12">
        <h2 className="text-xl font-bold text-gold mb-4">Videos Clave (★★★)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {keyVideos.map((v) => (
            <a
              key={v.id}
              href={`https://www.youtube.com/watch?v=${v.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-card border border-border rounded-lg p-3 hover:border-gold/50 transition-colors"
            >
              <img
                src={`https://img.youtube.com/vi/${v.youtubeId}/default.jpg`}
                alt={v.title}
                className="w-16 h-12 object-cover rounded"
              />
              <div className="flex-1 min-w-0">
                <div className="text-bone text-sm font-medium truncate">{v.title}</div>
                <div className="text-xs text-bone-dim">{v.duration} · {v.banda}</div>
              </div>
              <span className="text-gold text-sm">★★★</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}