import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import './index.css';
import AppWrapper from './Components/AppWrapper/AppWrapper.js';
import HotelPage from '../../if-react/src/AvailableHotels/HotelPage/HotelPage';
import LoginPage from '../../if-react/src/TopSection/LoginPage/LoginPage';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <AppWrapper/>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);