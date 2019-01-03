import * as React from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import './AppForm.css';

const messages = defineMessages({
  firstLabel: {
    id: 'app.form.first.label',
    description: 'Name of the "first name" label.',
    defaultMessage: 'First Name'
  },
  firstPlaceholder: {
    id: 'app.form.first.placeholder',
    description: 'Placeholder text of the "first name" input field.',
    defaultMessage: 'First name'
  },
  lastLabel: {
    id: 'app.form.last.label',
    description: 'Name of the "last name" label.',
    defaultMessage: 'Last Name'
  },
  lastPlaceholder: {
    id: 'app.form.last.placeholder',
    description: 'Placeholder text of the "last name" input field.',
    defaultMessage: 'Last name'
  },
  salaryLabel: {
    id: 'app.form.salary.label',
    description: 'Name of the "Annual Salary" label.',
    defaultMessage: 'Annual Salary'
  },
  salaryPlaceholder: {
    id: 'app.form.salary.placeholder',
    description: 'Placeholder text of the "Annual Salary" input field.',
    defaultMessage: 'Annual salary in dollars'
  },
  reset: {
    id: 'app.form.reset',
    description: 'Name of the "Reset" button.',
    defaultMessage: 'Clear Values'
  },
  submit: {
    id: 'app.form.submit',
    description: 'Name of the "Submit" button.',
    defaultMessage: 'Submit'
  }
});

export interface IAppFormData {
  last: string;
  first: string;
  age: number;
  email: string;
}

const AppForm = (props: InjectedFormProps<IAppFormData>) => {
  const { pristine, submitting, reset, handleSubmit } = props;
  return (
    <form className="AppForm" onSubmit={handleSubmit}>
      <div>
        <FormattedMessage {...messages.firstLabel} tagName="label" />
        <div>
          <FormattedMessage {...messages.firstPlaceholder}>
            {placeholder => (
              <Field name="first" component="input" type="text" placeholder={placeholder} />
            )}
          </FormattedMessage>
        </div>
      </div>
      <div>
        <FormattedMessage {...messages.lastLabel} tagName="label" />
        <div>
          <FormattedMessage {...messages.lastPlaceholder}>
            {placeholder => (
              <Field name="last" component="input" type="text" placeholder={placeholder} />
            )}
          </FormattedMessage>
        </div>
      </div>
      <div>
        <FormattedMessage {...messages.salaryLabel} tagName="label" />
        <div>
          <FormattedMessage {...messages.salaryPlaceholder}>
            {placeholder => (
              <Field name="salary" component="input" type="text" placeholder={placeholder} />
            )}
          </FormattedMessage>
        </div>
      </div>
      <div>
        <FormattedMessage {...messages.submit}>
          {message => (
            <button type="submit" disabled={pristine || submitting}>
              {message}{' '}
            </button>
          )}
        </FormattedMessage>

        <button type="button" disabled={pristine || submitting} onClick={reset}>
          <FormattedMessage {...messages.reset} />
        </button>
      </div>
    </form>
  );
};

export default reduxForm<IAppFormData>({ form: 'AppForm' })(AppForm);
