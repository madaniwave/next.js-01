"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Beranda" },
    { href: "/tentang", label: "Tentang" },
    { href: "/kontak", label: "Kontak" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <nav className="flex gap-6 border-b p-4 bg-slate-100">
      {links.map((link) => {
        // Cek apakah halaman sedang aktif
        const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`font-semibold transition ${
              isActive
                ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
