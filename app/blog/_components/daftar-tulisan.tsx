"use client";

import { useState } from "react";
import Link from "next/link";
import KotakCari from "./kotak-cari";

type Tulisan = {
  judul: string;
  slug: string;
};

export default function DaftarTulisan({ daftar }: { daftar: Tulisan[] }) {
  const [pencarian, setPencarian] = useState("");

  function ketikCari(e: React.ChangeEvent<HTMLInputElement>) {
    setPencarian(e.target.value);
  }

  const tulisanSaring = daftar.filter((item) =>
    item.judul.toLowerCase().includes(pencarian.toLowerCase()),
  );

  return (
    <div>
      <KotakCari pencarian={pencarian} ketikCari={ketikCari} />

      <ul className="flex flex-col gap-3">
        {tulisanSaring.length > 0 ? (
          tulisanSaring.map((item) => (
            <li key={item.slug} className="p-4 border rounded-lg hover:bg-slate-50 transition">
              <Link
                href={`/blog/${item.slug}`}
                className="text-lg font-semibold text-blue-600 hover:underline"
              >
                {item.judul}
              </Link>
            </li>
          ))
        ) : (
          <p className="text-slate-500 italic">Tidak ada tulisan yang cocok dengan pencarian.</p>
        )}
      </ul>
    </div>
  );
}
