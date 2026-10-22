import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-bold text-slate-800">Blog Saya</h1>
      <p className="mt-2 text-slate-600">
        Selamat datang di blog mini! Pilih salah satu tulisan di bawah untuk membaca:
      </p>

      <ul className="mt-6 flex flex-col gap-3">
        <li className="p-4 border rounded-lg hover:bg-slate-50 transition">
          <Link
            href="/blog/belajar-nextjs"
            className="text-lg font-semibold text-blue-600 hover:underline"
          >
            🚀 Belajar Next.js dari Nol
          </Link>
        </li>
        <li className="p-4 border rounded-lg hover:bg-slate-50 transition">
          <Link
            href="/blog/hal-baru"
            className="text-lg font-semibold text-blue-600 hover:underline"
          >
            💡 Hal Baru yang Saya Pelajari
          </Link>
        </li>
        <li className="p-4 border rounded-lg hover:bg-slate-50 transition">
          <Link
            href="/blog/target-tahun-ini"
            className="text-lg font-semibold text-blue-600 hover:underline"
          >
            🎯 Target Saya Tahun Ini
          </Link>
        </li>
      </ul>
    </main>
  );
}
