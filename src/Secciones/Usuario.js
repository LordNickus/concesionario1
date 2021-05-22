import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';


const Usuario = ()=> {
    return (
<div className="App-header">
    <div className="headerUsuario">
        <img className= "imgTop" src="../imagenes/peugeot1.jpg" alt="imagen1"/>
    </div>
    <div>
    <h1>Seleccione 1 opcion</h1>
    
    <Button variant="contained" color="primary">{<Link to="Administracion">Administracion</Link>}</Button>
    <br/>
    <Button variant="contained" color="primary">{<Link to="/Planes">PostVenta</Link>}</Button>
     
    </div>
</div>
)
}

export default Usuario