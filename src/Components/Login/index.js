//Dependencies
import React, { Component } from 'react';
//import PropTypes from 'prop-types';
//import './global/css/App.css';
import axios from 'axios';
//import logo from "./logo.svg";
import { Form, FormGroup, Input, Button, Container, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      modal: false
    };
    this.toogle = this.toggle.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.login = this.login.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  login(event) {
    axios({
      method: "post",
      url: "http://myway-api.herokuapp.com/api/users/login",
      data: {
        email: this.state.email,
        password: this.state.password
      }
    })
      .then(res => {
        if (res.status === 200) {
          this.toogle();
          console.log(res);
        } else {
          console.log(res);
        }
      })
      .catch(err => {
        console.log(err.response.data);
      });
    event.preventDefault();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Container>
          <h1>Crear cuenta</h1>
          <Form onSubmit={this.login}>
            <FormGroup>
              <Input
                name="email"
                type="email"
                placeholder="Correo electronico"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Input
                name="password"
                type="password"
                placeholder="Contrasena"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
            </FormGroup>
            <Button color="primary" type="submit">
              Entrar
            </Button>
          </Form>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toogle}>Conexion exitosa</ModalHeader>
            <ModalBody>Lorem Ipsum</ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toogle}>
                Ok
              </Button>
            </ModalFooter>
          </Modal>
        </Container>
      </div>
    );
  }
}

export default App;
