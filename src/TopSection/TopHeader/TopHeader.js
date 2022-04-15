import React from 'react';
import './TopHeader.css';

import TopHeaderLogo from './TopHeaderLogo/TopHeaderLogo';
import HeaderNav from './HeaderNav/HeaderNav';

function TopHeader() {
    return (
        <div className="header">
            <TopHeaderLogo/>
            <HeaderNav/>
        </div>
    )
}

export default TopHeader;