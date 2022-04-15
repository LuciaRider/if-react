import React from 'react';

function Label(props) {
    return (
        <label className={props.className} for={props.for}>{props.text}</label>
    );
}

export default Label;