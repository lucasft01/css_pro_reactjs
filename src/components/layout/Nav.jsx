import React from 'react'
import "../../css_components/layout/Nav.css"
export default class Nav extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <nav className={`nav ${this.props.active}`} >
                <p className="text-right">
                    <span className="nav-close" onClick={this.props.actionMenu}><i className="fas fa-times"></i></span>
                </p>
                <ul>
                    <li><a href='#'>Barcos e Lanchas</a></li>
                    <li><a href='#'>Destaques</a></li>
                    <li><a href='#'>Testemunhas</a></li>
                </ul>
            </nav>
        )
    }
}