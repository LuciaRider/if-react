import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './Components/App/App';
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
    <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/hotels" element={<App/>}/>
        <Route path='/hotels/:id' element={<HotelPage/>}/>
        <Route path="login" element={<LoginPage/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);