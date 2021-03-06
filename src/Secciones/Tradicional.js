import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import BottomNav from '../Componentes/barraBottom';
import BarraTop from '../Componentes/barraTop';


const Tradicional = ()=>{
     return (
        <div>
            <div>
        <BarraTop/>
    </div>
    <div className='App-body'>
    <img src="../venta1.jpg" alt="img2" className="App-img" width="383" height="115"/>
    <h1>Ventas</h1>
    <h5>Que tipo de compra quieres realizar?</h5>
    <Button variant="contained" color="primary">{<Link to='Venta1'>Contado</Link>}</Button>
    <br/>
    <Button variant="contained" color="primary">{<Link to='Venta1'>Entrega y Cuotas</Link>}</Button>
    <br/>
    <Button variant="contained" color="primary">{<Link to='Venta1'>Otra</Link>}</Button>
    </div>
    <div className='App-barraBottom'>
    <BottomNav />
    </div>
        
        </div>
)
}

export default Tradicional