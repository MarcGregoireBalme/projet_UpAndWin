import React from 'react';
import { Field, reduxForm } from 'redux-form';

const NameForm = (props) => {
  const {
    handleSubmit, pristine, reset, submitting,
  } = props;
  return (
    <div>
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
          <div>Sex</div>
          <div>
            <div>
              <Field name="sex" component="input" type="radio" value="male" />
              {' '}
            Male
            </div>
            <div>
              <Field name="sex" component="input" type="radio" value="female" />
              {' '}
            Female
            </div>
          </div>
        </div>
        <div>
          <div>Favorite Color</div>
          <div>
            <Field name="favoriteColor" component="select">
              <option />
              <option value="ff0000">Red</option>
              <option value="00ff00">Green</option>
              <option value="0000ff">Blue</option>
            </Field>
          </div>
        </div>
        <div>
          <div>Employed</div>
          <div>
            <Field
              name="employed"
              id="employed"
              component="input"
              type="checkbox"
            />
          </div>
        </div>
        <div>
          <div>Notes</div>
          <div>
            <Field name="notes" component="textarea" />
          </div>
        </div>
        <div>
          <button type="submit" disabled={pristine || submitting}>Submit</button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
          </button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'simple', // a unique identifier for this form
})(NameForm);
