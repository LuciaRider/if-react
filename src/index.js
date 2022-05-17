import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import './index.css';
import AppWrapper from './components/AppWrapper/AppWrapper.js';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <AppWrapper/>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);