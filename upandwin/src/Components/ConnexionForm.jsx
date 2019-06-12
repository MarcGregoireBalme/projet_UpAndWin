import React, { Component } from 'react';
import {
  Button, FormGroup, Input, Label, Form,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
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

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const { dispatch } = this.props;
    dispatch({
      type: 'CHECK_USER',
      user: this.state,
    });
    event.preventDefault();
  }

  handleInputChange(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });
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
        <Form onSubmit={this.handleSubmit}>
          <FormGroup controlid="email">
            <Label>Email</Label>
            <Input
              name="email"
              autoFocus
              type="email"
              checked={email}
              onChange={this.handleInputChange}
              placeholder="@"
            />
          </FormGroup>
          <FormGroup controlid="password">
            <Label>Password</Label>
            <Input
              name="password"
              checked={password}
              onChange={this.handleInputChange}
              type="password"
              placeholder="Password"
            />
          </FormGroup>
          <FormGroup>
            <div className="pititephrase">
              Je n’ai pas de compte, je souhaite
              {' '}
              <Link to="/Register">m’inscrire</Link>
            </div>
          </FormGroup>
          <FormGroup>
            <Button
              block
              disabled={!this.validateForm()}
              type="submit"
              value="Submit"
            >
              Login
            </Button>
          </FormGroup>
        </Form>
        <BottomNav />
      </div>
    );
  }
}

const mapStateToProps = function users(state) {
  return { state };
};

export default connect(mapStateToProps)(ConnexionForm);
