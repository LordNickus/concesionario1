import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import FormDialog from './Componentes/login';

const Initial = ()=>{
 return (
    <div className='App-header'>
        
        <FormDialog />
        <p>Si hace click se abre el LOGIN </p>
        <Button variant="contained" color="primary"> {<Link to='/Secciones/Visitante'>Soy Visitante</Link>}</Button>
        <p>Si hace click se abre la pagina Visitante</p>
    </div>)
}
export default Initial