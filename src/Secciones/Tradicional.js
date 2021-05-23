import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';


const Tradicional = ()=>{
 return (
 <div>
 <div className='App-header'>
    <h1>Seleccione one opcion</h1>
    
    <h3><a>Cierre operacion</a></h3>
    // Componentes
    <h3><a>Entrega</a></h3>
    // Componentes
   
  
</div>
<div className='BotonInicio'>
        <Button variant="contained" color="secondary">{<Link to='/'>Inicio</Link>}</Button>
     </div>
        </div>)}

export default Tradicional