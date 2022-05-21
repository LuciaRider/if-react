import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DateInput.css';

const DateInput = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    return (
        <div className="check-in">
            <DatePicker
                name="datepicker"
                Label="Check-in — Check-out"
                className="form_checkIn"
                selected={startDate}
                minDate={new Date()}
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                monthsShown={2}
                dateFormat='MMM dd, yyyy (E)'
                placeholderText='Check-in — Check-out'
            />
        </div>
    );
};

export default DateInput;