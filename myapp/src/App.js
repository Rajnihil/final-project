
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Events from "./Events";
import Team from "./Team";
import Contact from "./Contact";
import Footer from "./Footer";

// Using system fonts instead of loading Google Fonts

// ── Page map ───────────────────────────────────────────────────
const PAGES = {
  Home: Home,
  Events: Events,
  Team: Team,
  Contact: Contact,
};

// ── App: Root Component ────────────────────────────────────────
function App() {
  // useState — controls which page is shown (routing state)
  const [currentPage, setCurrentPage] = useState("Home");

  // useEffect — sync page with URL hash for bookmarkable "routing"
  useEffect(() => {
    const readHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (PAGES[hash]) setCurrentPage(hash);
    };
    readHash();
    window.addEventListener("hashchange", readHash);
    return () => window.removeEventListener("hashchange", readHash);
  }, []);

  // Handler passed as prop — demonstrates dataflow (state up, props down)
  const navigate = (page) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Dynamically render the active page component
  const PageComponent = PAGES[currentPage] || Home;

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#fff" }}>
      {/* Navbar receives state + handler as props */}
      <Navbar currentPage={currentPage} onNavigate={navigate} />

      {/* Main content area — renders current page */}
      <main style={{ flex: 1 }}>
        <PageComponent onNavigate={navigate} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
