import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        margin: "0",
        padding: "0",
      }}
    >

      <div
        style={{
          display: "flex",
          flexGrow: 1, 
          
        }}
      >
        <main style={{ flexGrow: 1, padding: "1rem" }}>
          <h2>Halaman Utama</h2>
          <p>Ini adalah halaman utama dari aplikasi saya.</p>
        </main>
      </div>

    </div>
  );
}

export default Home;
