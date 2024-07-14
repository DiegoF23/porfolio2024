import React from "react";
import IconBar from "./IconBar";
import { Experiencias } from "../../../constants/Perfil";
import "../../../css/Main/MainExperiencia/MainExperiencia.css"

const MainExperiencia = () => {
  return (
    <div className="MainExperiencia">
      <div className="ContenedorSlider">
      <div className="slider">
        <IconBar />
      </div>
      </div>
      
      <h1>Experiencias</h1>
      <div className="Experiencias">
        {Experiencias.map((experiencia, index) => (
          <div className="boxExperiencia" key={index}>
            <h4> {experiencia.titulo} </h4>
            <p> {experiencia.texto} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainExperiencia;
