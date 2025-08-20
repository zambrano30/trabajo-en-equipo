import React, { useState } from "react";
import { Routes, Route, Link} from "react-router";
import Sobre from "../pages/SobreNosotro";

export  function Header() {
  const [abierto, setAbierto] = useState(false);


  return (
    <header className="w-full bg-white fixed top-0 left-0 z-20 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-black hover:text-gray-700 transition">Inicio</Link>
          <Link to="menu" className="text-black hover:text-gray-700 transition">Menu</Link>
        </nav>

       
        <div className="text-2xl font-bold text-black mx-4">Oasis</div>

       
        <nav className="hidden md:flex space-x-6">
          <Link to="/Sobre" className="text-black hover:text-gray-700 transition">Sobre</Link>
          <Link to="/Contacto" className="text-black hover:text-gray-700 transition">Contacto</Link>
        </nav>

       
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={() => setAbierto(!abierto)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {abierto ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

        
<Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/menu" element={<h1>Login</h1>} />
        <Route path="/sobre" element={<Sobre/>} /> 
        <Route path="/Contacto" element={<h1>Servicios</h1>} />
      </Routes>
    
      {abierto && (
        <nav className="md:hidden bg-white px-6 py-4 space-y-4 absolute top-full left-0 w-full shadow-md z-30">
          <a href="#home" className="block text-black hover:text-gray-700 transition">Inicio</a>
          <a href="#menu" className="block text-black hover:text-gray-700 transition">Menu</a>
          <a href="#about" className="block text-black hover:text-gray-700 transition">Sobre</a>
          <a href="#contact" className="block text-black hover:text-gray-700 transition">Contacto</a>
        </nav>
      )}
    </header>

        /*Archivo page*/
  );
}

