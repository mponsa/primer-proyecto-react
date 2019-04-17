import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Nota extends Component{

    render(){ 
        return (
            <div>
                <h1>{this.props.titulo}</h1>
                <p>{this.props.texto}</p>
            </div>
        )

    }
    
}


export default Nota

