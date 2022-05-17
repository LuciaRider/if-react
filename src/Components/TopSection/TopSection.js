import React from 'react';
import './TopSection.css';
import TopHeader from './TopHeader/TopHeader';
import TopContent from './TopContent/TopContent';

function TopSection({setSearchValue})  {

    return (
        <header>
            <div className="top-section_container">
                <TopHeader/>
                <TopContent setSearchValue={setSearchValue}/>
            </div>
        </header>
    );
};

export default TopSection;