import React from 'react';
import React, {useEffect, useState} from 'react';
import './AvailableHotels.css';
import SectionTitle from '../Components/SectionTitle/SectionTitle';

function AvailableHotels() {
    const [isShowAvailable, showAvailable] = useState(false)
    
    return (
      <main>
        {/* <button onClick={() => showAvailable(true)}>{isShowAvailable?1:0}</button> */}
        <button onClick={() => showAvailable(true)}></button>
        <div>{isShowAvailable && 'текст'}</div>
      </main>
    );
  }
  
  export default AvailableHotels;