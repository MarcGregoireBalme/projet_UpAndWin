import React, { Component } from 'react';
import {
  FormGroup,
  Input,
  Label,
  Form,
} from 'reactstrap';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './ConnexionForm.css';
import Topnav from './Topnav';
import BottomNav from './BottomNav';
import './Form.css';
// eslint-disable-next-line import/named
import { login } from '../actions/actions';

class ConnexionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alias: '',
      password: '',
      redirect: false,
      errmsg: '',
      user_id: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { login } = this.props;
    const { alias, password } = this.state;
    // eslint-disable-next-line no-shadow
    axios
      .get(`http://localhost:3005/users/${alias}`)
      .then((res) => {
        if (res.data[0].alias === alias && res.data[0].password === password) {
          this.setState({ redirect: true });
          sessionStorage.setItem('user_id', res.data[0]._id);
          login({ ...this.state, user_id: res.data[0]._id });
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
    if (redirect) return <Redirect to="/" />;
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
            <Label>Mot de passe</Label>
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
            <button
              block
              disabled={!this.validateForm()}
              type="submit"
              value="Submit"
              className="Button"
            >
              Login
            </button>
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

const mdtp = dispatch => ({
  login: value => dispatch(login(value)),
});

export default connect(mapStateToProps, mdtp)(ConnexionForm);
