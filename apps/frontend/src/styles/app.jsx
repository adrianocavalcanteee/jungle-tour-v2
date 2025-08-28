import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import Home from "./pages/Home";

export default function App() {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <>
      <Navbar onLoginClick={() => setLoginOpen(true)} />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* crie outras páginas depois: /passeios, /sobre, /contato */}
      </Routes>
      <Footer />
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
}
