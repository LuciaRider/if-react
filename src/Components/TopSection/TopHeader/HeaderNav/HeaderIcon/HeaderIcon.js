import React from 'react';
import './HeaderIcon.css';

function HeaderIcon({handleClick, className, viewBox, path}) {

    return (
        <svg onClick={handleClick} className={className} viewBox={viewBox}>
            <g>
                <path d={path}/>
            </g>
        </svg>
    )
}

export default HeaderIcon;