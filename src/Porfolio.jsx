import React from "react";
//import { Routes, Route } from "react-router-dom";
import { routes } from "../src/constants/routes";
import { Headers } from "./components/Headers/Headers";
const Porfolio = () => {
  return (
    <>
      <Headers />
      <div>
        {routes.map((route, index) => (
          <section key={index} id={index}>{route.element}</section>
        ))}
      </div>
    </>
  );
};

export default Porfolio;
