import React from 'react';
import './DestinationInput.css';
import Input from '../Input/Input';
import Label from '../Label/Label';

function DestinationInput(props) {

    const handleChange = props.handleChange;
    const name = props.name;

    return (
        <div className="destination">
            <input onChange={handleChange} value={name} className="destination_input" type="text" id="destination-input" name="search" required="required" placeholder='New York'/>
            <Label className="destination_label" htmlFor="destination-input" text="Your destination or hotel name"></Label>
        </div>
    );
}


export default DestinationInput;