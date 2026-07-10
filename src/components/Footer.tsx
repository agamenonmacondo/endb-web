import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t-3 border-crimson bg-void">
      {/* MARQUEE BOTTOM */}
      <div className="overflow-hidden h-6 flex items-center bg-magenta">
        <div className="marquee-track animate-marquee" style={{ animationDirection: "reverse" }}>
          {Array(10).fill(null).map((_, i) => (
            <span key={i} className="text-black font-black text-[10px] tracking-[0.3em] whitespace-nowrap mx-6">
              MAMÁ, SOY UNA SOMBRA ★ ALEJANDRO SEVILLA VÉLEZ ★ BOGOTÁ ★ COLOMBIA ★ 1994—2026 ★
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="/logos/baal-blanco.png" alt="ENdB" className="h-12 w-auto mb-4" />
            <p className="text-bone-dim text-xs font-bold tracking-widest uppercase">
              MAMÁ, SOY UNA SOMBRA<br />Black Metal Sinfónico · Bogotá, Colombia
            </p>
          </div>

          <div>
            <h3 className="text-crimson text-[10px] font-black tracking-[0.3em] mb-4">NAVEGACIÓN</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1">
              {[
                { href: "/", label: "Inicio" },
                { href: "/guion", label: "Guion" },
                { href: "/storyboard", label: "Storyboard" },
                { href: "/locaciones", label: "Locaciones" },
                { href: "/videos", label: "Videos" },
                { href: "/timeline", label: "Timeline" },
                { href: "/matriz", label: "Matriz" },
                { href: "/galeria", label: "Galería" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-bone-dim hover:text-crimson text-xs font-bold tracking-wider transition-colors">
                  {link.label.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-magenta text-[10px] font-black tracking-[0.3em] mb-4">YOUTUBE</h3>
            <div className="flex flex-col gap-1">
              <a href="https://www.youtube.com/@EnNombredeBaal" target="_blank" rel="noopener noreferrer" className="text-bone-dim hover:text-cyan text-xs font-bold tracking-wider transition-colors">
                @EnNombredeBaal
              </a>
              <a href="https://www.youtube.com/@ninjainterdimensional" target="_blank" rel="noopener noreferrer" className="text-bone-dim hover:text-cyan text-xs font-bold tracking-wider transition-colors">
                @ninjainterdimensional
              </a>
              <a href="https://www.youtube.com/@patadasvoladorasycosmos" target="_blank" rel="noopener noreferrer" className="text-bone-dim hover:text-cyan text-xs font-bold tracking-wider transition-colors">
                @patadasvoladorasycosmos
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-violet text-[10px] font-black tracking-[0.3em] mb-4">STREAMING</h3>
            <a href="https://open.spotify.com/artist/58Xy9zzfC8fkk6q6hva6pX" target="_blank" rel="noopener noreferrer" className="text-bone-dim hover:text-lime text-xs font-bold tracking-wider transition-colors">
              SPOTIFY
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t-2 border-void-mid text-center">
          <p className="text-bone-dim text-[10px] font-bold tracking-[0.3em] uppercase">
            © 2026 Mamá, soy una sombra · La resistencia no es romántica — es terca
          </p>
        </div>
      </div>
    </footer>
  );
}