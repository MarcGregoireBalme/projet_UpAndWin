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
// eslint-disable-next-line import/named
import { dispatch } from '../actions/actions';

class ConnexionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alias: '',
      password: '',
      redirect: false,
      errmsg: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const { alias, password } = this.state;
    // eslint-disable-next-line no-shadow
    const { dispatch } = this.props;
    dispatch(this.state);
    axios
      .get(`http://localhost:3005/users/${alias}`)
      .then((res) => {
        console.log(res);
        if (res.data[0].alias === alias && res.data[0].password === password) {
          this.setState({ redirect: true });
        } else {
          this.setState({ errmsg: 'Pseudo or password invalid' });
        }
      });
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
    const { alias, password } = this.state;
    return alias.length > 0 && password.length > 0;
  }


  render() {
    const {
      alias, password, redirect, errmsg,
    } = this.state;
    if (redirect) return <Redirect to="/Profil" />;
    return (
      <div className="wholeform">
        <Topnav />
        <Form onSubmit={this.handleSubmit}>
          <FormGroup controlid="alias">
            <Label>Pseudo</Label>
            <Input
              name="alias"
              autoFocus
              type="alias"
              checked={alias}
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
            {errmsg}
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

const mapStateToProps = state => ({
  state,
});

export default connect(mapStateToProps, { dispatch })(ConnexionForm);
