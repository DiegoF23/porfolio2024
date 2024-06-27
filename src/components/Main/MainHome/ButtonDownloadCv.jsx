import React from 'react'
import { rutaPdf } from '../../../constants/routes'

const ButtonDownloadCv = () => {
  return (
    <a href={rutaPdf} download="CV_DiegoFlores.pdf">
        <button>Descargar CV</button>
    </a>
  )
}

export default ButtonDownloadCv