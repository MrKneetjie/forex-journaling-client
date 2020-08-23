import React, { Component } from 'react';
import './App.css';

import { Login } from "./Components/Login/Login.js"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <div className="App">
        <Login></Login>
      </div>
    );
  }
}

export default App;
