import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import FormDialog from './Componentes/login';
import {makeStyles, useStyles} from '@material-ui/core';
import {createMuiTheme,ThemeProvider} from '@material-ui/core/styles';

const Style = createMuiTheme({
    palette:{
        primary:{
            main: '#000'
        }
    }
})



const Initial = ()=>{
 return (
     <ThemeProvider theme={Style}>
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
             <img src="./logoDA.jpeg" width="125" height="25"/>
        </div>
    </div>
    </ThemeProvider>
    )
}
export default Initial