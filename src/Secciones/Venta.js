import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import BottomNav from '../Componentes/barraBottom';
import BarraTop from '../Componentes/barraTop';

const Venta = ()=> {
    return (
        <div>
            <div>
        <BarraTop/>
    </div>
    <div className='App-body'>
    <img src="../venta1.jpg" alt="img2" className="App-img" width="383" height="115"/>
    <h1>Ventas</h1>
    
    <Button variant="contained" color="primary">{<Link to='Tradicional'>Tradicional</Link>}</Button>
    <br/>
    <Button variant="contained" color="primary">{<Link to='Tradicional'>Plan de Ahorro</Link>}</Button>
    <br/>
    <Button variant="contained" color="primary">{<Link to='Tradicional'>Simula tu Cuota</Link>}</Button>
    <br/>
    <Button variant="contained" color="primary">{<Link to='Tradicional'>Consulta Online</Link>}</Button>
    </div>
    <div className='App-barraBottom'>
    <BottomNav />
    </div>
        
        </div>
)
}
export default Venta;