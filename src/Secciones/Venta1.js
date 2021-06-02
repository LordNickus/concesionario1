import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import BottomNav from '../Componentes/barraBottom';
import BarraTop from '../Componentes/barraTop';

const Venta1 = ()=> {
    return (
        <div>
            <div>
        <BarraTop/>
    </div>
    <div className='App-body'>
        <img src="../venta1.jpg" alt="img2" className="App-img" width="383" height="115"/>
        <h1>Ventas</h1>
        <h5>Cual va a ser tu proximo Peugeot?</h5>
        <div className='App-body1'>
        <Button variant="contained" color="primary">{<Link to='Planes'>208</Link>}</Button>
        <br/>
        <Button variant="contained" color="primary">{<Link to='Tradicional'>308</Link>}</Button>
        <br/>
        <Button variant="contained" color="primary">{<Link to='Tradicional'>408</Link>}</Button>
        <br/>
        <Button variant="contained" color="primary">{<Link to='Tradicional'>2008</Link>}</Button>
        <br/>
        <Button variant="contained" color="primary">{<Link to='Tradicional'>Utilitarios</Link>}</Button>
        <br/>
        <Button variant="contained" color="primary">{<Link to='Tradicional'>Otro</Link>}</Button>
        </div>
    </div>
    <div className='App-barraBottom'>
    <BottomNav />
    </div>
        
        </div>
)
}
export default Venta1;