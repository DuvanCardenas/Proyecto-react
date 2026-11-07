import React from 'react';

const Formacion = () => {
  return (
    <section id="formacion" className="container-fluid py-5 bg-light">
      <div className="row">
        <div className="col-12">
          <h2 className="text-center mb-4 border-bottom pb-2">Formación Académica</h2>
        </div>
        <div className="col-12 col-md-6 mx-auto">
          <div className="card border-warning mb-3 shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-warning fw-bold"><i className="bi bi-mortarboard-fill me-2"></i>Ingeniería de Sistemas</h5>
              <h6 className="card-subtitle mb-2 text-muted">Universidad Francisco de Paula Santander Ocaña</h6>
              <p className="card-text">Formación enfocada en programación orientada a objetos, bases de datos y desarrollo de software web.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formacion;