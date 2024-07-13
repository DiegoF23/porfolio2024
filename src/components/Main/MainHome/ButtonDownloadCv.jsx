import React from 'react'
import { rutaPdf } from '../../../constants/routes'
import "../../../css/Main/MainInicio/MainHome.css"

const ButtonDownloadCv = () => {
  return (
    <a href={rutaPdf} download="CV_DiegoFlores.pdf">
        <button className='buttonDCV'>Descargar CV</button>
    </a>
  )
}

export default ButtonDownloadCv