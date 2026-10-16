import React from "react";

function Tarjeta() {
  return (
    <section className="container mb-4">
      <div className="card mx-auto shadow-sm" style={{ maxWidth: "420px" }}>
        <div className="card-body text-center">
          <h5 className="card-title fw-bold">Mi Proyecto Destacado</h5>
          <p className="card-text text-secondary">
            Desarrollo de mi portafolio personal en React con integración de componentes y Bootstrap.
          </p>
          <button className="btn btn-primary">Ver Repositorio</button>
        </div>
      </div>
    </section>
  );
}

export default Tarjeta;