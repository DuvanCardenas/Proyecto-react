import React from 'react';

const Perfil = () => {
  return (
    <section id="perfil" className="container-fluid py-5 bg-light">
      <div className="row">
        <div className="col-12 text-center">
          <img 
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" 
            alt="Perfil" 
            className="rounded-circle mb-3 border border-3 border-primary" 
            style={{ width: '150px', height: '150px', objectFit: 'cover' }} 
          />
          <h1 className="display-4 fw-bold">Duvan Cardenas Ascanio</h1>
          <h3 className="text-secondary">INGENIERO DE SISTEMAS</h3>
          <p className="lead"><i className="bi bi-geo-alt-fill text-danger"></i> Ocaña, Colombia | <i className="bi bi-envelope-fill text-success"></i> dcardenasa@ufpso.edu.co</p>
          <a href="#contacto" className="btn btn-primary mt-2"><i className="bi bi-download me-2"></i>Descargar CV</a>
        </div>
      </div>
    </section>
  );
};

export default Perfil;