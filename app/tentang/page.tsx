export default function TentangPage() {
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          padding: "20px",
          backgroundColor: "#f0f0f0",
          borderRadius: "8px",
        }}
      >
        <h1 style={{ color: "blue" }}>About Me</h1>
        <p style={{ color: "blue" }}>Ini adalah halaman tentang saya.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <h2 style={{ color: "blue" }}>Informasi Pribadi</h2>
          <p style={{ color: "blue" }}>Nama: Muhammad Daffa Madani</p>
          <p style={{ color: "blue" }}>Asal: Bekasi, Indonesia tetapi sekarang saya tinggal di solo</p>
          <p style={{ color: "blue" }}>Hobi: Boxing</p>
        </div>
      </div>
    </main>
  );
}
