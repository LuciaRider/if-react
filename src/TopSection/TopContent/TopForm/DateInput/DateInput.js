import React from 'react';
import './DateInput.css';
import Input from '../Input/Input';
import Label from '../Label/Label';
import {useState} from 'react';

function DateInput(props) {

    return (
        <div className="check-in">
            <Input callback={props.setData} className="check-in_input" type="text" id="check-in-input" name="check-in-input" required="required" value={props.data}/>
            <Label className="check-in_label" htmlFor="check-in-input" text="Check-in — Check-out"></Label>
        </div>
    );
}

export default DateInput;