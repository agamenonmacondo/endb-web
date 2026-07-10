"use client";

import { useState, useMemo } from "react";
import { videos, channelLabels, type VideoItem } from "@/data/videos";

const bandas = ["ENdB", "Ataque en Contra", "Pitbull HC", "DACELOS", "Escena underground"] as const;
const types = ["album", "video oficial", "live set", "live suelto", "session", "vlog", "cover", "compilado"] as const;

const bandaChips: Record<string, string> = {
  "ENdB": "chip-crimson",
  "Ataque en Contra": "chip-magenta",
  "Pitbull HC": "chip-orange",
  "DACELOS": "chip-violet",
  "Escena underground": "chip-cyan",
};

export default function VideosPage() {
  const [bandaFilter, setBandaFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");

  const filtered = useMemo(() => {
    return videos.filter((v) => {
      if (bandaFilter !== "all" && v.banda !== bandaFilter) return false;
      if (typeFilter !== "all" && v.type !== typeFilter) return false;
      return true;
    });
  }, [bandaFilter, typeFilter]);

  return (
    <div className="bg-black">
      <section className="py-12 bg-void-mid border-b-3 border-gold">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-5xl md:text-7xl font-black heading-brutal text-bone mb-4">VIDEOS</h1>
          <p className="text-bone-dim text-xs font-bold tracking-[0.3em] uppercase">
            {filtered.length} DE {videos.length} VIDEOS · 3 CANALES YOUTUBE
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          <div>
            <label className="heading-acid text-crimson text-[10px] block mb-2">BANDA</label>
            <div className="flex flex-wrap gap-1">
              <button onClick={() => setBandaFilter("all")} className={`chip ${bandaFilter === "all" ? "chip-gold bg-gold/20" : "chip-cyan"}`}>
                TODAS
              </button>
              {bandas.map((b) => (
                <button key={b} onClick={() => setBandaFilter(b)} className={`chip ${bandaFilter === b ? "bg-gold/20 border-gold text-gold" : bandaChips[b]}`}>
                  {b.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="heading-acid text-magenta text-[10px] block mb-2">TIPO</label>
            <div className="flex flex-wrap gap-1">
              <button onClick={() => setTypeFilter("all")} className={`chip ${typeFilter === "all" ? "chip-gold bg-gold/20" : "chip-violet"}`}>
                TODOS
              </button>
              {types.map((t) => (
                <button key={t} onClick={() => setTypeFilter(t)} className={`chip ${typeFilter === t ? "bg-gold/20 border-gold text-gold" : "chip-violet"}`}>
                  {t.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((v: VideoItem) => (
            <a
              key={v.id}
              href={`https://www.youtube.com/watch?v=${v.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="card-brutal overflow-hidden group"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={`https://img.youtube.com/vi/${v.youtubeId}/mqdefault.jpg`}
                  alt={v.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  style={{ filter: "saturate(1.3) contrast(1.1)" }}
                />
                <div className="absolute bottom-0 right-0 bg-black/80 px-2 py-1">
                  <span className="font-mono font-black text-[10px] text-bone-dim">{v.duration}</span>
                </div>
                {v.importance === 3 && (
                  <div className="absolute top-0 left-0 bg-crimson px-2 py-1">
                    <span className="font-black text-[10px] text-bone">★★★</span>
                  </div>
                )}
              </div>
              <div className="p-3">
                <h3 className="text-bone text-sm font-bold tracking-wider uppercase mb-1 truncate group-hover:text-crimson transition-colors">
                  {v.title}
                </h3>
                <div className="flex items-center gap-2 text-[10px]">
                  <span className={`chip ${bandaChips[v.banda] || "chip-cyan"}`}>{v.banda.toUpperCase()}</span>
                  <span className="text-bone-dim">·</span>
                  <span className="text-bone-dim tracking-wider">{v.type.toUpperCase()}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}