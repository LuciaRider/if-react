import React, { useState } from 'react';
import './TopForm.css';
import DestinationInput from './DestinationInput/DestinationInput';
import DateInput from './DateInput/DateInput';
import PeopleInput from './PeopleInput/PeopleInput';
import Button from '../../../Components/Button/Button';



function TopForm(props) {
    const [destination, setDestination] = useState('New York');
    const [data, setData] = useState('Tue 15 Sept — Sat 19 Sept');
    const [people, setPeople] = useState('');
    function getServerData() {
        fetch('https://fe-student-api.herokuapp.com/api/hotels')
        .then(response => response.json())
        .then(data => {
            props.setServerData(data)
            props.setShowAvailableHotels(true)
        })
    }

    return (

        <div className="form_wrap">
            <form action="" className="top-section_form">
                <DestinationInput setDestination={setDestination} destination={destination}/>
                <DateInput setData={setData} data={data}/>
                <PeopleInput setPeople={setPeople} people={people}/>
                <Button className="form_button" text="Search"></Button>
            </form>
        </div>
    );
}

export default TopForm;