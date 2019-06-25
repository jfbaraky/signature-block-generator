import React from 'react';
import './signature.css';

export default class Signature extends React.Component {
  constructor() {
    super();
    this.state = {
      nomecompleto: "",
      cargoatual: "",
      telefone: "",
      site: "",
      cores: ""
    };
    this.onChange = (evento) => {
      const state = Object.assign({}, this.state);
      const campo = evento.target.name;
      state[campo] = evento.target.value;
      this.setState(state);
    };
    this.onSubmit = (evento) => {
      evento.preventDefault();
    };
  }
  render() {
    return (
      <div>
        <div id="inputs">
          <div className="box">
          <h1>Preencha detalhes da sua assinatura :</h1>
            <label>
              <span>Nome Completo</span>
              <input
                className="input_text"
                type="text"
                name="nomecompleto"
                value={this.state.nomecompleto}
                onChange={this.onChange} />
            </label>
            <label>
              <span>Cargo Atual </span>
              <input
                className="input_text"
                type="text"
                name="cargoatual"
                value={this.state.cargoatual}
                onChange={this.onChange} />
            </label>
            <label>
              <span>Telefone </span>
              <input
                className="input_text"
                type="text"
                name="telefone"
                value={this.state.telefone}
                onChange={this.onChange} />
            </label>
            <label>
              <span>Site</span>
              <input
                className="input_text"
                type="text"
                name="site"
                value={this.state.site}
                onChange={this.onChange} />
            </label>
            <label>
              <span>Cores</span>
              <select name="input_text" onChange={this.onChange} value={this.state.cores}>
                <option value="">Selecione</option>
                <option value="1">Preto</option>
                <option value="2">Azul</option>
                <option value="3">Verde</option>
                <option value="4">Amarelo</option>
                <option value="5">Branco</option>
              </select>
            </label>            
            <label>
              <input onClick={this.onSubmit} type="button" className="button" value="Enviar" />
            </label>
          </div>
        </div>
        <br/><br/><br/>
        <div id="modelo">          
          <div className="assinatura">
            <h1>Modelo da sua assinatura :</h1>
            <label><span>{JSON.stringify(this.state.nomecompleto)}</span></label>
            <label><span>{JSON.stringify(this.state.cargoatual)}</span></label>
            <label><span>{JSON.stringify(this.state.telefone)}</span></label>
            <label><span>{JSON.stringify(this.state.site)}</span></label>
            <label><span>{JSON.stringify(this.state.cores)}</span></label>
          </div>
        </div>
        <br />
      </div>
    );
  }
}