import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Store from './redux/store.js';
import reducer from './redux/reducer.js';
import initialState from './redux/initialState.js';
console.log(initialState);
const store = new Store(initialState, reducer);
console.log('store', store);
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
