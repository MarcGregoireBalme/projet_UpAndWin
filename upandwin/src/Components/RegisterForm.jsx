import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import '../pages/Home.css';
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
      pseudo: '',
      mail: '',
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
    const { pseudo, mail, password } = this.state;
    dispatch({
      type: 'CREATE_USER',
      user: this.state,
    });
    axios
      .post('http://localhost:3005/users', {
        pseudo,
        mail,
        password,
      });
    this.setState({
      show: true,
    });
  }

  validateForm() {
    const {
      pseudo, mail, password, confpassword,
    } = this.state;
    return pseudo.length > 0
      && mail.length > 0
      && password.length > 0
      && password === confpassword;
  }

  render() {
    const {
      pseudo, mail, password, confpassword, show,
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
            <Label for="mail" className="fieldtitle">Email</Label>
            {' '}
            <Input name="mail" type="mail" checked={mail} onChange={this.handleInputChange} placeholder="Email" />
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
                {pseudo}
              </h4>
            </div>
          </Modal.Body>
        </Modal>
        <BottomNav />
      </div>
    );
  }
}

const mapStateToProps = function users(state) {
  return { state };
};

export default connect(mapStateToProps)(RegisterForm);
