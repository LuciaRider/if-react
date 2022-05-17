import { Navigate } from 'react-router-dom';
import userAuthSelector from '../../ducks/selectors.js';
import { useSelector } from 'react-redux';
import React, {useState} from 'react';
import './App.css';
import AvailableHotels from '../../AvailableHotels/AvailableHotels';
import HomesSection from '../../HomesSection/HomesSection';
import Footer from '../../Components/Footer/Footer.js';
import TopSection from '../../TopSection/TopSection';
import WhatDoWeOffer from '../WhatDoWeOffer/WhatDoWeOffer.js';

function App() {

  const [searchValue, setSearchValue] = useState([]);
  const userData = useSelector(userAuthSelector);

  return (
    <>
      {!userData && (
        <Navigate to='/login' replace={true}/>
      )}
      <TopSection setSearchValue={setSearchValue}/>
      <AvailableHotels searchValue={searchValue}/>
      <WhatDoWeOffer/>
      <HomesSection/>
      <Footer/>
    </>
  );
};

export default App;
