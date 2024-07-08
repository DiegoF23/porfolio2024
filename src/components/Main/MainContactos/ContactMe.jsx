import React from 'react'
import ButtonSend from './ButtonSend'
const ContactMe = () => {
  return (
    <div className='Contactame'>
        <h2>Contactame!</h2>
        <input className='E-mail' type="text" placeholder='E-mail'/>
        <input className='Mensaje' type="text" placeholder='Mensaje' />
        <ButtonSend/>

    </div>
  )
}

export default ContactMe