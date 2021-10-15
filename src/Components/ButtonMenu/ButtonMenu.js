import React from 'react';
import PropTypes from 'prop-types';

import './ButtonMenu.css';

function ButtonMenu(props) {
    const { handleClick } = props;

    return (
        <div className='button-menu' onClick={handleClick}>
            <div className="button-point"></div>
        </div>
    )
}

ButtonMenu.propTypes = {
    handleClick: PropTypes.func.isRequired,
};

export default ButtonMenu;

