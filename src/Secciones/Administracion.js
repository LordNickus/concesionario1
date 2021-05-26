import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import BottomNav from '../Componentes/barraBottom';
import BarraTop from '../Componentes/barraTop';

const Administracion = ()=> {
    return (
    <div>
        <div>
        <BarraTop/>
    </div>
    <div className='App-header'>
    <h1>Seleccione una opcion</h1>
    
    <Button variant="contained" color="primary">{<Link to='Planes'>Planes de Ahorro</Link>}</Button>
    <br/>
    <Button variant="contained" color="primary">{<Link to='Tradicional'>Tradicional</Link>}</Button>
    
    </div>
    <div>
    <BottomNav />
    </div>
</div>
)
}
export default Administracion