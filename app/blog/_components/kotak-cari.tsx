export default function KotakCari({
  pencarian,
  ketikCari,
}: {
  pencarian: string;
  ketikCari: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="mb-6">
      <input
        type="text"
        value={pencarian}
        onChange={ketikCari}
        placeholder="Cari judul tulisan..."
        className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
