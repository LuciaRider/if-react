import React from 'react';
import './HeaderIcon.css';

function HeaderIcon(props) {

    return (
        <svg onClick={props.handleClick} className={props.className} viewBox={props.viewBox}>
            <g>
                <path d={props.path}/>
            </g>
        </svg>
    )
}

export default HeaderIcon;