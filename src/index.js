import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import './index.css';
import AppWrapper from './Components/AppWrapper/AppWrapper.js';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <AppWrapper/>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);