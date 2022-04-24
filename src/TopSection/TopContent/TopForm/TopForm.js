import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TopForm.css';
import DestinationInput from './DestinationInput/DestinationInput';
import DateInput from './DateInput/DateInput';
import PeopleInput from './PeopleInput/PeopleInput';

const url = 'https://fe-student-api.herokuapp.com/api/hotels';

const useForm = (setSearchValue) => {

    const navigate = useNavigate();
    const [values, setValues] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(`${url}?search=${values.search}`);
        const items = await res.json();
        console.log(items)
        setSearchValue(items);
        navigate('/hotels');
    }

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name] : e.target.value,
        });
        console.log(values)
    };

    return {
        values,
        handleSubmit,
        handleChange,
    };
}

const TopForm = ({ setSearchValue }) => {

    const {
        values,
        handleSubmit,
        handleChange,

    } = useForm(setSearchValue);

    const name = values.name;

        return (
            <div className="form_wrap">
                <form onSubmit={handleSubmit} action="" className="top-section_form">
                    <DestinationInput handleChange={handleChange} value={name}/>
                    <DateInput/>
                    <PeopleInput/>
                    <button className="form_button">Search</button>
                </form>
            </div>
        );
}

export default TopForm;