import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3  shadow-sm">

            <h5 className="my-0 mr-md-auto font-weight-normal">Voz de la elección del gobierno escolar</h5>
            <nav className="as">


                <a className="hed" href="/">Inicio</a>
                <a className="hed" href="Elegir">Propuestas</a>
                <a className="hed" href="Quienessomos">Quiénes somos</a>
                <a className="hed" href="Acercade">Acerca de</a>
                
        
          
            </nav>
            <a className="btn btn-outline-primary" href="Login">Iniciar Sesión</a>
        </div>
        )
    }
}
export default Header;