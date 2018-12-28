import * as React from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';
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
    defaultMessage: 'To get started, edit {filename} and save to reload.'
  }
});

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">
        <FormattedMessage {...messages.greeting} values={{ name: 'React' }} />
      </h1>
    </header>
    <p className="App-intro">
      <FormattedMessage {...messages.intro} values={{ filename: <code>src/App.tsx</code> }} />
    </p>
  </div>
);

export default App;
