import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand text-primary fw-bold" href="#perfil">
          <i className="bi bi-person-badge me-2"></i>Mi Portafolio
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#perfil">Perfil</a></li>
            <li className="nav-item"><a className="nav-link" href="#sobre-mi">Sobre mí</a></li>
            <li className="nav-item"><a className="nav-link" href="#formacion">Formación</a></li>
            <li className="nav-item"><a className="nav-link" href="#habilidades">Habilidades</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;