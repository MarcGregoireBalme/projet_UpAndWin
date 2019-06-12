import React, { Component } from 'react';
import {
  Button, FormGroup, Input, Label,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './ConnexionForm.css';
import Topnav from './Topnav';
import BottomNav from './BottomNav';
import './Form.css';

class ConnexionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }


  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  validateForm() {
    const { email, password } = this.state;
    return email.length > 0 && password.length > 0;
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="wholeform">
        <Topnav />
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <Label>Email</Label>
            <Input
              autoFocus
              type="email"
              value={email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <Label>Password</Label>
            <Input
              value={password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <FormGroup bsSize="large">
            <div className="pititephrase">
              Je n’ai pas de compte, je souhaite
              {' '}
              <Link to="/Register">m’inscrire</Link>
            </div>
          </FormGroup>
          <FormGroup bsSize="large">
            <Button
              block
              bsSize="large"
              disabled={!this.validateForm()}
              type="submit"
            >
              Login
            </Button>
          </FormGroup>
        </form>
        <BottomNav />
      </div>
    );
  }
}

export default ConnexionForm;
