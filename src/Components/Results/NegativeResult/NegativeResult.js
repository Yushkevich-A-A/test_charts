import React from 'react';
import PropTypes from 'prop-types';

import './NegativeResult.css';

function NegativeResult(props) {
    const { value } = props;

    return (
        <div className="negative-result-wrapper">
            <div className='negative-result'>
                <span className="negative-result-text">
                    {value}
                </span>
            </div>
        </div>
    )
}

NegativeResult.propTypes = {
    value: PropTypes.number.isRequired,
};

export default NegativeResult;

