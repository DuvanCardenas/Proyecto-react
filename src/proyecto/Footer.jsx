import { useState } from 'react';

function Footer() {
  const [form, setForm] = useState({ nombre: '', correo: '', mensaje: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', form);
    alert(`¡Gracias ${form.nombre}! Tu mensaje fue enviado.`);
    setForm({ nombre: '', correo: '', mensaje: '' });
  };

  return (
    <footer id="contacto" className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          {/* Info de contacto */}
          <div className="col-12 col-md-5 mb-4 mb-md-0">
            <h4 className="text-warning">Hablemos</h4>
            <p className="d-flex align-items-center gap-2">
              {/* SVG: envelope-fill (Bootstrap Icons) */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                   fill="currentColor" className="text-primary" viewBox="0 0 16 16">
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
              </svg>
              carlos.perez@correo.com
            </p>
            <p className="text-secondary mb-0">Ocaña, Norte de Santander</p>
          </div>

          {/* Formulario */}
          <div className="col-12 col-md-7">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="nombre" name="nombre"
                       value={form.nombre} onChange={handleChange} required />
              </div>

              <div className="mb-3">
                <label htmlFor="correo" className="form-label">Correo</label>
                <input type="email" className="form-control" id="correo" name="correo"
                       value={form.correo} onChange={handleChange} required />
              </div>

              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label">Mensaje</label>
                <textarea className="form-control" id="mensaje" name="mensaje" rows="3"
                          value={form.mensaje} onChange={handleChange} required></textarea>
              </div>

              <button type="submit" className="btn btn-success">Enviar mensaje</button>
            </form>
          </div>
        </div>

        <hr className="border-secondary my-4" />
        <p className="text-center text-secondary mb-0">
          © 2026 Carlos Andrés Pérez — Hecho con React y Bootstrap
        </p>
      </div>
    </footer>
  );
}

export default Footer;