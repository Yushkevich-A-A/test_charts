import React from 'react';
import PropTypes from 'prop-types';
import './ServerBlock.css';

function ServerBlock(props) {
    const { value, ratio, offset } = props;
    const height = Number(value / offset) * Number(ratio);
    return (
        <div className='server-block' style={{height: `${height}px`}}>
            <p className='server-block-text'>{value}</p>
        </div>
    )
}

ServerBlock.propTypes = {

};

export default ServerBlock;

