import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import FormDialog from './Componentes/login';

const Initial = ()=>{
 return (
    <div>
        <div className='Barra1'>
            <img src="./logoPeu2.png" width="150" height="150"/>
        </div>
        <div className='App-initial'>
        <FormDialog />
        <br/>
        <Button variant="contained" color="primary"> {<Link to='/Secciones/Visitante'>Soy Visitante</Link>}</Button>
        
        </div>
        <div className='FooterInitial'>
            <p>Realizado por...</p>
            <img src="./logoDC.png" width="55" height="30"/>
        </div>
    </div>)
}
export default Initial