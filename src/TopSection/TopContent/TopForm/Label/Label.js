import React from 'react';

function Label(props) {
    return (
        <label className={props.className} htmlFor={props.for} key={props.key}>{props.text}</label>
    );
}

export default Label;