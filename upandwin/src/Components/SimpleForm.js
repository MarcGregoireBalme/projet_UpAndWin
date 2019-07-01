/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import { Field, reduxForm } from 'redux-form';

const SimpleForm = (props) => {
  const {
    handleSubmit, pristine, reset, submitting,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <label>Score</label>
      <div>
        <label>
          <Field
            name="sex"
            component="input"
            type="radio"
            value="10"
          />
          {' '}
            10
        </label>
        <label>
          <Field
            name="sex"
            component="input"
            type="radio"
            value="20"
          />
          {' '}
            20
        </label>
        <label>
          <Field
            name="sex"
            component="input"
            type="radio"
            value="30"
          />
          {' '}
            30
        </label>
      </div>
      <div>
        <label>
          <Field
            name="sex"
            component="input"
            type="radio"
            value="male"
          />
          {' '}
            Male
        </label>
        <label>
          <Field
            name="sex"
            component="input"
            type="radio"
            value="female"
          />
          {' '}
            Female
        </label>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'simple', // a unique identifier for this form
})(SimpleForm);
