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
            <Label for="alias" className="fieldtitle">Pseudo</Label>
            {' '}
            <Field
              name="alias"
              component="input"
              type="text"
              placeholder="alias"
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
            <Label for="mainlane" className="fieldtitle">Main Lane</Label>
            {' '}
            <Field name="mainlane" component="select">
              <option value="top">Top</option>
              <option value="mid">Mid</option>
              <option value="jungle">Jungle</option>
              <option value="adc">ADC</option>
              <option value="support">Support</option>
            </Field>
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
  form: 'simple', // a unique identifier for this form
})(subForm);
