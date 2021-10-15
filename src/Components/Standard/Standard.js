import React from 'react';
import PropTypes from 'prop-types';

import './Standard.css';

function Standard(props) {
        const { title, value, ratio, offset } = props;
        const height = Number(value / offset) * Number(ratio) || 1;
    return (
        <div className='standard-block-wrapper'>
            <div className='standard-block' style={{height: `${height}px`}}>
                <p className='standard-block-text'>{value}</p>
            </div>
            <h3 className='standard-block-h3'>{title}</h3>
        </div>
    )
}

Standard.propTypes = {

};

export default Standard;

