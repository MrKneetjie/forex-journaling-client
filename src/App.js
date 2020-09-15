import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from "./Components/Login/Login.js"
import Construction from './Components/Construction/Construction.js';
import Home from './Components/Home/Home.js';

import './App.css';

class App extends Component {  
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/dev">
              <Home />
            </Route>
            <Route path="/home">
              <Construction />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
