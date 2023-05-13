import React from 'react';
import ReactDOM from 'react-dom/client';
import store from "./redux/store"
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(store.getState());
root.render(
  <Provider
  store={store}
  >
    <App />
  </Provider>
);

reportWebVitals();
