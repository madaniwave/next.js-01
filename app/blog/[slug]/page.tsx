// export default async function TulisanPage({ params }: { params: Promise<{ slug: string }> }) {
//   const { slug } = await params;

//   return (
//     <main className="mx-auto max-w-3xl px-6 py-12">
//       <div className="bg-slate-50 border rounded-lg p-8">
//         <h1 className="text-3xl font-bold text-slate-800 capitalize">{slug.replace(/-/g, " ")}</h1>
//         <p className="mt-4 text-slate-600 leading-relaxed">
//           Ini adalah isi tulisan untuk artikel <strong className="text-slate-800">{slug}</strong>.
//           Halaman ini dibuat secara dinamis menggunakan Fitur Dynamic Routes pada Next.js App
//           Router!
//         </p>
//       </div>
//     </main>
//   );
// }

import LikeButton from "./_components/like-button";

export default async function TulisanPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <div className="bg-slate-50 border rounded-lg p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-800 capitalize">{slug.replace(/-/g, " ")}</h1>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Ini adalah isi tulisan untuk artikel <strong className="text-slate-800">{slug}</strong>.
          Halaman ini dibuat secara dinamis menggunakan Fitur Dynamic Routes pada Next.js App
          Router!
        </p>

        <div className="mt-8 pt-4 border-t">
          <p className="text-sm text-slate-500 mb-3">Suka dengan tulisan ini? Berikan dukungan:</p>
          <LikeButton slug={slug} />
        </div>
      </div>
    </main>
  );
}
