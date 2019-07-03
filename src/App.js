import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Signature from './components/Signature/Signature';
import TutorialGmail from './components/TutorialGmail/TutorialGmail';
import TutorialOutlook from './components/TutorialOutlook/TutorialOutlook';

//$ yarn add @fortawesome/fontawesome-svg-core
//$ yarn add @fortawesome/free-solid-svg-icons
//$ yarn add @fortawesome/react-fontawesome
//$ yarn add @fortawesome/free-brands-svg-icons

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCheckSquare, faCoffee)

function Gerador() {
  return(
    <div>
      <Signature />
    </div>
  );
}

function TutGmail() {
  return(
    <div>
      <TutorialGmail />
    </div>
  );
}

function TutOutlook() {
  return(
    <div>
      <TutorialOutlook />
    </div>
  );
}

function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Gerador de Assinatura para E-mail</Link>
      </li>
      <li>
        <Link to="/tutorial-gmail">Tutorial Gmail</Link>
      </li>
      <li>
        <Link to="/tutorial-outlook">Tutorial Outlook</Link>
      </li>
    </ul>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <Route exact path="/" component={Gerador} />
            <Route path="/tutorial-gmail" component={TutGmail} />
            <Route path="/tutorial-outlook" component={TutOutlook} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
