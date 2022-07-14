import React from 'react'
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div className='home'>
      <h1>
        Hola, soy <strong>David Barboza</strong> y soy Ingeniero en Informática, 
        y orfezco mis servicios de <strong>programación</strong> y <strong>desarrollo</strong> en todo tipo de  proyectos WEB.
      </h1>
      <h2>
        Te ayudo a crear tu sitio o aplicaciones Web, 
        tener más visibilidad y relevancia en internet. <Link to="/contacto">Contacta Conmigo</Link>
      </h2>
      <section className='last-works'>
        <h2 className='heading'>Algunos de mis Proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollo Web</p>
        <div className='works'>

        </div>
      </section>
    </div>
  )
}
