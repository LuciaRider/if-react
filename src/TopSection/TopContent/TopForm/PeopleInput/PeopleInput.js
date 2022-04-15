import React from 'react';
import './PeopleInput.css';

function PeopleInput() {

    return (
        <div className="children">
            <div className="children_wrapper">
                <div className="input_adults">
                    <span id="input_adults_count">1</span>
                    <span>Adults</span>
                </div>
                <span className="dash"></span>
                <div className="input_children">
                    <span id="input_children_count">0</span>
                    <span>Children</span>
                </div>
                <span className="dash"></span>
                <div className="input_rooms">
                    <span id="input_rooms_count">1</span>
                    <span>Rooms</span>
                </div>
                <div className="filter_wrapper">
                <div className="filter_content">
                    <div className="filter_adults">
                        <p className="filter_text">Adults</p>
                        <div className="filter_plus-minus">
                            <p className="minus">-</p>
                            <p className="filter_number">1</p>
                            <p className="plus">+</p>
                        </div>
                    </div>
                    <div className="filter_children">
                        <p className="filter_text">Children</p>
                        <div className="filter_plus-minus">
                            <p className="minus">-</p>
                            <p className="filter_number">0</p>
                            <p className="plus">+</p>
                        </div>
                    </div>
                    <div className="filter_rooms">
                        <p className="filter_text">Rooms</p>
                        <div className="filter_plus-minus">
                            <p className="minus">-</p>
                            <p className="filter_number">1</p>
                            <p className="plus">+</p>
                        </div>
                    </div>
                    <div className="child_age_moreOne">
                        <p className="child_age">What is the age of the child you’re travelling with?</p>
                        <div className="child_age_selects"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default PeopleInput;