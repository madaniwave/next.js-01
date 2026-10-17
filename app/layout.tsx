import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Website Daffa",
  description: "Project Tugas Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        {/* Menu Navigasi Bersama */}
        <nav className="flex gap-4 border-b p-4 bg-slate-100">
          <Link href="/" className="font-semibold text-blue-600 hover:underline">
            Beranda
          </Link>
          <Link href="/tentang" className="font-semibold text-blue-600 hover:underline">
            Tentang
          </Link>
          <Link href="/kontak" className="font-semibold text-blue-600 hover:underline">
            Kontak
          </Link>
        </nav>

        {children}
      </body>
    </html>
  );
}
