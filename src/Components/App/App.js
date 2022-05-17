import { Navigate } from 'react-router-dom';
import userAuthSelector from '../../ducks/selectors.js';
import { useSelector } from 'react-redux';
import React, {useState} from 'react';
import './App.css';
import AvailableHotels from '../../components/AvailableHotels/AvailableHotels.js';
import HomesSection from '../../components/HomesSection/HomesSection.js';
import Footer from '../../components/Footer/Footer.js';
import TopSection from '../../components/TopSection/TopSection.js';
import WhatDoWeOffer from '../../components/WhatDoWeOffer/WhatDoWeOffer.js';

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
