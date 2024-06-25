import React from 'react'
import Perfil from './Perfil'
import NavBar from './NavBar'
import '../../css/Headers/Headers.css'
export const Headers = () => {
  return (
    <>
        <div className='Headers'> {/*   contenedor principal para ordenar en headers */}
            <Perfil/>
            <NavBar/>
        </div>
    </>
  )
}
