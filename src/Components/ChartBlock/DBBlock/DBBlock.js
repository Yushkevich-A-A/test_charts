import React from 'react';
import PropTypes from 'prop-types';

import './DBBlock.css';

function DBBlock(props) {
    const { value, ratio, offset } = props;
    const height = Number(value / offset) * Number(ratio) || 1;
    return (
        <div className='db-block' style={{height: `${height}px`}}>
            <p className='db-block-text'>{value}</p>
        </div>
    )
}

DBBlock.propTypes = {

};

export default DBBlock;

