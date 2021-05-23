import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Administracion = ()=> {
    return (
    <div>
    <div className='App-header'>
    <h1>Seleccione una opcion</h1>
    
    <Button variant="contained" color="primary">{<Link to='Planes'>Planes de Ahorro</Link>}</Button>
    <br/>
    <Button variant="contained" color="primary">{<Link to='Tradicional'>Tradicional</Link>}</Button>
    
    </div>
    <div className='BotonInicio'>
        <Button variant="contained" color="secondary">{<Link to='/'>Inicio</Link>}</Button>
     </div>
</div>
)
}
export default Administracion