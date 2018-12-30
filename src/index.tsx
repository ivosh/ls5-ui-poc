import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { addLocaleData, IntlProvider } from 'react-intl';
import * as csLocaleData from 'react-intl/locale-data/cs';
import * as enLocaleData from 'react-intl/locale-data/en';

import App from './App';
import translations from './i18n/locales';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

addLocaleData(csLocaleData);
addLocaleData(enLocaleData);
const locale = window.location.search.replace('?locale=', '') || 'en';

ReactDOM.render(
  <IntlProvider key={locale} locale={locale} messages={translations[locale]}>
    <App />
  </IntlProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
