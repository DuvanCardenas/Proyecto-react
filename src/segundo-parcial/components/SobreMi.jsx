import React from 'react';

const SobreMi = () => {
  return (
    <section id="sobre-mi" className="container-fluid py-5">
      <div className="row">
        <div className="col-12">
          <h2 className="text-center mb-4 border-bottom pb-2">Sobre Mí</h2>
        </div>
        <div className="col-12 col-md-8 mx-auto text-center">
          <p className="fs-5">
            Soy un ingeniero de sistemas apasionado por crear interfaces web interactivas y dinámicas. 
            Tengo un fuerte enfoque en el desarrollo basado en componentes y arquitecturas limpias.
          </p>
          <div className="d-flex justify-content-center gap-4 mt-4">
            <span className="text-success"><i className="bi bi-check-circle-fill me-1"></i> Trabajo en equipo</span>
            <span className="text-success"><i className="bi bi-check-circle-fill me-1"></i> Resolución de problemas</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;