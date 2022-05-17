import React from 'react';
import './DestinationInput.css';

function DestinationInput({handleChange, name}) {

    return (
        <div className="destination">
            <input onChange={handleChange} value={name} className="destination_input" type="text" id="destination-input" name="search" required="required" placeholder='New York'/>
            <label className="destination_label" htmlFor="destination-input">Your destination or hotel name</label>
        </div>
    );
}


export default DestinationInput;