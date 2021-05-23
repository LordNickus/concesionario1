import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const PostVenta = ()=> {
    return (
<div className='App-header'>
    <h1>Seleccione una opcion por favor</h1>
    
    <Button variant="contained" color="primary">{<Link to='Planes'>Agendamiento de Servicio</Link>}</Button>
    <br/>
    <Button variant="contained" color="primary">{<Link to='Tradicional'>Aviso de servicio Realizado</Link>}</Button>
    <br/>
    <Button variant="contained" color="primary">{<Link to='Tradicional'>Agendamiento Proximo Servicio</Link>}</Button>
    <br/>
    <Button variant="contained" color="primary">{<Link to='Tradicional'>Encuesta Satisfaccion</Link>}</Button>
</div>)
}
export default PostVenta;