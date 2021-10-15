import React from 'react';
import PropTypes from 'prop-types';

import './ClientBlock.css';

function ClientBlock(props) {

    const height = 50;

    return (
        <div className='client-block' style={{height: `${height}px`}}>
            <p className='client-block-text'>100</p>
        </div>
    )
}

ClientBlock.propTypes = {

};

export default ClientBlock;

