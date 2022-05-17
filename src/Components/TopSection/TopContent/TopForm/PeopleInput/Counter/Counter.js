import React from 'react';
import './Counter.css';

function Counter ( { label, count, onIncrement, onDecrement, minValue, maxValue } ) {

    return (
        <div className="counterWrapper">
            <div>{`${label}`}</div>
            <div className='counterChanger'>
                <button className={
                    count === minValue ? 'btn' : 'active btn'
                } onClick={onDecrement}>-
                </button>
                <div>
                    <input disabled value={`${count}`}/>
                </div>
                <button className={
                    count === maxValue ? 'btn' : 'active btn'
                } onClick={onIncrement}>+
                </button>
            </div>
        </div>
    );
};

export default Counter;