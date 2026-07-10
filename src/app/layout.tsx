import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "En Nombre de Baal — Documental",
  description: "Un documental sobre Alejandro Sevilla Vélez. Black metal sinfónico de Bogotá, Colombia.",
  keywords: ["En Nombre de Baal", "black metal", "Colombia", "Bogotá", "documental", "metal sinfónico"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased scanlines noise`}>
        <Nav />
        <main className="pt-11 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}