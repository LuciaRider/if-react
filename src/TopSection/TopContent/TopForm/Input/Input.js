import React from 'react';

function Input(props) {
    return (
        <input onChange={props.onChange} className={props.className} type={props.type} id={props.id} name={props.name} key={props.key} required={props.required}/>
    );
}

export default Input;