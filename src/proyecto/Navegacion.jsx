function Navegacion() {
  return (
    <>
      {/* ---------- NAVBAR ---------- */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center gap-2" href="#inicio">
            {/* SVG: person-circle (Bootstrap Icons) */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                 fill="currentColor" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
            </svg>
            Mi Hoja de Vida
          </a>

          <button className="navbar-toggler" type="button"
                  data-bs-toggle="collapse" data-bs-target="#menu">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link active" href="#inicio">Inicio</a></li>
              <li className="nav-item"><a className="nav-link" href="#titulo">Formación</a></li>
              <li className="nav-item"><a className="nav-link" href="#contacto">Contacto</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ---------- EXPOSICIÓN PERSONAL ---------- */}
      <section id="inicio" className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-4 text-center mb-4 mb-md-0">
              <img
                src="https://picsum.photos/seed/hojadevida/300/300"
                alt="Foto de perfil"
                className="img-fluid rounded-circle border border-5 border-primary shadow"
                width="250"
              />
            </div>

            <div className="col-12 col-md-8">
              <h1 className="display-5 fw-bold text-primary">Duvan Cardenas Ascanio</h1>
              <p className="lead">
                Apasionado por el desarrollo web, las bases de datos y resolver
                problemas con código. Me gusta aprender cosas nuevas todos los días.
              </p>

              {/* Badges con colores semánticos */}
              <span className="badge bg-success me-2">Disponible para prácticas</span>
              <span className="badge bg-warning text-dark me-2">En formación</span>
              <span className="badge bg-danger">Adicto al café</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navegacion;