import React from 'react';
import './HeaderTextMenu.css';

function HeaderTextMenu(props) {
        return (
            <a className="nav_text_menu"  href="#">{props.context}</a>
        );
}

export default HeaderTextMenu;