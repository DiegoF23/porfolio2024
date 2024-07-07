import React from "react";
//import { Routes, Route } from "react-router-dom";
import { routes } from "../src/constants/routes";
import { Headers } from "./components/Headers/Headers";
const Porfolio = () => {
  return (
    <>
    <Headers/>
        {routes.map((route,index)=>(
            <section  key={index} id={index}> {route.element} </section>
        ))}
    </>
  );
};

export default Porfolio;
