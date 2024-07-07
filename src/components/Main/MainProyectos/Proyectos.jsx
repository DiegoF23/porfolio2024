import React from "react";
import { ListProyects } from "../../../constants/ListProyectos";
const Proyectos = () => {
  return (
    <div className="CardProyectos">
      {ListProyects.map((Proyect, index) => (
        <div className="Card">
          <img className="IMGProyectos" src={Proyect.Imagen} alt="" />
          <h4>{Proyect.titulo}</h4>
          <p>{Proyect.texto}</p>
        </div>
      ))}
    </div>
  );
};

export default Proyectos;
