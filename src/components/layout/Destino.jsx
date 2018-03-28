import React from 'react';
import imagemLancha from "../../assets/images/destino-1.jpg";
import "../../css_components/layout/Destino.css";
import "../../css_components/layout/Header.css"
export default class Destino extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="section">
                <div className="content">
                    <header className="section-header">
                        <h1>ESCOLHA SEU DESTINO PREFERIDO</h1>
                        <p>LOREM IPSUM SIT AMET, CONSECTETUR ADIPISING</p>
                    </header>
                    <div className="row">
                        <div className="destinos-col">

                            <div className="box">
                                <div className="box-name">
                                    <h1>Lanchas</h1>
                                </div>
                                <div className="box-cover">
                                    <img src={imagemLancha} alt="" />
                                </div>
                                <div className="box-detalhes">
                                    <div className="box-detalhes-info">
                                        <h2>
                                            Figueira da Fox
                                        </h2>
                                        <p>Portugal</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section >
        )
    }
}