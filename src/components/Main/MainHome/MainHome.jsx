import React from 'react'
import ImgBinario from './ImgBinario'
import ButtonViewCv from './ButtonViewCv'
import ButtonDownloadCv from './ButtonDownloadCv'
import '../../../css/Main/MainInicio/MainHome.css'
const MainHome = () => {
  return (
    <div className='MainHome'>
      <ImgBinario/>
      <ButtonViewCv/>
      <ButtonDownloadCv/>
    </div>
  )
}

export default MainHome