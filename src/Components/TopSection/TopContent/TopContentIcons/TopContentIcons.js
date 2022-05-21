import React from 'react';
import './TopContentIcons.css';
import GooglePlayBadge from '../../../../img/google-play-badge.png';
import AppStoreBadge from '../../../../img/app-store-badge.png';

function TopContentIcons() {
    
    return ( 
        <div className="top-section_bottom-icons">
            <a href="https://play.google.com/store" target="_blank">
                <img src={GooglePlayBadge} className="google-play" alt="Google-play"/>
            </a>
            <a href="https://www.apple.com/ru/app-store/" target="_blank">
                <img src={AppStoreBadge} className="app-store" alt="Google-play"/>
            </a>
        </div>
    );
};

export default TopContentIcons;