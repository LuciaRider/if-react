import React, {useState} from 'react';
import './App.css';
import HomesSection from '../../HomesSection/HomesSection';
import TopSection from '../../TopSection/TopSection';

function App() {
  
  const [serverData, setServerData] = useState([]);
  const [showAvailableHotels, setShowAvailableHotels] = useState(false);

  return (
    <>
      <TopSection serverData={serverData} setServerData={setServerData} setShowAvailableHotels={setShowAvailableHotels}/>
      <main>
        <HomesSection/>
      </main>
    </>
  );
}

export default App;
