"use client";

import { useState, useMemo } from "react";
import { videos, channelLabels, type VideoItem } from "@/data/videos";

const bandas = ["ENdB", "Ataque en Contra", "Pitbull HC", "DACELOS", "Escena underground"] as const;
const types = ["album", "video oficial", "live set", "live suelto", "session", "vlog", "cover", "compilado"] as const;

export default function VideosPage() {
  const [bandaFilter, setBandaFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [channelFilter, setChannelFilter] = useState<string>("all");

  const filtered = useMemo(() => {
    return videos.filter((v) => {
      if (bandaFilter !== "all" && v.banda !== bandaFilter) return false;
      if (typeFilter !== "all" && v.type !== typeFilter) return false;
      if (channelFilter !== "all" && v.channel !== channelFilter) return false;
      return true;
    });
  }, [bandaFilter, typeFilter, channelFilter]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gold mb-4">Catálogo de Videos</h1>
      <p className="text-bone-dim mb-8">{filtered.length} de {videos.length} videos · 3 canales YouTube</p>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-8">
        <div>
          <label className="text-xs text-bone-dim block mb-1">Banda</label>
          <select value={bandaFilter} onChange={(e) => setBandaFilter(e.target.value)}
            className="bg-card border border-border rounded-lg px-3 py-2 text-sm text-bone">
            <option value="all">Todas</option>
            {bandas.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>
        <div>
          <label className="text-xs text-bone-dim block mb-1">Tipo</label>
          <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}
            className="bg-card border border-border rounded-lg px-3 py-2 text-sm text-bone">
            <option value="all">Todos</option>
            {types.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label className="text-xs text-bone-dim block mb-1">Canal</label>
          <select value={channelFilter} onChange={(e) => setChannelFilter(e.target.value)}
            className="bg-card border border-border rounded-lg px-3 py-2 text-sm text-bone">
            <option value="all">Todos</option>
            <option value="EnNombredeBaal">@EnNombredeBaal</option>
            <option value="AgamenonMacondo">@ninjainterdimensional</option>
            <option value="PatadasVoladoras">@patadasvoladorasycosmos</option>
          </select>
        </div>
      </div>

      {/* Video grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((v: VideoItem) => (
          <div key={v.id} className="bg-card border border-border rounded-lg overflow-hidden hover:border-gold/50 transition-colors">
            <a href={`https://www.youtube.com/watch?v=${v.youtubeId}`} target="_blank" rel="noopener noreferrer">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={`https://img.youtube.com/vi/${v.youtubeId}/mqdefault.jpg`}
                  alt={v.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-void/20 hover:bg-void/0 transition-colors" />
                <div className="absolute bottom-2 right-2 bg-void/80 px-2 py-0.5 rounded text-xs text-bone">
                  {v.duration}
                </div>
                {v.importance === 3 && (
                  <div className="absolute top-2 left-2 text-gold text-sm">★★★</div>
                )}
              </div>
            </a>
            <div className="p-3">
              <h3 className="text-bone text-sm font-medium mb-1 truncate">{v.title}</h3>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-crimson">{v.banda}</span>
                <span className="text-bone-dim">·</span>
                <span className="text-bone-dim">{v.type}</span>
                <span className="text-bone-dim">·</span>
                <span className="text-bone-dim">{channelLabels[v.channel]}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}