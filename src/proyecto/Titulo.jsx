function Titulo() {
  return (
    <section id="titulo" className="py-5 bg-white">
      <div className="container text-center">
        {/* SVG: mortarboard-fill (Bootstrap Icons) */}
        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56"
             fill="currentColor" className="text-primary mb-3" viewBox="0 0 16 16">
          <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z" />
          <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z" />
        </svg>

        <h2 className="fw-bold">Ingeniero de Sistemas</h2>
        <p className="text-muted">Universidad Francisco de Paula Santander — Ocaña</p>

        <div className="row justify-content-center mt-4 g-3">
          <div className="col-12 col-md-4">
            <div className="alert alert-success mb-0">
              <strong>Logro:</strong> Mejor promedio del semestre
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="alert alert-warning mb-0">
              <strong>En curso:</strong> Curso de React avanzado
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="alert alert-danger mb-0">
              <strong>Pendiente:</strong> Certificación de inglés B2
            </div>
          </div>
        </div>

        <a href="#contacto" className="btn btn-primary btn-lg mt-4">
          Contáctame
        </a>
      </div>
    </section>
  );
}

export default Titulo;