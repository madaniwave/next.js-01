export default function KontakPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">Kontak</h1>
        <p className="text-slate-600 mb-6">Ini adalah halaman kontak.</p>

        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-slate-700 border-b pb-2">Informasi Kontak</h2>
          <a
            href="https://www.instagram.com/madaniwave/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
          >
            📸 Instagram: @madaniwave
          </a>
          <a
            href="mailto:daffamadani845@gmail.com"
            className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
          >
            ✉️ Email: daffamadani845@gmail.com
          </a>
        </div>
      </div>
    </main>
  );
}
