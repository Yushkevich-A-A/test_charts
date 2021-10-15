import React from 'react';
import PropTypes from 'prop-types';

import './DBBlock.css';

function DBBlock(props) {
    // const { value, rate } = props;
    // const height = Math.round(value * rate)
    const height = 50;
    return (
        <div className='db-block' style={{height: `${height}px`}}>
            <p className='db-block-text'>100</p>
        </div>
    )
}

DBBlock.propTypes = {

};

export default DBBlock;

