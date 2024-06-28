import React from "react";
import { Descripcion } from "../../../constants/Perfil";
import '../../../css/Main/MainInicio/Perfil.css'

const Perfil = () => {
  return (
    <>
    <div className="ContenedorPerfil"><h1>Diego, Programador FullStack JR</h1>
      <p>{Descripcion}</p></div>
      
    </>
  );
};

export default Perfil;
