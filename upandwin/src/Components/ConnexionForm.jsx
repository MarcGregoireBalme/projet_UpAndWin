import React, { Component } from 'react';
import {
  Button, Form, FormGroup, Label,
} from 'reactstrap';
// import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import './Form.css';

class ConnexionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formmodal: false,
      user: {},
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      formmodal: !prevState.formmodal,
    }));
  }

  handleSubmit = () => {
    // check react doc

    this.setState({ user: {} }, () => {
      console.log(this.state.user);
      // this.props.dispatch({
      //   type: 'UPDATE_USER',
      //   payload: this.state.user,
      // });
    });
  }

  render() {
    const {
      handleSubmit, pristine, submitting,
    } = this.props;
    console.log(this.props);
    return (
      <div>
        <div className="Logomodal" />
        <Form onSubmit={handleSubmit} className="wholeform">
          <FormGroup>
            <Label for="pseudo" className="fieldtitle">Coucou</Label>
            {' '}
            <Field
              name="pseudo"
              component="input"
              type="text"
              placeholder="Pseudo"
            />
          </FormGroup>
          <FormGroup>
            <Label for="email" className="fieldtitle">Email</Label>
            {' '}
            <Field
              name="email"
              component="input"
              type="email"
              placeholder="@"
            />
          </FormGroup>
          <FormGroup>
            <Label for="email" className="fieldtitle">Mot de passe</Label>
            {' '}
            <Field
              name="motdepasse"
              component="input"
              type="password"
              placeholder="Mot de passe"
            />
          </FormGroup>
          <FormGroup>
            <Label for="email" className="fieldtitle">Confirmez mot de passe</Label>
            {' '}
            <Field
              name="confmotdepasse"
              component="input"
              type="password"
              placeholder="Confirmé mot de passe"
            />
          </FormGroup>
          <FormGroup>
            <Button type="submit" disabled={pristine || submitting}>Register</Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

// export default reduxForm({
//   connexionform: 'toto', // a unique identifier for this form
// })(ConnexionForm);
export default connect()(ConnexionForm);
