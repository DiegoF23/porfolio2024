import React from "react";
import { Descripcion } from "../../../constants/Perfil";
import '../../../css/Main/MainInicio/Perfil.css'

const Perfil = () => {
  return (
    <>
    <div className="ContenedorPerfil">
      <div>
        <h1 className="h11">Soy Diego!, </h1>
        <h1 className="h12">Programador FullStack JR.</h1>
      </div>
      <p>{Descripcion}</p></div>
      
    </>
  );
};

export default Perfil;
