import React from 'react'
import Proyectos from './Proyectos'
import '../../../css/Main/MainProyectos/MainProyectos.css'
import '../../../css/Main/MainProyectos/CardProyectos.css'
const MainProyectos = () => {
  return (
    <div className='MainProyectos'>
      <h1>
        En Mente algun proyecto ?
      </h1>
      <h2>{"{Trabajemos:'juntos!'}"}</h2>
      <h3>
        Proyectos Destacados
      </h3>
      <Proyectos/>
    </div>
  )
}

export default MainProyectos