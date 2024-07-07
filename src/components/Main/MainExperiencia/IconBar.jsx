import React from 'react'
import { Icons } from '../../../constants/Iconos'
import '../../../css/Main/MainExperiencia/IconBar.css'

const IconBar = () => {
  return (
    <div className='IconBar'>
      {Icons.map((icon,index)=>(
        <img className='logos' src={icon.Icon} alt=""></img>
    ))}
    </div>
  )
}

export default IconBar