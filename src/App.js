import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "",
                      username: "",
                      password: ""};

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }



  handleSubmit(event) {
    fetch("https://forex-journaling-api.herokuapp.com/login/" + this.state.username + "&" + this.state.password)
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }))
        .catch(err => err);
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p className="App-intro">{this.state.apiResponse}</p>
          <form onSubmit={this.handleSubmit}>
            <label for="username">Username</label>
            <input type="text" id="username" name="username" onChange={this.handleChange}></input>

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
