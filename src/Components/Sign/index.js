import React, { Component } from 'react';
import axios from 'axios';
//import './Components/global/css/App.css';
import { Button, Form, FormGroup, Input, Container, Row } from 'reactstrap';


class Sign extends Component {
  constructor(props) {
    super (props);
    this.state = {
      name: '',
      lastname: '',
      email: '',
      password: '',
      university: '',
      date: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.sign = this.sign.bind(this);
  };
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };
  sign(event){
    axios({
      method: 'post',
      url: 'https://myway-api.herokuapp.com/api/users/register',
      data: {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        password: this.state.password,
        university: this.state.password,
        birthdate: this.state.birthdate

      }
    })
    .then(res => {
      console.log(res);
    })
    .catch(res => {
      console.log(res.response.data);    
    });
    event.preventDefault();
  };
    render(){
        return (
          <div className="Sign">
        <Container>
          <Form onSubmit={this.sign}>
            <FormGroup >
              <h1 align="center">Crear cuenta</h1>
            </FormGroup>
             <Row>
             <FormGroup className="mb-6 mr-sm-4 mb-sm-4">
               <Input type="firstname" name="firstname" placeholder="Nombre(s)" value={this.state.firstname}
            onChange={this.handleInputChange} />
             </FormGroup>
             <FormGroup>
               <Input type="lastname" name="lastname" placeholder="Apellido(s)" value={this.state.lastname}
            onChange={this.handleInputChange} />
             </FormGroup>
             </Row>
             <FormGroup>
               <Input type="email" name="email" placeholder="Correo" value={this.state.email}
            onChange={this.handleInputChange} />
             </FormGroup>
             <Row>
             <FormGroup className="mb-6 mr-sm-4 mb-sm-4">
               <Input type="password" name="password" placeholder="Contraseña" value={this.state.password}
            onChange={this.handleInputChange}/>
            </FormGroup>
            <FormGroup>
              <Input type="password2" name="password2" placeholder="Confirmacion contraseña" value={this.state.password}
            onChange={this.handleInputChange} />
            </FormGroup>
            </Row>
            <FormGroup>
              <Input type="university" name="university" placeholder="Universidad" value={this.state.university}
            onChange={this.handleInputChange}/>
            </FormGroup>
            <FormGroup>
              <Input type="date" name="date" placeholder="date placeholder" value={this.state.date}
            onChange={this.handleInputChange}/>
           </FormGroup>
           <div>
             <Button color="info">REGISTRARME</Button>{' '}
           </div>
         </Form>
       </Container>
       </div>
          );
        }
      }


export default Sign;