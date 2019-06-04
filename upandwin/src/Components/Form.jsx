import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  }

  render() {
    const {
      handleSubmit, pristine, reset, submitting,
    } = this.props;
    return (
      <div className="wholeform">
        <h2>Formulaire d&apos;inscription</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <div>First Name</div>
            <div>
              <Field
                name="firstName"
                component="input"
                type="text"
                placeholder="First Name"
              />
            </div>
          </div>
          <div>
            <div>Last Name</div>
            <div>
              <Field
                name="lastName"
                component="input"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div>
            <div>Pseudo</div>
            <div>
              <Field
                name="pseudo"
                component="input"
                type="text"
                placeholder="Pseudo"
              />
            </div>
          </div>
          <div>
            <div>Email</div>
            <div>
              <Field
                name="email"
                component="input"
                type="email"
                placeholder="Email"
              />
            </div>
          </div>
          <div>
            <div>Main Lane</div>
            <div>
              <Field name="favoriteColor" component="select">
                <option />
                <option value="top">Top</option>
                <option value="mid">Mid</option>
                <option value="jungle">Jungle</option>
                <option value="adc">ADC</option>
                <option value="bottom">Bottom</option>
              </Field>
            </div>
          </div>
          <div>
            <button type="submit" disabled={pristine || submitting}>Submit</button>
            <button type="button" disabled={pristine || submitting} onClick={reset}>
              Clear Values
            </button>
          </div>
          <div>
            <button type="submit" disabled={pristine || submitting}>Connection via Facebook</button>
            <button type="submit" disabled={pristine || submitting}>Connection via Google</button>
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'simple', // a unique identifier for this form
})(Form);
