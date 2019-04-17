
import React, { Component } from 'react';

var productos = [
    {nombre:"iphone8",categoria:"celulares",cantidad:"8"},
    {nombre:"teclado",categoria:"computadora",cantidad:"0"},
    {nombre:"almohadon",categoria:"deco",cantidad:"0"},
    {nombre:"cartera",categoria:"moda",cantidad:"0"},
    {nombre:"mouse",categoria:"computadora",cantidad:"2"},
]

class producto extends Component {
    render () {
        return(
         <div>
            {console.log("Productos disponibles:    ")}
            {productos.forEach(function(element){
                console.log(element.nombre);
            })}
            {console.log("Cantidades de iphone: ")}
            {console.log((productos.find(function(element){
                return (element.nombre === "iphone8")
            })).cantidad)
            }
            {productos.forEach(function(element){
                element.cantidad += 2;
            })}
        </div>
        )
    }
}
export default producto