import React, { useState } from "react";
import { Link, Outlet } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function MainLayout() {
  const [abierto, setAbierto] = useState(false);

  return (
    <>
    <Header/>

      <main className="flex-1 flex flex-col ">
        <Outlet />
      </main>

    <Footer/>
    </>
  );
}
