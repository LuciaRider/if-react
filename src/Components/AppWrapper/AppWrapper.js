import React from 'react';
import { Route, Routes } from 'react-router-dom';
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
