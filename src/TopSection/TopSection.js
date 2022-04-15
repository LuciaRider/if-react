import React from 'react';
import './TopSection.css';
import TopHeader from './TopHeader/TopHeader';
import TopContent from './TopContent/TopContent';

function TopSection(props)  {
    return (
        <header>
            <div className="top-section_container">
                <TopHeader/>
                <TopContent serverData={props.serverData} setServerData={props.setServerData} setShowAvailableHotels={props.setShowAvailableHotels}/>
            </div>
        </header>
    )
}

export default TopSection;