import React from 'react';
import PropTypes from 'prop-types';

import './Standard.css';

function Standard(props) {
    const { title } = props;

    return (
        <div className='standard-block-wrapper'>
            <div className='standard-block'>
                <p className='standard-block-text'>100</p>
            </div>
            <h3 className='standard-block-h3'>{title}</h3>
        </div>
    )
}

Standard.propTypes = {

};

export default Standard;

