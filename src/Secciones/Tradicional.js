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
    <h1>Seleccione one opcion</h1>
    
    <h3><a>Cierre operacion</a></h3>
    // Componentes
    <h3><a>Entrega</a></h3>
    // Componentes
   
  
</div>
<div>
    <BottomNav />
    </div>
        </div>)}

export default Tradicional