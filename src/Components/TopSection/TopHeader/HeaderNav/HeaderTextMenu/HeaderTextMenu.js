import React from 'react';
import './HeaderTextMenu.css';

function HeaderTextMenu({context}) {
        return (
            <a className="nav_text_menu"  href="#">{context}</a>
        );
}

export default HeaderTextMenu;