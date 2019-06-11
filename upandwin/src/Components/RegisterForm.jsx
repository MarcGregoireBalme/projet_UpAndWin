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

  render() {
    return (
      <div>
        <Topnav />
        <Form onSubmit={this.handleSubmit} className="wholeform">
          <FormGroup>
            <Label for="pseudo" className="fieldtitle">Pseudo</Label>
            {' '}
            <Input name="pseudo" type="pseudo" checked={this.state.pseudo} onChange={this.handleInputChange} placeholder="Pseudo" />
          </FormGroup>
          <FormGroup>
            <Label for="email" className="fieldtitle">Email</Label>
            {' '}
            <Input name="email" type="email" checked={this.state.email} onChange={this.handleInputChange} placeholder="Email" />
          </FormGroup>
          <FormGroup>
            <Button type="submit" value="Submit">Register</Button>
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
