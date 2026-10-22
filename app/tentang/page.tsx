// export default function TentangPage() {
//   return (
//     <main className="max-w-3xl mx-auto px-6 py-12">
//       <div className="bg-slate-50 border border-slate-200 rounded-lg p-8 shadow-sm">
//         <h1 className="text-3xl font-bold text-slate-800 mb-4">About Me</h1>
//         <p className="text-slate-600 mb-6">Ini adalah halaman tentang saya.</p>

//         <div className="flex flex-col gap-3">
//           <h2 className="text-xl font-semibold text-slate-700 border-b pb-2">Informasi Pribadi</h2>
//           <p className="text-slate-600">
//             <span className="font-medium text-slate-800">Nama:</span> Muhammad Daffa Madani
//           </p>
//           <p className="text-slate-600">
//             <span className="font-medium text-slate-800">Asal:</span> Bekasi, Indonesia (tinggal di
//             Solo)
//           </p>
//           <p className="text-slate-600">
//             <span className="font-medium text-slate-800">Hobi:</span> Boxing 🥊
//           </p>
//         </div>
//       </div>
//     </main>
//   );
// }

"use client";

import { useRouter } from "next/navigation";

export default function TentangPage() {
  const router = useRouter();

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">About Me</h1>
        <p className="text-slate-600 mb-6">Ini adalah halaman tentang saya.</p>

        <div className="flex flex-col gap-3 mb-8">
          <h2 className="text-xl font-semibold text-slate-700 border-b pb-2">Informasi Pribadi</h2>
          <p className="text-slate-600">
            <span className="font-medium text-slate-800">Nama:</span> Muhammad Daffa Madani
          </p>
          <p className="text-slate-600">
            <span className="font-medium text-slate-800">Asal:</span> Bekasi, Indonesia (tinggal di
            Solo)
          </p>
          <p className="text-slate-600">
            <span className="font-medium text-slate-800">Hobi:</span> Boxing 🥊
          </p>
        </div>

        {/* Tombol yang menggunakan useRouter */}
        <button
          onClick={() => router.push("/")}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition font-medium"
        >
          🏠 Kembali ke Beranda (via useRouter)
        </button>
      </div>
    </main>
  );
}
