import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';
import Modal from 'react-bootstrap/Modal';
import { connect } from 'react-redux';
import Topnav from './Topnav';
import BottomNav from './BottomNav';
import './Form.css';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alias: '',
      email: '',
      password: '',
      confpassword: '',
      show: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClose = () => {
    this.setState({ show: false });
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
    event.preventDefault();
    const { dispatch } = this.props;
    const { alias, email, password } = this.state;
    dispatch({
      type: 'CREATE_USER',
      user: this.state,
    });
    axios
      .post('http://localhost:3005/users', {
        alias,
        email,
        password,
      });
    this.setState({
      show: true,
    });
  }

  validateForm() {
    const {
      alias, email, password, confpassword,
    } = this.state;
    return alias.length > 0
      && email.length > 0
      && password.length > 0
      && password === confpassword;
  }

  render() {
    const {
      alias, email, password, confpassword, show,
    } = this.state;
    return (
      <div className="wholeform">
        <Topnav />
        <Form onSubmit={this.handleSubmit} className="formcontainer">
          <FormGroup>
            <Label for="alias" className="fieldtitle">Pseudo</Label>
            {' '}
            <Input name="alias" type="alias" checked={alias} onChange={this.handleInputChange} placeholder="Pseudo" />
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
        <Modal id="modalAlerte" show={show} onHide={this.handleClose}>
          <Modal.Header closeButton />
          <Modal.Body id="modalBody">
            <div>
              <h4>
                A user was submitted:
                {alias}
              </h4>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = function users(state) {
  return { state };
};

export default connect(mapStateToProps)(RegisterForm);
