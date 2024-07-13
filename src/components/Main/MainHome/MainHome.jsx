import React from 'react'
import ImgBinario from './ImgBinario'
import ButtonViewCv from './ButtonViewCv'
import ButtonDownloadCv from './ButtonDownloadCv'
import Perfil from './Perfil'
import '../../../css/Main/MainInicio/MainHome.css'

const MainHome = () => {
  return (
    <div className='MainHome'>
      <div className='contenedorimg'>
        <ImgBinario/>
      </div>
      <div className='contenedordescripcion'>
        <Perfil/>
        <div className='contenedorBotones'>
        <ButtonViewCv />
        <ButtonDownloadCv/>
        </div>
      
      </div>
    </div>
  )
}

export default MainHome