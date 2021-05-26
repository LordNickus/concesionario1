import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import BottomNav from '../Componentes/barraBottom';
import BarraTop from '../Componentes/barraTop';

const PostVenta = ()=> {
    return (
        <div>
            <div>
        <BarraTop/>
    </div>
    <div className='App-body'>
    <h1>Seleccione una opcion por favor</h1>
    
    <Button variant="contained" color="primary">{<Link to='Planes'>Agendamiento de Servicio</Link>}</Button>
    <br/>
    <Button variant="contained" color="primary">{<Link to='Tradicional'>Aviso de servicio Realizado</Link>}</Button>
    <br/>
    <Button variant="contained" color="primary">{<Link to='Tradicional'>Agendamiento Proximo Servicio</Link>}</Button>
    <br/>
    <Button variant="contained" color="primary">{<Link to='Tradicional'>Encuesta Satisfaccion</Link>}</Button>
    </div>
    <div>
    <BottomNav />
    </div>
        
        </div>
)
}
export default PostVenta;