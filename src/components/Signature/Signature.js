import React from 'react';
import './signature.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function IconeGoogle() {
  return (
    <Link to="/tutorial-gmail"><FontAwesomeIcon icon={['fab', 'google']} /></Link>
  );
}

function IconeMicrosoft() {
  return (
    <Link to="/tutorial-outlook"><FontAwesomeIcon icon={['fab', 'microsoft']} /></Link>
  );
}

export default class Signature extends React.Component {
  constructor() {
    super();
    this.state = {
      nomecompleto: "",
      cargoatual: "",
      telefone: "",
      email: "",
      site: "",
      cores: ""
    };
    this.onChange = (evento) => {
      const state = Object.assign({}, this.state);
      const campo = evento.target.name;
      state[campo] = evento.target.value;
      this.setState(state);
    };
  }
  render() {
    return ( 
      <div>         
        Gerador de Assinatura para E-mail
        <div id="inputs">
          <div className="box">
            <h1>Preencher detalhes da sua assinatura :</h1>
            <label>
              <span>Nome Completo</span>
              <input
                className="input_text"
                type="text"
                name="nomecompleto"
                placeholder="Linus Torvalds"
                value={this.state.nomecompleto}
                onChange={this.onChange} />
            </label>
            <label>
              <span>Cargo Atual </span>
              <input
                className="input_text"
                type="text"
                name="cargoatual"
                placeholder="ReactJS Developer"
                value={this.state.cargoatual}
                onChange={this.onChange} />
            </label>
            <label>
              <span>Empresa </span>
              <input
                className="input_text"
                type="text"
                name="empresa"
                placeholder="App Masters"
                value={this.state.empresa}
                onChange={this.onChange} />
            </label>
            <label>
              <span>Telefone </span>
              <input
                className="input_text"
                type="text"
                name="telefone"
                placeholder="+55 (44) 9 8888-2222"
                value={this.state.telefone}
                onChange={this.onChange} />
            </label>
            <label>
              <span>E-mail</span>
              <input
                className="input_text"
                type="text"
                name="email"
                placeholder="linustorvalds@appmasters.com" 
                value={this.state.email}
                onChange={this.onChange} />
            </label>
            <label>
              <span>Site</span>
              <input
                className="input_text"
                type="text"
                name="site"
                placeholder="linustorvalds.appmasters.com" 
                value={this.state.site}
                onChange={this.onChange} />
            </label>
            <label>
              <span>Cores</span>
              <select id="cor" name="input_text" value={this.state.cores}>
                <option value="">Selecione</option>
                <option value="1">Preto</option>
                <option value="2">Azul</option>
                <option value="3">Verde</option>
                <option value="4">Amarelo</option>
                <option value="5">Branco</option>
              </select>
            </label>
          </div>{/* end-div-box */}
        </div> {/* end-div-inputs */}
        <br/>
        <div id="modelo">          
          <div className="assinatura">
            <h1>Modelo da sua assinatura :</h1>
            <h3>{this.state.nomecompleto}</h3>
            <p>{this.state.cargoatual}</p>
            <p>{this.state.empresa}</p>
            <p>{this.state.telefone}</p>
            <p><a href="default.asp" target="_blank">{this.state.email}</a></p>
            <p><a href="default.asp" target="_blank">{this.state.site}</a></p>
          </div> {/** end-div-assinatura*/}
        </div> {/** end-div-modelo*/}
        <br/>   
        <div id="Tutoriais">          
          <div className="Tutorial">
            <h1>Tutorial de Assinatura 
              <IconeGoogle/>
               ou  
              <IconeMicrosoft />
            </h1>
          </div> {/** end-div-Tutorial*/}
        </div> {/** end-div-Tutoriais*/}     
      </div>/** end-div*/

    );
  }
}