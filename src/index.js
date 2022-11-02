import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';

// STORE -> GLOBALIZED STATE

// ACTION INCREMENT
const increment = () => {
  return {
    type : 'INCREMENT'
  };
};
const decrement = () => {
  return {
    type : 'DECREMENT'
  };
};

// REDUCER
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state ;
  }
}

const store = createStore(
  counter, /* preloadedState, */
+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// display in console
store.subscribe(() => console.log(store.getState()));

// DISPATCH
store.dispatch(increment());




ReactDOM.render(
  <React.StrictMode>
    
      <App />

  </React.StrictMode>,
  document.getElementById('root')
);