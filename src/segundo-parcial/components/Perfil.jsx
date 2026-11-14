import React from 'react';
import miFoto from '../../assets/foto-de-u.jpeg';
const Perfil = () => {
  return (
    <section id="perfil" className="container-fluid py-5 p-0">
      <div className="row g-0">
        <div className="col-12 text-center">
          <img 
            src={miFoto} 
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