import * as React from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import './PersonalForm.css';

const messages = defineMessages({
  firstLabel: {
    id: 'form.personal.first.label',
    description: 'Name of the "first name" label.',
    defaultMessage: 'First Name'
  },
  firstPlaceholder: {
    id: 'form.personal.first.placeholder',
    description: 'Placeholder text of the "first name" input field.',
    defaultMessage: 'First name'
  },
  lastLabel: {
    id: 'form.personal.last.label',
    description: 'Name of the "last name" label.',
    defaultMessage: 'Last Name'
  },
  lastPlaceholder: {
    id: 'form.personal.last.placeholder',
    description: 'Placeholder text of the "last name" input field.',
    defaultMessage: 'Last name'
  },
  salaryLabel: {
    id: 'form.personal.salary.label',
    description: 'Name of the "Annual Salary" label.',
    defaultMessage: 'Annual Salary'
  },
  salaryPlaceholder: {
    id: 'form.personal.salary.placeholder',
    description: 'Placeholder text of the "Annual Salary" input field.',
    defaultMessage: 'Annual salary in dollars'
  },
  reset: {
    id: 'form.personal.reset',
    description: 'Name of the "Reset" button.',
    defaultMessage: 'Clear Values'
  },
  submit: {
    id: 'form.personal.submit',
    description: 'Name of the "Submit" button.',
    defaultMessage: 'Submit'
  }
});

export interface IPersonalFormData {
  last: string;
  first: string;
  age: number;
  email: string;
}

const PersonalForm = (props: InjectedFormProps<IPersonalFormData>) => {
  const { pristine, submitting, reset, handleSubmit } = props;
  return (
    <form className="PersonalForm" onSubmit={handleSubmit}>
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

export default reduxForm<IPersonalFormData>({ form: 'personal' })(PersonalForm);
