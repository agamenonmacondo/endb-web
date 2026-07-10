import Link from "next/link";
import { storyboard } from "@/data/storyboard";
import { videos } from "@/data/videos";
import { timeline } from "@/data/timeline";

export default function Home() {
  const stats = [
    { label: "Discos", value: "6" },
    { label: "Años de carrera", value: "32" },
    { label: "Videos YouTube", value: "181" },
    { label: "Oyentes Spotify", value: "4" },
  ];

  return (
    <div className="bg-void">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(/storyboard/endb_01_obertura_montaje_00001_.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-void/60 via-void/80 to-void" />

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <img
            src="/logos/baal-blanco.png"
            alt="En Nombre de Baal"
            className="h-32 w-auto mx-auto mb-8 animate-fade-in"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-bone tracking-tight mb-4 animate-fade-in">
            EN NOMBRE DE BAAL
          </h1>
          <p className="text-lg md:text-xl text-bone-dim mb-2 animate-fade-in">
            Un documental sobre Alejandro Sevilla Vélez
          </p>
          <p className="text-sm text-gold mb-12 tracking-widest animate-fade-in">
            BLACK METAL SINFÓNICO · BOGOTÁ · COLOMBIA
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/storyboard"
              className="px-6 py-3 bg-crimson text-bone rounded-lg font-semibold hover:bg-crimson-bright transition-colors"
            >
              Ver Storyboard
            </Link>
            <Link
              href="/guion"
              className="px-6 py-3 border border-border text-bone rounded-lg font-semibold hover:border-gold transition-colors"
            >
              Leer Guion
            </Link>
            <a
              href="/guion/guion-v3.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-border text-bone-dim rounded-lg font-semibold hover:border-gold hover:text-bone transition-colors"
            >
              Descargar PDF
            </a>
          </div>
        </div>
      </section>

      {/* Sinopsis */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-gold mb-6 tracking-tight">
          Sinopsis
        </h2>
        <div className="space-y-4 text-bone-dim text-lg leading-relaxed">
          <p>
            Seis discos en doce años. Cuatro oyentes mensuales en Spotify. Treinta y dos años
            de carrera musical en la escena underground de Bogotá. Esta es la historia de
            Alejandro Sevilla Vélez, guitarrista y fundador de En Nombre de Baal — black metal
            sinfónico colombiano.
          </p>
          <p>
            Desde el niño que quería ser James Hetfield en un barrio de Bogotá en los noventa,
            pasando por el hardcore punk de Pitbull HC y Ataque en Contra, el death metal técnico
            de Nonsense Premonition, hasta la evolución a un black metal sinfónico con máscaras
            rituales. La paradoja de una obra cada vez más ambiciosa frente a una audiencia
            que no crece.
          </p>
          <p className="text-bone">
            La resistencia no es romántica — es terca. Se hace porque rendirse no es una opción.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">{s.value}</div>
              <div className="text-sm text-bone-dim tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Estructura */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-gold mb-8 tracking-tight">
          Estructura del Documental
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { num: "I", title: "El Niño Que Quería Ser Hetfield", desc: "Infancia, familia, primera guitarra, la promesa personal.", dur: "6:15" },
            { num: "II", title: "La Escena", desc: "Pitbull HC, Ataque en Contra, Nonsense Premonition. El underground bogotano.", dur: "4:35" },
            { num: "III", title: "4 Oyentes", desc: "Spotify, YouTube, la paradoja. 6 discos cada vez más ambiciosos.", dur: "5:00" },
            { num: "IV", title: "Todavía en Pie", desc: "La banda en acción. Ensayo, estudio, el disco sonando. Como cuando era niño.", dur: "3:25" },
          ].map((act) => (
            <Link
              key={act.num}
              href="/guion"
              className="bg-card border border-border rounded-lg p-6 hover:border-crimson transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl font-bold text-crimson group-hover:text-gold transition-colors">
                  {act.num}
                </div>
                <div>
                  <h3 className="text-bone font-bold text-lg mb-1">{act.title}</h3>
                  <p className="text-bone-dim text-sm mb-2">{act.desc}</p>
                  <span className="text-xs text-gold tracking-widest">{act.dur}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Preview: Storyboard */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gold tracking-tight">
            Storyboard
          </h2>
          <Link href="/storyboard" className="text-sm text-crimson hover:text-gold transition-colors">
            Ver los 26 cuadros →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {storyboard.slice(0, 4).map((frame) => (
            <Link key={frame.id} href="/storyboard" className="group">
              <div className="aspect-video overflow-hidden rounded-lg border border-border group-hover:border-gold transition-colors">
                <img
                  src={frame.image}
                  alt={frame.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-xs text-bone-dim mt-2 group-hover:text-bone transition-colors">
                {frame.num} — {frame.title}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Preview: Timeline */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gold tracking-tight">
            Cronología
          </h2>
          <Link href="/timeline" className="text-sm text-crimson hover:text-gold transition-colors">
            Ver completa →
          </Link>
        </div>
        <div className="space-y-3">
          {timeline.filter((_, i) => i % 4 === 0).map((event) => (
            <div key={event.year} className="flex items-center gap-4 bg-card border border-border rounded-lg p-4">
              <div className="text-2xl font-bold text-gold min-w-[4rem]">{event.year}</div>
              <div>
                <div className="text-bone font-semibold text-sm">{event.title}</div>
                <div className="text-bone-dim text-xs">{event.description}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Nota de dirección */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-gold mb-6 tracking-tight">Nota de Dirección</h2>
        <blockquote className="text-bone-dim text-lg italic leading-relaxed">
          “El amor por lo que no te paga es el único amor que no te pide nada a cambio.
          Este documental no es sobre el éxito ni el fracaso. Es sobre la persistencia
          como acto de fe. Treinta y dos años haciendo música que casi nadie escucha —
          y seguir haciéndola.”
        </blockquote>
      </section>
    </div>
  );
}