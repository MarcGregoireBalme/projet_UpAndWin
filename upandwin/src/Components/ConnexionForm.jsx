import React, { Component } from 'react';
import {
  Button, FormGroup, Input, Label, Form,
} from 'reactstrap';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './ConnexionForm.css';
import Topnav from './Topnav';
import BottomNav from './BottomNav';
import './Form.css';
import { dispatch } from '../actions/actions';

class ConnexionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pseudo: '',
      password: '',
      redirect: false,
      errmsg: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const { pseudo, password } = this.state;
    const { dispatch } = this.props;
    dispatch(this.state);
    pseudo !== ''
      ? axios
        .get(`http://localhost:3005/users/${pseudo}`)
        .then((res) => {
          console.log(res.data[0]);
          if (res.data[0].pseudo === pseudo && res.data[0].password === password) {
            this.setState({ redirect: true });
            console.log('yes');
          }
          // if () {this.setState({errmsg:"credential not correct"})};
          console.log('nop');
        })
      : console.log('wait what ?');
    // if pseudo existe en base de donnée, alors on check que le password correspond au user, puis le navlink du bouton me redirige vers la page profil
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
    const { pseudo, password } = this.state;
    return pseudo.length > 0 && password.length > 0;
  }


  render() {
    console.log(this.props);
    const {
      pseudo, password, redirect, errmsg,
    } = this.state;
    if (redirect) return <Redirect to="/Profil" />;
    return (
      <div className="wholeform">
        <Topnav />
        <Form onSubmit={this.handleSubmit}>
          <FormGroup controlid="pseudo">
            <Label>Pseudo</Label>
            <Input
              name="pseudo"
              autoFocus
              type="pseudo"
              checked={pseudo}
              onChange={this.handleInputChange}
              placeholder="Pseudo"
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
            {errmsg}
          </FormGroup>
        </Form>
        <BottomNav />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state,
});

export default connect(mapStateToProps, { dispatch })(ConnexionForm);
