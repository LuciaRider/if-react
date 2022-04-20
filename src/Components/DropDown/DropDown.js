import { useState } from 'react';

function Dropdown () {

    const [isDropdown, setDropdown] = useState(false);
    const handleClickDropdown = () => {
        setDropdown(!isDropdown)
    }
    
    return (
        {
            isDropdown,
            handleClickDropdown,
        }
    )
}

export default Dropdown;