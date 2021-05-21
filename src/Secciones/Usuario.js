import React from 'react';
import {Link} from 'react-router-dom';

const Usuario = ()=> {
    return (
<div className='App-header'>
    <h1>Seleccione 1 opcion</h1>
    
    <h3><a>{<Link to='Administracion'>Administracion</Link>}</a></h3>
    // deriva a pagina
    <h3><a>{<Link to='/Planes'>PostVenta</Link>}</a></h3>
    // deriva a pagina
  
</div>)
}

export default Usuario