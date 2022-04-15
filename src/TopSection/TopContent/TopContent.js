import React from 'react';
import './TopContent.css';
import TopTitle from './TopTitle/TopTitle';
import TopForm from './TopForm/TopForm';
import TopContentIcons from './TopContentIcons/TopContentIcons';

function TopContent(props) {
    return (
        <div className="main-header-content">
            <TopTitle/>
            <TopForm serverData={props.serverData} setServerData={props.setServerData} setShowAvailableHotels={props.setShowAvailableHotels}/>
            <TopContentIcons/>
        </div>
    );
}

export default TopContent;