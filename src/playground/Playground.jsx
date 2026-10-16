import React from "react";
import Header from "./Header";
import Perfil from "./Perfil";
import Tarjeta from "./Tarjeta";
import DatoCurioso from "./DatoCurioso";
import Footer from "./Footer";

function Playground() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        <Perfil />
        <Tarjeta />
        <DatoCurioso />
      </main>
      <Footer />
    </div>
  );
}

export default Playground;