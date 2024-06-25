import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { routes } from '../src/constants/routes'
import { Headers } from './components/Headers/Headers'
const Porfolio = () => {
  return (
    <>
    <Headers/>
    <Routes>
        {routes.map((route,index)=>(
            <Route key={index} path={route.path} element={route.element}/>
        ))}
    </Routes>
    </>
  )
}

export default Porfolio