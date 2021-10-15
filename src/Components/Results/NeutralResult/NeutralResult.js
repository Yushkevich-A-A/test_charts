import React from 'react';
import PropTypes from 'prop-types';

import './NeutralResult.css';

function NeutralResult(props) {
    return (
        <div className="neutral-result-wrapper">
            <div className='neutral-result'>
                <span className="neutral-result-text">
                    0
                </span>
            </div>
        </div>
    )
}

NeutralResult.propTypes = {

};

export default NeutralResult;

