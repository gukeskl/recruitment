import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router';
import { store } from 'store';
import { Provider } from 'react-redux';
import './index.css';
import 'bulma/css/bulma.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <Router />
  </Provider>
);
