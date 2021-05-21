import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch, 
  } from 'react-router-dom';
import Tradicional from './Secciones/Tradicional';
import Administracion from './Secciones/Administracion';
import Planes from './Secciones/Planes';
import Usuario from './Secciones/Usuario';
import Visitante from './Secciones/Visitante';
import Initial from './Initial';

function App() {
  return(
      <Router>
         <Switch>
         {/* <Route path="Secciones/">
              <Carrito />
          </Route>
         <Route path="Secciones/">
              <MaterialYoutube />
          </Route> */}

          <Route path="/Secciones/Tradicional">
              <Tradicional />
          </Route>
          
          <Route path="/Secciones/Planes">
              <Planes />
          </Route>

          <Route path="/Secciones/Administracion">
              <Administracion />
          </Route>

          <Route path="/Secciones/Visitante">
              <Visitante />    
          </Route>

          <Route path="/Secciones/Usuario">
              <Usuario />
          </Route>
         
          <Route path="/">
              <Initial />
          </Route>

         </Switch>
      </Router>

      
  );
}

export default App;
