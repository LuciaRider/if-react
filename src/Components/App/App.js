import React, {useState} from 'react';
import './App.css';
import AvailableHotels from '../../AvailableHotels/AvailableHotels';
import HomesSection from '../../HomesSection/HomesSection';
import Footer from '../../Footer/Footer';
import TopSection from '../../TopSection/TopSection';

function App() {

  const [searchValue, setSearchValue] = useState([]);

  return (
    <>
      <TopSection/>
      <AvailableHotels searchValue={searchValue}/>
      <HomesSection/>
      <Footer/>
    </>
  )

};

export default App;
