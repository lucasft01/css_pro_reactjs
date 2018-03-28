import React from 'react';
import Nav from './Nav';
import logo from '../../assets/images/logo.png'
import "../../css_components/layout/Header.css"
export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ""
        }

        this.actionMenu = this.actionMenu.bind(this);
    }

    actionMenu(e) {
        e.preventDefault();
        // console.log("deu certo")
        if (this.state.name === "")
            this.setState({ name: "active" })
        else
            this.setState({ name: "" })
        console.log(this.state.name);
    }

    render() {
        return (
            <header className='header'>
                <div className='header-content'>
                    <div className='logo fl-left'>
                        <a href="#" on>
                            <img src={logo} />
                        </a>
                    </div>
                    <a href="#" className='nav-toggle fl-right' onClick={this.actionMenu}>
                        <i className='fas fa-bars'></i>MENU
                </a>
                    <Nav actionMenu={this.actionMenu} active={this.state.name} />
                </div>
            </header>
        )
    }

}