import React, { Component } from 'react';
import {
  Button, Form, FormGroup, Label,
} from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import './Form.css';

class subForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formmodal: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      formmodal: !prevState.formmodal,
    }));
  }

  render() {
    const {
      handleSubmit, pristine, submitting,
    } = this.props;
    return (
      <div>
        <div className="Logomodal" />
        <Form onSubmit={handleSubmit} className="wholeform">
          <FormGroup>
            <Label for="pseudo" className="fieldtitle">Pseudo</Label>
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

export default reduxForm({
  subform: 'simple', // a unique identifier for this form
})(subForm);
