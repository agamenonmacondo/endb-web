"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/guion", label: "Guion" },
  { href: "/storyboard", label: "Storyboard" },
  { href: "/locaciones", label: "Locaciones" },
  { href: "/videos", label: "Videos" },
  { href: "/timeline", label: "Timeline" },
  { href: "/matriz", label: "Matriz" },
  { href: "/galeria", label: "Galería" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-void/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logos/baal-blanco.png" alt="ENdB" className="h-10 w-auto" />
            <span className="text-bone font-bold text-sm tracking-widest hidden sm:block">
              EN NOMBRE DE BAAL
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  pathname === link.href
                    ? "text-gold bg-crimson/10"
                    : "text-bone-dim hover:text-bone hover:bg-crimson/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden text-bone"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`px-3 py-2 text-sm rounded-md ${
                  pathname === link.href
                    ? "text-gold bg-crimson/10"
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
  );
}