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
    <div className='App-body'>
    <img src="../administracion.jpg" alt="img2" className="App-img" width="383" height="115"/>
    <div className="Botones">
    <Button variant="contained" color="secondary">{<Link to='Planes'>Planes de Ahorro</Link>}</Button>
        <br/>
    <Button variant="contained" color="secondary">{<Link to='Tradicional'>Tradicional</Link>}</Button>
    </div>
    </div>
    <div className='App-barraBottom'>
    <BottomNav />
    </div>
</div>
)
}
export default Administracion