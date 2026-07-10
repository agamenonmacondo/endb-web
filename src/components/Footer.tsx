import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-void-light mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logos/baal-blanco.png" alt="ENdB" className="h-8 w-auto" />
              <span className="text-bone font-bold text-sm tracking-widest">
                EN NOMBRE DE BAAL
              </span>
            </div>
            <p className="text-bone-dim text-sm">
              Un documental sobre Alejandro Sevilla Vélez.
              Black metal sinfónico de Bogotá, Colombia.
            </p>
          </div>

          <div>
            <h3 className="text-gold text-xs font-bold tracking-widest mb-4">NAVEGACIÓN</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link href="/" className="text-bone-dim hover:text-bone text-sm">Inicio</Link>
              <Link href="/guion" className="text-bone-dim hover:text-bone text-sm">Guion</Link>
              <Link href="/storyboard" className="text-bone-dim hover:text-bone text-sm">Storyboard</Link>
              <Link href="/locaciones" className="text-bone-dim hover:text-bone text-sm">Locaciones</Link>
              <Link href="/videos" className="text-bone-dim hover:text-bone text-sm">Videos</Link>
              <Link href="/timeline" className="text-bone-dim hover:text-bone text-sm">Timeline</Link>
              <Link href="/matriz" className="text-bone-dim hover:text-bone text-sm">Matriz</Link>
              <Link href="/galeria" className="text-bone-dim hover:text-bone text-sm">Galería</Link>
            </div>
          </div>

          <div>
            <h3 className="text-gold text-xs font-bold tracking-widest mb-4">CANALES</h3>
            <div className="flex flex-col gap-2 text-sm">
              <a href="https://www.youtube.com/@EnNombredeBaal" target="_blank" rel="noopener noreferrer" className="text-bone-dim hover:text-bone">
                @EnNombredeBaal
              </a>
              <a href="https://www.youtube.com/@ninjainterdimensional" target="_blank" rel="noopener noreferrer" className="text-bone-dim hover:text-bone">
                @ninjainterdimensional
              </a>
              <a href="https://www.youtube.com/@patadasvoladorasycosmos" target="_blank" rel="noopener noreferrer" className="text-bone-dim hover:text-bone">
                @patadasvoladorasycosmos
              </a>
              <a href="https://open.spotify.com/artist/58Xy9zzfC8fkk6q6hva6pX" target="_blank" rel="noopener noreferrer" className="text-bone-dim hover:text-bone">
                Spotify
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-bone-dim text-xs">
            © 2026 En Nombre de Baal. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}