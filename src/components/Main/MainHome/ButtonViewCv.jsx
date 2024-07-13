import React from 'react'
import {rutaPdf} from "../../../constants/routes"

const ButtonViewCv = () => {

  const openCV = ()=>{
    window.open(rutaPdf,'_blank')
  }

  return (
    <button onClick={openCV} className='buttonVCV'>Ver CV</button>
  )
}

export default ButtonViewCv