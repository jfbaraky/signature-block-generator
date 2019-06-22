import React, { Component } from 'react';

import Signature from './components/Signature'

class App extends Component {
    render() {
      return (
        <div className="App">
          <h1> Signature Generator </h1>
          <Signature />
        </div>
      );
    }
  }
  
  export default App;
