import React, { Component } from 'react';
import '../App.css';
import '../pages/Home.css';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';
import { connect } from 'react-redux';
import Topnav from './Topnav';
import BottomNav from './BottomNav';
import './Form.css';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pseudo: '',
      email: '',
      password: '',
      confpassword: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    const { dispatch } = this.props;
    dispatch({
      type: 'CREATE_USER',
      user: this.state,
    });
    event.preventDefault();
  }

  validateForm() {
    const {
      pseudo, email, password, confpassword,
    } = this.state;
    return pseudo.length > 0
      && email.length > 0
      && password.length > 0
      && password === confpassword;
  }

  render() {
    const {
      pseudo, email, password, confpassword,
    } = this.state;
    return (
      <div className="wholeform">
        <Topnav />
        <Form onSubmit={this.handleSubmit} className="formcontainer">
          <FormGroup>
            <Label for="pseudo" className="fieldtitle">Pseudo</Label>
            {' '}
            <Input name="pseudo" type="pseudo" checked={pseudo} onChange={this.handleInputChange} placeholder="Pseudo" />
          </FormGroup>
          <FormGroup>
            <Label for="email" className="fieldtitle">Email</Label>
            {' '}
            <Input name="email" type="email" checked={email} onChange={this.handleInputChange} placeholder="Email" />
          </FormGroup>
          <FormGroup>
            <Label for="password" className="fieldtitle">Password</Label>
            {' '}
            <Input name="password" type="password" checked={password} onChange={this.handleInputChange} placeholder="Password" />
          </FormGroup>
          <FormGroup>
            <Label for="confpassword" className="fieldtitle">Confirm Password</Label>
            {' '}
            <Input name="confpassword" type="password" checked={confpassword} onChange={this.handleInputChange} placeholder="Password" />
          </FormGroup>
          <FormGroup>
            <Button type="submit" value="Submit" disabled={!this.validateForm()}>Register</Button>
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

export default connect(mapStateToProps)(RegisterForm);
