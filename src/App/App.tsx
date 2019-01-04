import React, { useState } from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';

import PersonalForm from '../Form/PersonalForm';
import './App.css';
import logo from './logo.svg';

const messages = defineMessages({
  greeting: {
    id: 'app.home.greeting',
    description: 'Message to greet users.',
    defaultMessage: 'Welcome to {name}!'
  },
  intro: {
    id: 'app.home.intro',
    description: 'Instructions how to get started.',
    defaultMessage:
      'Choose whether to start filling out a fresh new form or load values from a previously saved one.'
  },
  emptyForm: {
    id: 'app.home.emptyForm',
    description: 'Start with an empty form.',
    defaultMessage: 'Empty Form'
  },
  loadForm: {
    id: 'app.home.loadForm',
    description: 'Start with a form loaded with some initial values.',
    defaultMessage: 'Load Form'
  }
});

enum Showing {
  Buttons,
  EmptyForm,
  LoadedForm
}

const App = () => {
  const [showing, setShowing] = useState(Showing.Buttons);
  return (
    <div className="App">
      <header className="App__header">
        <div className="App__languages">
          <a href="/?locale=cs">česky</a>
          <a href="/?locale=en">English</a>
        </div>
        <img src={logo} className="App__logo" alt="logo" />
        <FormattedMessage {...messages.greeting} values={{ name: 'React' }}>
          {message => <h1 className="App__title">{message}</h1>}
        </FormattedMessage>
      </header>
      <main className="App__main">
        {showing === Showing.Buttons && (
          <React.Fragment>
            <p className="App__intro">
              <FormattedMessage {...messages.intro} />
            </p>
            <div>
              <button
                type="button"
                className="App__button"
                onClick={() => setShowing(Showing.EmptyForm)}
              >
                <FormattedMessage {...messages.emptyForm} />
              </button>
              <button
                type="button"
                className="App__button"
                onClick={() => setShowing(Showing.LoadedForm)}
              >
                <FormattedMessage {...messages.loadForm} />
              </button>
            </div>
          </React.Fragment>
        )}
        {showing === Showing.EmptyForm && <PersonalForm />}
      </main>
    </div>
  );
};

export default App;
