import React, { Component } from './node_modules/react';
import './Login.css';

class Login extends Component {
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

    console.log(this.state)
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
      <div>
        <p className="App-intro">{this.state.apiResponse}</p>
        <form onSubmit={this.handleSubmit}>
        <label for="username">Username</label>
        <input type="text" id="username" name="username" onChange={this.handleInputChange}></input>

        <label for="password">Password</label>
        <input type="password" id="password" name="password" onChange={this.handleInputChange}></input>

        <div class="buttons">
            <button type="submit">Log In</button>
            <button>Sign Up</button>
        </div>
        </form>
      </div>
    );
  }
}

export default Login;