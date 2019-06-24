import React from 'react';

export default class Signature extends React.Component {
  constructor() {
    super();
    this.state = {
      nomecompleto: "",
      cargoatual: "",
      nomeempresa: "",
      logoempresa: "",
      avempresa: "",
      salaempresa: "",
      bairroempresa: "",
      cidadeempresa: "",
      numeroempresa: "",
      telefoneempresa: "",
      emailempresa: "",
      redessociaisempresas: ""
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
        <div className="inputs">
          nome completo : <input
            type="text"
            name="nomecompleto"
            value={this.state.nomecompleto}
            onChange={this.onChange}/><br />
          cargo atual :  <input
            type="text"
            name="cargoatual"
            value={this.state.cargoatual}
            onChange={this.onChange} /><br />
          nome empresa : <input
            type="text"
            name="nomeempresa"
            value={this.state.nomeempresa}
            onChange={this.onChange} />
          logo empresa : <input
            type="text"
            name="logoempresa"
            value={this.state.logoempresa}
            onChange={this.onChange} /><br />
          av. empresa : <input
            type="text"
            name="avempresa"
            value={this.state.avempresa}
            onChange={this.onChange} />
          sala empresa : <input
            type="text"
            name="salaempresa"
            value={this.state.salaempresa}
            onChange={this.onChange} /><br />
          bairro empresa : <input
            type="text"
            name="bairroempresa"
            value={this.state.bairroempresa}
            onChange={this.onChange} />
          cidade empresa : <input
            type="text"
            name="cidadeempresa"
            value={this.state.cidadeempresa}
            onChange={this.onChange} /> 
          número empresa : <input
            type="text"
            name="numeroempresa"
            value={this.state.numeroempresa}
            onChange={this.onChange} /> <br /> 
          telefone empresa : <input
            type="text"
            name="telefoneempresa"
            value={this.state.telefoneempresa}
            onChange={this.onChange} /> <br />
          e-mail empresa : <input
            type="text"
            name="emailempresa"
            value={this.state.emailempresa}
            onChange={this.onChange} /> 
          redes sociais empresas : <select name="redessociais" onChange={this.onChange} value={this.state.redessociais}>
              <option value="">Selecione</option>
              <option value="1">Facebook</option>
              <option value="2">Linkedin</option>
              <option value="3">Twitter</option>
              <option value="4">Google+</option>
              <option value="5">Youtube</option>
            </select><br />
        </div>
        <br />
        <div className="example">
          <h1> {JSON.stringify(this.state.nomecompleto)}  </h1>
          <h3> {JSON.stringify(this.state.cargoatual)}</h3>
          <h4> {JSON.stringify(this.state.nomeempresa)}, 
               {JSON.stringify(this.state.logoempresa)}</h4>
          <h5> {JSON.stringify(this.state.avempresa)}, 
               {JSON.stringify(this.state.salaempresa)}</h5>
          <h5> {JSON.stringify(this.state.bairroempresa)}
               {JSON.stringify(this.state.cidadeempresa)}
               {JSON.stringify(this.state.numeroempresa)} </h5>
          <h5> {JSON.stringify(this.state.telefoneempresa)}</h5>
          <h5> {JSON.stringify(this.state.emailempresa)}
               {JSON.stringify(this.state.redessociaisempresas)}</h5>
        </div>
        <br/>
        <button onClick={this.onSubmit}>Enviar</button>
        <br/>
      </div>
    );
  }
}