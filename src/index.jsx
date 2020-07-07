import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import './index.css';

import App from './App';
import rootReducer from './reducers/index';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // allows redux devtools
);

console.log(store);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
