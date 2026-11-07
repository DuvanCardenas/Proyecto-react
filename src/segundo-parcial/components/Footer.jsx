import React from 'react';

const Footer = () => {
  return (
    <footer className="container-fluid py-4 bg-dark text-white text-center">
      <div className="row">
        <div className="col-12">
          <p className="mb-1">&copy; 2026 Duvan Cardenas Ascanio. Todos los derechos reservados.</p>
          <div className="d-flex justify-content-center gap-3 mt-2">
            <a href="#" className="text-white fs-4"><i className="bi bi-github"></i></a>
            <a href="#" className="text-white fs-4"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;