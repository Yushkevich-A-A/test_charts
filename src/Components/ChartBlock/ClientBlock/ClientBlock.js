import React from 'react';
import PropTypes from 'prop-types';

import './ClientBlock.css';

function ClientBlock(props) {
    const { value, ratio, offset } = props;
    const height = Number(Math.round(value / offset)) * Number(ratio);

    return (
        <div className='client-block' style={{height: `${height}px`}}>
            <p className='client-block-text'>{value}</p>
        </div>
    )
}

ClientBlock.propTypes = {

};

export default ClientBlock;

