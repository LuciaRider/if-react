import React, { useState } from 'react';
import './ChildAgeSelect.css';

function SelectAge () {
    const [value, setValue] = useState('');

    const options = Array.from(Array(18).keys()).map((number, index) => {
        return <option key={index}> {number} years old</option>;
    });
    
    return (
        {
            options,
            value,
            setValue,
        }
    )
}

function ChildAgeSelect () {
    const {options, value, setValue} = SelectAge();
    return (
            <select className='age_select' value={value} onChange={(e) => setValue(e.target.value)}>
                {options}
            </select>
    )
}

export default ChildAgeSelect;