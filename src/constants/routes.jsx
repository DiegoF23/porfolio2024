import  {Inicio} from "../pages/Inicio";
import Experiencia from "../pages/Experiencia";
import Proyectos from "../pages/Proyectos";
import Contacto from "../pages/Contacto";
import PDF from "/pdf/CV_diegoFlores.pdf"

export const routes = [
    { 
        path: '/',
        name: 'Inicio',
        element: <Inicio /> 
    },
    { 
        path: '/experiencia',
        name: 'Experiencia',
        element: <Experiencia /> 
    },
    { 
        path: '/proyectos',
        name: 'Proyectos',
        element: <Proyectos/> 
    },
    { 
        path: '/contacto',
        name: 'Contacto',
        element: <Contacto /> 
    },
];

export const rutaPdf = PDF;
