import React, { useState } from "react";
import './PeopleInput.css';
import ChildAgeSelect from './ChildAgeSelect/ChildAgeSelect';
import Counter from './Counter/Counter';
import FormFilters from './FormFilters/FormFilters';

function FormFiltersWindow () {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        {
            isOpen,
            handleClick,
        }
    )
}

function PeopleInput () {

    const {data, countOfSelect} = FormFilters();
    const {isOpen, handleClick} = FormFiltersWindow();

    return (
            <div className="people_wrapper">
                <div onClick={handleClick}>
                    {
                        `${data.adults.count} Adults — ${data.children.count} Children — ${data.rooms.count} Rooms`
                    }
                </div>
                {
                    isOpen && (
                        <div className="filterWrapper">
                            {
                                Object.keys(data).map(key => <Counter {...data[key]} />)
                            }
                        
                            {
                                data.children.count > 0 &&
                                <span className="childAgeQuestion">
                                    What is the age of the child you’re travelling with?
                                </span>
                            }

                            <div className='ageSelect'>
                                {
                                    countOfSelect.map((element, i) => (<ChildAgeSelect/>))
                                }
                            </div>
                        </div>
                    )
                }
            </div>
    );
};

export default PeopleInput;