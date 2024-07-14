import React from "react";
import { Descripcion } from "../../../constants/Perfil";
import '../../../css/Main/MainInicio/Perfil.css'

const Perfil = () => {
  return (
    <>
    <div className="ContenedorPerfil">
      <h1>
        <span className="h11"> Soy Diego, </span>
        <span className="h12">Programador FullStack JR.</span>
      
      </h1>
      
      <p>{Descripcion}</p>
    </div>
      
    </>
  );
};

export default Perfil;
