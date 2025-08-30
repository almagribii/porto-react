import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

function Home() {
    return (
        <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
            <Header/>
            <div>
                <Sidebar/>
                <main style={{marginLeft: '260px', padding: '1rem'}}>
                    <h2>Halaman Utama</h2>
                    <p>Ini adalah halaman utama dari aplikasi saya.</p>
                </main>
            </div>
                <Footer/>
        </div>
    )
}
export default Home;