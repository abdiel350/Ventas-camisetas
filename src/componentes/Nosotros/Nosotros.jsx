import React, { Component } from 'react';
import './Nosotros.css';

class Nosotros extends Component {
     state = {}
     render() { 
          return (
               <div className="contenedor-nosotros">
                    <div className="imagen">
                         <img src="/img/camisa_8.png" alt="imagen nosotros" />
                    </div>
                    <div className="contenido">
                         <h2>Sobre Nosotros</h2>
                         <p>React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre. </p>
                    </div>
               </div>

           )
     }
}
 
export default Nosotros;