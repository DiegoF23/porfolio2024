import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../constants/routes'

const NavBar = () => {
  return (
    <nav>
      <ul>
        {routes.map((route,index)=>(
          <li key={index}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar