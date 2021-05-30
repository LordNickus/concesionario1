import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import BottomNav from '../Componentes/barraBottom';
import BarraTop from '../Componentes/barraTop';
import Visitantesub1 from '../Componentes/visitantesub1';

const Visitante = ()=>{
   return ( 
      <div>
         <div>
            <BarraTop/>
         </div>
         <div className='App-body'>
               <h1>Quienes somos</h1>
               <Visitantesub1 />
               <h1><a>Nuestros modelos</a></h1>
               // componentes
               <h1><a>Asesorate</a></h1>
            // componentes
         </div>
         <div className='App-barraBottom'>
               <BottomNav />
         </div>
    </div>)
}

export default Visitante