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
          <h1>Preencha detalhes da sua assinatura :</h1>
          <div className="box">
              <label> 
                <span>Nome Completo</span> 
                <input
                  className="nomecompleto"
                  type="text"
                  name="nomecompleto"
                  value={this.state.nomecompleto}
                  onChange={this.onChange} />
              </label>
              <label>
                <span>Cargo Atual </span>    
                <input
                  className="cargoatual"
                  type="text"
                  name="cargoatual"
                  value={this.state.cargoatual}
                  onChange={this.onChange} />
              </label>
              <label>
                <span>Telefone </span>  
                <input
                  className="telefone"
                  type="text"
                  name="telefone"
                  value={this.state.telefone}
                  onChange={this.onChange} />
              </label>
              <label>
                <span>Site</span>
                <input
                  className="site"
                  type="text"
                  name="site"
                  value={this.state.site}
                  onChange={this.onChange} />
              </label>
              <label>Cores : </label><select name="cores" onChange={this.onChange} value={this.state.cores}>
                <option value="">Selecione</option>
                <option value="1">Preto</option>
                <option value="2">Azul</option>
                <option value="3">Verde</option>
                <option value="4">Amarelo</option>
                <option value="5">Branco</option>
              </select><br />  
          </div>
        </div>
        <br />
        <div id="modelo">
          <h1>Modelo da sua assinatura :</h1>
          <div className="example">
            <h2>{JSON.stringify(this.state.nomecompleto)} </h2>
            <h3>{JSON.stringify(this.state.cargoatual)}</h3>
            <h4>{JSON.stringify(this.state.telefone)}</h4>
            <h5>{JSON.stringify(this.state.site)}</h5>
            <h5>{JSON.stringify(this.state.cores)}</h5>
          </div>
        </div>
        <br />
        <button onClick={this.onSubmit}>Enviar</button>
        <br />
      </div>
    );
  }
}