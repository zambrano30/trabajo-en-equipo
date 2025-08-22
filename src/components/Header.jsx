import React, { useState } from "react";
import { Routes, Route, Link } from "react-router";
import Sobre from "../pages/SobreNosotro";

export function Header() {
  const [abierto, setAbierto] = useState(false);

  return (
   <header className="w-full bg-white fixed top-0 left-0 z-20 shadow-md">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="text-black hover:text-gray-700 transition">
                Inicio
              </Link>
              <Link
                to="/ingredientes"
                className="text-black hover:text-gray-700 transition"
              >
                Ingredientes
              </Link>
            </nav>
  
            <div className="text-2xl font-bold text-black mx-4">Oasis</div>
          </div>
        </header>
  );
}
