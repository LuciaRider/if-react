import React, {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AvailableHotels from '../../AvailableHotels/AvailableHotels';
import HotelPage from '../../AvailableHotels/HotelPage/HotelPage';
import HomesSection from '../../HomesSection/HomesSection';
import LoginPage from '../../TopSection/LoginPage/LoginPage';
import Footer from '../../Footer/Footer';

function App() {

  const [searchValue, setSearchValue] = useState([]);

  return (
    <BrowserRouter>
      <>
        <LoginPage setSearchValue={setSearchValue}/>
          <main>
            <Routes>
              <Route path='/hotels' element={<AvailableHotels searchValue={searchValue}/>}/>
              <Route path='/hotels/:id' element={<HotelPage/>}/>
            </Routes>
            <HomesSection/>
          </main>
        <Footer/>
      </>
    </BrowserRouter>
  );

};

export default App;
