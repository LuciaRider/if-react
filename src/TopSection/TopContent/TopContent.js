import React from 'react';
import TopTitle from './TopTitle/TopTitle';
import TopForm from './TopForm/TopForm';
import TopContentIcons from './TopContentIcons/TopContentIcons';

function TopContent({setSearchValue}) {

    return (
        <div>
            <TopTitle/>
            <TopForm setSearchValue={setSearchValue}/>
            <TopContentIcons/>
        </div>
    );
};

export default TopContent;