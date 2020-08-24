import React, { Component } from 'react';
import { Redirect  } from "react-router-dom";

import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      redirect: false,
      username: "",
      password: ""
    };

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
        .then(res => {
          if (res.status === 200) {
            this.setState({redirect: true});
          }
        })
        .catch(err => err);
    event.preventDefault();
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/home" />;
    }
    return (
      <div className="Login">
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
