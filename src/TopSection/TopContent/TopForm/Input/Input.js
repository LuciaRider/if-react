import React from 'react';

function Input(props) {
    return (
        <input onInput={e => props.callback(e.target.value)} className={props.className} type={props.type} id={props.id} name={props.name} required={props.required} value={props.value}/>
    );
}

export default Input;