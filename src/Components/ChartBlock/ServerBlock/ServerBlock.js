import React from 'react';
import PropTypes from 'prop-types';
import './ServerBlock.css';

function ServerBlock(props) {

    const height = 50;

    return (
        <div className='server-block' style={{height: `${height}px`}}>
            <p className='server-block-text'>100</p>
        </div>
    )
}

ServerBlock.propTypes = {

};

export default ServerBlock;

