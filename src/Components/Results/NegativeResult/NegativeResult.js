import React from 'react';
import PropTypes from 'prop-types';

import './NegativeResult.css';

function NegativeResult(props) {
    return (
        <div className="negative-result-wrapper">
            <div className='negative-result'>
                <span className="negative-result-text">
                    -26
                </span>
            </div>
        </div>
    )
}

NegativeResult.propTypes = {

};

export default NegativeResult;

