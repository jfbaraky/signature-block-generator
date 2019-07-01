import React from 'react';
import './signature.css';

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
        <h4>Gerador de Assinatura para E-mail</h4>
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
          </div>
        </div>
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
          </div>
        </div> 
        <br/>
        <div>
          <a href="https://i2.wp.com/googlediscovery.com/wp-content/uploads/google-logo-3.jpg?fit=1604%2C802&ssl=1">logo-google</a>
          <a href="https://c.s-microsoft.com/en-us/CMSImages/page-sharing-thumbnail.jpg?version=ad58d6d8-0f5a-b7a8-ea50-939410935c7c">logo-microsoft</a>    
        </div>
      </div>

    );
  }
}