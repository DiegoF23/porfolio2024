import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Porfolio from "./Porfolio.jsx";
import '../src/css/Main/Raiz/Main.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Porfolio />
    </BrowserRouter>
  </React.StrictMode>
);
