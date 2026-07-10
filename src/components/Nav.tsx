"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "INICIO", color: "text-crimson" },
  { href: "/guion", label: "GUION", color: "text-magenta" },
  { href: "/storyboard", label: "STORYBOARD", color: "text-violet" },
  { href: "/locaciones", label: "LOCACIONES", color: "text-cyan" },
  { href: "/videos", label: "VIDEOS", color: "text-gold" },
  { href: "/timeline", label: "TIMELINE", color: "text-orange" },
  { href: "/matriz", label: "MATRIZ", color: "text-lime" },
  { href: "/galeria", label: "GALERÍA", color: "text-blue-e" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* MARQUEE BAR */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-crimson overflow-hidden h-7 flex items-center">
        <div className="marquee-track animate-marquee">
          {Array(8).fill(null).map((_, i) => (
            <span key={i} className="text-black font-black text-xs tracking-[0.3em] whitespace-nowrap mx-8">
              EN NOMBRE DE BAAL ★ BLACK METAL SINFÓNICO ★ BOGOTÁ ★ 1994—2026 ★ 6 DISCOS ★ 4 OYENTES ★ 
            </span>
          ))}
        </div>
      </div>

      {/* MAIN NAV */}
      <nav className="fixed top-7 left-0 right-0 z-40 bg-void/95 backdrop-blur-sm border-b-3 border-crimson">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14">
            <Link href="/" className="flex items-center gap-3 group">
              <img src="/logos/baal-blanco.png" alt="ENdB" className="h-8 w-auto group-hover:animate-shake" />
              <span className="text-bone font-black text-xs tracking-[0.3em] hidden sm:block heading-acid">
                EN NOMBRE DE BAAL
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-0">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-[11px] font-black tracking-[0.15em] border-r-2 border-r-void-light last:border-r-0 transition-all hover:${link.color} ${
                    pathname === link.href
                      ? `${link.color} bg-void-light`
                      : "text-bone-dim"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <button
              className="lg:hidden text-bone font-black text-sm tracking-widest"
              onClick={() => setOpen(!open)}
            >
              {open ? "✕" : "☰"}
            </button>
          </div>

          {/* Mobile menu */}
          {open && (
            <div className="lg:hidden pb-4 flex flex-col gap-0">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 text-xs font-black tracking-[0.2em] border-b border-void-mid ${
                    pathname === link.href
                      ? `${link.color} bg-void-light`
                      : "text-bone-dim hover:text-bone"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  );
}