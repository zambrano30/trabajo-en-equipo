import React, { useState } from "react";
import { Link, Outlet } from "react-router";

export default function MainLayout() {
  const [abierto, setAbierto] = useState(false);

  return (
    <>
      <header className="w-full bg-white fixed top-0 left-0 z-20 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
 
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-black hover:text-gray-700 transition">
              Inicio
            </Link>
            <Link to="/ingredientes" className="text-black hover:text-gray-700 transition">
              Ingredientes
            </Link>
          </nav>

       
          <div className="text-2xl font-bold text-black mx-4">Oasis</div>

       
          <nav className="hidden md:flex space-x-6">
            <Link to="/Sobre" className="text-black hover:text-gray-700 transition">
              Sobre
            </Link>
            <Link to="/Contacto" className="text-black hover:text-gray-700 transition">
              Contacto
            </Link>
          </nav>
        
          <button
            className="md:hidden text-black focus:outline-none"
            onClick={() => setAbierto(!abierto)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {abierto ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        
        {abierto && (
          <nav className="md:hidden bg-white px-6 py-4 space-y-4 absolute top-full left-0 w-full shadow-md z-30">
            <Link to="/" className="block text-black hover:text-gray-700 transition">
              Inicio
            </Link>
            <Link to="/menu" className="block text-black hover:text-gray-700 transition">
              Menu
            </Link>
            <Link to="/Sobre" className="block text-black hover:text-gray-700 transition">
              Sobre
            </Link>
            <Link to="/Contacto" className="block text-black hover:text-gray-700 transition">
              Contacto
            </Link>
          </nav>
        )}
      </header>

    
      <main className="flex-1 flex flex-col ">
        <Outlet />
      </main>

      


<footer class="bg-white rounded-lg shadow-sm  ">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="https://flowbite.com/" class="hover:underline">OASIS™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
        </li>
        <li>
            <a href="#" class="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>



    </>
  );
}
