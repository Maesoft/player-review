import Presentacion from "./components/Presentacion";
import  Navbar  from "./components/Navbar";
import  Consolas  from "./components/Consolas";
import  GamesSection  from "./components/GamesSection";
import Footer from "./components/Footer";

import { UserProvider } from "./context/UserContext";

export default function Home() {
  return (
    <UserProvider>
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar />
        <div className="container mt-18 mx-auto px-12 py-2">
          <section id="presentacion">
            <Presentacion />
          </section>
          <section id="consolas">
            <Consolas />
          </section>
          <section id="games-section">
            <br /><br />
            <GamesSection />
          </section>
        </div>
        <Footer />
      </main>
    </UserProvider>
  );
}
