import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import ScrollToTop from './components/ScrollToTop';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowDown, faArrowRight, faExclamationTriangle, faEnvelope, faTimesCircle, faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowDown,faArrowRight,faExclamationTriangle, faEnvelope, faTimesCircle, faBars);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
