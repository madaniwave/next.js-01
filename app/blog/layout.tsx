import Link from "next/link";

export default function BlogLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <section>
      <div className="bg-slate-100 border-b px-6 py-3 text-sm text-slate-600 flex justify-between items-center">
        <span>
          📍 Bagian: <strong>Blog</strong>
        </span>
        <Link href="/blog" className="text-blue-600 hover:underline font-medium">
          ← Kembali ke semua tulisan
        </Link>
      </div>
      {children}
    </section>
  );
}
