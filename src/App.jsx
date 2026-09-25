import { useState } from 'react'

import './App.css'

function App() {
  return (
    <div className="mi-sitio-personal">
      <h1 className="titulo">Mi presentación personal</h1>
      <h2>Soy estudiante de Ingeniería de Sistemas de la UFPSO</h2>
      
      <div className="descripcion">
        <p>
          Me gusta la tecnología y la resolución de problemas. 
          Tengo conocimientos en lenguajes de programacion como java, html, css, javascript, desarrollo web con PHP(el cual realice un curso en el SENA), 
          así como conocimientos en la Teoría General de Sistemas y el diseño de algoritmos.
          Actualmente me encuentro ampliando mis habilidades con react en la UFPSO.
        </p>
      </div>

      
      <img 
        src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=600&auto=format&fit=crop" 
        alt="Computadora con código" 
        className="imagen-perfil"
      />
    </div>
  )
}

export default App
