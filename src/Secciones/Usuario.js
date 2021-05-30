import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import BarraTop from '../Componentes/barraTop';
import BottomNav from '../Componentes/barraBottom';

const Usuario = ()=> {
    return (
<div>
    <div>
        <BarraTop/>
    </div>
    <div className="App-body">
    <img src="../peugeot1.jpg" alt="img1"className="App-img" width="383" height="115"/>
    <div className="Botones"> 
    <Button variant="contained" color="secondary">{<Link to="Administracion">Administracion</Link>}</Button>
    <br/>
    <Button variant="contained" color="secondary">{<Link to="PostVenta">PostVenta</Link>}</Button>
    </div>
    </div>
    <div className='App-barraBottom'>
    <BottomNav />
    </div>
</div>
)
}

export default Usuario