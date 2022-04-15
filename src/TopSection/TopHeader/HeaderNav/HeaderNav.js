import React from 'react';
import './HeaderNav.css';

import HeaderTextMenu from './HeaderTextMenu/HeaderTextMenu';
import HeaderIcon from './HeaderIcon/HeaderIcon';

function HeaderNav() {
    return (
        <nav className="header_nav">
            <div className="nav_text">
                <HeaderTextMenu context="Stays"/>
                <HeaderTextMenu context="Attractions"/>
            </div>
            <div className="nav_icons">
                <HeaderIcon className={"night"} viewBox={"0 0 30 30"} path={"M25.6101 10.6101V4.38992H19.3899L15 0L10.6101 4.38992H4.38992V10.6101L0 15L4.38992 19.3899V25.6101H10.6101L15 30L19.3899 25.6101H25.6101V19.3899L30 15L25.6101 10.6101ZM15 22.9576C13.8196 22.9576 12.6923 22.6923 11.6844 22.2281C14.4164 20.9682 16.3263 18.2096 16.3263 15C16.3263 11.7905 14.4164 9.03183 11.6844 7.77188C12.6923 7.30769 13.8196 7.04244 15 7.04244C19.3899 7.04244 22.9576 10.6101 22.9576 15C22.9576 19.3899 19.3899 22.9576 15 22.9576Z"}/>
                <HeaderIcon className={"account"} viewBox={"0 0 40 40"} path={"M20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0ZM20 6C23.32 6 26 8.68 26 12C26 15.32 23.32 18 20 18C16.68 18 14 15.32 14 12C14 8.68 16.68 6 20 6ZM20 34.4C15 34.4 10.58 31.84 8 27.96C8.06 23.98 16 21.8 20 21.8C23.98 21.8 31.94 23.98 32 27.96C29.42 31.84 25 34.4 20 34.4Z"}/>
            </div>
        </nav>
    )
}

export default HeaderNav;