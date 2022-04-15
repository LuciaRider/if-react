import React from 'react';
import './DestinationInput.css';
import Input from '../Input/Input';
import Label from '../Label/Label';

function DestinationInput(props) {
    return (
        <div className="destination">
            <Input callback={props.setDestination} className="destination_input" type="text" id="destination-input" name="destination-input" required="required" value={props.destination}/>
            <Label className="destination_label" for="destination-input" text="Your destination or hotel name"></Label>
        </div>
    );
}


export default DestinationInput;