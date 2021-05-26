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
    <div className="App-header">
    <img src="../peugeot1.jpg" alt="img1"className="App-img"/>
    
    <Button variant="contained" color="primary">{<Link to="Administracion">Administracion</Link>}</Button>
    <br/>
    <Button variant="contained" color="primary">{<Link to="PostVenta">PostVenta</Link>}</Button>
     
    </div>
    <div>
    <BottomNav />
    </div>
</div>
)
}

export default Usuario