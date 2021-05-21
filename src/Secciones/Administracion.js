import React from 'react';
import {Link} from 'react-router-dom';


const Administracion = ()=> {
    return (
<div className='App-header'>
    <h1>Seleccione una opcion</h1>
    
    <h3><a>{<Link to='Planes'>Planes de Ahorro</Link>}</a></h3>
    // Deriva a pagina
    <h3><a>{<Link to='Tradicional'>Tradicional</Link>}</a></h3>
    // Deriva a pagina
  
</div>)
}
export default Administracion