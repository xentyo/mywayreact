import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.login = this.login.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };
  login(event){
    axios({
      method: 'post',
      url: 'http://myway-api.herokuapp.com/api/users/login',
      data: {
        email: this.state.email,
       password: this.state.password
      }
    })
    .then(res => {
      console.log(res);
    })
    .catch(res => {
      console.log(res);    
    });
    event.preventDefault();
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <form onSubmit={this.login}>
          <label>
            Email: 
            <input 
            name="email"
            type="text"
            value={this.state.email}
            onChange={this.handleInputChange} />
          </label>
          <label>
            Password: 
            <input 
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleInputChange} />
          </label>
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default App;
