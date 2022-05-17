import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import userAuthSelector from '../../ducks/selectors.js';
import { useSelector } from 'react-redux';
import HotelPage from '../../AvailableHotels/HotelPage/HotelPage.js';
import App from '../App/App.js';
import LoginPage from '../../TopSection/LoginPage/LoginPage';

function AppWrapper() {

  return (
      <>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path='/hotels/:id' element={<HotelPage/>}/>
        </Routes>
    </>
  )
};

export default AppWrapper;
