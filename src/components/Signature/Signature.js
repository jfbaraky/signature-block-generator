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
        <br/><br/>
        <div id="modelo">          
          <div className="assinatura">
            <h1>Modelo da sua assinatura :</h1>
            <h3>{JSON.stringify(this.state.nomecompleto)}</h3>
            <p>{JSON.stringify(this.state.cargoatual)}</p>
            <p>{JSON.stringify(this.state.telefone)}</p>
            <p>{JSON.stringify(this.state.email)}</p>
            <p>{JSON.stringify(this.state.site)}</p>
            <p>{JSON.stringify(this.state.cores)}</p>
          </div>
        </div>
        <br/><br/>
      </div>
    );
  }
}