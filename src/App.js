import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("https://forex-journaling-api.herokuapp.com//testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }))
        .catch(err => err);
  }

  componentWillMount() {
    this.callAPI();
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p className="App-intro">{this.state.apiResponse}</p>
          <form>
            <label for="username">Username</label>
            <input type="text" id="username" name="username"></input>

            <label for="password">Password</label>
            <input type="password" id="password" name="password"></input>

            <div class="buttons">
              <button type="submit">Log In</button>
              <button>Sign Up</button>
            </div>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
