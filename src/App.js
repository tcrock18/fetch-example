import React, { Component } from 'react';

import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './navigation/Routes'
import Nav from './navigation/Nav'

class App extends Component {

  render() {

    return (
      <Router>
        <div>
          <Nav/>
          <hr/>
          <Routes/>
        </div>
      </Router>
    );
  }
}

export default App;
