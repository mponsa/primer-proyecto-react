import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Alumno from './alumno.js';
import Producto from './productos.js';
import Nota from './nota.js';
import ListadoDeNotas from './listadoDeNotas.js';





class App extends Component {
  
  render() {
    var notas = [
      {
      titulo : " Pizza casera " ,
      texto : " 300 gr de harina, 160 ml de agua, 5 gr de levadura, 1 cucharadita de sal, 20 gr de aceite, 200 gr de salsa de tomate, 100 gr de mozzarella y orégano. "
      },
      {
      titulo : " Comprar en el super " ,
      texto : " Vino, picadas y servilletas "
      },
      {
      titulo : " Pelis para ver el finde " ,
      texto : " Coco, Pantera negra, The post, Downsizing "
      }
    ]
  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
         

        </header>
        <Producto/>
        <ListadoDeNotas notas={notas}/>
      </div>
    );
  }
}
export default App;
