import Link from "next/link";
import { storyboard } from "@/data/storyboard";
import { timeline } from "@/data/timeline";

export default function Home() {
  const actColors = [
    "border-crimson text-crimson",
    "border-magenta text-magenta",
    "border-violet text-violet",
    "border-cyan text-cyan",
  ];
  const actBgs = ["hover:bg-crimson/10", "hover:bg-magenta/10", "hover:bg-violet/10", "hover:bg-cyan/10"];

  return (
    <div className="bg-black">
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* BG image with color overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(/storyboard/endb_01_obertura_montaje_00001_.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "saturate(2) contrast(1.3)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black" />

        {/* Color streaks */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-crimson/40 via-magenta/20 to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-cyan/30 via-violet/20 to-transparent" />

        <div className="relative z-10 text-center px-4 max-w-5xl">
          <img
            src="/logos/baal-blanco.png"
            alt="ENdB"
            className="h-28 md:h-40 w-auto mx-auto mb-6 animate-brutal-in"
          />

          <h1
            className="heading-brutal text-5xl md:text-8xl text-bone mb-4 animate-brutal-in"
            style={{ animationDelay: "0.1s" }}
          >
            MAMÁ,
            <br />
            <span className="text-crimson">SOY UNA SOMBRA</span>
          </h1>

          <p className="text-lg md:text-xl text-bone-dim mb-2 animate-brutal-in" style={{ animationDelay: "0.2s" }}>
            Un documental sobre Alejandro Sevilla Vélez y En Nombre de Baal
          </p>

          <p className="text-xs md:text-sm font-black tracking-[0.4em] mb-12 animate-brutal-in" style={{ animationDelay: "0.3s" }}>
            <span className="text-crimson">BLACK METAL</span>
            <span className="text-bone-dim mx-2">★</span>
            <span className="text-magenta">SINFÓNICO</span>
            <span className="text-bone-dim mx-2">★</span>
            <span className="text-violet">BOGOTÁ</span>
            <span className="text-bone-dim mx-2">★</span>
            <span className="text-cyan">1994—2026</span>
          </p>

          <div className="flex flex-wrap gap-4 justify-center animate-brutal-in" style={{ animationDelay: "0.4s" }}>
            <Link href="/storyboard" className="btn-brutal btn-crimson">
              VER STORYBOARD
            </Link>
            <Link href="/guion" className="btn-brutal btn-outline">
              LEER GUION
            </Link>
            <a href="/guion/guion-v3.pdf" target="_blank" rel="noopener noreferrer" className="btn-brutal btn-outline" style={{ boxShadow: "4px 4px 0 #00F5D4" }}>
              DESCARGAR PDF
            </a>
          </div>
        </div>
      </section>

      {/* ═══ STATS — Brutal grid ═══ */}
      <section className="grid grid-cols-2 md:grid-cols-4">
        {[
          { value: "6", label: "DISCOS", color: "text-crimson border-crimson" },
          { value: "32", label: "AÑOS", color: "text-magenta border-magenta" },
          { value: "181", label: "VIDEOS", color: "text-violet border-violet" },
          { value: "4", label: "OYENTES", color: "text-cyan border-cyan" },
        ].map((s) => (
          <div key={s.label} className={`border-3 ${s.color} p-6 md:p-10 text-center bg-black`}>
            <div className="text-5xl md:text-7xl font-black heading-brutal">{s.value}</div>
            <div className="text-[10px] font-black tracking-[0.4em] mt-2 opacity-70">{s.label}</div>
          </div>
        ))}
      </section>

      {/* ═══ SINOPSIS ═══ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
        <h2 className="heading-acid text-crimson text-sm mb-8">SINOPSIS</h2>
        <div className="space-y-6 text-lg md:text-xl leading-relaxed">
          <p className="text-bone">
            Seis discos en doce años. <span className="text-crimson font-black">Cuatro oyentes mensuales en Spotify.</span> Treinta y dos años de carrera musical en la escena underground de Bogotá. Esta es la historia de Alejandro Sevilla Vélez, guitarrista y fundador de En Nombre de Baal — <span className="text-magenta font-black">black metal sinfónico colombiano.</span> Un hombre que le dijo a su madre que era una sombra, y decidió hacer de esa sombra una obra de arte.
          </p>
          <p className="text-bone-dim">
            Desde el niño que quería ser James Hetfield en un barrio de Bogotá en los noventa, pasando por el hardcore punk de <span className="text-orange font-bold">Pitbull HC</span> y <span className="text-orange font-bold">Ataque en Contra</span>, el death metal técnico de <span className="text-violet font-bold">Nonsense Premonition</span>, hasta la evolución a un black metal sinfónico con máscaras rituales. La paradoja de una obra cada vez más ambiciosa frente a una audiencia que no crece.
          </p>
          <p className="text-2xl md:text-3xl font-black heading-brutal text-bone">
            La resistencia no es romántica — <span className="text-crimson">es terca.</span>
            <br />
            <span className="text-lg md:text-xl font-normal text-bone-dim">Se hace porque rendirse no es una opción.</span>
          </p>
        </div>
      </section>

      {/* ═══ ESTRUCTURA — Brutal cards ═══ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <h2 className="heading-acid text-magenta text-sm mb-8">ESTRUCTURA DEL DOCUMENTAL</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { num: "I", title: "El Niño Que Quería Ser Hetfield", desc: "Infancia, familia, primera guitarra, la promesa personal.", dur: "6:15", color: "border-crimson" },
            { num: "II", title: "La Escena", desc: "Pitbull HC, Ataque en Contra, Nonsense Premonition. El underground bogotano.", dur: "4:35", color: "border-magenta" },
            { num: "III", title: "4 Oyentes", desc: "Spotify, YouTube, la paradoja. 6 discos cada vez más ambiciosos.", dur: "5:00", color: "border-violet" },
            { num: "IV", title: "Todavía en Pie", desc: "La banda en acción. Ensayo, estudio, el disco sonando. Como cuando era niño.", dur: "3:25", color: "border-cyan" },
          ].map((act, i) => (
            <Link
              key={act.num}
              href="/guion"
              className={`card-brutal p-6 md:p-8 group ${act.color}`}
            >
              <div className="flex items-start gap-4 md:gap-6">
                <div className={`text-5xl md:text-7xl font-black ${actColors[i].split(" ")[1]} heading-brutal`}>
                  {act.num}
                </div>
                <div>
                  <h3 className="text-bone font-black text-lg md:text-xl tracking-tight mb-2 group-hover:text-crimson transition-colors">
                    {act.title}
                  </h3>
                  <p className="text-bone-dim text-sm mb-3">{act.desc}</p>
                  <span className={`chip ${actColors[i]}`}>{act.dur}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══ STORYBOARD PREVIEW ═══ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="heading-acid text-violet text-sm">STORYBOARD</h2>
          <Link href="/storyboard" className="btn-brutal btn-crimson text-[10px]">
            VER LOS 26 CUADROS →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {storyboard.slice(0, 8).map((frame, i) => {
            const borderColors = ["border-crimson", "border-magenta", "border-violet", "border-cyan", "border-gold", "border-orange", "border-lime", "border-blue-e"];
            return (
              <Link key={frame.id} href="/storyboard" className="group">
                <div className={`aspect-video overflow-hidden border-3 ${borderColors[i % borderColors.length]} transition-all group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] group-hover:shadow-[6px_6px_0_#E63946]`}>
                  <img
                    src={frame.image}
                    alt={frame.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    style={{ filter: "saturate(1.2) contrast(1.1)" }}
                  />
                </div>
                <p className="text-[10px] font-black tracking-wider mt-2 text-bone-dim group-hover:text-crimson transition-colors">
                  {frame.num} — {frame.title.toUpperCase()}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ═══ TIMELINE PREVIEW ═══ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="heading-acid text-orange text-sm">CRONOLOGÍA</h2>
          <Link href="/timeline" className="chip chip-orange hover:bg-orange/10 transition-colors">
            VER COMPLETA →
          </Link>
        </div>
        <div className="space-y-3">
          {timeline.filter((_, i) => i % 3 === 0).map((event, i) => {
            const colors = ["border-l-crimson", "border-l-magenta", "border-l-violet", "border-l-cyan", "border-l-gold"];
            return (
              <div key={event.year} className={`card-brutal p-4 border-l-6 ${colors[i % colors.length].replace("border-l-", "border-l-")}`}
                style={{ borderLeftColor: ["#E63946", "#FF006E", "#9B5DE5", "#00F5D4", "#FCCC04"][i % 5] }}>
                <div className="flex items-center gap-4">
                  <div className="text-3xl md:text-4xl font-black heading-brutal text-gold min-w-[5rem]">
                    {event.year}
                  </div>
                  <div>
                    <div className="text-bone font-black text-sm tracking-wider uppercase">{event.title}</div>
                    <div className="text-bone-dim text-xs">{event.description}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══ NOTA DE DIRECCIÓN ═══ */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-20 text-center">
        <h2 className="heading-acid text-cyan text-sm mb-8">NOTA DE DIRECCIÓN</h2>
        <blockquote className="text-xl md:text-2xl font-bold leading-relaxed">
          <span className="text-crimson">&ldquo;</span>
          El amor por lo que no te paga es el único amor que no te pide nada a cambio.
          Este documental no es sobre el éxito ni el fracaso. Es sobre la persistencia
          como acto de fe. <span className="text-magenta">Treinta y dos años haciendo música que casi nadie escucha</span> —
          y seguir haciéndola.
          <span className="text-crimson">&rdquo;</span>
        </blockquote>
      </section>

      {/* ═══ BOTTOM CTA ═══ */}
      <section className="gradient-acid py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black heading-brutal text-black mb-6">
            EXPLORA EL DOCUMENTAL
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/storyboard" className="btn-brutal bg-black text-bone border-3 border-black hover:translate-x-[-2px] hover:translate-y-[-2px]" style={{ boxShadow: "4px 4px 0 rgba(0,0,0,0.3)" }}>
              STORYBOARD
            </Link>
            <Link href="/videos" className="btn-brutal bg-black text-bone border-3 border-black hover:translate-x-[-2px] hover:translate-y-[-2px]" style={{ boxShadow: "4px 4px 0 rgba(0,0,0,0.3)" }}>
              VIDEOS
            </Link>
            <Link href="/galeria" className="btn-brutal bg-black text-bone border-3 border-black hover:translate-x-[-2px] hover:translate-y-[-2px]" style={{ boxShadow: "4px 4px 0 rgba(0,0,0,0.3)" }}>
              GALERÍA
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}