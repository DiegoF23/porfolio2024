import React from 'react'
import ImgBinario from './ImgBinario'
import ButtonViewCv from './ButtonViewCv'
import ButtonDownloadCv from './ButtonDownloadCv'
import Perfil from './Perfil'
import '../../../css/Main/MainInicio/MainHome.css'

const MainHome = () => {
  return (
    <div className='MainHome'>
      <ImgBinario/>
      <Perfil/>
      <ButtonViewCv/>
      <ButtonDownloadCv/>
    </div>
  )
}

export default MainHome