import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Visitante = ()=>{
   return ( <div className='App-header'>
        <h1>Quienes somos</h1>
        <p>"texto quienes somos bla bla bla..."</p>
        <h3><a>Historia de la marca</a></h3>
     // componentes
        <h3><a>Nuestros modelos</a></h3>
        // componentes
        <h3><a>Asesorate</a></h3>
    // componentes
    <div className='BotonInicio'>
        <Button variant="contained" color="secondary">{<Link to='/'>Inicio</Link>}</Button>
     </div>
    </div>)
}

export default Visitante