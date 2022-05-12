import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import './index.css';
import App from './Components/App/App';
import HotelPage from '../../if-react/src/AvailableHotels/HotelPage/HotelPage';
import LoginPage from '../../if-react/src/TopSection/LoginPage/LoginPage';
import RequireAutharization from '../../if-react/src/TopSection/TopContent/RequireAutharization/RequireAutharization';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
          <Route path="/" element={<App/>}/>
          <Route element={<RequireAutharization/>}/>
          <Route path="login" element={<LoginPage/>}/>
          <Route path='/hotels/:id' element={<HotelPage/>}/>
      </Routes>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);