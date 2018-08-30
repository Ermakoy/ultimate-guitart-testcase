import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {
  injectGlobalStyle,
  injectResetStyle,
} from 'reactackle';

injectGlobalStyle();
injectResetStyle();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
