import React from 'react'
import Perfil from './Perfil'
import NavBar from './NavBar'
export const Headers = () => {
  return (
    <>
        <div>        {/*   contenedor principal para ordenar en headers */}
            <Perfil/>
            <NavBar/>
        </div>
    </>
  )
}
