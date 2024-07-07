import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../constants/routes'
import '../../css/Headers/Navbar.css'

const NavBar = () => {
  return (
    <nav className='navBar'>
        {routes.map((route,index)=>(
            <Link key={index} className='navBarLink' to={route.path}>{route.name}</Link>
        ))}
    </nav>
  )
}

export default NavBar