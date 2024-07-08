import React from 'react'
import '../../../css/Main/MainContacto/MainContacto.css'
import AboutMe from './AboutMe'
import ContactMe from './ContactMe'

const MainContactos = () => {
  return (
   <>
    <div className='MainContactos'>
      
      <div className='AboutMe'> <AboutMe/> </div>
      <div className='ContactMe'><ContactMe/></div>
    
    </div>
   </>
  )
}

export default MainContactos