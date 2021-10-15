import React from 'react';
import PropTypes from 'prop-types';

import './Header.css';

function Header(props) {
    return (
        <div className='header'>
            {props.children}
        </div>
    )
}

Header.propTypes = {

};

export default Header;

