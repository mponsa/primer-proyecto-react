import React, { Component } from 'react';
import Nota from './nota.js';

import PropTypes from 'prop-types';
    
class ListadoDeNotas extends Component{
    render() {

        return(
            <div>
                {this.props.notas.map(function(element){
                  console.log(element.titulo + " " + element.texto);
                  return ( <Nota titulo={element.titulo} texto={element.texto}/> )
                })
                } 
            </div>
        )   
    }
    
}

//Defino las propiedades de la propiedad notas de mi componente ListadoDeNotas con proptipes
ListadoDeNotas.propTypes = {
    notas: PropTypes.arrayOf(PropTypes.shape({ //Notas es un array con un shape determinado
        titulo: PropTypes.string, //Titulo es un string
        texto: PropTypes.string //Texto es un string

    }))
}



export default ListadoDeNotas
