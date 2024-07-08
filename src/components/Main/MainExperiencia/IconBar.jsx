import React from 'react'
import { Icons } from '../../../constants/Iconos'
import '../../../css/Main/MainExperiencia/IconBar.css'

const IconBar = () => {
  return (
    <div className='IconBar'>
      {Icons.map((icon,index)=>(
        <div key={index} className='logos'>{icon.Icon}</div>
    ))}
    </div>
  )
}

export default IconBar